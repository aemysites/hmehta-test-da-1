# Callout-Lokelma-Green Block Template

## Description

Full-width diagonal teal callout section for highlighting important information or guidelines. Features a subtle skew effect that creates visual interest and draws attention.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-6866
**Component:** Lokelma Callout 3 Lines
**Page:** 1.0 Post-gate HCP Homepage – Slide 1_P3
**Extracted:** 2025-10-31

## Structure

This block creates a diagonal banner with:
- Teal background (LOKELMA primary color)
- White text, centered
- Subtle 2-degree skew for visual interest
- Full-width spanning

## Markdown Syntax

```markdown
+---------------------------------------------------------------+
| **Callout-Lokelma-Green**                                     |
+---------------------------------------------------------------+
| Your callout message text goes here. Can span multiple sentences. |
+---------------------------------------------------------------+
```

## Important Notes

- Use EDS grid table format with `+---+` borders
- First row: Block name `**Callout-Lokelma-Green**` in bold
- Second row: Callout text content
- Text is automatically centered and white
- Background is teal with slight diagonal skew
- Content inside is counter-skewed for readability

## Content Guidelines

- **Length:** 1-3 sentences work best
- **Tone:** Informative, directive, or educational
- **Purpose:** Guidelines, recommendations, key messages
- **Format:** Plain text, can include bold with `**text**`

## Example Output

Diagonal teal banner spanning full width with centered white text: "Learn how to choose LOKELMA for the treatment of hyperkalemia as a treatment option in patients with moderate to severe chronic kidney disease."

## CSS Tokens Used

- `--lokelma-color-primary` - Teal background (#00927C)
- `--lokelma-color-background` - White text
- `--lokelma-spacing-xl` - Vertical padding
- `--lokelma-max-width-content` - Content container width
- `--lokelma-font-family-heading` - Lexia font
- `--lokelma-font-weight-medium` - Medium weight (500)

## CSS Features

```css
/* Diagonal skew effect */
transform: skewY(-2deg);  /* Container skew */

/* Inner content counter-skew */
transform: skewY(2deg);   /* Restores readability */
```

## Variations

- Can include bold text for emphasis
- Content length adapts automatically
- Works well between sections as visual separator
- Can modify skew angle in CSS if needed (default: -2deg)

## Usage Tips

1. Use for important guidelines or recommendations
2. Keep text concise for maximum impact
3. Works great as transition between main content sections
4. White text ensures high contrast on teal background
5. Diagonal design creates visual hierarchy and breaks up page flow
