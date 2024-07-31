"use client";
import { InfiniteMovingCards } from "./UI/infinite-moving-cards";

const gymTestimonial = [
  {
    name: "James Carter",
    title: "Fitness Enthusiast",

    quote:
      "Joining this gym has been one of the best decisions I've ever made for my health. The diverse range of classes and top-notch equipment have kept me motivated and challenged. The supportive environment makes every workout something to look forward to.",
  },
  {
    name: " Emily Johnson",
    title: "Group Fitness Instructor",
    quote:
      "As a group fitness instructor, I appreciate a gym that prioritizes both quality and community. This gym excels in providing excellent facilities and fostering a positive atmosphere that encourages members to push their limits and achieve their fitness goals.",
  },
  {
    name: " Michael Anderson",
    title: "strength coach",
    quote:
      " I trained at many gyms, but this one stands out for its exceptional attention to detail and commitment to member success. The personalized approach to training and the dedication of the staff make it an outstanding place for anyone looking to enhance their strength and overall fitness.",
  },
];
function Teatimonialcard() {
  return (
    <div className="h-[40rem] w-full bg-black dark:bg-black bg-dot-white relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">Hear our Harmony:Voice of Success</h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
            <InfiniteMovingCards
            items={gymTestimonial}
            direction="right"
            speed="slow"/>
          
        </div>
      </div> 
      
    </div>
  );
}

export default Teatimonialcard;
