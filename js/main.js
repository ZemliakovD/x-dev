  $('.partfolio-slider').slick({
    prevArrow: '<button type="button" class="prev-button"><i class="fa-solid fa-angle-left fa-beat" style="color: #2EECC5;"></i></button>',
    nextArrow: '<button type="button" class="next-button"><i class="fa-solid fa-angle-right fa-beat" style="color: #2EECC5;"></i></button>',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 370,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          slidesToShow: 3,
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
        breakpoint: 769,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 481,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 371,
        settings: {
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1
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

   $("#me-order").click(function() { // ID откуда кливаем
    $('html, body').animate({
    scrollTop: $(".order-info").offset().top // класс объекта к которому приезжаем
    }, 1000); // Скорость прокрутки
   });