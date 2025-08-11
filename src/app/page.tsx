import CenteredHero from '../components/CenteredHero';
import CardsFeatures from '../components/CardsFeatures';
import CenteredCta from '../components/CenteredCta';
import LinksFooter from '../components/LinksFooter';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section id="hero" className="scroll-mt-16">
        <CenteredHero />
      </section>
      <section id="features" className="scroll-mt-16">
        <CardsFeatures />
      </section>
      <section id="cta" className="scroll-mt-16">
        <CenteredCta />
      </section>
      <section id="footer" className="scroll-mt-16">
        <LinksFooter />
      </section>
    </main>
  );
}