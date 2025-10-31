# Hero-Lokelma-Home Block Template

## Description

Full-width hero banner with background image, headline, and indication text. Designed for LOKELMA homepage with swimming pool background and teal text overlay.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-6340
**Component:** Hero Banner / Property 1=slide 1
**Page:** 1.0 Post-gate HCP Homepage – Slide 1_P3
**Extracted:** 2025-10-31

## Structure

This block creates a full-width hero section with:
- Background image (full width, 550px height)
- Main headline (large, teal color)
- Indication text (smaller, right-aligned)

## Markdown Syntax

```markdown
+---------------------------------------------------------------+
| **Hero-Lokelma-Home**                                         |
+---------------------------------------------------------------+
| ![LOKELMA Hero](./images/hero-background.png)                |
+---------------------------------------------------------------+
| # Main Headline Text Goes Here                                |
+---------------------------------------------------------------+
| *Indication text in italics, typically treatment indication.* |
+---------------------------------------------------------------+
```

## Important Notes

- Use EDS grid table format with `+---+` borders
- First row: Block name in bold
- Second row: Background image
- Third row: Headline starting with `#` (h1)
- Fourth row: Indication text in italics `*text*`
- Image will be positioned as absolute background
- Headline overlays the image with teal background

## Content Guidelines

- **Background Image:** Recommended size: 1920x550px
- **Headline:** Keep to 1-2 lines, use sentence case with ®
- **Indication:** Full product indication statement with superscript references
- **Image Format:** PNG or JPG, optimized for web

## Example Output

Full-width hero with swimming pool background, teal headline overlay reading "Consider LOKELMA® in your patients with hyperkalemia", and right-aligned indication text.

## CSS Tokens Used

- `--lokelma-color-secondary` - Teal headline background
- `--lokelma-font-family-heading` - Headline font
- `--lokelma-spacing-xl` - Section padding
- `--lokelma-font-size-hero` - Large headline size

## Variations

- Background image can be changed per page
- Headline text is fully customizable
- Indication text adapts to content length
