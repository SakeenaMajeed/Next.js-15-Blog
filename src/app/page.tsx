"use client"

import Navbar from "@/components/Navbar"
import Chat from "./chat"
import Hero from "@/components/Hero";
import ScrollArrow from "@/components/ScrollArrow";


export default function Home() {
  return (
    <>
     <Navbar/>
     <Hero/>
     <Chat/>
     <ScrollArrow/>
    </>
  );
}