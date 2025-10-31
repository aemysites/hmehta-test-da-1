# Columns-Predisposing-Factors Block Template

## Description

Displays predisposing medical factors in a grid layout with circular icon badges. Each factor shows an icon within a gradient circle and a label below.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-7525
**Component:** predisposing_factors_block
**Extracted:** 2025-10-30

## Structure

This block creates a header followed by a grid of circular icons with labels, displaying medical condition factors.

## Markdown Syntax

```markdown
| Columns-Predisposing-Factors |  |
|---|---|
| Predisposing factors:<sup>1-5</sup> |  |
| ![HF Icon](./images/icon-hf.png) | **HF** |
| ![T2D Icon](./images/icon-dm.png) | **T2D** |
| ![CKD Icon](./images/icon-ckd.png) | **CKD** |
| ![RAASi Icon](./images/icon-raasi.png) | **Concomitant**<br>**RAASi**<br><small>use</small> |
```

## Visual Example

See screenshot at: content/images/predisposing-factors-example.png

## Important Notes

- First row contains the section header with superscript reference
- Subsequent rows: Column 1 = Icon image, Column 2 = Factor label
- Icons should be approximately 126x126px
- Circular gradient background is applied via CSS
- Labels use LOKELMA Blue color
- Grid displays 4 columns on desktop, 2 on tablet, 1 on mobile

## Content Guidelines

- **Header:** Section title with optional reference numbers
- **Icons:** Medical condition icons (126x126px recommended)
- **Labels:** Short abbreviations or terms (2-10 characters)
- **Multi-line labels:** Use `<br>` tags for line breaks, `<small>` for smaller text

## Icon Requirements

Place icon images in `content/images/`:
- `icon-hf.png` - Heart Failure icon
- `icon-dm.png` - Diabetes (T2D) icon
- `icon-ckd.png` - Chronic Kidney Disease icon
- Custom icons as needed

## Variations

This template supports:
- 2-8 factor items
- Custom icons
- Single or multi-line labels
- Optional reference numbers in header

## CSS Tokens Used

- `--lokelma-color-primary` - Text color (blue)
- `--lokelma-font-family-heading` - Font (Lexia)
- `--lokelma-font-size-xxxl` - Label size (42px)
- `--lokelma-gradient-light` - Circle gradient start
- `--lokelma-gradient-white` - Circle gradient end
- `--lokelma-spacing-xl` - Section spacing
