import { Hero } from "@/components/hero";
import { Interactions } from "@/components/interactions";
import { Nav } from "@/components/nav";
import { About, Contact, Experience, Footer, Services, StackMarquee, Work } from "@/components/sections";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StackMarquee />
        <About />
        <Services />
        <Work />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Interactions />
    </>
  );
}
