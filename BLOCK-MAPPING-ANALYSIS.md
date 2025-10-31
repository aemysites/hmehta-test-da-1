# Block Mapping Analysis: MeinMEDCAMPUS → LOKELMA EDS

**Source Page:** https://www.mein-medcampus.de/Hyperkaliaemie
**Original Screenshot:** content/hyperkaliaemie-original.png
**Mapped Page:** content/hyperkaliaemie.html
**Preview Screenshot:** content/hyperkaliaemie-preview.png
**Date:** 2025-10-30

---

## Original Page Structure

### Detected Blocks/Sections on Source Page

#### 1. **Header/Navigation Bar**
- **Type:** Site-wide navigation
- **Content:**
  - MeinMEDCAMPUS logo
  - Search functionality
  - User menu ("Dr. med. Respi-Santis")
  - Main navigation: Dashboard, Indikationen, Fortbildung, Wissen, Service, Produkte, Medien
- **Mapped to:** ❌ Not mapped (site-level component)

#### 2. **Hero Section**
- **Type:** Page title header with background
- **Content:**
  - Title: "Hyperkaliämie"
  - Light purple/lavender gradient background
- **Mapped to:** ✅ **Hero-Lokelma** block
- **Adaptation:** Used LOKELMA teal color scheme instead of purple

#### 3. **Introduction Section**
- **Type:** Text content block
- **Content:**
  - Heading: "Bitte wählen Sie ein Thema"
  - Description: "Hyperkaliämie ist eine häufige Komplikation bei Patient:innen mit Herz- oder Niereninsuffizienz. Erfahren Sie mehr über wissenschaftliche Hintergründe und innovative Behandlungsmöglichkeiten."
- **Mapped to:** ✅ Regular paragraph content
- **Note:** Heading "Bitte wählen Sie ein Thema" (Please select a topic) was omitted as it's navigation instruction, not content

#### 4. **Article Card Grid**
- **Type:** Multi-column card layout (2 columns)
- **Content:** 13 article cards with titles and descriptions
- **Mapped to:** ⚠️ **Partially mapped** to regular content section with article titles only

**Original Cards:**

| # | Card Title | Mapped? |
|---|------------|---------|
| 1 | RAASi und Hyperkaliämie – das Dilemma | ✅ Yes |
| 2 | WATCH-K zeigt Versorgungsrealität bei Hyperkaliämie und chronischen Erkrankungen wie HF und CKD | ✅ Yes (shortened) |
| 3 | Optimierung der MRA-Therapie bei HFrEF Patient:innen mit Hyperkaliämie | ✅ Yes (shortened) |
| 4 | Experten rufen bei der Umsetzung von Leitlinienempfehlungen zur Handlung auf | ❌ No |
| 5 | CRA und WATCH-K | ❌ No |
| 6 | KaliumKompakt: Das Plus für kardiorenales Management bei Hyperkaliämie & Co | ❌ No |
| 7 | Kardiorenale Fälle, neue Real World Daten & interdisziplinärer Austausch | ❌ No |
| 8 | HK-Therapie-Empfehlungen – von Ärzt:innen für Ärzt:innen aus ihrer Region | ❌ No |
| 9 | Hyperkaliämie-Therapie – leitliniengerecht UND patientenfällig | ❌ No |
| 10 | Warum Hyperkaliämie oft wiederkehrend ist | ❌ No |
| 11 | Erste Real-World-Daten aus Deutschland | ✅ Yes (shortened) |
| 12 | Neue KDIGO CKD-Leitlinie 2024 | ✅ Yes (used in callout) |
| 13 | HyperFocus - der Vodcast zur Hyperkaliämie | ❌ No |

#### 5. **Footer**
- **Type:** Site-wide footer
- **Content:**
  - AstraZeneca branding
  - Contact information
  - Legal links (Impressum, Datenschutzerklärung, etc.)
- **Mapped to:** ❌ Not mapped (site-level component)

---

## Content Added (Not on Original Page)

### ⭐ **Columns-Predisposing-Factors Block**
- **Source:** NOT directly on original page
- **Reasoning:** Derived from intro text mentioning "Patient:innen mit Herz- oder Niereninsuffizienz"
- **Content Created:**
  - Title: "Prädisponierende Faktoren für Hyperkaliämie"
  - 4 risk factors with circular icons:
    1. Herzinsuffizienz (HF)
    2. Chronische Niereninsuffizienz (CKD)
    3. Diabetes Mellitus (T2D)
    4. RAASi-Therapie
- **Assets:** Icons sourced from mein-medcampus.de CDN (different pages)
- **Justification:** Medical context - these are established predisposing factors for hyperkalemia

### ⭐ **Callout-Lokelma Blocks (×2)**
- **Source:** Adapted from article titles and descriptions
- **Original Content:**
  - Callout 1: Derived from "RAASi und Hyperkaliämie – das Dilemma" article
  - Callout 2: Adapted from "Neue KDIGO CKD-Leitlinie 2024" article
- **Transformation:** Converted article card titles into prominent guideline statements
- **Purpose:** Highlight key clinical guidelines using LOKELMA brand callout style

---

## Mapping Strategy

### What Was Preserved
✅ Page title
✅ Introductory description
✅ Key article topics (4 of 13)
✅ Medical terminology and German language
✅ Clinical focus on hyperkalemia

### What Was Transformed
🔄 Article cards → Text-based article list
🔄 Purple branding → LOKELMA teal/green branding
🔄 2-column card grid → Single-column stacked blocks
🔄 Card descriptions → Shortened summaries

### What Was Added
➕ Predisposing factors circular icon section (medical context enhancement)
➕ Guideline callout boxes (content elevation for key messages)
➕ LOKELMA brand design system (colors, typography, spacing)

### What Was Omitted
➖ 9 article cards (69% of articles)
➖ Navigation instruction text ("Bitte wählen Sie ein Thema")
➖ Site navigation and footer
➖ Card descriptions and metadata
➖ Icons/badges on article cards

---

## Block-by-Block Comparison

### 1. Hero Section

**Original:**
```
Layout: Full-width header
Background: Light purple gradient
Text: "Hyperkaliämie" (dark purple)
Typography: Sans-serif, bold
```

**Mapped (Hero-Lokelma):**
```
Layout: Full-width header
Background: Teal gradient (LOKELMA brand)
Text: "Hyperkaliämie" (white)
Typography: Lexia serif, medium weight
```

**Changes:** Brand colors, typography, text color

---

### 2. Introduction Text

**Original:**
```
Heading: "Bitte wählen Sie ein Thema"
Text: "Hyperkaliämie ist eine häufige Komplikation..."
Layout: Centered, above card grid
```

**Mapped:**
```
Heading: [omitted]
Text: "Hyperkaliämie ist eine häufige Komplikation..."
Layout: Left-aligned paragraph
```

**Changes:** Removed heading, simplified layout

---

### 3. Content Section

**Original:**
```
Type: 2-column card grid
Cards: 13 total
Card Structure:
  - Icon/badge (document + bookmark)
  - Title
  - Description/subtitle
  - Hover effects
Layout: Responsive grid, white cards with shadow
```

**Mapped:**
```
Type: Article list
Articles: 4 total
Structure:
  - H3 heading (title)
  - Paragraph (short description)
Layout: Single column, simple text
```

**Changes:** Reduced content, simplified presentation, removed card UI

---

### 4. [NEW] Predisposing Factors

**Original:** Does not exist on source page

**Mapped (Columns-Predisposing-Factors):**
```
Type: Circular icon cards
Content: 4 risk factors
Layout: Responsive grid
Icons: Medical illustrations (HF heart, CKD kidneys, etc.)
Style: Teal gradient circles with white text overlay
```

**Source of Content:**
- Inferred from intro text mentioning heart/kidney disease
- Standard medical knowledge about hyperkalemia risk factors
- Icons sourced from other mein-medcampus.de pages

---

### 5. [NEW] Guideline Callouts

**Original:** Article cards with titles

**Mapped (Callout-Lokelma):**
```
Type: Prominent callout boxes
Content: 2 key guideline statements
Layout: Full-width horizontal boxes
Style: Teal gradient background, yellow arrow decoration, white text
```

**Content Transformation:**
- "Neue KDIGO CKD-Leitlinie 2024" (article card) → Callout statement
- "RAASi und Hyperkaliämie" theme → Callout statement

---

## Content Fidelity Analysis

### High Fidelity Elements
✅ Medical accuracy maintained
✅ German language preserved
✅ Clinical terminology correct
✅ Key topics represented
✅ Target audience (healthcare professionals) appropriate

### Creative Adaptations
🎨 Brand transformation (Purple MeinMEDCAMPUS → Teal LOKELMA)
🎨 Layout redesign (Card grid → Stacked blocks)
🎨 Content prioritization (13 articles → 4 key topics)
🎨 Visual hierarchy (Equal cards → Hero + Callouts + Content)
🎨 Medical context enhancement (Added risk factor icons)

### Content Gaps
⚠️ 69% of articles not included
⚠️ Article descriptions omitted
⚠️ Interactive card functionality lost
⚠️ Original purple branding replaced

---

## Design System Comparison

| Aspect | MeinMEDCAMPUS Original | LOKELMA EDS Mapped |
|--------|------------------------|---------------------|
| **Primary Color** | Purple (#6B46C1 approx) | Teal (#003b45) |
| **Accent Color** | Light Purple | Yellow (#fdb515) |
| **Background** | White + Light Purple | White + Teal Gradient |
| **Typography** | Sans-serif (modern) | Lexia (serif) + Inter |
| **Layout** | Card grid, compact | Stacked blocks, spacious |
| **Icons** | Small badges | Large circular illustrations |
| **Spacing** | Tight (content-dense) | Generous (content-focused) |
| **Branding** | AstraZeneca + MeinMEDCAMPUS | LOKELMA product brand |

---

## Recommendations for Complete Mapping

### To Increase Content Coverage

1. **Map All 13 Articles:**
   - Create individual article pages
   - Use Cards-Services block for article grid
   - Preserve card UI with LOKELMA styling

2. **Add Missing Content:**
   - "CRA und WATCH-K"
   - "KaliumKompakt" webinar series
   - "HyperFocus" podcast series
   - Regional HK therapy recommendations

3. **Create Article Detail Pages:**
   - Map each article to full content page
   - Link from main hyperkalemia page
   - Use existing LOKELMA blocks for content

### To Enhance Fidelity

1. **Restore Card Grid Layout:**
   - Implement Cards-Services block variant
   - Adapt LOKELMA styling to card format
   - Maintain 2-column responsive grid

2. **Add Hero Background:**
   - Use teal gradient medical pattern
   - Match Figma design for Hero-Lokelma
   - Enhance visual impact

3. **Include Statistics:**
   - Use Columns-Statistics block
   - Add prevalence data from articles
   - Visual data representation

### To Improve Block Library

1. **Create Article Card Block:**
   - New block: `cards-articles`
   - Support document icon + title + description
   - LOKELMA brand styling

2. **Create Navigation Block:**
   - New block: `navigation-topic`
   - "Bitte wählen Sie ein Thema" heading
   - Introduction text + CTA

3. **Create Podcast/Media Block:**
   - New block: `media-card`
   - Support for HyperFocus podcast
   - Audio/video content integration

---

## Visual Comparison

### Original Page Layout
```
┌─────────────────────────────────────┐
│ [Navigation Bar - Purple]           │
├─────────────────────────────────────┤
│                                     │
│    Hyperkaliämie (Hero)             │
│    [Light Purple Background]        │
│                                     │
├─────────────────────────────────────┤
│  Bitte wählen Sie ein Thema         │
│  [Intro text about hyperkalemia]    │
├─────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐        │
│  │ Card 1   │  │ Card 2   │        │
│  │ RAASi... │  │ WATCH-K..│        │
│  └──────────┘  └──────────┘        │
│  ┌──────────┐  ┌──────────┐        │
│  │ Card 3   │  │ Card 4   │        │
│  │ MRA...   │  │ Experten.│        │
│  └──────────┘  └──────────┘        │
│       [... 9 more cards ...]       │
├─────────────────────────────────────┤
│ [Footer - Purple]                   │
└─────────────────────────────────────┘
```

### Mapped LOKELMA Page Layout
```
┌─────────────────────────────────────┐
│    Hyperkaliämie                    │
│    [Teal Gradient Hero]             │
├─────────────────────────────────────┤
│  [Intro paragraph]                  │
├─────────────────────────────────────┤
│  Prädisponierende Faktoren          │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐      │
│  │ ⚕️ │ │ 🫘 │ │ 💉 │ │ 💊 │      │
│  │ HF │ │CKD │ │T2D │ │Med │      │
│  └────┘ └────┘ └────┘ └────┘      │
├─────────────────────────────────────┤
│  [Callout: RAASi therapy...] →     │
├─────────────────────────────────────┤
│  [Callout: KDIGO 2024...] →        │
├─────────────────────────────────────┤
│  Aktuelle Themen                    │
│  - RAASi und Hyperkaliämie          │
│  - WATCH-K                          │
│  - REALIZE-K                        │
│  - Real-World-Daten                 │
└─────────────────────────────────────┘
```

---

## Summary

### Mapping Approach: **Content Adaptation with Brand Transformation**

This was **not** a 1:1 structural mapping, but rather a **content migration** with significant creative adaptation:

1. **Preserved:** Medical content, German language, clinical focus
2. **Transformed:** Visual design, layout structure, content hierarchy
3. **Enhanced:** Added medical context (risk factors), elevated key messages (callouts)
4. **Reduced:** Article count, card UI, interactive elements

### Content Coverage: **31% Direct Mapping**
- 4 of 13 articles directly mapped (31%)
- Additional medical context added from domain knowledge
- Key clinical guidelines elevated to callouts

### Brand Transformation: **100% LOKELMA**
- Complete visual rebrand from MeinMEDCAMPUS to LOKELMA
- All design tokens from LOKELMA design system applied
- AstraZeneca product brand (LOKELMA) vs platform brand (MeinMEDCAMPUS)

### Recommended Next Steps:
1. Review with stakeholders for content completeness
2. Map remaining 9 articles if required
3. Create Cards block variant for article grid
4. Add Hero background image for visual impact
5. Consider creating article detail pages
