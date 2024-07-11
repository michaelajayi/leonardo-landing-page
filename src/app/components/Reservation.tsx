"use client";
import React, { useEffect, useState } from "react";
import leftBanner from "../../../public/img/left-banner.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import { isValidPhoneNumber } from "libphonenumber-js";
import Image from "next/image";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as Yup from "yup";

interface ReservationData {
  fullName: string;
  email: string;
  phone: string;
  agentOrBuyer: string;
  whenToBuyUnit: Date | null;
  property: string;
  comment?: string;
}

const Reservation = () => {
  const defaultValues = {
    fullName: "",
    email: "",
    phone: "",
    agentOrBuyer: "",
    whenToBuyUnit: new Date(),
    property: "",
    comment: "",
  };

  const today = new Date().toISOString().split("T")[0];

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const dateInput = document.getElementById("dateInput");
    if (dateInput) {
      dateInput.setAttribute("min", today);
    }
  }, [today]);

  const validateSchema = Yup.object().shape({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Email is not valid")
      .required("Email is required"),
    phone: Yup.string()
      .required("Phone number is required")
      .test("is-valid-phone", "Phone number is not valid", (value) =>
        value ? isValidPhoneNumber(value) : false
      ),
    agentOrBuyer: Yup.string().required("Please select an option"),
    whenToBuyUnit: Yup.date().nullable().required("Please select a date"),
    property: Yup.string().required("Please select an option"),
    comment: Yup.string().optional(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(validateSchema),
  });

  const onSubmit = async (values: ReservationData) => {
    setIsSubmitting(true);

    // Convert the date string to a Date object if it's not null
    const formattedValues = {
      ...values,
      whenToBuyUnit: values.whenToBuyUnit
        ? new Date(values.whenToBuyUnit).toISOString()
        : null,
    };
    console.log(formattedValues);

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedValues as ReservationData),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText);
      }

      const data = await response.json();
      console.log("Response data: ", data);

      if (data.success) {
        toast.success(
          "Reservation successful! Our team will reach out to you shortly. Thanks"
        );
        reset(defaultValues);
      } else {
        toast.error("An error occured. Please try again.");
      }
    } catch (err: any) {
      console.error("Error: ", err);
      toast.error(err.message);
    } finally {
      setIsSubmitting(false);
    }

    reset(defaultValues);
  };
  return (
    <div
      className="min-w-screen w-screen h-auto flex justify-center items-center bg-[#D9D9D9]"
      id="reservation"
    >
      <div className="w-full h-full grid grid-cols-10">
        <div className="col-span-10 lg:col-span-4 w-full h-full relative">
          <Image
            src={leftBanner}
            alt="left banner"
            className="absolute top-0 left-0 object-cover w-full h-full"
          />
        </div>
        <div className="col-span-10 lg:col-span-6 bg-[#D9D9D9] pl-5 lg:pl-[8rem] pr-5 flex flex-col space-y-10 justify-center py-20">
          <div className="flex flex-col space-y-5 lg:space-y-5">
            <p className="font-inter text-[18px] lg:text-[24px] leading-[120%] lg:leading-[146%] text-[#B56350] uppercase">
              Get Started
            </p>
            <h2 className="font-orchidea-pro text-[#1D1B1C] text-[18px] lg:text-[24px] leading-[130%] uppercase">
              Make a reservation
            </h2>
            <p className="font-orchidea-pro font-light text-[#1D1B1C] leading-[100%] lg:leading-[140%] text-[18px] lg:text-[24px]">
              &quot;LIMITED TIME OFFER!&quot; - Be Among the First Few Investors
              to Double their Wealth through the Leonardo Off-Plan & Earn Over
              200%
            </p>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-10 items-start w-full h-auto lg:w-[90%]"
          >
            {/* fullname */}
            <div className="flex flex-col w-full">
              <input
                {...register("fullName")}
                type="text"
                name="fullName"
                placeholder="Full Name"
                className="font-orchidea-pro font-light text-[18px] lg:text-[20px] leading-[98%] text-[#1D1B1C] px-0 py-2 outline-none bg-transparent border-[1.5px] border-b-[#B56350] border-r-0 border-l-0 border-t-0 w-full"
              />
              {errors.fullName && (
                <div className="text-red-500 text-[13px] py-1">
                  {errors.fullName.message}
                </div>
              )}
            </div>
            {/* property of choice */}
            <div className="flex flex-col w-full">
              <select
                {...register("property")}
                name="property"
                className="font-orchidea-pro font-light text-[18px] lg:text-[20px] leading-[98%] text-[#1D1B1C] py-2 outline-none bg-transparent border-[1.5px] border-b-[#B56350] border-r-0 border-l-0 border-t-0 w-full"
              >
                <option value="">Please select your property of choice</option>
                <option value="2 Bedroom Apartment Approx. 140m2 (700k)">
                  2 Bedroom Apartment Approx. 140m2 (700k)
                </option>
                <option value="3 Bedroom Apartment Approx. 300m2 (900k)">
                  3 Bedroom Apartment Approx. 300m2 (900k)
                </option>
                <option value="4 Bedroom Apartment Approx. 400m2 (1.1m)">
                  4 Bedroom Apartment Approx. 400m2 (1.1m)
                </option>
                <option value="Penthouse Approx. 1,200 m2 (7m)">
                  Penthouse Approx. 1,200 m2 (7m)
                </option>
              </select>
              {errors.property && (
                <div className="text-red-500 text-[13px] py-1">
                  {errors.property.message}
                </div>
              )}
            </div>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10 gap-y-10">
              <div className="flex flex-col w-full">
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="font-orchidea-pro font-light text-[18px] lg:text-[20px] leading-[98%] text-[#1D1B1C] py-2 outline-none bg-transparent border-[1.5px] border-b-[#B56350] border-r-0 border-l-0 border-t-0 w-full"
                />
                {errors.email && (
                  <div className="text-red-500 text-[13px] py-1">
                    {errors.email.message}
                  </div>
                )}
              </div>
              <div className="flex flex-col w-full">
                <input
                  {...register("phone")}
                  type="text"
                  name="phone"
                  placeholder="Phone e.g. +2341234567890"
                  className="font-orchidea-pro font-light text-[18px] lg:text-[20px] leading-[98%] text-[#1D1B1C] py-2 outline-none bg-transparent border-[1.5px] border-b-[#B56350] border-r-0 border-l-0 border-t-0 w-full"
                />
                {errors.phone && (
                  <div className="text-red-500 text-[13px] py-1">
                    {errors.phone.message}
                  </div>
                )}
              </div>
            </div>
            {/* agent or buyer */}
            <div className="flex flex-col w-full">
              <select
                {...register("agentOrBuyer")}
                name="agentOrBuyer"
                className="font-orchidea-pro font-light text-[18px] lg:text-[20px] leading-[98%] text-[#1D1B1C] py-2 outline-none bg-transparent border-[1.5px] border-b-[#B56350] border-r-0 border-l-0 border-t-0 w-full"
              >
                <option value="">Are you an agent or a buyer</option>
                <option value="agent">Agent</option>
                <option value="buyer">Buyer</option>
              </select>
              {errors.agentOrBuyer && (
                <div className="text-red-500 text-[13px] py-1">
                  {errors.agentOrBuyer.message}
                </div>
              )}
            </div>
            {/* when are you planning to buy a unit */}
            <div className="flex flex-col w-full">
              <p className="font-orchidea-pro text-[#1D1B1C] text-[18px] lg:text-[20px] font-light">
                When are you planning to buy a unit
              </p>
              <input
                {...register("whenToBuyUnit")}
                type="date"
                min={today}
                name="whenToBuyUnit"
                // placeholder='When are you planning to buy a unit'
                className="font-orchidea-pro font-light text-[18px] lg:text-[20px] leading-[98%] text-[#1D1B1C] py-2 outline-none bg-transparent border-[1.5px] border-b-[#B56350] border-r-0 border-l-0 border-t-0 w-full"
              />
              {errors.whenToBuyUnit && (
                <div className="text-red-500 text-[13px] py-1">
                  {errors.whenToBuyUnit.message}
                </div>
              )}
            </div>

            {/* leave a comment */}
            <div className="flex flex-col w-full">
              <input
                {...register("comment")}
                type="text"
                name="comment"
                placeholder="Leave a comment"
                className="font-orchidea-pro font-light text-[18px] lg:text-[20px] leading-[98%] text-[#1D1B1C] py-2 outline-none bg-transparent border-[1.5px] border-b-[#B56350] border-r-0 border-l-0 border-t-0 w-full"
              />
              {errors.comment && (
                <div className="text-red-500 text-[13px] py-1">
                  {errors.comment.message}
                </div>
              )}
            </div>
            <button
              className="font-inter font-medium text-[14px] lg:text-[18px] text-[#1D1B1C] border-[1px] border-[#1D1B1C] rounded-full px-20 py-3 flex justify-center items-center"
              type="submit"
            >
              {isSubmitting ? (
                <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : null}
              {isSubmitting ? null : "Reserve a Unit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
