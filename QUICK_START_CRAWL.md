# Quick Start: Complete MeinMEDCAMPUS Crawl

## 🚀 Quick Setup & Run

```bash
# 1. Navigate to project directory
cd /Users/hmehta/Documents/GitRepos/hmehta-test-da-1

# 2. Install dependencies (if not done)
npm install playwright

# 3. Install browser
npx playwright install chromium

# 4. Run the crawler
node crawler.js
```

## ⏱️ What to Expect

- **Runtime**: 2-4 hours
- **Pages**: 150-250+ expected
- **Output**:
  - Screenshots → `./content/original/pages/`
  - Mapping → `./content/original/pages-map.json`

## 📊 Progress Monitoring

The script will output progress like this:

```
🚀 Initializing browser...
🔐 Logging in...
✅ Logged in successfully

📂 Crawling Indikationen: Asthma
   Found 15 articles
   📄 Article 1/15: Severe Asthma Management
   ✅ Captured: indikationen-asthma-severe-asthma-management.png
   📄 Article 2/15: ...

📂 Crawling Indikationen: COPD
   Found 12 articles
   ...

📊 Summary:
   Total pages: 237
   By section: { indikationen: 145, fortbildung: 42, wissen: 28, service: 15, produkte: 7 }
   Errors: 3

✅ Crawl completed successfully!
```

## 🔍 Monitor in Real-Time

Open another terminal and watch progress:

```bash
# Watch screenshot count
watch -n 5 'ls -1 content/original/pages/*.png 2>/dev/null | wc -l'

# Check latest files
ls -lt content/original/pages/ | head -20
```

## ⚠️ If Something Goes Wrong

### Session Timeout
Script handles this automatically, but if it fails:
- Check credentials in crawler.js
- Verify you can log in manually at the website

### Missing Dependencies
```bash
npm install playwright
npx playwright install chromium
```

### Want to See the Browser?
Edit `crawler.js`, line 20:
```javascript
headless: false,  // Set to false to see browser
```

### Rate Limiting
Edit `crawler.js`, line 21:
```javascript
slowMo: 2000,  // Increase from 1000 to 2000+ milliseconds
```

## 📋 What Gets Captured

### Indikationen (10 subsections)
- Asthma
- ATTR-Amyloidose
- Chronische Niereninsuffizienz
- COPD
- COVID-19
- EGPA
- Herzinsuffizienz
- Hyperkaliämie ⏳ (2/13 done manually)
- Onkologie
- Systemischer Lupus Erythematodes

### Other Sections
- Fortbildung (CME courses, training)
- Wissen (knowledge base articles)
- Service (tools, downloads)
- Produkte (product information)

## 🎯 After Crawl Completes

### 1. Verify Results
```bash
# Count total screenshots
ls -1 content/original/pages/*.png | wc -l

# Check JSON summary
cat content/original/pages-map.json | jq '.summary'

# List errors (if any)
cat content/original/pages-map.json | jq '.errors'
```

### 2. Review JSON Mapping
```bash
# Pretty print full JSON
cat content/original/pages-map.json | jq '.' | less

# Count by section
cat content/original/pages-map.json | jq '.pages_by_section'
```

### 3. Spot Check Screenshots
```bash
# Open random screenshots to verify quality
open content/original/pages/indikationen-*.png
```

### 4. Handle Errors
If there are errors in the JSON:
- Review the error log
- Manually capture failed pages
- Update JSON mapping

## 🆘 Alternative: Manual Crawl

If automated script doesn't work, see `CRAWLER_README.md` for manual process.

## 📦 Backup Your Work

```bash
# Create timestamped backup
tar -czf medcampus-crawl-$(date +%Y%m%d-%H%M).tar.gz content/original/pages/
```

## ✅ Done!

Once complete, you'll have:
- ✅ All page screenshots
- ✅ Complete JSON mapping
- ✅ Ready for EDS migration phase

Next step: Begin content migration to EDS blocks!
