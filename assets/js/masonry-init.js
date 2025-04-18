document.addEventListener("DOMContentLoaded", function () {
    var grid = document.querySelector('.gallery-grid');
    if (grid) {
      new Masonry(grid, {
        itemSelector: '.gallery-item',
        gutter: 16,
        fitWidth: true
      });
    }
  });
  