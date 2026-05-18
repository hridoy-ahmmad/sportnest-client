import Banner from "@/components/Banner";
import PopularSports from "@/components/PopularSports";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <PopularSports/>
      {/* featured facilities */}
      <WhyChoose/>
      <Testimonials/>
    </div>
  );
}
