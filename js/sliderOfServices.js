var sliders = document.querySelectorAll('.services-item_container__slider');

sliders.forEach(sliderContainer => {
  runSlider(sliderContainer);
})


function runSlider(sliderContainer) {
    var slider = sliderContainer.querySelector('.slider')
  var imagesOfSlider = slider.children;
  var imagesOfSliderCounter = slider.childElementCount;
  var previousImage = sliderContainer.querySelector('.slider-previous');
  var nextImage = sliderContainer.querySelector('.slider-next');
  var count = 0;

  function showNextImage() {
      imagesOfSlider[count].classList.remove('active')
      if ( count < imagesOfSliderCounter - 1 ) {
          count++;
      } else {
          count = 0;
      }
      imagesOfSlider[count].classList.add('active');
  }

  function showPreviousImage() {
      imagesOfSlider[count].classList.remove('active');
      if ( count > 0 ) {
          count--;
      } else {
          count = imagesOfSliderCounter - 1;
      }
      imagesOfSlider[count].classList.add('active');
  }

  function keyPress(e) {
      e = e || window.event;

      if (e.keyCode == '37') {
          showPreviousImage();
      } else if (e.keyCode == '39') {
          showNextImage();
      }
    }

    previousImage.addEventListener('click', showPreviousImage);
    nextImage.addEventListener('click', showNextImage);

    document.addEventListener('keydown', keyPress);
    slider.addEventListener('click', showNextImage);
}