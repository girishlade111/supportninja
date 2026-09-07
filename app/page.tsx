import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Logos from './sections/Logos';
import VideoQuote from './sections/VideoQuote';
import AISection from './sections/AISection';
import Resources from './sections/Resources';
import Security from './sections/Security';
import Solutions from './sections/Solutions';
import CTABar from './sections/CTABar';
import HowItWorks from './sections/HowItWorks';
import TalkSection from './sections/TalkSection';
import Testimonials from './sections/Testimonials';
import TrustBadges from './sections/TrustBadges';
import Footer from './sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Logos />
      <VideoQuote />
      <AISection />
      <Security />
      <Resources />
      <Solutions />
      <CTABar />
      <HowItWorks />
      <TalkSection />
      <Testimonials />
      <TrustBadges />
      <Footer />
    </main>
  );
}
