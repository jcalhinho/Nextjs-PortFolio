import { ReactElement, useEffect, useState } from "react";
import {
  Hero,
  About,
  Experience,
  Tech,
  Works,
  Feedbacks,
  Contact,
} from "@/components/page_componentials";
import Navbar from "@/components/ui/Navbar/Navbar";

export default function Home(): ReactElement {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("/api/initial")
      .then((x) => x.json())
      .then((x) => {
        setData(x);
      });
  }, []);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-center bg-no-repeat bg-cover bg-hero-patter">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <div className="relative z-0">
        <Contact />
      </div>
    </div>
  );
}
