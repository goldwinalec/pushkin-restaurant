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

  $(function() {
    $("ul.tabs__caption").on("click", "li:not(.active)", function() {
      $(this)
        .addClass("active")
        .siblings()
        .removeClass("active")
        .closest("div.tabs")
        .find("div.tabs__content")
        .removeClass("active")
        .eq($(this).index())
        .addClass("active");
    });
  });
