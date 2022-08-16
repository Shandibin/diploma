// слайдер
const swiper =  new Swiper('.swiper-container', {
    slidesPerView: '1',
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    slidesPerView: 1.9,
    slidesPerGroup: 1,
    centeredSlides: true,
    autoplay: true,
    interval: 700,
  }); 
  
  // меню
  const btnMenu = document.querySelector('.btn-menu');
  btnMenu.addEventListener("click", () => {
    document.querySelector('.header').classList.toggle('open');
  })