// бургер меню
document.querySelector('.nav-icon-wrapper').onclick = function() {
  document.querySelector('.nav').classList.toggle('nav--mobile');
  document.querySelector('.nav-icon').classList.toggle('nav-icon-active');
  
}

// карусель слайдов
$('#owl2').owlCarousel({
  loop: true,
  startPosition: 1,
  margin: 30,
  nav: true,
  center: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 2
    },
    800: {
      margin: 20
    },
    1000: {
      items: 3
    }
  }
});
