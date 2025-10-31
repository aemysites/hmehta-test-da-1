# Quote-Lokelma Block Template

## Description

Light green blockquote section for highlighting key messages or product benefits. Creates a visually distinct callout area with centered text.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-6809
**Component:** Text Block / Quote bar
**Page:** 1.0 Post-gate HCP Homepage – Slide 1_P3
**Extracted:** 2025-10-31

## Structure

This block creates a full-width quote section with:
- Light green background (10% opacity teal)
- Centered text content
- Support for superscript references

## Markdown Syntax

```markdown
+---------------------------------------------------------------+
| **Quote-Lokelma**                                             |
+---------------------------------------------------------------+
| Your quote text goes here with optional reference.<sup>1</sup> |
+---------------------------------------------------------------+
```

## Important Notes

- Use EDS grid table format with `+---+` borders
- First row: Block name `**Quote-Lokelma**` in bold
- Second row: Quote text with optional HTML tags
- Use `<sup>` for superscript references
- Text is automatically centered and indented
- Background spans full width

## Content Guidelines

- **Length:** Keep to 1-2 sentences for best readability
- **Tone:** Should be declarative and informative
- **References:** Use superscript numbers for citations
- **Format:** Can include basic HTML like `<sup>` tags

## Example Output

Light green bar spanning full width with centered text: "LOKELMA: With data for correction, maintenance, and in patients on chronic hemodialysis."

## CSS Tokens Used

- `--lokelma-color-primary` - Teal color at 10% opacity for background
- `--lokelma-color-text` - Dark text color
- `--lokelma-font-family-heading` - Lexia font
- `--lokelma-spacing-xl` - Vertical padding
- `--lokelma-font-size-l` - 24px font size

## Variations

- Content length adapts automatically
- Can include bold text with `**text**`
- Supports inline HTML for formatting
