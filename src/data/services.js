export const services = [
  {
    id: 'core-methodology',
    filename: 'core-methodology.html',
    title: 'Core Methodology',
    badge: 'METHODOLOGY / PROCESS',
    subheadline: 'Results-driven agile engineering, designed for rapid validation and reliable deployment.',
    overview: 'Our core methodology is built on speed, precision, and continuous iteration. We bridge the gap between high-level business strategy and robust technical execution, using structured sprints and automated QA pipelines to deliver product updates without friction.',
    kpis: [
      { label: 'Sprint Cycle', value: '2-Week Sprints' },
      { label: 'Client Visibility', value: '100% Transparency' },
      { label: 'QA Standard', value: '99.9% Test Coverage' }
    ],
    features: [
      { title: 'Agile Discovery & Scoping', desc: 'Deep dive workshops to map requirements, outline technical scope, and establish clear milestones.' },
      { title: 'Iterative Sprint Planning', desc: 'Structured sprint cycles with bi-weekly updates and interactive staging previews.' },
      { title: 'Automated Testing & QA', desc: 'End-to-end testing integration ensuring zero regressions and clean builds.' },
      { title: 'Continuous Deployment', desc: 'Automated CI/CD pipelines pushing verified code to production seamlessly.' }
    ],
    tech: ['Jira', 'Linear', 'GitHub Actions', 'Slack', 'Vercel Staging', 'Cypress']
  },
  {
    id: 'custom-web-development',
    filename: 'custom-web-development.html',
    title: 'Custom Web Development',
    badge: 'ENGINEERING / WEB',
    subheadline: 'High-performance, secure portals, static sites, and headless CMS integrations.',
    overview: 'We build bespoke web solutions tailored to your unique requirements. From high-conversion corporate websites to secure client portals, our code is optimized for extreme load, absolute security, and lightning-fast responsiveness.',
    kpis: [
      { label: 'Time To First Byte', value: '<50ms TTFB' },
      { label: 'Optimization Rating', value: '100/100 Lighthouse' },
      { label: 'Security Protocols', value: 'SOC2 Compliant' }
    ],
    features: [
      { title: 'Headless CMS Architecture', desc: 'Decoupled content management using Sanity, Strapi, or Contentful for ultimate editor freedom.' },
      { title: 'Static Site Generation', desc: 'Ultra-fast sites built with Next.js, Astro, or Gatsby, pre-rendered and globally distributed.' },
      { title: 'Secure Client Portals', desc: 'Protected areas with role-based access control, custom dashboards, and encrypted document sharing.' },
      { title: 'API Integrations', desc: 'Seamless connections with third-party CRMs, ERPs, and custom backend systems.' }
    ],
    tech: ['Next.js', 'Astro', 'React', 'Sanity', 'Strapi', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 'web-applications',
    filename: 'web-applications.html',
    title: 'Web Applications',
    badge: 'ENGINEERING / APPLICATIONS',
    subheadline: 'Scalable SaaS platforms, real-time dashboards, and interactive digital products.',
    overview: 'We design and engineer complex web applications that feel fluid and perform flawlessly. Our team builds scalable SaaS systems, rich analytical dashboards, and collaboration tools featuring real-time syncing and offline capabilities.',
    kpis: [
      { label: 'Synchronization', value: 'Sub-second Sync' },
      { label: 'Platform Stability', value: '99.99% Uptime' },
      { label: 'Load Scaling', value: 'Million+ Active Users' }
    ],
    features: [
      { title: 'SaaS Product Engineering', desc: 'Multi-tenant architectures, subscription billing, and user management systems.' },
      { title: 'Real-Time Data Sync', desc: 'WebSockets and server-sent events for instant dashboard updates and collaboration.' },
      { title: 'Complex State Management', desc: 'Robust frontend architecture handling heavy client-side data flows.' },
      { title: 'Offline-First Design', desc: 'Local storage caching allowing users to work seamlessly without an active connection.' }
    ],
    tech: ['React', 'Next.js', 'Redux', 'Node.js', 'Express', 'Socket.io', 'TypeScript']
  },
  {
    id: 'cloud-infrastructure',
    filename: 'cloud-infrastructure.html',
    title: 'Cloud Infrastructure',
    badge: 'INFRASTRUCTURE / CLOUD',
    subheadline: 'Secure, auto-scaling environments and automated CI/CD deployment pipelines.',
    overview: 'We engineer high-availability, self-healing cloud setups on AWS and GCP. By treating infrastructure as code, we build automated pipelines that make deployments safe, predictable, and fully scalable.',
    kpis: [
      { label: 'Platform Uptime', value: '99.99% Availability' },
      { label: 'Release Safety', value: 'Zero-Downtime Deploy' },
      { label: 'Compliance Level', value: 'SOC2 Compliant' }
    ],
    features: [
      { title: 'Infrastructure as Code', desc: 'Declarative environment provisioning using Terraform and AWS CloudFormation.' },
      { title: 'Container Orchestration', desc: 'Docker container packaging managed by Kubernetes (EKS/GKE) or ECS.' },
      { title: 'CI/CD Automation', desc: 'Automated build, test, and release pipelines using GitHub Actions or GitLab CI.' },
      { title: 'Monitoring & Logging', desc: 'Real-time anomaly detection, centralized logging, and alerting systems.' }
    ],
    tech: ['AWS', 'GCP', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Datadog']
  },
  {
    id: 'database-systems',
    filename: 'database-systems.html',
    title: 'Database Systems',
    badge: 'DATA / DATABASES',
    subheadline: 'High-throughput replication, custom indexing, and optimized data warehousing.',
    overview: 'We design, optimize, and manage enterprise database systems. Whether handling transactional SQL workloads, document-based NoSQL stores, or massive data warehouses, we ensure maximum throughput, replication, and data integrity.',
    kpis: [
      { label: 'Throughput', value: '10k+ QPS' },
      { label: 'Integrity Rating', value: 'Zero Data Loss' },
      { label: 'Query Speed', value: '<10ms Latency' }
    ],
    features: [
      { title: 'Database Scaling & Replication', desc: 'Primary-replica setups, sharding, and write-scaling strategies.' },
      { title: 'Query Optimization', desc: 'Profiling slow queries, structuring custom indexes, and tuning engine memory.' },
      { title: 'Caching Layers', desc: 'Ultra-fast memory-based caching to reduce main database loads.' },
      { title: 'Data Warehousing', desc: 'BigQuery or Snowflake integration for large-scale analytical processing.' }
    ],
    tech: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'BigQuery', 'Prisma', 'Supabase']
  },
  {
    id: 'business-automation',
    filename: 'business-automation.html',
    title: 'Business Automation',
    badge: 'AUTOMATION / WORKFLOWS',
    subheadline: 'Streamline operations, synchronize CRMs, and automate manual business flows.',
    overview: 'We eliminate manual inefficiencies by building custom integrations and automated workflows. By linking your sales, marketing, and operational tools, we save thousands of hours and reduce human error.',
    kpis: [
      { label: 'Throughput', value: '100k+ Tasks / Month' },
      { label: 'Error Rate', value: '98% Reduction' },
      { label: 'Process Speed', value: '10x Speedup' }
    ],
    features: [
      { title: 'CRM Synchronization', desc: 'Real-time synchronization between HubSpot, Salesforce, and internal databases.' },
      { title: 'Automated Marketing Funnels', desc: 'Trigger-based email, SMS, and ad-targeting automations based on customer actions.' },
      { title: 'Custom API Integrations', desc: 'Custom middleware to connect legacy systems with modern SaaS products.' },
      { title: 'Dashboard Reporting', desc: 'Automated data pipelines compiling operational metrics into interactive dashboards.' }
    ],
    tech: ['Zapier', 'Make', 'Node.js', 'Python', 'HubSpot API', 'Salesforce API', 'Slack API']
  },
  {
    id: 'digital-branding',
    filename: 'digital-branding.html',
    title: 'Digital Branding',
    badge: 'CREATIVE / IDENTITY',
    subheadline: 'Premium brand identity, bespoke typography, and modular design systems.',
    overview: 'We build memorable visual identities that stand out in saturated digital spaces. Our branding process delivers cohesive logos, typographic standards, color systems, and comprehensive style guides that scale across web, mobile, and print.',
    kpis: [
      { label: 'Bespoke Artistry', value: '100% Custom Type' },
      { label: 'System Libraries', value: 'Modular Assets' },
      { label: 'Omnichannel Sync', value: 'Consistent Identity' }
    ],
    features: [
      { title: 'Logo & Visual Identity', desc: 'Distinctive logos, marks, and graphical assets tailored to your brand narrative.' },
      { title: 'Custom Typography System', desc: 'Curated font pairings and custom type hierarchies optimized for screens.' },
      { title: 'Brand Guideline Books', desc: 'Comprehensive documentation on color formulas, spacing, usage, and assets.' },
      { title: 'Digital Design Tokens', desc: 'Translation of design attributes into CSS variables for developer-ready implementation.' }
    ],
    tech: ['Figma', 'Adobe Creative Suite', 'Illustrator', 'Webflow', 'Design Tokens', 'Tailwind Theme']
  },
  {
    id: 'modern-tech-stack',
    filename: 'modern-tech-stack.html',
    title: 'Modern Tech Stack',
    badge: 'ENGINEERING / STACK',
    subheadline: 'Scalable development frameworks selected for performance and long-term viability.',
    overview: 'We build exclusively with modern, scalable, and fully typed languages and frameworks. By avoiding legacy tech debt, we ensure your platforms are fast, secure, easily maintainable, and ready to scale.',
    kpis: [
      { label: 'Type Safety', value: '100% TypeScript' },
      { label: 'Code Health', value: 'Zero Tech Debt' },
      { label: 'Framework Architecture', value: 'Modular Design' }
    ],
    features: [
      { title: 'Strict Typing (TypeScript)', desc: 'Catch bugs in development with complete type-safety across client and server.' },
      { title: 'Component Reusability', desc: 'Building scalable component libraries that make future feature development 3x faster.' },
      { title: 'Server-Side Rendering', desc: 'Frameworks that deliver instant page loads and excellent SEO out of the box.' },
      { title: 'Multi-platform Options', desc: 'Native mobile (Flutter) and web components sharing core business logic.' }
    ],
    tech: ['Next.js', 'Node.js', 'TypeScript', 'Flutter', 'Tailwind CSS', 'GraphQL']
  },
  {
    id: 'optimization-seo',
    filename: 'optimization-seo.html',
    title: 'Optimization & SEO',
    badge: 'PERFORMANCE / SEO',
    subheadline: 'Google Core Web Vitals optimization, asset compression, and semantic SEO markup.',
    overview: 'We analyze and resolve speed bottlenecks to secure your search rankings and prevent user abandonment. We optimize assets, refactor bundle code, and tune rendering paths to achieve near-instantaneous page loads.',
    kpis: [
      { label: 'Performance Rank', value: '100/100 Lighthouse' },
      { label: 'Interaction Delay', value: '<100ms INP' },
      { label: 'Search Traffic Lift', value: '+30% Organic Traffic' }
    ],
    features: [
      { title: 'Core Web Vitals Refactoring', desc: 'Fixing Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).' },
      { title: 'Asset Optimization', desc: 'Modern WebP/AVIF generation, SVG cleaning, and smart font loading strategies.' },
      { title: 'Semantic Markup & Schema', desc: 'Optimized HTML5 nesting and JSON-LD structured data for rich snippet eligibility.' },
      { title: 'Code Splitting & Bundling', desc: 'Reducing initial JS bundle sizes to guarantee fast mobile interactions.' }
    ],
    tech: ['Google Search Console', 'Lighthouse', 'WebPageTest', 'Next.js SEO', 'Schema.org']
  },
  {
    id: 'e-commerce-solutions',
    filename: 'e-commerce-solutions.html',
    title: 'E-Commerce Solutions',
    badge: 'COMMERCE / SALES',
    subheadline: 'Custom Shopify themes, headless commerce APIs, and conversion-focused checkout flows.',
    overview: 'We build e-commerce solutions that drive transactions. From custom theme tailoring on Shopify to fully custom headless commerce setups, we design storefront architectures optimized for maximum speed, average order value (AOV), and conversion.',
    kpis: [
      { label: 'Conversion Lift', value: '+25% Sales Rate' },
      { label: 'Storefront Load', value: 'Headless <50ms' },
      { label: 'State Syncing', value: 'Seamless Cart Flows' }
    ],
    features: [
      { title: 'Custom Shopify Development', desc: 'Custom liquid templates, section-rich themes, and public/private app integrations.' },
      { title: 'Headless Commerce Systems', desc: 'Fast storefronts built with Next.js Commerce connected to Shopify or Commercelayer.' },
      { title: 'Conversion-Driven Cart Flow', desc: 'Optimized checkout steps, upsell triggers, and cart drawers.' },
      { title: 'Product Analytics Sync', desc: 'Tightly integrated conversion funnel tracking to analyze buyer behaviors.' }
    ],
    tech: ['Shopify', 'Liquid', 'Shopify Hydrogen', 'Commercelayer', 'Stripe', 'Next.js Commerce']
  },
  {
    id: 'payment-gateways',
    filename: 'payment-gateways.html',
    title: 'Payment Gateways',
    badge: 'COMMERCE / PAYMENTS',
    subheadline: 'Secure payment processing, multi-currency setups, and global checkout integrations.',
    overview: 'We integrate secure, compliant, and multi-currency payment options. From custom subscription billing schedules to tokenized checkout flows, we ensure absolute PCI compliance and seamless transactions.',
    kpis: [
      { label: 'Success Rate', value: '99.9% Transaction Success' },
      { label: 'Compliance Level', value: 'PCI-DSS Compliant' },
      { label: 'Global Scope', value: '100+ Currencies' }
    ],
    features: [
      { title: 'Stripe Custom Integration', desc: 'Custom Stripe Elements, Stripe Billing, and subscription scheduling engines.' },
      { title: 'Multi-Currency & Tax Sync', desc: 'Dynamic price rendering based on user location with automated tax calculation.' },
      { title: 'Apple Pay & Google Pay', desc: 'One-click mobile express checkouts to reduce checkout friction.' },
      { title: 'Fraud Detection Integrations', desc: 'Advanced security filters and 3D Secure verification setups.' }
    ],
    tech: ['Stripe', 'PayPal', 'Adyen', 'Braintree', 'Avalara', 'Recurly']
  },
  {
    id: 'growth-marketing',
    filename: 'growth-marketing.html',
    title: 'Growth Marketing',
    badge: 'SCALE / MARKETING',
    subheadline: 'Paid acquisition campaigns, automated email funnels, and attribution dashboards.',
    overview: 'We design and run growth campaigns that scale customer acquisition. We construct optimized landing pages, set up trigger-based email flows, and configure full-funnel attribution dashboards to track every dollar spent.',
    kpis: [
      { label: 'Advertising ROAS', value: '3x+ Blended ROAS' },
      { label: 'Acquisition Savings', value: '-40% CAC reduction' },
      { label: 'Retention Channel', value: '+150% Email Rev' }
    ],
    features: [
      { title: 'Paid Acquisition Campaigns', desc: 'Data-driven campaigns across Meta, Google Ads, and LinkedIn Ads.' },
      { title: 'Retention & Email Flow', desc: 'Triggered email and SMS automations (welcome flows, cart abandonment, post-purchase).' },
      { title: 'High-Conversion Landing Pages', desc: 'Custom-engineered landing pages built for speed and visual persuasion.' },
      { title: 'Multi-touch Attribution', desc: 'Setting up GA4, Segment, and custom trackers to monitor campaign touchpoints.' }
    ],
    tech: ['Klaviyo', 'HubSpot', 'Google Analytics 4', 'Meta Pixel', 'Google Tag Manager', 'Segment']
  },
  {
    id: 'conversion-optimization',
    filename: 'conversion-optimization.html',
    title: 'Conversion Optimization',
    badge: 'SCALE / OPTIMIZATION',
    subheadline: 'A/B testing, user behavior analysis, and friction reduction methodologies.',
    overview: 'We turn traffic into profit. Through quantitative click analysis, session recording reviews, and continuous A/B testing, we identify conversion hurdles and systematically eliminate them to lift your profit margins.',
    kpis: [
      { label: 'Conversion Lift', value: '+35% CRO Lift' },
      { label: 'Testing Frequency', value: '100+ Experiments' },
      { label: 'Exit Mitigation', value: 'Bounce Reduction' }
    ],
    features: [
      { title: 'Heatmaps & Session Recording', desc: 'Visual tracking of user scroll, click, and hesitation patterns.' },
      { title: 'A/B & Multivariate Testing', desc: 'Running split-run experiments on copy, layouts, and CTAs to prove value.' },
      { title: 'Friction Auditing & CRO', desc: 'Analyzing page fields, navigation paths, and load speed hurdles to reduce abandonment.' },
      { title: 'Personalization Frameworks', desc: 'Dynamic page content rendering based on visitor traffic source.' }
    ],
    tech: ['Hotjar', 'Optimizely', 'VWO', 'GA4', 'Mixpanel']
  }
];
