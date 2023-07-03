var sections = document.querySelectorAll('.animation2');
var animationStarted = [];

function checkSections() {
  sections.forEach(function(section, index) {
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;

    var isHalfVisible = sectionTop < windowHeight / 2 && sectionBottom >= windowHeight / 2;
    var isAnimating = section.classList.contains('active');

    if (isHalfVisible && !isAnimating && !animationStarted[index]) {
      section.classList.add('active');
      animationStarted[index] = true;
    } 
  });
}

window.addEventListener('scroll', checkSections);

