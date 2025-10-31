# Hero-LOKELMA Block Template

## Description

Hero banner section with title overlay on a branded background image. Used for page headers in the LOKELMA design system.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-7517
**Component:** lokelma_banner_block
**Extracted:** 2025-10-30

## Structure

This block creates a full-width hero banner with a title displayed over a background image.

## Markdown Syntax

```markdown
| Hero-Lokelma |
|---|
| About Hyperkalemia |
```

## Visual Example

See screenshot at: content/images/hero-lokelma-example.png

## Important Notes

- Single row with one cell containing the title text
- Background image should be placed at: `content/images/lokelma-hero-bg.png`
- Title uses Lexia font family (heading font)
- White text color for contrast against green background
- Full-width layout with centered content

## Content Guidelines

- **Title:** Keep concise, 2-5 words recommended
- **Character limit:** 50 characters maximum for best display
- **Font:** Uses LOKELMA heading font (Lexia)
- **Color:** White text on green/teal background

## Variations

This template supports:
- Full-width banner (default)
- Responsive scaling for mobile
- Background image can be customized by replacing the image file

## CSS Tokens Used

- `--lokelma-color-secondary` - Background color
- `--lokelma-font-family-heading` - Title font
- `--lokelma-font-size-display-m` - Title size (64px desktop)
- `--lokelma-spacing-xxl` - Vertical padding
- `--az-white` - Text color
