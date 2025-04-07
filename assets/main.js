document.addEventListener("DOMContentLoaded", () => {
  // ✅ Set active nav link
  document.querySelectorAll(".nav_link").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll(".nav_link").forEach((el) => el.classList.remove("active"));
      this.classList.add("active");
    });
  });

  // ✅ Update year dynamically
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ✅ Handle sidebar toggle safely
  const hamBurg = document.querySelector(".hamburg");
  const sidebar = document.querySelector(".sidebar");
  const closeBtn = document.querySelector(".close_bar");

  if (hamBurg && sidebar && closeBtn) {
    [hamBurg, closeBtn].forEach((btn) =>
      btn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
        hamBurg.classList.toggle("close");
      })
    );
  }
});

// ✅ Preloader and typing effect (runs on full page load)
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  const bannerText = document.querySelector(".banner_text");

  if ( !preloader || !bannerText) return;

  // Hide preloader and show banner after a short delay
  setTimeout(() => {
    preloader.style.display = "none";
    bannerText.classList.add("opacity-100", "scale-100");
  }, 300);
});
