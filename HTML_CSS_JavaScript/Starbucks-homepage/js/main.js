console.log('starbucks main.js파일');

// const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('input');

// // class가 search로 박스를 클릭했을 경우 이벤트 등록
// searchEl.addEventListener('click', function() {
//   // searchInputEl에서 포커스 이벤트 발생
//   searchInputEl.focus();
// });

// searchInputEl.addEventListener('focus',function(){
//   searchInputEl.setAttribute('placeholder', '통합검색');
// });

// // 블러상태일 경우 글자 초기화
// searchInputEl.addEventListener('blur',function(){
//   searchInputEl.setAttribute('placeholder', '');
// });

// // const serchIcon = document.querySelector('header .inner .sub-menu .search span');
// // serchBlurEl.addEventListener('blur', function(){
// //   serchIcon.classList.add('blur');
// // })

// // tag가 input박스인 것에 focus 이벤트 등록
// searchInputEl.addEventListener('focus', function() {
//     searchEl.classList.add('focused');
//     searchInputEl.setAttribute('placeholder', '통합검색');
// });

// // tag가 input박스인 것에 blur 이벤트 등록
// searchInputEl.addEventListener('blur', function() {
//     searchEl.classList.remove('focused');
//     searchInputEl.setAttribute('placeholder', '');
// }); 

// jquery js-----------------------------------------
// const searchEl = $('.search');
// const searchInputEl = $('input');
$(".search").on("click", function(event){
  $('input').focus();
});
$('input').on("focus", function(event){
  $('input').attr('placeholder', '통합검색')
});
$('input').on("blur", function(event){
  $('input').attr('placeholder', '')
});


/*
  gsap사용법
  gsap.to(요소, 지속시간, 옵션);
  ex) gsap.to('.to-top', 0.7, {opacity : 0});
*/

const badgeEl = document.querySelector('header .badges');
const selectToTop = document.querySelector('.to-top');
// const selectToTop = document.querySelector('header .to-top');
// const selectToTop2 = document.querySelector('header .to-top .material-symbols-outlined');
window.addEventListener('scroll', _.throttle(() => {
  console.log('scrollY: ', window.scrollY);

  if(window.scrollY > 500){
    // badgeEl.style.display = 'none';
    gsap.to(badgeEl, 0.4, {opacity : 0, display: 'none'});
    gsap.to(selectToTop,{duration: .2, x:0});
    // sliding(selectToTop, -40, 10, 1);
  }else{
    gsap.to(badgeEl, 0.2, {opacity : 1,  display: 'block'});
    gsap.to(selectToTop,{duration: .2, x:100});
    // sliding(selectToTop, 10, -40, 1);
  }
}, 500));

selectToTop.addEventListener('click', function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// function sliding(selector, fromX, toX, time){
//   gsap.fromTo(selector, {y: fromX}, {duration: time, toX});
// };

const fadeEls = document.querySelectorAll('.visual1 .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {delay : (index + 1)*0.7, opacity:1})
});


// new Swiper(선택자, 옵션) //초기화
// swiper 라이브러리 초기화
const swiperNotice = new Swiper('.notice-line .swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  autoplay: {delay:2000, dsableonInteraction : false}
});

const swiperPromotion = new Swiper('.promotion .swiper-container', {
  // Optional parameters
  // direction: 'horizeontal'
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  loop: true,
  // autoplay: {
  //   delay:3000
  // }
  pagination:{
    el:'.promotion .swiper-pagination',
    clickable: true,
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  },
});

// promotion click
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(e){
  isHidePromotion = !isHidePromotion
  if(isHidePromotion){
    //숨기기
    promotionEl.classList.add('hide');
  }else{
    //보이기
    promotionEl.classList.remove('hide');
  }
})

// youtube floating image
function floatingObject(selector, delay, size){
  gsap.to(selector, delay, {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay),
  });
}
// floatingObject('.floating');
floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 1.5, 15);
floatingObject('.floating3', 1.5, 20);

function random(min, max) {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

const awardsPromotion = new Swiper('.awards .swiper-container', {
  // Optional parameters
  // direction: 'horizeontal'
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: true,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  },
});

const thisyear = document.querySelector('.this-year');
thisyear.textContent = new Date().getFullYear();



// const badgeEl = document.querySelector('header .badges');
// window.addEventListener('scroll', _.throttle(() => {
//   console.log('scrollY: ', window.scrollY);

//   if(window.scrollY > 500){
//     // badgeEl.style.display = 'none';
//     gsap.to(badgeEl, 0.4, {opacity : 0, display: 'none'});
//   }else{
//     gsap.to(badgeEl, 0.2, {opacity : 1,  display: 'block'});
//   }
// }, 500));
