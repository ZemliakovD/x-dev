  $('.partfolio-slider').slick({
    prevArrow: '<button type="button" class="prev-button"><i class="fa-solid fa-angle-left fa-beat" style="color: #2EECC5;"></i></button>',
    nextArrow: '<button type="button" class="next-button"><i class="fa-solid fa-angle-right fa-beat" style="color: #2EECC5;"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.rates-slider').slick({
    prevArrow: '<button type="button" class="prev-button"><i class="fa-solid fa-angle-left fa-beat" style="color: #2EECC5;"></i></button>',
    nextArrow: '<button type="button" class="next-button"><i class="fa-solid fa-angle-right fa-beat" style="color: #2EECC5;"></i></button>',
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  $("#main").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".main-content").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });

   $("#reasons").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".reasons-inner").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });

   $("#contacts").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".footer").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });