import Banner from "@/components/Banner";
import FeaturedFaculties from "@/components/FeaturedFaculties";
import Footer from "@/components/Footer";
import PopularSports from "@/components/PopularSports";
import Testimonials from "@/components/Testimonials";
import WhyChoose from "@/components/WhyChoose";


export default function Home() {
  return (
    <div>
      <Banner />
      <PopularSports />
      {/* featured facilities */}
      <FeaturedFaculties />
      <WhyChoose />
      <Testimonials />
      
    </div>
  );
}
