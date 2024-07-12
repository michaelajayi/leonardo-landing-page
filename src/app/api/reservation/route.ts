import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ReservationData {
  fullName: string;
  email: string;
  phone: string;
  agentOrBuyer: string;
  whenToBuyUnit: Date | string;
  property: string;
  comment?: string;
}

export async function POST(request: Request) {
  try {
    const body: ReservationData = await request.json();

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("leonardo-landing-db");
    const collection = db.collection("reservation");

    // Check for existing reservation with the same email or phone
    const existingReservation = await collection.findOne({
      $or: [
        { email: body.email },
        { phone: body.phone },
        {
          $and: [{ fullName: body.fullName }, { property: body.property }],
        },
      ],
    });

    if (existingReservation) {
      let message = "A reservation already exists with ";
      if (existingReservation.email === body.email) {
        message += "this email address.";
      } else if (existingReservation.phone === body.phone) {
        message += "this phone number.";
      } else {
        message += "the same name for this property.";
      }

      return NextResponse.json(
        {
          success: false,
          message,
        },
        { status: 409 }
      );
    }

    // Insert data into MongoDB
    const result = await db.collection("reservations").insertOne(body);

    // Send mail using Resend
    await resend.emails.send({
      from: 'noreply@leonardobysujimotonig.com',
      to: "digitalads.sujimoto@gmail.com",
      subject: "Reservation Confirmation",
      html: `
                <h1>Reservation Confirmation</h1>
                <p>Thank you for making a reservation with us!</p>
                <p>Here are the details of your reservation:</p>
                <ul>
                    <li>Full Name: ${body.fullName}</li>
                    <li>Email: ${body.email}</li>
                    <li>Phone: ${body.phone}</li>
                    <li>Agent or Buyer: ${body.agentOrBuyer}</li>
                    <li>When to Buy Unit: ${body.whenToBuyUnit}</li>
                    <li>Property: ${body.property}</li>
                    <li>Comment: ${body.comment}</li>
                    </ul>`,
    });
    return NextResponse.json({
      success: true,
      message: "Reservation saved and email sent.",
      data: result,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      {
        success: false,
        error: "Error processing reservation!",
      },
      { status: 500 }
    );
  }
}
