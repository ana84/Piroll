$(document).ready(function() {
  $(".load-more").click(function() {
    $(".work-wrap-load").slideToggle();
    $(".work-wrap-load").css("display", "flex");
  });

  $(".js-burger-btn").click(function() {
    $(this).toggleClass("active-btn");
    $(".js-menu").slideToggle();
  });

  //Slick
  $(".testimonials-wrap").slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: false,
    autoplay: true
  });

  //Input
  $("input").focus(function() {
    $(this).css("background-color", "#cccccc");
  });
  $("input").blur(function() {
    $(this).css("background-color", "#ffffff");
  });
  $("textarea").focus(function() {
    $(this).css("background-color", "#cccccc");
  });
  $("textarea").blur(function() {
    $(this).css("background-color", "#ffffff");
  });

  //Video
  const myVideo = $(".myVideo").get(0);
  const videoAttr = $(".circle").data("video");
  $(".circle").click(function() {
    if ($(".circle").data("video") === videoAttr) {
      myVideo.play();
      $(".fa-play").hide();
      $(".fa-pause").show();
      $(this).data("video", "");
    } else {
      myVideo.pause();
      $(".fa-play").show();
      $(".fa-pause").hide();
      $(this).data("video", videoAttr);
    }
  });
});
