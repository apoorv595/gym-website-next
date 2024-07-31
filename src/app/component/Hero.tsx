import Link from "next/link"
import { Spotlight } from "./UI/Spotlight"
import { Button } from "./UI/MovingBorder";


function Hero() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black'>
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
        <div className='p-4 relative z-10 w-full text-center'>
            <h1 className="text-red-600 text-7xl font-bold ">GOLDS </h1>
            <p className="">“With God strength, I soar higher than my limits on the wings of faith.”</p>
            <div className='mt-4'>
                <Link href={"/compoe"}>
                <Button
                 borderRadius="1.75rem"
        className="bg-black dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800"

                 >Explore Packages</Button>
                </Link>
            </div>

        </div>
    </div>
  )
}

export default Hero