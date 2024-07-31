'use client'
import Link from 'next/link'
import Image from "next/image";
import React from 'react'
import { Meteors } from "../component/UI/meteors";
import { CardBody, CardContainer, CardItem } from "@/app/component/UI/3d-card";
import courceData from "@/app/data/gym_coure.json"

function FeaturedCources() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md   relative overflow-hidden mx-auto py-10 md:py-0 bg-slate-600 '>
        <div>
            <div className='text-center'>

                <p className='mt-10 text-3xl leading-8 font-extrabold tracking-tight text-black sm:text-4xl'>Train With the best couches</p>
            </div>
        </div>
        <div className='mt-10'>
            <div className=' '>
            <div className="flex-wrap  h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0 bg-black">
        {courceData.cources.map((cource)=>(

<CardContainer className="inter-var m-4 items-center">
<CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
  <CardItem
    translateZ="50"
    className="text-xl font-bold text-neutral-600 dark:text-white"
  >
    {cource.title}
  </CardItem>
  <CardItem
    as="p"
    translateZ="60"
    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
  >
    {cource.description}
  </CardItem>
  <CardItem translateZ="100" className="w-full mt-4">
    <Image
      src={cource.image}
      height="1000"
      width="1000"
      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
      alt="thumbnail"
    />
  </CardItem>
  <div className="flex justify-between items-center mt-20">
    <CardItem
      translateZ={20}
      
      href="https://twitter.com/mannupaaji"
      target="__blank"
      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
    >
      Try now →
    </CardItem>
    <CardItem
      translateZ={20}
      as="button"
      className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
    >
      Sign up
    </CardItem>
  </div>
</CardBody>
</CardContainer>
        )

        
        )}
       </div>
                
                
                 </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={"/cources"}>
            view all cources 
            </Link>
             {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
            
            
        </div>
    </div>
  )
}

export default FeaturedCources