//  instructions disappear
const instructions = document.getElementById("instructions");

document.addEventListener("click", function() {
  instructions.style.display = "none";
});


//  cloud

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const fogElement = document.querySelector('.fog');
    fogElement.style.left = -scrollPosition + 'px';
  });

//  blink text

const blinkDivs = document.querySelectorAll('.blink-div');
blinkDivs.forEach(function(blinkDiv) {
  setInterval(function() {
    blinkDiv.style.opacity = Math.random() * 0.8 + 0.1;
  }, 100);
});

//  disable mouse scroll
document.addEventListener('wheel', function(event) {
    event.preventDefault();
  }, { passive: false });


//  scrollbutton

const scrollUpButton = document.getElementById('scroll-up-button');
const scrollDownButton = document.getElementById('scroll-down-button');

scrollUpButton.addEventListener('click', function() {
  window.scrollBy({
    top: -window.innerHeight / 3,
    behavior: 'smooth'
  });
});

scrollDownButton.addEventListener('click', function() {
  window.scrollBy({
    top: window.innerHeight / 3,
    behavior: 'smooth'
  });
});

//  bg scroll gradient
const container = document.querySelector('.bg');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const newPosition = scrollTop * 0.5;

    container.style.backgroundPositionY = `-${newPosition}px`;
});

//  bg noise
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width;
const height = canvas.height;

function drawNoise() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < 1000; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const size = Math.random() * 2;
        ctx.fillStyle = '#000';
        ctx.fillRect(x, y, size, size);
    }

    requestAnimationFrame(drawNoise);
}

drawNoise();
