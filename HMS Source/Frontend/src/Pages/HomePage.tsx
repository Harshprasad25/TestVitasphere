import Hero from "../Components/Home/Hero";
import About from "../Components/Home/About";
import Features from "../Components/Home/Features";
import Services from "../Components/Home/Services";
import Statistics from "../Components/Home/Statistics";
import HowItWorks from "../Components/Home/HowItWorks";
import FAQ from "../Components/Home/FAQ";
import Contact from "../Components/Home/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <Services />
      <Statistics />
      <HowItWorks />
      <FAQ />
      <Contact />
    </>
  );
}