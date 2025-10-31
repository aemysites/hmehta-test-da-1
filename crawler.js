#!/usr/bin/env node
/**
 * Comprehensive MeinMEDCAMPUS Crawler
 *
 * This script systematically crawls the entire MeinMEDCAMPUS website,
 * capturing screenshots and metadata for all pages.
 *
 * Usage:
 *   node crawler.js
 *
 * Prerequisites:
 *   npm install playwright
 *   npx playwright install chromium
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// Configuration
const CONFIG = {
  baseUrl: 'https://www.mein-medcampus.de',
  username: 'respi@santis.de',
  password: 'Santis2020!',
  screenshotDir: './content/original/pages',
  outputJson: './content/original/pages-map.json',
  headless: false, // Set to true for headless mode
  slowMo: 1000, // Slow down by 1 second for stability
};

// Ensure directories exist
if (!fs.existsSync(CONFIG.screenshotDir)) {
  fs.mkdirSync(CONFIG.screenshotDir, { recursive: true });
}

// Utility functions
function sanitizeFilename(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove diacritics
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 100);
}

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Main crawler class
class MeinMedcampusCrawler {
  constructor() {
    this.browser = null;
    this.page = null;
    this.results = {
      pages: [],
      crawled_at: new Date().toISOString(),
      total_pages: 0,
      pages_by_section: {},
      errors: []
    };
    this.visitedUrls = new Set();
  }

  async init() {
    console.log('🚀 Initializing browser...');
    this.browser = await chromium.launch({
      headless: CONFIG.headless,
      slowMo: CONFIG.slowMo
    });

    this.page = await this.browser.newPage();
    this.page.setDefaultTimeout(30000);

    // Handle cookie consent and other dialogs
    this.page.on('dialog', async dialog => {
      console.log(`Dialog: ${dialog.message()}`);
      await dialog.accept();
    });
  }

  async login() {
    console.log('🔐 Logging in...');
    await this.page.goto(`${CONFIG.baseUrl}/login`);
    await wait(2000);

    // Accept cookies
    try {
      await this.page.click('button:has-text("Alle Cookies akzeptieren")');
      await wait(1000);
    } catch (e) {
      console.log('No cookie banner found or already accepted');
    }

    // Fill login form
    await this.page.fill('input[type="text"][name*="mail" i], input[type="text"][placeholder*="mail" i]', CONFIG.username);
    await this.page.fill('input[type="password"]', CONFIG.password);
    await this.page.click('button[type="submit"]:has-text("Einloggen")');

    await wait(3000);
    console.log('✅ Logged in successfully');
  }

  async capturePageScreenshot(url, section, subsection, title, pageType = 'article') {
    // Skip if already visited
    if (this.visitedUrls.has(url)) {
      console.log(`⏭️  Skipping already visited: ${url}`);
      return null;
    }

    console.log(`📸 Capturing: ${title}`);

    try {
      await this.page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      await wait(2000);

      // Generate filename
      const filename = `${section}-${subsection ? subsection + '-' : ''}${sanitizeFilename(title)}.png`;
      const filepath = path.join(CONFIG.screenshotDir, filename);

      // Take screenshot
      await this.page.screenshot({
        path: filepath,
        fullPage: true,
        type: 'png'
      });

      // Mark as visited
      this.visitedUrls.add(url);

      // Add to results
      const pageData = {
        url,
        title,
        screenshot: filename,
        section,
        subsection: subsection || '',
        page_type: pageType,
        crawled_at: new Date().toISOString()
      };

      this.results.pages.push(pageData);
      this.results.total_pages++;

      if (!this.results.pages_by_section[section]) {
        this.results.pages_by_section[section] = 0;
      }
      this.results.pages_by_section[section]++;

      console.log(`✅ Captured: ${filename}`);
      return pageData;

    } catch (error) {
      console.error(`❌ Error capturing ${url}: ${error.message}`);
      this.results.errors.push({
        url,
        title,
        error: error.message,
        timestamp: new Date().toISOString()
      });
      return null;
    }
  }

  async crawlIndicationSection(indicationSlug, indicationName) {
    console.log(`\n📂 Crawling Indikationen: ${indicationName}`);

    const landingUrl = `${CONFIG.baseUrl}/${indicationSlug}`;

    // Capture landing page
    await this.capturePageScreenshot(
      landingUrl,
      'indikationen',
      indicationSlug,
      indicationName,
      'landing'
    );

    // Go back to landing page to get article links
    await this.page.goto(landingUrl, { waitUntil: 'networkidle' });
    await wait(2000);

    // Extract all article links
    const articleLinks = await this.page.evaluate(() => {
      const links = [];
      const widgets = document.querySelectorAll('.dynamic-view-widget .widget');

      widgets.forEach(widget => {
        const heading = widget.querySelector('h3');
        const link = widget.querySelector('a') || widget;

        if (heading && link) {
          const href = link.href || link.querySelector('a')?.href;
          if (href && !href.includes('#')) {
            links.push({
              url: href,
              title: heading.textContent.trim()
            });
          }
        }
      });

      return links;
    });

    console.log(`   Found ${articleLinks.length} articles`);

    // Capture each article
    for (let i = 0; i < articleLinks.length; i++) {
      const article = articleLinks[i];
      console.log(`   📄 Article ${i + 1}/${articleLinks.length}: ${article.title}`);

      await this.capturePageScreenshot(
        article.url,
        'indikationen',
        indicationSlug,
        article.title,
        'article'
      );

      await wait(1000); // Rate limiting
    }
  }

  async crawlFortbildungSection() {
    console.log(`\n📂 Crawling Fortbildung section`);

    const landingUrl = `${CONFIG.baseUrl}/fortbildung`;

    await this.capturePageScreenshot(
      landingUrl,
      'fortbildung',
      null,
      'Fortbildung',
      'landing'
    );

    await this.page.goto(landingUrl, { waitUntil: 'networkidle' });
    await wait(2000);

    // Extract course/training links
    const links = await this.page.evaluate(() => {
      const found = [];
      const cards = document.querySelectorAll('.widget, .card, article');

      cards.forEach(card => {
        const heading = card.querySelector('h2, h3, h4');
        const link = card.querySelector('a');

        if (heading && link && link.href && !link.href.includes('#')) {
          found.push({
            url: link.href,
            title: heading.textContent.trim()
          });
        }
      });

      return found;
    });

    console.log(`   Found ${links.length} items`);

    for (const item of links) {
      await this.capturePageScreenshot(
        item.url,
        'fortbildung',
        null,
        item.title,
        'course'
      );
      await wait(1000);
    }
  }

  async crawlWissenSection() {
    console.log(`\n📂 Crawling Wissen section`);

    const landingUrl = `${CONFIG.baseUrl}/wissen`;

    await this.capturePageScreenshot(
      landingUrl,
      'wissen',
      null,
      'Wissen',
      'landing'
    );

    await this.page.goto(landingUrl, { waitUntil: 'networkidle' });
    await wait(2000);

    const links = await this.page.evaluate(() => {
      const found = [];
      const cards = document.querySelectorAll('.widget, .card, article');

      cards.forEach(card => {
        const heading = card.querySelector('h2, h3, h4');
        const link = card.querySelector('a');

        if (heading && link && link.href && !link.href.includes('#')) {
          found.push({
            url: link.href,
            title: heading.textContent.trim()
          });
        }
      });

      return found;
    });

    console.log(`   Found ${links.length} items`);

    for (const item of links) {
      await this.capturePageScreenshot(
        item.url,
        'wissen',
        null,
        item.title,
        'article'
      );
      await wait(1000);
    }
  }

  async crawlServiceSection() {
    console.log(`\n📂 Crawling Service section`);

    const landingUrl = `${CONFIG.baseUrl}/service`;

    await this.capturePageScreenshot(
      landingUrl,
      'service',
      null,
      'Service',
      'landing'
    );

    await this.page.goto(landingUrl, { waitUntil: 'networkidle' });
    await wait(2000);

    const links = await this.page.evaluate(() => {
      const found = [];
      const cards = document.querySelectorAll('.widget, .card, article');

      cards.forEach(card => {
        const heading = card.querySelector('h2, h3, h4');
        const link = card.querySelector('a');

        if (heading && link && link.href && !link.href.includes('#')) {
          found.push({
            url: link.href,
            title: heading.textContent.trim()
          });
        }
      });

      return found;
    });

    console.log(`   Found ${links.length} items`);

    for (const item of links) {
      await this.capturePageScreenshot(
        item.url,
        'service',
        null,
        item.title,
        'tool'
      );
      await wait(1000);
    }
  }

  async crawlProdukteSection() {
    console.log(`\n📂 Crawling Produkte section`);

    const landingUrl = `${CONFIG.baseUrl}/produkte`;

    await this.capturePageScreenshot(
      landingUrl,
      'produkte',
      null,
      'Produkte',
      'landing'
    );

    await this.page.goto(landingUrl, { waitUntil: 'networkidle' });
    await wait(2000);

    const links = await this.page.evaluate(() => {
      const found = [];
      const cards = document.querySelectorAll('.widget, .card, article');

      cards.forEach(card => {
        const heading = card.querySelector('h2, h3, h4');
        const link = card.querySelector('a');

        if (heading && link && link.href && !link.href.includes('#')) {
          found.push({
            url: link.href,
            title: heading.textContent.trim()
          });
        }
      });

      return found;
    });

    console.log(`   Found ${links.length} items`);

    for (const item of links) {
      await this.capturePageScreenshot(
        item.url,
        'produkte',
        null,
        item.title,
        'product'
      );
      await wait(1000);
    }
  }

  async crawlAll() {
    try {
      // Define all indications to crawl
      const indications = [
        { slug: 'asthma', name: 'Asthma' },
        { slug: 'attr-amyloidose', name: 'ATTR-Amyloidose' },
        { slug: 'chronische-niereninsuffizienz', name: 'Chronische Niereninsuffizienz' },
        { slug: 'copd', name: 'COPD' },
        { slug: 'covid-19', name: 'COVID-19' },
        { slug: 'egpa', name: 'EGPA' },
        { slug: 'herzinsuffizienz', name: 'Herzinsuffizienz' },
        { slug: 'hyperkaliaemie', name: 'Hyperkaliämie' },
        { slug: 'onkologie', name: 'Onkologie' },
        { slug: 'systemischer-lupus-erythematodes', name: 'Systemischer Lupus Erythematodes' }
      ];

      // Crawl each indication section
      for (const indication of indications) {
        await this.crawlIndicationSection(indication.slug, indication.name);
        await wait(2000); // Pause between sections
      }

      // Crawl other main sections
      await this.crawlFortbildungSection();
      await this.crawlWissenSection();
      await this.crawlServiceSection();
      await this.crawlProdukteSection();

    } catch (error) {
      console.error(`❌ Critical error during crawl: ${error.message}`);
      this.results.errors.push({
        critical: true,
        error: error.message,
        stack: error.stack,
        timestamp: new Date().toISOString()
      });
    }
  }

  saveResults() {
    console.log('\n💾 Saving results...');

    // Add summary
    this.results.completed_at = new Date().toISOString();

    // Write JSON file
    fs.writeFileSync(
      CONFIG.outputJson,
      JSON.stringify(this.results, null, 2),
      'utf8'
    );

    console.log(`✅ Saved results to ${CONFIG.outputJson}`);
    console.log(`\n📊 Summary:`);
    console.log(`   Total pages: ${this.results.total_pages}`);
    console.log(`   By section:`, this.results.pages_by_section);
    console.log(`   Errors: ${this.results.errors.length}`);
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

// Main execution
(async () => {
  const crawler = new MeinMedcampusCrawler();

  try {
    await crawler.init();
    await crawler.login();
    await crawler.crawlAll();
    crawler.saveResults();

    console.log('\n✅ Crawl completed successfully!');

  } catch (error) {
    console.error('\n❌ Fatal error:', error);
    process.exit(1);

  } finally {
    await crawler.close();
  }
})();
