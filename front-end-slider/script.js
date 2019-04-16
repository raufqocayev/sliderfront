(() => {
  const el = selector => document.querySelector(selector)

  const sliderIntervalTime = 5000
  let sliderInterval
  let sliderImageIndex = 0

  const sliderImages = el('.slider-images')
  const sliderPrevButton = el('.slider-icon.prev')
  const sliderNextButton = el('.slider-icon.next')
  const imagesCount = sliderImages.children.length

  function slideToNextImage() {
    sliderImageIndex = sliderImageIndex + 1 === imagesCount ? 0 : sliderImageIndex + 1
    slideToImage()
  }
  
  function slideToPrevImage() {
    sliderImageIndex = sliderImageIndex ? sliderImageIndex - 1 : imagesCount - 1
    slideToImage()
  }

  function slideToImage() { 
    sliderImages.style.transitionDuration = sliderImageIndex ? '1s' : '.5s'
    sliderImages.style.transform = `translateX(-${sliderImageIndex}00vw)`
  }

  function resetInterval() {
    clearInterval(sliderInterval)
    sliderInterval = setInterval(slideToNextImage, sliderIntervalTime);
  }

  sliderPrevButton.onclick = () => {
    resetInterval()
    slideToPrevImage()
  }
  sliderNextButton.onclick = () => {
    resetInterval()
    slideToNextImage()
  }

  sliderInterval = setInterval(slideToNextImage, sliderIntervalTime);
})()
