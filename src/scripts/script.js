$(".community__slider").slick({
  centerMode: true,
  infinite: true,
  centerPadding: "30px",
  speed: 500,
  variableWidth: true,
  prevArrow: `<button type='button' class='slick-prev pull-left'><i class="fa-solid fa-angle-left"></i></button>`,
  nextArrow: `<button type='button' class='slick-next pull-right'><i class="fa-solid fa-angle-right"></i></button>`,
});

$(".introduction__slider").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  centerMode: true,
  arrows: false,
  vertical: false,
  verticalSwiping: false,
  focusOnSelect: true,
  customPaging: function (slider, i) {
    return '<a class="single-dot">' + (i + 1) + "</a>";
  },
  responsive: [
    {
      breakpoint: 415,
      centerMode: false,
      focusOnSelect: false,
      speed: 500,
      fade: true,
      cssEase: "linear",
    },
  ],
});

$(".introduction--mobile").slick({
  dots: true,
  infinite: true,
  nextArrow: false,
  prevArrow: false,
  customPaging: function (slider, i) {
    return '<a class="dot--introduction" /> ';
  },
});

$(".list__member--mobile").slick({
  dots: true,
  infinite: true,
  nextArrow: false,
  prevArrow: false,
  customPaging: function (slider, i) {
    return '<a class="dot--team" /> ';
  },
});
