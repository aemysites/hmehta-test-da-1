export default function decorate(block) {
  const rows = [...block.children];
  const container = document.createElement('div');
  container.className = 'statistics-container';

  rows.forEach((row) => {
    const cells = [...row.children];
    
    cells.forEach((cell) => {
      if (cell.textContent.trim()) {
        const stat = document.createElement('div');
        stat.className = 'statistic-item';
        
        // Get all content elements
        const elements = [...cell.children];
        
        elements.forEach((el) => {
          if (el.querySelector('picture')) {
            // Pie chart image
            const chartWrapper = document.createElement('div');
            chartWrapper.className = 'statistic-chart';
            chartWrapper.appendChild(el.cloneNode(true));
            stat.appendChild(chartWrapper);
          } else {
            // Text content (percentage, label, etc.)
            const content = document.createElement('div');
            content.className = 'statistic-content';
            content.innerHTML = el.innerHTML;
            stat.appendChild(content);
          }
        });
        
        container.appendChild(stat);
      }
    });
  });

  block.textContent = '';
  block.append(container);
}
