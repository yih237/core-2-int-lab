const moon = document.querySelector('.moon1');

window.addEventListener('scroll', function() {
  let scrollPosition = window.pageYOffset;
  moon.style.transform = `rotateY(${scrollPosition}deg)`;
});
