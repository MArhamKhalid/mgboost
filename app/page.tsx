import Image from "next/image";
import Hero from "@/Components/Hero";
import Showcase from "@/Components/Showcase";
import Blogs from "@/Components/Blogs";
import Benefits from "@/Components/Benefits";
import Details from "@/Components/Details";
import Story from "@/Components/Story";
import EndDetails from "@/Components/EndDetails";

export default function Home() {
  return (
  <>
  <Hero/>
        <Showcase/>
        <Blogs/>
        <Benefits/>
        <Details/>
        <Story/>
        <EndDetails/>
  </>
  );
}
