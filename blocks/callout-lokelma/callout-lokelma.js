export default function decorate(block) {
  // Callout structure: Single row with text content
  const contentRow = block.querySelector(':scope > div');

  if (contentRow) {
    const contentCell = contentRow.querySelector('div');

    if (contentCell) {
      // Create callout structure
      const calloutContent = document.createElement('div');
      calloutContent.className = 'callout-lokelma-content';
      calloutContent.innerHTML = contentCell.innerHTML;

      // Replace block content
      block.textContent = '';
      block.append(calloutContent);
    }
  }
}
