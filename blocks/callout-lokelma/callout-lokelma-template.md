# Callout-LOKELMA Block Template

## Description

Callout box with LOKELMA branding. Features green background with white text and a yellow corner accent. Used to highlight important information, guidelines, or key messages.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-7565
**Component:** lokelma-callout-3-lines / lokelma-callout-2-lines
**Extracted:** 2025-10-30

## Structure

This block creates a distinctive callout box with branded styling and a decorative corner accent.

## Markdown Syntax

```markdown
| Callout-Lokelma |
|---|
| Diabetes Canada guidelines recommend sodium zirconium cyclosilicate as a treatment option in patients with moderate to high potassium<sup>1</sup> |
```

## Visual Example

See screenshot at: content/images/callout-lokelma-example.png

## Important Notes

- Single row with one cell containing the callout text
- Green (teal) background with white text
- Yellow triangular accent in top-right corner
- Bold text for emphasis
- Supports reference numbers with `<sup>` tag
- Maximum width: 996px, centered

## Content Guidelines

- **Length:** 1-3 sentences recommended
- **Tone:** Important information, guidelines, or key facts
- **References:** Use `<sup>` tag for reference numbers
- **Formatting:** Text is automatically bold and white

## Markdown Formatting Examples

**Single sentence:**
```markdown
| Callout-Lokelma |
|---|
| Important clinical information here<sup>1</sup> |
```

**Multiple sentences:**
```markdown
| Callout-Lokelma |
|---|
| First important point. Second important point with reference<sup>2</sup> |
```

**With line breaks:**
```markdown
| Callout-Lokelma |
|---|
| Point one.<br><br>Point two with spacing. |
```

## Variations

This template supports:
- 1-3 lines of text
- Reference numbers (superscript)
- Responsive design (scales on mobile)
- Consistent branding across pages

## Use Cases

- Clinical guidelines and recommendations
- Important safety information
- Key study findings
- Regulatory or prescribing information

## CSS Tokens Used

- `--lokelma-color-secondary` - Background (green)
- `--lokelma-yellow` - Corner accent
- `--az-white` - Text color
- `--lokelma-font-family-body` - Font (Inter)
- `--lokelma-font-size-xl` - Text size (24px)
- `--lokelma-spacing-m` - Internal padding
