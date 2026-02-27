// Aktif sayfa linkine basit bir vurgu ekler.
(function markActivePage() {
  var links = document.querySelectorAll('nav a');
  var current = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === current) {
      link.style.backgroundColor = '#1e293b';
      link.style.color = '#ffffff';
    }
  });
})();
