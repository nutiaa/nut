(function() {
  const page = document.getElementById('page');

  function updateZoom() {
    const w = window.innerWidth;
    const factor = w / 1920;

    page.style.zoom = factor;
    page.style.transformOrigin = 'top left';
  }

  window.addEventListener('resize', updateZoom);
  window.addEventListener('DOMContentLoaded', updateZoom);
})();