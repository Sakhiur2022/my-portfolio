import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { About } from '@/components/about';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { ScrollToTop } from '@/components/scroll-to-top';

export default function Home() {
  return (
    <main className="w-full scroll-smooth">
      <Navbar />
      <div className="pt-16">
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </div>
      <ScrollToTop />
    </main>
  );
}
