import { moveInstrumentation } from '../../scripts/scripts.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    moveInstrumentation(row, li);
    while (row.firstElementChild) li.append(row.firstElementChild);

    // Structure: Title, Description, Link (optional)
    [...li.children].forEach((div, index) => {
      // Check if div contains a heading or markdown heading pattern
      const text = div.textContent.trim();
      if (text.startsWith('###')) {
        // Convert markdown heading to H3
        div.className = 'cards-articles-card-title';
        const h3 = document.createElement('h3');
        h3.textContent = text.replace(/^###\s*/, '');
        div.textContent = '';
        div.appendChild(h3);
      } else if (div.querySelector('h3') || div.querySelector('h4') || div.querySelector('h5')) {
        div.className = 'cards-articles-card-title';
      } else if (div.querySelector('a')) {
        div.className = 'cards-articles-card-link';
      } else {
        div.className = 'cards-articles-card-body';
      }
    });

    ul.append(li);
  });

  block.textContent = '';
  block.append(ul);
}
