export default function decorate(block) {
  // Transform table to centered text container
  const rows = [...block.children];
  const container = document.createElement('div');
  container.className = 'text-centered-container';

  rows.forEach((row) => {
    const cells = [...row.children];
    cells.forEach((cell) => {
      if (cell.textContent.trim()) {
        const content = document.createElement('div');
        content.className = 'text-centered-content';
        content.innerHTML = cell.innerHTML;
        container.append(content);
      }
    });
  });

  block.textContent = '';
  block.append(container);
}
