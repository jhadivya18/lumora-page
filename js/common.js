$(document).ready(function () {
  if ($(window).width() > 1600) {
    $(".menu").css("width", "137px");
    $(".menu").addClass("menushow");
  } else {
    $(".menu").css("width", "105px");
    $(".menu").addClass("menushow");
  }

  $(window).on("resize", function () {
    if ($(window).width() > 1600) {
      $(".menu").css("width", "137px");
      $(".menu").addClass("menushow");
    } else {
      $(".menu").css("width", "105px");
      $(".menu").addClass("menushow");
    }
  });

  $("#menusbox").click(function () {
    $(".menubox").toggle();
  });

  $(".crossm").click(function () {
    $(".menubox").toggle();
  });

  $("video").prop("muted", true);
  $(".playblack,.playwhite").click(function () {
    if ($("video").prop("muted")) {
      $("video").prop("muted", false);
      $(".playblack").toggleClass("hideunmute");
      $(".playwhite").toggleClass("showmute");
    } else {
      $("video").prop("muted", true);
      $(".playblack").toggleClass("hideunmute");
      $(".playwhite").toggleClass("showmute");
    }
  });

  if ($(window).width() > 1025) {
    $(".estatetabs2 .carousel-control-prev").css(
      "left",
      $(".estatetabs2 .carousel-inner").width() -
        $(".estatetabs2 .carousel-item  img").width()
    );
  }

  $(window).on("resize", function () {
    if ($(window).width() > 1025) {
      $(".estatetabs2 .carousel-control-prev").css(
        "left",
        $(".estatetabs2 .carousel-inner").width() -
          $(".estatetabs2 .carousel-item  img").width()
      );
    }
  });
});

$(window).on("load", function () {
  if ($(window).width() > 1025) {
    $(".estatetabs2 .carousel-control-prev").css(
      "left",
      $(".estatetabs2 .carousel-inner").width() -
        $(".estatetabs2 .carousel-item  img").width()
    );
  }

  if ($(window).width() < 767) {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $(".fixmenu").outerHeight();

    $(window).scroll(function (event) {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        hasScrolled();
        didScroll = false;
      }
    }, 250);

    // function hasScrolled() {
    //   var st = $(this).scrollTop();

    //   // Make sure they scroll more than delta
    //   if (Math.abs(lastScrollTop - st) <= delta) return;

    //   // If they scrolled down and are past the navbar, add class .nav-up.
    //   // This is necessary so you never see what is "behind" the navbar.
    //   if (st > lastScrollTop && st > navbarHeight) {
    //     // Scroll Down
    //     $(".fixmenu").removeClass("nav-down").addClass("nav-up");
    //   } else {
    //     if (st < navbarHeight) {
    //       if (st === 0 || st < 50) {
    //         $(".fixmenu").css("position", "absolute");
    //       }
    //     } else {
    //       $(".fixmenu").css("position", "fixed");
    //     }
    //     // Scroll Up
    //     if (st + $(window).height() < $(document).height()) {
    //       $(".fixmenu").removeClass("nav-up").addClass("nav-down");
    //     }
    //     if ($(this).scrollTop() < 10) {
    //       $(".fixmenu").removeClass("nav-down");
    //       $(".fixmenu").css("position", "absolute");
    //     }
    //   }

    //   lastScrollTop = st;
    // }
  }
});
