# Comprehensive MeinMEDCAMPUS Crawl Plan

## Executive Summary
This document outlines the complete crawl strategy for capturing ALL pages on MeinMEDCAMPUS website.

## Current Status
- **Completed**: 19 main landing pages captured
- **Completed**: 2 Hyperkaliämie detail pages captured
- **Remaining**: Estimated 100-300+ detail pages

## Session Management Challenge
The website has authentication that times out frequently, making long automated crawls challenging. Recommend using a dedicated browser automation tool with session persistence.

## Complete Crawl Structure

### 1. Indikationen Section (Estimated: 80-120 pages)

#### 1.1 Asthma
- Landing: `/asthma` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.2 ATTR-Amyloidose
- Landing: `/attr-amyloidose` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.3 Chronische Niereninsuffizienz (CKD)
- Landing: `/chronische-niereninsuffizienz` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.4 COPD
- Landing: `/copd` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.5 COVID-19
- Landing: `/covid-19` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.6 EGPA (Eosinophile Granulomatose mit Polyangiitis)
- Landing: `/egpa` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.7 Herzinsuffizienz
- Landing: `/herzinsuffizienz` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.8 Hyperkaliämie (PARTIALLY DONE)
- Landing: `/hyperkaliaemie` ✅ (captured)
- Detail pages identified (13 articles):
  1. ✅ RAASi und Hyperkaliämie – das Dilemma
  2. ✅ WATCH-K zeigt Versorgungsrealität
  3. ⏳ Optimierung der MRA-Therapie bei HFrEF
  4. ⏳ Expert:innen rufen bei Umsetzung zur Handlung
  5. ⏳ ZORA und WATCH-K
  6. ⏳ KaliumKompakt
  7. ⏳ Kardiorenale Fälle, neue Real World Daten
  8. ⏳ HK-Therapie-Empfehlungen
  9. ⏳ Hyperkaliämie-Therapie wirtschaftlich
  10. ⏳ Warum Hyperkaliämie wiederkehrend ist
  11. ⏳ Erste Real-World-Daten aus Deutschland
  12. ⏳ Neue KDIGO CKD-Leitlinie 2024
  13. ⏳ Hyperfocus - der Vodcast

#### 1.9 Onkologie
- Landing: `/onkologie` ✅ (captured)
- Detail pages: Need to capture all article cards

#### 1.10 Systemischer Lupus Erythematodes
- Landing: `/systemischer-lupus-erythematodes` ✅ (captured)
- Detail pages: Need to capture all article cards

### 2. Fortbildung Section (Estimated: 30-50 pages)
- Landing: `/fortbildung` ✅ (captured)
- CME courses
- Training modules
- Webinars/Videos
- Certificate programs

### 3. Wissen Section (Estimated: 20-40 pages)
- Landing: `/wissen` ✅ (captured)
- Knowledge base articles
- Guidelines
- Studies
- Expert opinions

### 4. Service Section (Estimated: 10-20 pages)
- Landing: `/service` ✅ (captured)
- Tools
- Downloads
- Patient materials
- Contact forms

### 5. Produkte Section (Estimated: 10-20 pages)
- Landing: `/produkte` ✅ (captured)
- Product information
- Prescribing information
- Package inserts

## Recommended Crawl Strategy

### Option A: Manual Systematic Approach (Most Reliable)
1. Keep browser logged in
2. Navigate to each section
3. Open each article in new tab
4. Screenshot each
5. Track in spreadsheet

### Option B: Semi-Automated Script
1. Use Playwright script with session persistence
2. Implement retry logic for timeouts
3. Save progress after each page
4. Resume from last saved state

### Option C: External Tool
Use tools like:
- Screaming Frog (with authentication)
- HTTrack
- Custom Puppeteer/Playwright script

## Screenshot Naming Convention

```
Format: section-subsection-article-slug.png

Examples:
- indikationen-hyperkaliaemie-raasi-dilemma.png
- indikationen-asthma-severe-asthma-guidelines.png
- fortbildung-cme-kurs-herzinsuffizienz.png
- wissen-guidelines-kdigo-2024.png
- service-downloads-patient-materials.png
- produkte-lokelma-fachinformation.png
```

## JSON Mapping Structure

```json
{
  "pages": [
    {
      "url": "https://www.mein-medcampus.de/...",
      "title": "...",
      "screenshot": "...",
      "section": "indikationen|fortbildung|wissen|service|produkte",
      "subsection": "hyperkaliaemie|asthma|copd|...",
      "page_type": "landing|article|detail|course|tool",
      "parent_url": "...",
      "crawled_at": "2025-10-30T..."
    }
  ],
  "summary": {
    "total_pages": 0,
    "by_section": {
      "indikationen": 0,
      "fortbildung": 0,
      "wissen": 0,
      "service": 0,
      "produkte": 0
    },
    "by_type": {
      "landing": 0,
      "article": 0,
      "detail": 0,
      "course": 0,
      "tool": 0
    }
  },
  "crawl_metadata": {
    "started_at": "...",
    "completed_at": "...",
    "duration_minutes": 0,
    "errors": [],
    "warnings": []
  }
}
```

## Next Steps

1. **Immediate**: Complete remaining 11 Hyperkaliämie articles
2. **Priority 1**: Crawl other Indikationen subsections (Asthma, COPD, etc.)
3. **Priority 2**: Crawl Fortbildung section
4. **Priority 3**: Crawl Wissen section
5. **Priority 4**: Crawl Service and Produkte sections
6. **Final**: Update JSON mapping with all pages
7. **Final**: Copy all screenshots to final destination

## Estimated Time
- Manual approach: 4-6 hours
- Semi-automated: 2-3 hours + script development
- Fully automated (if session stable): 1-2 hours

## Notes
- Website uses authentication that times out
- Some pages may require scrolling to load all content
- Some articles may have embedded videos/multimedia
- Consider rate limiting to avoid being blocked
