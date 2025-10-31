export default function decorate(block) {
  // Find the picture element (background image) in the first row
  const picture = block.querySelector('picture');

  if (!picture) {
    block.classList.add('no-image');
    return;
  }

  // Fix Figma URLs to point to local images
  const img = picture.querySelector('img');
  const sources = picture.querySelectorAll('source');

  if (img && img.src.includes('figma.com')) {
    // Extract the filename and point to local path
    const filename = img.src.split('/').pop();
    const localPath = `./images/${filename}`;
    img.src = localPath;

    // Fix source elements too
    sources.forEach(source => {
      if (source.srcset.includes('figma.com')) {
        source.srcset = localPath;
      }
    });
  }

  // Find the top-level row div that contains the picture
  let pictureRow = picture;
  while (pictureRow.parentElement && pictureRow.parentElement !== block) {
    pictureRow = pictureRow.parentElement;
  }

  // Extract picture from wrapper and add as direct child of block
  if (pictureRow && pictureRow.parentElement === block) {
    pictureRow.remove();
    block.prepend(picture);
  }
}
