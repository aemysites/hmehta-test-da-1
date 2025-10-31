export default function decorate(block) {
  // Hero structure: Title row
  const titleRow = block.querySelector(':scope > div');

  if (titleRow) {
    const titleCell = titleRow.querySelector('div');
    if (titleCell) {
      const title = titleCell.textContent.trim();

      // Create hero structure
      const heroContent = document.createElement('div');
      heroContent.className = 'hero-lokelma-content';

      const heroTitle = document.createElement('h1');
      heroTitle.className = 'hero-lokelma-title';
      heroTitle.textContent = title;

      heroContent.append(heroTitle);

      // Replace block content
      block.textContent = '';
      block.append(heroContent);
    }
  }
}
