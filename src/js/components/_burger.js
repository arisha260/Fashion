const burger = document.querySelector('.header__burger');
const list = document.querySelector('.nav');
const hero = document.querySelector('.hero');


burger.addEventListener('click', function () {
  burger.classList.toggle('active-burger');
  list.classList.toggle('active-nav');
  hero.classList.toggle('active-hero');
  document.body.classList.toggle('body-hiden')
})
