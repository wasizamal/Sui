import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

function ServiceDetail() {
  let { serviceId } = useParams();

  // Handle direct mapping of serviceIds ending in .html
  if (serviceId && serviceId.endsWith('.html')) {
    serviceId = serviceId.substring(0, serviceId.length - 5);
  }

  const service = services.find(s => s.id === serviceId || s.filename === `${serviceId}.html`);

  useEffect(() => {
    if (!service) return;

    // 1. Set page titles and meta tags
    document.title = `${service.title} | AEDINOVUS Capabilities`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', service.subheadline);
    }

    // 2. Force dark mode background and navbar styling
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      navbar.style.transform = 'translateY(0%)';
      navbar.style.backgroundColor = 'rgba(6, 7, 11, 0.85)';
      navbar.style.backdropFilter = 'blur(12px)';
      navbar.style.webkitBackdropFilter = 'blur(12px)';
      navbar.style.borderBottom = '1px solid rgba(255, 255, 255, 0.08)';
    }
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';

    // 3. Clear existing ScrollTrigger instances
    if (window.ScrollTrigger) {
      window.ScrollTrigger.getAll().forEach(t => t.kill());
    }

    // 4. Initialise Lenis smooth scrolling for subpage
    let lenisInstance = null;
    if (window.Lenis) {
      lenisInstance = new window.Lenis({
        lerp: 0.12,
        syncTouch: true
      });
      const animate = (time) => {
        if (lenisInstance) {
          lenisInstance.raf(time);
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
      window.lenis = lenisInstance;
    }

    // 5. Re-initialise Webflow modules (dropdowns, mobile nav, interactions)
    if (window.Webflow) {
      window.Webflow.destroy();
      window.Webflow.ready();
      if (window.Webflow.require('ix2')) {
        window.Webflow.require('ix2').init();
      }
    }

    return () => {
      if (lenisInstance) {
        lenisInstance.destroy();
        window.lenis = null;
      }
    };
  }, [service]);

  if (!service) {
    return (
      <main className="main-wrapper" style={{ minHeight: '80svh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#000', color: '#fff' }}>
        <div style={{ textAlign: 'center' }}>
          <h1 className="h2-90px" style={{ fontSize: '48px', marginBottom: '24px' }}>Page Not Found</h1>
          <Link to="/" className="cta-button">Back to Home</Link>
        </div>
      </main>
    );
  }

  // Compile KPI blocks markup
  const kpiBlocks = service.kpis.map(k => `
    <div class="w-layout-vflex" style="gap: 8px; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 16px;">
      <span class="ts-14px mono color-gray" style="opacity: 0.6;">${k.label}</span>
      <span class="ts-21px color-white font-weight-bold" style="letter-spacing: -0.5px;">${k.value}</span>
    </div>
  `).join('');

  // Compile Feature Cards markup
  const featureCards = service.features.map((f, i) => `
    <div data-dotted-frame="" class="w-layout-vflex home-industry_grid-item" style="padding: 32px; min-height: 240px; display: flex; flex-direction: column; gap: 16px; background: rgba(255,255,255,0.02); transition: background 0.3s ease;">
      <div class="w-layout-hflex" style="gap: 12px; align-items: center;">
        <div class="ts-14px mono color-primary-blue" style="border: 1px solid #298dff; padding: 2px 8px; border-radius: 4px;">0${i + 1}</div>
        <h4 class="h3-28px color-white" style="font-size: 20px; line-height: 1.2; margin: 0;">${f.title}</h4>
      </div>
      <p class="ts-16px color-gray" style="line-height: 1.5; margin: 0; opacity: 0.85;">${f.desc}</p>
    </div>
  `).join('');

  // Compile tech tag badges
  const techTags = service.tech.map(t => `
    <span style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); color: #fff; padding: 6px 14px; border-radius: 4px; font-size: 14px; font-family: monospace;">${t}</span>
  `).join('');

  // Construct page HTML template dynamically
  const bodyHtml = `
    <div class="gradient_background"></div>
    <!-- Custom Subpage Hero -->
    <section class="hero-section" style="padding-top: 140px; padding-bottom: 80px; min-height: auto;">
      <div class="padding-global">
        <div class="container-1400">
          <div class="w-layout-vflex" style="gap: 24px; align-items: flex-start;">
            <!-- Badge -->
            <div class="w-layout-hflex gap-8 hy-center" style="border: 1px solid rgba(255,255,255,0.15); padding: 6px 14px; border-radius: 100px; background: rgba(255,255,255,0.03);">
              <div class="block-12 bg-primary-blue" style="width: 8px; height: 8px; border-radius: 50%;"></div>
              <span class="ts-12px mono color-white" style="letter-spacing: 1.5px; text-transform: uppercase;">${service.badge}</span>
            </div>
            <!-- Title -->
            <h1 class="h2-90px color-white" style="line-height: 1.05; margin: 0; letter-spacing: -2px;">${service.title}</h1>
            <!-- Subhead -->
            <p class="ts-21px color-white hero-custom-break" style="max-width: 700px; opacity: 0.85; line-height: 1.4; margin-top: 10px;">${service.subheadline}</p>
            <!-- CTAs -->
            <div class="cta-wrapper width_auto" style="margin-top: 20px;">
              <a href="/start-a-project" class="cta-button"><span global-target="">Request Consultation</span></a>
              <a href="/#agency-capabilities" class="cta-button is--alternative"><span global-target="">Back to Capabilities</span></a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sleek Dividers -->
    <div class="padding-global">
      <div class="container-1400">
        <svg width="100%" height="2" viewBox="0 0 1400 2" fill="none" class="dottedhorizontal"><path d="M0 1L1400 1" stroke="#343940" stroke-width="2" stroke-dasharray="2 8" vector-effect="non-scaling-stroke"></path></svg>
      </div>
    </div>

    <!-- Two-Column Overview & KPIs -->
    <section style="padding: 80px 0;">
      <div class="padding-global">
        <div class="container-1400">
          <div class="w-layout-grid f_grid_2" style="grid-column-gap: 80px; grid-row-gap: 40px; align-items: start;">
            <!-- Left Side: Overview -->
            <div class="w-layout-vflex" style="gap: 24px;">
              <span class="gray_span" style="text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px; opacity: 0.5;">[ Overview ]</span>
              <p class="ts-18px color-gray" style="line-height: 1.6; max-width: 600px;">${service.overview}</p>
            </div>
            <!-- Right Side: Key Performance Indicators -->
            <div class="w-layout-vflex" style="gap: 32px; border-left: 1px solid rgba(255,255,255,0.08); padding-left: 40px;">
              <span class="gray_span" style="text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px; opacity: 0.5;">[ Performance Parameters ]</span>
              <div class="w-layout-grid" style="grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); grid-gap: 24px;">
                ${kpiBlocks}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sleek Dividers -->
    <div class="padding-global">
      <div class="container-1400">
        <svg width="100%" height="2" viewBox="0 0 1400 2" fill="none" class="dottedhorizontal"><path d="M0 1L1400 1" stroke="#343940" stroke-width="2" stroke-dasharray="2 8" vector-effect="non-scaling-stroke"></path></svg>
      </div>
    </div>

    <!-- Four-Column Features Grid -->
    <section style="padding: 80px 0;">
      <div class="padding-global">
        <div class="container-1400">
          <div class="w-layout-vflex" style="gap: 40px;">
            <span class="gray_span" style="text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px; opacity: 0.5;">[ Core Offerings ]</span>
            <div class="w-layout-grid" style="grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); grid-gap: 24px;">
              ${featureCards}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Sleek Dividers -->
    <div class="padding-global">
      <div class="container-1400">
        <svg width="100%" height="2" viewBox="0 0 1400 2" fill="none" class="dottedhorizontal"><path d="M0 1L1400 1" stroke="#343940" stroke-width="2" stroke-dasharray="2 8" vector-effect="non-scaling-stroke"></path></svg>
      </div>
    </div>

    <!-- Tech Stack & Delivery Sprint Section -->
    <section style="padding: 80px 0; background: rgba(255,255,255,0.01);">
      <div class="padding-global">
        <div class="container-1400">
          <div class="w-layout-grid f_grid_2" style="grid-column-gap: 80px; grid-row-gap: 40px; align-items: start;">
            <!-- Left Side: Tech Stack -->
            <div class="w-layout-vflex" style="gap: 24px;">
              <span class="gray_span" style="text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px; opacity: 0.5;">[ Technologies & Integration ]</span>
              <div class="w-layout-hflex" style="flex-wrap: wrap; gap: 12px; max-width: 500px;">
                ${techTags}
              </div>
            </div>
            <!-- Right Side: Delivery Process -->
            <div class="w-layout-vflex" style="gap: 24px; border-left: 1px solid rgba(255,255,255,0.08); padding-left: 40px;">
              <span class="gray_span" style="text-transform: uppercase; font-size: 12px; letter-spacing: 1.5px; opacity: 0.5;">[ Execution & Delivery ]</span>
              <p class="ts-16px color-gray" style="line-height: 1.6;">Our development pipeline utilizes automated integration, verified test environments, and containerized staging deployments. This guarantees that features are validated and pushed to production under strict version control guidelines without interrupting core service availability.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Powerful CTA Section -->
    <section style="padding: 100px 0 120px 0;">
      <div class="padding-global">
        <div class="container-1400">
          <div data-dotted-frame="" style="padding: 60px 40px; background: radial-gradient(circle at 50% 50%, rgba(41, 141, 255, 0.08) 0%, rgba(0,0,0,0) 80%); border-radius: 8px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 24px; background-color: #0b0f19;">
            <h2 class="h2-60px color-white" style="margin: 0; max-width: 800px; font-size: 40px;">Ready to engineer your custom solution?</h2>
            <p class="ts-18px color-gray" style="max-width: 500px; margin: 0; opacity: 0.8;">Partner with our strategy and technology team to map out a clear blueprint for your business expansion.</p>
            <a href="/start-a-project" class="cta-button" style="margin-top: 10px;"><span global-target="">Request Consultation</span></a>
          </div>
        </div>
      </div>
    </section>
  `;

  return (
    <main className="main-wrapper" style={{ backgroundColor: '#000' }} dangerouslySetInnerHTML={{ __html: bodyHtml }} />
  );
}

export default ServiceDetail;
