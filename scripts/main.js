(function () {
  var yil = document.getElementById("yil");
  if (yil) yil.textContent = new Date().getFullYear();

  // Aktif link yoksa URL'e göre işaretle (opsiyonel)
  var path = (window.location.pathname || "").split("/").pop();
  if (!path) path = "index.html";

  var links = document.querySelectorAll(".site-nav a");
  for (var i = 0; i < links.length; i++) {
    var href = links[i].getAttribute("href");
    if (href === path) links[i].classList.add("active");
  }
})();