import Image from "next/image";
import Header from "@/app/components/Header";
import Reservation from "@/app/components/Reservation";
import WhatWeAreBuilding from "@/app/components/WhatWeAreBuilding";
import Features from "@/app/components/Features/Features";
import NewFooter from '@/app/components/Footer/NewFooter';
import FirstChoice from "@/app/components/FirstChoice";
import FloatingWhatsappButton from '@/app/components/FloatingWhatsappButton';

export default function Home() {
  return (
    <main className="flex flex-col">
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
