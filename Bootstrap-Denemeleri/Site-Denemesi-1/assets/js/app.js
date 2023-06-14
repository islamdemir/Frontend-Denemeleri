// References area
window.addEventListener("scroll", function () {
  var animatedSections = document.querySelectorAll(".animated-section");

  for (var i = 0; i < animatedSections.length; i++) {
    var section = animatedSections[i];
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;

    if (sectionTop < windowHeight && sectionBottom >= 0) {
      section.classList.add("active");
    }
  }
});

//third section second row animation

function animateValue(id, start, end, duration) {
  let current = start;
  const range = end - start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const element = document.getElementById(id);
  const timer = setInterval(function () {
    current += increment;
    element.textContent = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

window.addEventListener("load", function () {
  animateValue("projects", 0, 89, 2000); // Animates "Projects" from 0 to 89 in 2000ms
  animateValue("clients", 0, 89, 2000); // Animates "Happy Clients" from 0 to 89 in 2000ms
  animateValue("support", 0, 477, 2000); // Animates "Hours Of Support" from 0 to 477 in 2000ms
});
