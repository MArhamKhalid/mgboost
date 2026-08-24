import Image from "next/image";
import Hero from "@/Components/Hero";
import Showcase from "@/Components/Showcase";
import Quote from "@/Components/Quote";
import Products from "@/Components/Products";
import Advertise from "@/Components/Advertise";
import Blogs from "@/Components/Blogs";
import Benefits from "@/Components/Benefits";
import Details from "@/Components/Details";
import Story from "@/Components/Story";
import EndDetails from "@/Components/EndDetails";

export default function Home() {
  return (
  <>
        <Hero/>
        {/* <Quote/>
        <Showcase/> 
        <Products/>
        <Advertise/> */}
        <Blogs/>
        {/* <Benefits/> */}
        <Details/>
        {/* <Story/> */}
        {/* <EndDetails/> */}
  </>
  );
}
