'use client'
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./UI/navbar-menu";
import { cn } from "@/app/utils/cn";
import Link from "next/link";


function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div
    className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",className)}
    >
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">

            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our Courses">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/cources">All Cources </HoveredLink>
            <HoveredLink href="/programs"> Programs </HoveredLink>
            
            </div>
            
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Contact Us">
            <HoveredLink href="/contact">Contact</HoveredLink>


</MenuItem>
        </Menu>


        
    </div>
  )
}

export default Navbar