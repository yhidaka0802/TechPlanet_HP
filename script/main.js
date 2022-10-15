'use strict';

// ハンバーガーメニュー
$('.openbtn').click(function(){
  $(this).toggleClass('active');
  $('#g-nav').toggleClass('panelactive');
});

$('#g-nav a').click(function(){
  $('.openbtn').removeClass('active');
  $('#g-nav').removeClass('panelactive');
});

// slick
$('.slider').slick({
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: true,
  prevArrow: '<img src="/img/allow_l.png" class="slide-arrow prev-arrow">',
  nextArrow: '<img src="/img/allow_r.png" class="slide-arrow next-arrow">',
  responsive:[{
    breakpoint: 800,
    settings:{
      slidesToShow: 2
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 1
    }
  }]
});

// タブメニュー
$(function(){
  $('#contents div[id != "8week"]').hide();
  $('#normal a').click(function(){
    $("#contents div").hide();
    $($(this).attr("href")).fadeIn(600);
    $("#normal .current").removeClass("current");
    $($(this).parent()).addClass("current");
    return false;
  });
});

$(function(){
  $('#e-contents div[id != "e_8week"]').hide();
  $('#english a').click(function(){
    $("#e-contents div").hide();
    $($(this).attr("href")).fadeIn(600);
    $("#english .current").removeClass("current");
    $($(this).parent()).addClass("current");
    return false;
  });
});


// // フェードインアニメーション
// function fadeAnime(){

//   $('.fadeUpTrigger').each(function(){
//     var elemPos = $(this).offset().top + 100;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//       $(this).addClass('fadeUp');
//     } else {
//       $(this).removeClass('fadeUp');
//     }
//   });

//   $('.fadeRightTrigger').each(function(){
//     var elemPos = $(this).offset().top + 400;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//       $(this).addClass('fadeRight');
//     } else {
//       $(this).removeClass('fadeRight');
//     }
//   });
// }

// $(window).scroll(function(){
//   fadeAnime();
// });

// function blurAnime(){
//   $('.blurTrigger').each(function(){
//     var elemPos = $(this).offset().top - 50;
//     var scroll = $(window).scrollTop();
//     var windowHeight = $(window).height();
//     if (scroll >= elemPos - windowHeight){
//       $(this).addClass('blur');
//     } else {
//       $(this).removeClass('blur');
//     }
//   });
// }

// $(window).on('load',function(){
//   blurAnime();
// });


// // スムーススクロール
// $(function(){
//   $('a[href^="#"]').click(function(){
//     var href = $(this).attr("href");
//     var target = $(href == "#" || href == "" ? 'html' : href);
//     var position = target.offset().top - 50;
//     var speed = 500;
//     $("html, body").animate({
//       scrollTop: position
//     }, speed, "swing");
//     return false;
//   });
// });
