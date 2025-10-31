# MeinMEDCAMPUS Comprehensive Crawler

## Overview

This document provides instructions for performing a complete crawl of the MeinMEDCAMPUS website to capture all pages including article details across all sections.

## Current Status

- ✅ **Completed**: 19 main landing pages
- ✅ **Completed**: 2 Hyperkaliämie detail articles
- ⏳ **Remaining**: ~100-300+ pages estimated

## Challenge

The website requires authentication that times out during long sessions, making fully automated crawls difficult within the current browser session.

## Solution Options

### Option 1: Run the Automated Crawler Script (RECOMMENDED)

I've created a standalone Playwright script that handles:
- Automatic login
- Session management
- Systematic crawling of all sections
- Screenshot capture
- JSON mapping generation

#### Setup:

```bash
cd /Users/hmehta/Documents/GitRepos/hmehta-test-da-1

# Install Playwright if not already installed
npm install playwright

# Install browser binaries
npx playwright install chromium

# Run the crawler
node crawler.js
```

The script will:
1. Log in automatically
2. Systematically crawl all sections
3. Save screenshots to `./content/original/pages/`
4. Generate updated `./content/original/pages-map.json`
5. Provide progress updates in console

**Estimated Runtime**: 2-4 hours depending on total pages

### Option 2: Manual Systematic Crawl

If the automated script has issues, follow this manual process:

1. **Keep Browser Session Active**
   - Open browser at https://www.mein-medcampus.de/login
   - Log in with: respi@santis.de / Santis2020!
   - Keep browser window open

2. **Crawl Each Section Systematically**

#### Indikationen Section:
For each indication (Asthma, COPD, Hyperkaliämie, etc.):
- Navigate to landing page
- Open each article card
- Take full-page screenshot
- Use naming: `indikationen-{indication}-{article-title}.png`
- Go back and continue

#### Fortbildung Section:
- Navigate to /fortbildung
- Click into each course/training
- Screenshot each
- Use naming: `fortbildung-{title}.png`

#### Wissen Section:
- Navigate to /wissen
- Click into each knowledge article
- Screenshot each
- Use naming: `wissen-{title}.png`

#### Service Section:
- Navigate to /service
- Click into each service page
- Screenshot each
- Use naming: `service-{title}.png`

#### Produkte Section:
- Navigate to /produkte
- Click into each product page
- Screenshot each
- Use naming: `produkte-{title}.png`

3. **Track Progress**
   - Use the comprehensive-crawler-plan.md as checklist
   - Mark each completed page

### Option 3: Use External Crawler Tool

Tools that can handle authenticated sessions:
- **Screaming Frog**: Configure with login credentials
- **HTTrack**: Set up authenticated mirroring
- **Custom Puppeteer**: Similar to provided script

## File Structure

```
hmehta-test-da-1/
├── content/
│   └── original/
│       ├── pages/                    # All screenshots go here
│       │   ├── indikationen-*.png
│       │   ├── fortbildung-*.png
│       │   ├── wissen-*.png
│       │   ├── service-*.png
│       │   └── produkte-*.png
│       └── pages-map.json           # Complete mapping file
├── crawler.js                        # Automated crawler script
├── comprehensive-crawler-plan.md    # Detailed crawl plan
└── CRAWLER_README.md               # This file
```

## Expected Output

### Screenshots
- 100-300+ PNG files
- Full-page captures
- Sanitized filenames
- Organized by section

### JSON Mapping File

Complete metadata including:
- All URLs
- Page titles
- Screenshot filenames
- Section/subsection categorization
- Page types (landing, article, course, etc.)
- Crawl timestamps
- Error log

## Troubleshooting

### Session Timeout
- The automated script handles re-authentication
- For manual crawl, keep window active and refresh periodically

### Missing Pages
- Check browser console for errors
- Some pages may return 404 (noted in JSON)
- Some pages may be restricted (noted in JSON)

### Rate Limiting
- The script includes built-in delays (1-2 seconds between requests)
- If blocked, increase `slowMo` parameter in crawler.js

## Post-Crawl Steps

1. **Verify Capture**
   ```bash
   # Count screenshots
   ls -1 content/original/pages/*.png | wc -l

   # Check JSON
   cat content/original/pages-map.json | jq '.total_pages'
   ```

2. **Review JSON Mapping**
   - Check for errors
   - Verify all sections covered
   - Note any 404s or restricted pages

3. **Backup**
   ```bash
   # Create backup
   tar -czf medcampus-crawl-$(date +%Y%m%d).tar.gz content/original/pages/
   ```

## Estimated Totals

| Section | Estimated Pages |
|---------|----------------|
| Indikationen | 80-120 |
| Fortbildung | 30-50 |
| Wissen | 20-40 |
| Service | 10-20 |
| Produkte | 10-20 |
| **TOTAL** | **150-250+** |

## Next Steps After Crawl

1. Review all captured pages
2. Validate JSON mapping
3. Begin content migration to EDS
4. Map content to EDS blocks
5. Generate markdown files

## Support

For issues with the crawler script:
1. Check console output for errors
2. Verify credentials are correct
3. Ensure Playwright is properly installed
4. Try running with `headless: false` to see browser actions
5. Check network connectivity and site availability
