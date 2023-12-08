document.addEventListener('DOMContentLoaded', function () {
    var banner = document.querySelector('#announcement');
    var closeBanner = document.querySelector('#close');
  
    var checkToday = new Date().getDay();
  
    if (checkToday >= 1 && checkToday <= 3) {
      banner.classList.add('visible');
    } else {
      banner.classList.remove('visible');
    }
  
    closeBanner.addEventListener('click', function () {
      banner.classList.remove('visible');
    });
  });