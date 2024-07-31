'use client'
import Link from "next/link";
import { HoverEffect } from "./UI/card-hover-effect";



function Upcomingevents() {
    const Featuredwebinar = [
        {
          title: "Maximizing Gym Efficiency: Best Practices and Innovations",
      
          description:
            "Join us for an in-depth webinar focused on the latest best practices and innovative strategies to enhance efficiency and member satisfaction in gyms. Topics covered will include advanced workout routines, new gym management software, effective marketing techniques, and customer retention strategies.",
      
          link: "/",
        },
        {
          title: "Enhancing Member Experience through Technology",
      
          description:
            "Discover how modern technology can revolutionize the gym experience for your members. This webinar will explore various tech solutions, including wearable fitness devices, virtual classes, and AI-driven personalized workout plans, aimed at boosting member engagement and satisfaction.",
      
          link: "/",
        },
        {
          title: "Effective Marketing Strategies for Gym Owners",
      
          description:
            "Join us for an in-depth webinar focused on the latest best practices and innovative strategies to enhance efficiency and member satisfaction in gyms. Topics covered will include advanced workout routines, new gym management software, effective marketing techniques, and customer retention strategies.",
      
          link: "/",
        },
        {
          title: "Financial Management for Gym Success",
      
          description:
            "Description: Gain insights into the financial aspects of running a successful gym. This webinar will address budgeting, cost control, revenue streams, and financial planning to ensure long-term profitability and stability for your gym business.",
      
          link: "/",
        },
      ];
  return (
    <div className="p-12 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">
            Exercises
          </h2>
          <p className="text-4xl font-extrabold tracking-tighter">
            Enhance your muscles size
          </p>
        </div>
        <div className="mt-10">
          <HoverEffect
             items={Featuredwebinar}
          />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"
          >
            {" "}
            View All Exercises
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Upcomingevents;
