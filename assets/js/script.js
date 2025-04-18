// main script
(function () {
  "use strict";
})();
import GLightbox from './plugins/glightbox.min.js';

const lightbox = GLightbox({
  selector: '.gallery-item a',
});
document.querySelectorAll('.image').forEach(img => {
  img.addEventListener('mouseover', function() {
      // Feltételezzük, hogy van EXIF vagy városnév adat, amit valahol tárolsz
      const exifData = img.getAttribute('data-exif'); // EXIF adatot az img elemre helyezheted
      const cityName = img.getAttribute('data-city'); // Városnév adatot az img elemre helyezheted

      // Ezen adatok megjelenítése
      const tooltip = document.createElement('div');
      tooltip.className = 'tooltip';
      tooltip.innerHTML = `EXIF: ${exifData} | City: ${cityName}`;
      img.appendChild(tooltip);
  });

  img.addEventListener('mouseout', function() {
      const tooltip = img.querySelector('.tooltip');
      if (tooltip) {
          img.removeChild(tooltip);
      }
  });
});
const filterCategory = 'landscape'; // Például 'landscape' kategória szűrése
const images = document.querySelectorAll('.image');

images.forEach(img => {
    if (img.getAttribute('data-category') !== filterCategory) {
        img.style.display = 'none';  // Elrejti a nem kívánt kategóriát
    } else {
        img.style.display = 'block';
    }
});
