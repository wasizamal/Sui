import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'core-methodology': resolve(__dirname, 'services/core-methodology.html'),
        'custom-web-development': resolve(__dirname, 'services/custom-web-development.html'),
        'web-applications': resolve(__dirname, 'services/web-applications.html'),
        'cloud-infrastructure': resolve(__dirname, 'services/cloud-infrastructure.html'),
        'database-systems': resolve(__dirname, 'services/database-systems.html'),
        'business-automation': resolve(__dirname, 'services/business-automation.html'),
        'digital-branding': resolve(__dirname, 'services/digital-branding.html'),
        'modern-tech-stack': resolve(__dirname, 'services/modern-tech-stack.html'),
        'optimization-seo': resolve(__dirname, 'services/optimization-seo.html'),
        'e-commerce-solutions': resolve(__dirname, 'services/e-commerce-solutions.html'),
        'payment-gateways': resolve(__dirname, 'services/payment-gateways.html'),
        'growth-marketing': resolve(__dirname, 'services/growth-marketing.html'),
        'conversion-optimization': resolve(__dirname, 'services/conversion-optimization.html')
      }
    }
  }
});

