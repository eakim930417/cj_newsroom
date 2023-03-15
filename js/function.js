
let swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  loop: true,

  autoplay:{
    delay:3200,
  },
  
    slidesPerView: 1,
    spaceBetween: 30,
    
    breakpoints: {
      640 : {
        slidesPerView: 3,
        spaceBetween: 30
      }
    },


  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});


$(function(){
  
  const arrTopVal = [];
  const $tit = $('header>h1>a');
  const $menu = $('header>nav>.gnb>li>a');
  const $btnGnb = $('.btn-gnb');
  const $gnb = $('nav')
  const aside = $('aside');

  $('section').each(function(idx){
    arrTopVal[idx] = $(this).offset().top;
  });

  // //윈도우 리사이즈 arrTopVal 재정의
  $(window).on('resize', function(){
    $('section').each(function(idx){
      arrTopVal[idx] = $(this).offset().top;
    });

    if(window.innerWidth>640){
      $gnb.show();
    }else{
      $gnb.hide();
      $btnGnb.removeClass('open');
    }
  });

  
  $menu.on('click', function(evt){
    evt.preventDefault();
    let nowIdx = $menu.index(this);
    $('html,body').animate({scrollTop:arrTopVal[nowIdx]});

    if(window.innerWidth<640){
      $btnGnb.trigger('click');
    }
  });

  $(window).on({
    scroll : function(){
      const scrollTop = Math.ceil($(window).scrollTop());
          if(scrollTop > 400){
        aside.fadeIn();
      }else{
        aside.fadeOut();
      }

      if(window.innerWidth>640){
        if(scrollTop>200){
          $gnb.addClass('fixed');
        }else{
          $gnb.removeClass('fixed');
        }
      }else{
        $gnb.removeClass('fixed');
      }

    }
  });

  $('.top').on('click', function(evt){
    evt.preventDefault();
    $('html, body').animate({scrollTop:0});
  });

  $tit.on('click', function(evt){
    evt.preventDefault();
    $('html,body').animate({scrollTop:0});
  });

  $btnGnb.on('click', function(){
    $(this).toggleClass('open');
    $gnb.slideToggle();
  });







});