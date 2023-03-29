// Gallery image hover
var imgWrappers = document.querySelectorAll('.img-wrapper');
for (var i = 0; i < imgWrappers.length; i++) {
imgWrappers[i].addEventListener('mouseover', function() {
var imgOverlay = this.querySelector('.img-overlay');
imgOverlay.style.opacity = 1;
imgOverlay.style.transition = 'opacity 600ms ease-in-out';
});
imgWrappers[i].addEventListener('mouseout', function() {
var imgOverlay = this.querySelector('.img-overlay');
imgOverlay.style.opacity = 0;
imgOverlay.style.transition = 'opacity 600ms ease-in-out';
});
}

// Lightbox
var overlay = document.createElement('div');
overlay.setAttribute('id', 'overlay');
var image = document.createElement('img');
var prevButton = document.createElement('div');
prevButton.setAttribute('id', 'prevButton');
prevButton.innerHTML = '<i class="fa fa-chevron-left"></i>';
var nextButton = document.createElement('div');
nextButton.setAttribute('id', 'nextButton');
nextButton.innerHTML = '<i class="fa fa-chevron-right"></i>';
var exitButton = document.createElement('div');
exitButton.setAttribute('id', 'exitButton');
exitButton.innerHTML = '<i class="fa fa-times"></i>';

// Add overlay
overlay.appendChild(image);
overlay.insertBefore(prevButton, overlay.firstChild);
overlay.appendChild(nextButton);
overlay.appendChild(exitButton);
document.getElementById('gallery').appendChild(overlay);

// Hide overlay on default
overlay.style.display = 'none';

// When an image is clicked
var imgOverlays = document.querySelectorAll('.img-overlay');
for (var j = 0; j < imgOverlays.length; j++) {
imgOverlays[j].addEventListener('click', function(event) {
// Prevents default behavior
event.preventDefault();
// Adds href attribute to variable
var imageLocation = this.previousElementSibling.getAttribute('href');
// Add the image src to image element
image.setAttribute('src', imageLocation);
// Fade in the overlay
overlay.style.display = 'block';
setTimeout(function() {
overlay.style.opacity = 1;
overlay.style.transition = 'opacity 500ms ease-in-out';
}, 50);
});
}

// When the overlay is clicked
overlay.addEventListener('click', function() {
// Fade out the overlay
overlay.style.opacity = 0;
overlay.style.transition = 'opacity 500ms ease-in-out';
setTimeout(function() {
overlay.style.display = 'none';
}, 500);
});

// When next button is clicked
nextButton.addEventListener('click', function(event) {
// Hide the current image
image.style.display = 'none';
// Overlay image location
var currentImgSrc = image.getAttribute('src');
// Image with matching location of the overlay image
var currentImg = document.querySelector('#image-gallery img[src="' + currentImgSrc + '"]');
// Finds the next image
var nextImg = currentImg.closest('.image').nextElementSibling.querySelector('img');
// All of the images in the gallery
var images = document.querySelectorAll('#image-gallery img');
// If there is a next image
if (nextImg !== null) {
// Fade in the next image
image.setAttribute('src', nextImg.getAttribute('src'));
image.style.display = 'block';
} else {
// Otherwise fade in the first image
image.setAttribute('src', images[0].getAttribute('src'));
image.style.display = 'block';
}
// Prevents overlay from being hidden
event.stopPropagation();
});

// When previous button is clicked
prevButton.addEventListener('click', function(event) {
    // Hide the current image
    image.style.display = 'none';
    // Overlay image location
    var currentImgSrc = image.getAttribute('src');
    // Image with matching location of the overlay image
    var currentImg = document.querySelector('#image-gallery img[src="' + currentImgSrc + '"]');
    // Finds the previous image
    var prevImg = currentImg.closest('.image').previousElementSibling.querySelector('img');
    // Fade in the previous image
    image.setAttribute('src', prevImg.getAttribute('src'));
    image.style.display = 'block';
    // Prevents overlay from being hidden
    event.stopPropagation();
    });
    
    // When the exit button is clicked
    exitButton.addEventListener('click', function() {
    // Fade out the overlay
    overlay.style.opacity = 0;
    overlay.style.transition = 'opacity 500ms ease-in-out';
    setTimeout(function() {
    overlay.style.display = 'none';
    }, 500);
    });
    
    
    
    


