import Features from "@/app/components/Features/Features";
import FirstChoice from "@/app/components/FirstChoice";
import FloatingWhatsappButton from "@/app/components/FloatingWhatsappButton";
import NewFooter from "@/app/components/Footer/NewFooter";
import Header from "@/app/components/Header";
import Reservation from "@/app/components/Reservation";
import WhatWeAreBuilding from "@/app/components/WhatWeAreBuilding";
import Image from "next/image";

export default function Home() {
  return (
    <main className='flex flex-col'>
      <Header />
      <WhatWeAreBuilding />
      <Features />
      <FirstChoice />
      <Reservation />
      <NewFooter />
      <FloatingWhatsappButton />
    </main>
  );
}
