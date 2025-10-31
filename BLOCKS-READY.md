# Block Library Ready

**Source:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-7514
**Page:** 2.1 About Hyperkalemia_P3
**Extracted:** 2025-10-30

## Blocks Created from Page 2.1

1. **blocks/hero-lokelma/** - Hero banner with title overlay on background image
   - Files: hero-lokelma.js, hero-lokelma.css, hero-lokelma-template.md
   - Usage: Page headers with branded background
   - Figma: node-id=677-7504

2. **blocks/columns-predisposing-factors/** - Circular icon grid displaying medical factors
   - Files: columns-predisposing-factors.js, columns-predisposing-factors.css, columns-predisposing-factors-template.md
   - Usage: Display conditions (HF, T2D, CKD, RAASi) with circular gradient rings
   - Figma: node-id=677-7525

3. **blocks/text-centered/** - Centered text block for statements and headings
   - Files: text-centered.js, text-centered.css, text-centered-template.md
   - Usage: Display centered statements, introductions, or important messages
   - Figma: node-id=677-7543

4. **blocks/columns-statistics/** - Pie chart statistics with overlaid text
   - Files: columns-statistics.js, columns-statistics.css, columns-statistics-template.md
   - Usage: Show percentage statistics with circular chart visualizations
   - Figma: node-id=677-7545

5. **blocks/callout-lokelma/** - Branded callout box with corner accent
   - Files: callout-lokelma.js, callout-lokelma.css, callout-lokelma-template.md
   - Usage: Highlight important information, guidelines, or key messages

6. **blocks/cards-lokelma/** - Efficacy cards with circular icons and statistics
   - Files: cards-lokelma.js, cards-lokelma.css, cards-lokelma-template.md
   - Usage: Display clinical trial data, treatment phases, efficacy statistics in 2-column card layout
   - Figma: node-id=677-6811 (Group 107303)
   - Page: 1.0 Post-gate HCP Homepage – Slide 1_P3

## Design Tokens

Design tokens already exist in styles/styles.css (lines 106-189):

- **Colors:** 8 tokens (LOKELMA Blue, Green, Yellow, AZ colors)
- **Typography:** 13 font size tokens, 7 line height tokens, 6 font weights
- **Spacing:** 7 spacing scale tokens (xs to xxxl)
- **Layout:** 3 max-width tokens, content padding
- **Borders:** 4 border radius tokens, border colors and widths

All blocks use ONLY token references - no hardcoded values.

## Assets

Downloaded to content/images/:
- lokelma-hero-bg.png (1920x285px) - Hero background
- icon-hf.png, icon-dm.png, icon-ckd.png (140x140px) - Condition icons
- icon-hematology.svg, icon-endometrium.png, icon-lung.svg, icon-breast.svg, icon-ovarian.png, icon-liver.svg, icon-biliary.svg, icon-uro.svg - Cancer indication icons
- pie-chart-hf.svg (326x326px) - HF statistics pie chart
- pie-chart-chronic-hf.svg (326x326px) - Chronic HF statistics pie chart
- pie-chart-ckd.svg (326x326px) - CKD statistics pie chart
- icon-clock-lokelma.svg - Clock icon for 48-hour correction phase card
- icon-wave-lokelma.svg - Wave icon for maintenance phase card
- card-background-teal.png - Light teal gradient background for efficacy cards

## Next Steps

Use these blocks with content from any source:

1. **Reference templates:** Each block has a -template.md file showing exact markdown structure
2. **Populate content:** Use templates to create content (manual or via content-mapper skill)
3. **Preview locally:** Test at localhost:3000 after running `aem up`

## Template Files

Each block directory contains:
- **{block-name}.js** - EDS decoration logic
- **{block-name}.css** - Styling with design token references
- **{block-name}-template.md** - Markdown structure examples and usage guidelines

## Block Structure Verification

All blocks verified with:
- ✅ 3 required files per block
- ✅ CSS uses only design tokens (no hardcoded values)
- ✅ Templates show clear markdown examples
- ✅ JavaScript follows EDS decoration patterns
- ✅ Assets downloaded and organized

## Example Usage

To use the hero-lokelma block in a page:

```markdown
| Hero-Lokelma |
|---|
| About Hyperkalemia |
```

See individual -template.md files for complete usage examples.
