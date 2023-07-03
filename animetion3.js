var sectionsAnimation3 = document.querySelectorAll('.animation3');
var animationStartedAnimation3 = [];

function checkSectionsAnimation3() {
  sectionsAnimation3.forEach(function(section, index) {
    var sectionTop = section.getBoundingClientRect().top;
    var sectionBottom = section.getBoundingClientRect().bottom;
    var windowHeight = window.innerHeight;

    var isCenterVisible = sectionTop < windowHeight / 2 && sectionBottom >= windowHeight / 2;
    var isAnimating = section.classList.contains('active');

    if (isCenterVisible && !isAnimating && !animationStartedAnimation3[index]) {
      section.classList.add('active');
      animationStartedAnimation3[index] = true;
    } 
  });
}

window.addEventListener('scroll', checkSectionsAnimation3);

