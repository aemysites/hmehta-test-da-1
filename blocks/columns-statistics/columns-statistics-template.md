# Columns-Statistics Block Template

## Description

Displays statistical data in a horizontal layout with pie chart visualizations. Each statistic shows a percentage value overlaid on a circular chart with descriptive labels.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-7545
**Component:** Frame 107304 (Pie Charts)
**Extracted:** 2025-10-30

## Structure

This block creates a horizontal row of statistics with pie chart backgrounds and centered text overlays.

## Markdown Syntax

```markdown
| Columns-Statistics |  |  |
|---|---|---|
| ![Pie Chart](./images/pie-chart-1.svg)<br>**<5%**<br>with **HF** | ![Pie Chart](./images/pie-chart-2.svg)<br>**Up to**<br>**40%**<br>with **chronic HF** | ![Pie Chart](./images/pie-chart-3.svg)<br>**~73%**<br>with **CKD** |
```

## Important Notes

- Each column represents one statistic
- First element: Pie chart image (SVG recommended)
- Following elements: Percentage and label text
- Use `**text**` for bold (percentage and emphasized words)
- Use `<br>` to break lines
- Percentage should be large and prominent
- Label describes the condition/group

## Example Output

Three circular pie charts in a row, each with:
- Teal colored ring chart background
- Large percentage number in center
- Descriptive label below percentage

## Content Guidelines

- **Percentage:** Keep short (1-5 characters) - examples: "<5%", "40%", "~73%"
- **Label:** 2-4 words maximum - examples: "with HF", "with chronic HF", "with CKD"
- **Prefix text:** Optional "Up to" or similar qualifiers
- **Number of statistics:** 2-4 works best (3 is optimal)
- **Pie charts:** Use SVG format for best quality, 326x326px recommended

## Variations

This block supports:
- 2-column layout (2 statistics)
- 3-column layout (3 statistics) - default
- 4-column layout (4 statistics)
- Optional prefix text (like "Up to")
- Mixed percentage formats (exact, approximate, range)

## Pie Chart Assets

Pie chart images should be:
- SVG format preferred
- Circular design with teal (#00927c) ring
- White center for text overlay
- 326x326px dimensions
- Transparent or white background
