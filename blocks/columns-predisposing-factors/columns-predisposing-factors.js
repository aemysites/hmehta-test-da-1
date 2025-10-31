export default function decorate(block) {
  // Structure: Header row + Factor rows
  const rows = [...block.children];

  // Create container
  const container = document.createElement('div');
  container.className = 'predisposing-factors-container';

  // First row is the header
  if (rows.length > 0) {
    const headerRow = rows[0];
    const headerText = headerRow.textContent.trim();

    const header = document.createElement('h2');
    header.className = 'predisposing-factors-header';
    header.innerHTML = headerText;

    container.append(header);
  }

  // Create factors grid
  const factorsGrid = document.createElement('div');
  factorsGrid.className = 'predisposing-factors-grid';

  // Process each factor row (skip header)
  rows.slice(1).forEach((row) => {
    const cells = [...row.children];

    if (cells.length >= 2) {
      const factorItem = document.createElement('div');
      factorItem.className = 'predisposing-factor-item';

      // Icon cell
      const iconCell = cells[0];
      const icon = iconCell.querySelector('img');
      if (icon) {
        const iconWrapper = document.createElement('div');
        iconWrapper.className = 'factor-icon-wrapper';
        iconWrapper.append(icon.cloneNode(true));
        factorItem.append(iconWrapper);
      }

      // Text cell
      const textCell = cells[1];
      const textWrapper = document.createElement('div');
      textWrapper.className = 'factor-text';
      textWrapper.innerHTML = textCell.innerHTML;
      factorItem.append(textWrapper);

      factorsGrid.append(factorItem);
    }
  });

  container.append(factorsGrid);

  // Replace block content
  block.textContent = '';
  block.append(container);
}
