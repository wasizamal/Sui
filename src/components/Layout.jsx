import React, { useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (window.lenis && typeof window.lenis.scrollTo === 'function') {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  // Handle global click interception for client-side routing and custom modals
  useEffect(() => {
    const closeMobileNav = () => {
      const nav = document.querySelector('#navigation[data-collapse]');
      if (nav && nav.classList.contains('w--open')) {
        const menuButton = nav.querySelector('.w-nav-button');
        if (menuButton) menuButton.click();
      }
      const openMenus = document.querySelectorAll('.w--open');
      openMenus.forEach(el => {
        if (!el.id || el.id !== 'aedinovus-modal') {
          el.classList.remove('w--open');
        }
      });
    };

    const openReactModal = (mode, customTitle, customSubtitle) => {
      const modal = document.getElementById('aedinovus-modal');
      const title = document.getElementById('aedinovus-modal-title');
      const subtitle = document.getElementById('aedinovus-modal-subtitle');
      const formContent = document.getElementById('aedinovus-modal-form-content');
      const successContent = document.getElementById('aedinovus-modal-success-content');
      if (!modal) return;

      if (formContent) formContent.style.display = 'block';
      if (successContent) successContent.style.display = 'none';

      const form = document.getElementById('aedinovus-contact-form');
      const serviceGroup = document.getElementById('modal-service')
        ? document.getElementById('modal-service').closest('.aedinovus-form-group') : null;
      const messageGroup = document.getElementById('modal-message')
        ? document.getElementById('modal-message').closest('.aedinovus-form-group') : null;
      const submitBtn = form ? form.querySelector('.aedinovus-form-submit') : null;

      if (form) form.reset();

      if (mode === 'coming-soon') {
        if (title) title.textContent = customTitle || 'Feature Coming Soon';
        if (subtitle) subtitle.textContent = customSubtitle || "We're preparing this section. Leave your email and we'll notify you when it's live.";
        if (serviceGroup) serviceGroup.style.display = 'none';
        if (messageGroup) messageGroup.style.display = 'none';
        if (submitBtn) submitBtn.textContent = 'Keep Me Updated';
        if (form) form.dataset.mode = 'coming-soon';
      } else {
        if (title) title.textContent = customTitle || 'Request Consultation';
        if (subtitle) subtitle.textContent = customSubtitle || 'Discuss your objectives and map out a custom solution with our technology partners.';
        if (serviceGroup) serviceGroup.style.display = 'block';
        if (messageGroup) messageGroup.style.display = 'block';
        if (submitBtn) submitBtn.textContent = 'Submit Request';
        if (form) form.dataset.mode = 'consultation';
      }

      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
      if (window.lenis && typeof window.lenis.stop === 'function') window.lenis.stop();

      setTimeout(() => {
        const firstInput = modal.querySelector('input, select, textarea');
        if (firstInput) firstInput.focus();
      }, 400);
    };

    const handleGlobalClick = (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      let href = link.getAttribute('href');
      if (!href) return;
      href = href.trim();

      // Check for mailto/tel or external domains
      if (href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('http') || href.startsWith('//')) {
        return; // Let browser handle external links naturally
      }

      // Check for blank / hash
      if (href === '#' || href === 'javascript:void(0)' || href === 'javascript:;') {
        return;
      }

      e.preventDefault();
      closeMobileNav();

      // Clean path
      let cleanHref = href.split('?')[0].split('#')[0];
      if (cleanHref.endsWith('.html')) {
        cleanHref = cleanHref.substring(0, cleanHref.length - 5);
      }

      // Route mappings matching routeActions
      if (cleanHref === '/' || cleanHref === '') {
        if (location.pathname !== '/') {
          navigate('/');
        } else {
          if (window.lenis && typeof window.lenis.scrollTo === 'function') {
            window.lenis.scrollTo(0, { duration: 1.0 });
          } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      } else if (cleanHref === '/services' || cleanHref === '/intro-to-sui' || cleanHref === '/move' || cleanHref.startsWith('/#')) {
        const targetHash = cleanHref.startsWith('/#') ? cleanHref.substring(1) : '#agency-capabilities';
        if (location.pathname !== '/') {
          navigate('/' + targetHash);
        } else {
          const targetEl = document.querySelector(targetHash);
          if (targetEl) {
            if (window.lenis && typeof window.lenis.scrollTo === 'function') {
              window.lenis.scrollTo(targetEl, { duration: 1.2 });
            } else {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }
      } else if (cleanHref.startsWith('/services/')) {
        navigate(cleanHref);
      } else if (cleanHref === '/start-a-project' || cleanHref === '/get-started' || cleanHref === '/launch-on-sui' || cleanHref === '/founder-starter-pack' || cleanHref === '/request-for-proposals') {
        openReactModal('consultation', 'Request Consultation', 'Discuss your objectives and map out a custom solution with our technology partners.');
      } else {
        // Unknown/unrecognised paths or coming soon
        const text = link.textContent.trim() || 'This Page';
        openReactModal('coming-soon', text, `We are currently preparing the "${text}" section for AEDINOVUS. Register your email below to be notified when it goes live.`);
      }
    };

    document.addEventListener('click', handleGlobalClick);
    return () => {
      document.removeEventListener('click', handleGlobalClick);
    };
  }, [navigate, location.pathname]);

  return (
    <div className="rebounce-effect">
      <div className="page-wrapper">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
