import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { homeContent } from './HomeContent';

function Home() {
  const location = useLocation();

  useEffect(() => {
    // 1. Force default navbar and body styles for homepage
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.transform = '';
      navbar.style.backgroundColor = '';
      navbar.style.backdropFilter = '';
      navbar.style.webkitBackdropFilter = '';
      navbar.style.borderBottom = '';
    }
    document.body.style.backgroundColor = '';
    document.body.style.color = '';

    // 2. Cleanup existing scroll triggers and lenis instances from previous mounts
    if (window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(t => t.kill());
    }
    if (window.lenis && typeof window.lenis.destroy === 'function') {
      window.lenis.destroy();
      window.lenis = null;
    }

    // 3. Dynamically inject the homepage-specific slater animation script
    const script = document.createElement('script');
    script.src = '/assets/js/slater/50689.js';
    script.id = 'home-slater-script';
    document.body.appendChild(script);

    // 4. If URL has a hash, scroll to target section after animation initialises
    if (location.hash) {
      setTimeout(() => {
        const target = document.querySelector(location.hash);
        if (target) {
          if (window.lenis && typeof window.lenis.scrollTo === 'function') {
            window.lenis.scrollTo(target, { duration: 1.2 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 800);
    }

    return () => {
      // Cleanup script and scroll triggers on unmount
      const existingScript = document.getElementById('home-slater-script');
      if (existingScript) {
        existingScript.remove();
      }
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach(t => t.kill());
      }
      if (window.lenis && typeof window.lenis.destroy === 'function') {
        window.lenis.destroy();
        window.lenis = null;
      }
    };
  }, [location]);

  return (
    <main className="main-wrapper" dangerouslySetInnerHTML={{ __html: homeContent }} />
  );
}

export default Home;
