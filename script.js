function scrollCarousel(direction) {
  const carousel = document.getElementById("carousel");
  const scrollAmount = 320;
  carousel.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth",
  });
}

// Auto scroll on mobile
function autoScrollCarousel() {
  const carousel = document.getElementById("carousel");
  if (window.innerWidth <= 768) {
    setInterval(() => {
      carousel.scrollBy({ left: 320, behavior: "smooth" });
    }, 4000);
  }
}
autoScrollCarousel();

// Hamburger menu toggle
function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("active");
}
