import Image from "next/image";
import Hero from "./component/Hero";
import FeaturedCources from "./component/FeaturedCources";
import Teatimonialcard from "./component/Teatimonialcard";
import Upcomingevents from "./component/Upcomingevents";
import Instructors from "./component/Instructors";

export default function Home() {
  return (
    <main className="min-h-screen bg-black antialiased bg-grid-white">
      
      <Hero/>
      <FeaturedCources/>
      <Teatimonialcard/>
      <Upcomingevents/>
      <Instructors/>
 </main>
  );
}
