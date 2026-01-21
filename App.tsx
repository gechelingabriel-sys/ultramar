
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GabrielStory from './components/GabrielStory';
import StarterPacks from './components/StarterPacks';
import ProcessSteps from './components/ProcessSteps';
import ParallaxBanner from './components/ParallaxBanner';
import SpotifySection from './components/SpotifySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  // Smooth scroll behavior
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId) {
          const target = document.querySelector(targetId);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#e2ff00] selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        
        <div className="space-y-0">
          <GabrielStory />
          <ParallaxBanner />
          <StarterPacks />
          <ProcessSteps />
          <SpotifySection />
        </div>
      </main>

      {/* Floating WhatsApp CTA */}
      <a 
        href="https://wa.me/yournumber" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-[#e2ff00] text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 floating flex items-center gap-2 px-6"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.48s3.481 5.229 3.481 8.408c0 6.556-5.332 11.888-11.888 11.888-2.004 0-3.971-.51-5.713-1.474l-6.271 1.703zm6.3-3.61c1.558.924 3.037 1.414 4.887 1.414 5.304 0 9.617-4.312 9.617-9.617 0-2.569-1.002-4.985-2.823-6.806s-4.237-2.823-6.806-2.823c-5.304 0-9.617 4.312-9.617 9.617 0 1.934.542 3.511 1.563 5.031l-.993 3.626 3.732-.988z" />
        </svg>
        <span className="font-archivo text-xs uppercase tracking-widest hidden md:block">Consultar Ahora</span>
      </a>

      <Footer />
    </div>
  );
};

export default App;
