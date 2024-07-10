// const firstSlide = document.querySelector('#glideOne')
// if(firstSlide){
//     new Glide(firstSlide, {
//         type: 'carousel',
//         startAt: 0,
//         autoplay: 3000,
//         gap: 0,
//         hoverpause: true,
//         perView: 1,
//         animationDuration: 800,
//         AnimationTimingFunc: 'linear',
//     }).mount();
// }

// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal',
//     loop: true,
//     effect: 'cards',
//     allowTouchMove: true,
//    init: true,
//    autoplay: true,
   
//    perView: 2,
//    slidesPerView: 1.1,
   

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  // });
   

  const firstSlide=document.querySelector('#glide1');
  if (firstSlide){
    new Glide(firstSlide, {
      type: 'carousel',
      startAt: 0,
      autoplay: 4000,
      gap: 0,
      hoverpause: true,
      perview: 1,
      animationDuration: 800,
      AnimationTimingFunc: 'linear',
      loop: true,
    }).mount();
  }