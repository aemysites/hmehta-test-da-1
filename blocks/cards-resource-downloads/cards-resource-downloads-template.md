# Cards-Resource-Downloads Block Template

## Description

Collection of alternating resource download cards with automatic image positioning. Each card displays a downloadable resource with image, title, description, and download button in a 2-column layout that alternates between image-left and image-right.

## Figma Source

**Design URL:** https://www.figma.com/design/iuXMtneLhmoFLDDNavxfNN/LOKELMA-myAZ-integration_Phase4?node-id=677-7925
**Component:** Resource Download Cards (Patient Tear Sheet, Dose Card, Product Monograph, LOKELMA Data Resource)
**Page:** 2.6 Resources_P3
**Extracted:** 2025-10-31

## Structure

This block creates multiple resource cards in a single block:
- Each row becomes a card with 2 columns (image + content)
- Odd cards (1st, 3rd, 5th): Image on left, content on right
- Even cards (2nd, 4th, 6th): Content on left, image on right
- Image areas have teal background
- Content areas have light teal background (10% opacity)

## Markdown Syntax

```markdown
+---------------------------------------------------------------+
| **Cards-Resource-Downloads**                                  |
+---------------------------------------------------------------+
| ![Resource Image 1](./images/resource-1.png) | ### Resource Title 1 |
|                                                               |                      |
|                                                               | Brief description of the resource and what it contains. |
|                                                               |                      |
|                                                               | [Download](#)        |
+---------------------------------------------------------------+
| ### Resource Title 2                                          | ![Resource Image 2](./images/resource-2.png) |
|                                                               |                      |
| Brief description of the resource and what it contains.       |                      |
|                                                               |                      |
| [Download](#)                                                 |                      |
+---------------------------------------------------------------+
| ![Resource Image 3](./images/resource-3.png) | ### Resource Title 3 |
|                                                               |                      |
|                                                               | Brief description of the resource and what it contains. |
|                                                               |                      |
|                                                               | [Download](#)        |
+---------------------------------------------------------------+
```

## Important Notes

- Use EDS grid table format with `+---+` borders
- First row: Block name `**Cards-Resource-Downloads**` in bold
- Each subsequent row: One complete resource card with 2 columns
- Cards automatically alternate: odd cards have image left, even cards have content left
- No need to specify image position - it's handled automatically
- Each card must have: image, h3 title, description paragraph, and download link
- Vertical separators `|` create the 2-column structure

## Content Guidelines

- **Card Count:** 2-6 cards recommended
- **Images:**
  - Product screenshots, brochure covers, or document previews
  - Recommended size: ~240-380px wide (will scale to fit)
  - PNG format for documents/screenshots
  - Should show clear preview of the resource
- **Titles:**
  - 2-5 words describing the resource
  - Use title case
  - Examples: "Patient Tear Sheet", "Dose Card", "Product Monograph"
- **Descriptions:**
  - 1-2 sentences explaining what the resource contains
  - Be specific about the content and benefits
  - Keep under 40 words for best layout
- **Download Links:**
  - Use `[Download](#)` as default text
  - Replace `#` with actual download URL
  - Can customize text: `[Download PDF](#)`, `[View Resource](#)`

## Example Output

A collection of 4 resource cards:
1. **Patient Tear Sheet** (image left) - Couple on dock image, teal background
2. **Dose Card** (content left) - LOKELMA molecular structure image, teal background
3. **Product Monograph** (image left) - Document preview, teal background
4. **LOKELMA Data Resource** (content left) - Data visualization, teal background

Each card features:
- Teal image area (with subtle shadow on image)
- Light teal content area with title, description, yellow download button
- 400px minimum height per card

## CSS Tokens Used

- `--lokelma-color-primary` - Teal background for image areas (#00927c)
- `--lokelma-color-primary-10` - Light teal for content areas (10% opacity)
- `--lokelma-color-accent` - Yellow download button (#fdb515)
- `--lokelma-color-text` - Dark text color (#003b45)
- `--lokelma-spacing-l` - Content padding (30px)
- `--lokelma-spacing-s` - Content gap (20px)
- `--lokelma-font-family-heading` - Lexia for titles
- `--lokelma-max-width-content` - Maximum width (1262px)

## Responsive Behavior

- **Desktop (>768px):**
  - 2-column cards with alternating layout
  - Image and content side-by-side
  - Odd cards: image left, even cards: image right
- **Tablet (768-1024px):**
  - Same 2-column layout maintained
  - Slightly reduced font sizes
- **Mobile (<768px):**
  - Stacked layout: image always on top, content below
  - Single column full-width
  - Maintains vertical rhythm

## Card Order Pattern

1. Card 1 (odd): Image LEFT → Content RIGHT
2. Card 2 (even): Content LEFT → Image RIGHT
3. Card 3 (odd): Image LEFT → Content RIGHT
4. Card 4 (even): Content LEFT → Image RIGHT
5. Card 5 (odd): Image LEFT → Content RIGHT
6. Card 6 (even): Content LEFT → Image RIGHT

## Variations

- **2 Cards:** Minimal resource list
- **3 Cards:** Small resource collection
- **4 Cards:** Standard collection (shown in example)
- **5-6 Cards:** Comprehensive resource library
- **Custom Button Text:** Change "Download" to "View", "Access", "Get PDF", etc.

## Usage Tips

1. Keep consistent image aspect ratios across all cards
2. Ensure all download links are functional before publishing
3. Use descriptive titles that clearly identify the resource
4. Write descriptions that answer "What will I get from this resource?"
5. Order cards by priority or logical sequence
6. Test download links to ensure they work
7. Consider using thumbnails that clearly show the resource type
8. Keep descriptions concise - let the title do most of the work
9. Use consistent button text across all cards unless there's a specific reason to vary
10. The alternating pattern creates visual rhythm - don't fight it by using similar images
