$(".top-btn").removeClass("visible");

$(window).scroll(function () {
  if ($(this).scrollTop() > 200) {
    $(".top-btn").addClass("visible");
  } else {
    $(".top-btn").removeClass("visible");
  }
});

$(".top-btn").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
