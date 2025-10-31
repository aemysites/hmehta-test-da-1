/**
 * Cards Resource Downloads Block
 * Multiple resource download cards with alternating image positions
 */

export default function decorate(block) {
  const rows = [...block.children];

  // Process each row as a card
  rows.forEach((row) => {
    const cells = [...row.children];
    if (cells.length !== 2) return;

    // Create card structure
    const card = document.createElement('div');
    card.className = 'resource-card';

    const cardImage = document.createElement('div');
    cardImage.className = 'card-image';

    const cardContent = document.createElement('div');
    cardContent.className = 'card-content';

    // Process cells
    cells.forEach((cell) => {
      const hasPicture = cell.querySelector('picture');

      if (hasPicture) {
        // This cell contains the image
        const picture = cell.querySelector('picture');
        const img = picture.querySelector('img');

        // Fix localhost URLs
        if (img && img.src.includes('localhost:3845')) {
          const filename = img.src.split('/').pop();
          img.src = `./images/${filename}`;
        }

        cardImage.appendChild(picture);
      } else {
        // This cell contains content (h3, p, link)
        // Extract h3
        const heading = cell.querySelector('h3, h2, h1');
        if (heading) {
          const h3 = document.createElement('h3');
          h3.textContent = heading.textContent;
          cardContent.appendChild(h3);
        }

        // Extract paragraph(s)
        const paragraphs = cell.querySelectorAll('p');
        paragraphs.forEach((p) => {
          const link = p.querySelector('a');
          if (!link) {
            // Regular paragraph
            cardContent.appendChild(p.cloneNode(true));
          } else {
            // This paragraph contains the button link
            if (!link.textContent.trim()) {
              link.textContent = 'Download';
            }
            cardContent.appendChild(link);
          }
        });
      }
    });

    // Add image and content to card
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    // Replace row with card
    row.replaceWith(card);
  });
}
