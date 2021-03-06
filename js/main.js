$(function () {
  $(".header__slider").slick({
    infinity: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
    asNavFor: ".slider-dotshead",
  });

  $(".slider-dotshead").slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: ".header__slider",
    responsive: [
      {
        breakpoint: 961,
        settings: "unslick",
      },
    ],
  });

  $(".surf-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
    asNavFor: ".slider-map",
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  });

  $(".slider-map").slick({
    slidesToShow: 8,
    slideToScroll: 1,
    arrows: false,
    asNavFor: ".surf-slider",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1103,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  });

  $(".holder__slider, .shop__slider").slick({
    infinity: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="" />',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="" />',
  });
  $(
    '<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/plus.svg" alt="" /></div><div class="quantity-button quantity-down"><img src="img/minus.svg" alt="" /></div></div>'
  ).insertAfter(".quantity input");
  $(".quantity").each(function () {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find(".quantity-up"),
      btnDown = spinner.find(".quantity-down"),
      min = input.attr("min"),
      max = input.attr("max");

    btnUp.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });
  });

  $(".quantity-button").on("click", function () {
    let summ =
      $(".nights").val() * $(".summ").data("nights") +
      ($(".quests").val() - 1) * $(".summ").data("quests");
    $(".summ").html("$" + summ);
  });

  let summ =
    $(".nights").val() * $(".summ").data("nights") +
    ($(".quests").val() - 1) * $(".summ").data("quests");
  $(".summ").html("$" + summ);

  $(".surfboard-box__circle").on("click", function () {
    $(this).toggleClass("active");
  });

  $(".menu-btn").on("click", function () {
    $(".menu").toggleClass("active");
  });

  //------------Анимация bounce для ссылок меню
  $(".menu__link-img").mouseover(function () {
    $(this).addClass("wow animate__animated animate__bounce");
  });
  $(".menu__link-img").mouseout(function () {
    $(this).removeClass("wow animate__animated animate__bounce");
  });
  //---------------------------------------------------
  //------------Анимация fadeIn для характеристик борда
  $(".surfboard-box__circle").on("click", function () {
    $(".surfboard-box__content").removeClass(
      "animate__animated animate__fadeIn"
    );
    $(".surfboard-box__content").addClass("animate__animated animate__fadeIn");
  });
  //--------------------------------------
  //------------Плавная прокрутка по якорю
  let anchors = document.querySelectorAll(".menu__link");
  console.log(anchors);

  for (anchor of anchors) {
    if (anchor) {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const anchorId = this.getAttribute("href");
        console.log(anchorId);
        document.querySelector(anchorId).scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    }
  }
  // ----------------------------------------

  new WOW().init();
});
