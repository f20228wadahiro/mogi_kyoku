var sectionsAnimation1 = document.querySelectorAll('.animation1');
var animationStartedAnimation1 = [];

function checkSectionsAnimation1() {
  sectionsAnimation1.forEach(function(section, index) {
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;

    var isHalfVisible = sectionTop < windowHeight / 2 && sectionBottom >= windowHeight / 2;
    var isAnimating = section.classList.contains('active');

    if (isHalfVisible && !isAnimating && !animationStartedAnimation1[index]) {
      section.classList.add('active');
      animationStartedAnimation1[index] = true;
    } 
  });
}

window.addEventListener('scroll', checkSectionsAnimation1);
