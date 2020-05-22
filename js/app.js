$(function () {
  //opning animation for the home page
  var tl = new TimelineMax();
  tl.to($('.home-content .content'), {duration: .8, y: 0, opacity: 1,  ease: "ease-in-out"})
    .to($('.content-img .img-1'), {duration: .8, x: 0, opacity: 1,  ease: "ease-in-out"})
    .to($('.content-img .img-2'), {duration: .7, x: 0, opacity: 1,  ease: "ease-in-out"}, '-=.7');

  //opning animation for the products page
  var tl2 = new TimelineMax();
  tl2.to($('.products-section h1, .products-section .filter'), {duration: .6, y: 0, opacity: 1,  ease: "ease-in-out", delay: 0.08})
     .to($('.products-section .products-container .product'), {duration: .6, y: 0, opacity: 1,  ease: "ease-in-out", stagger: .2});

  //opning for the contact page
  var tl3 = new TimelineMax();
  tl3.to($('.contact-section h1'), {duration: .8, y: 0, opacity: 1,  ease: "ease-in-out"})
     .to($('.contact-section .info-container .info'), {duration: .7, y: 0, opacity: 1,  ease: "ease-in-out", stagger: .2})
     .to($('.contact-section .contact-form'), {duration: .8, y: 0, opacity: 1,  ease: "ease-in-out"});

  //navbar toggle class
  let theNav = $('nav ul');
  $('nav .nav-btn').click(function () {
    $(theNav).addClass('show');
  });
  $('nav ul .close').click(function () {
    $(theNav).removeClass('show');
  });

  //pagination functoins
  let pagination = $('.pagination li');
  const addClass = function () {
    $(this).addClass('active').siblings().removeClass('active');;
  };
  const showSections = function () {
    $('.home-sections.show').removeClass('show');
    $($(this).data('show')).addClass('show');
  };

  //add the silide animation between the sections
  $('[data-show="#servises"]').click(function () {
    tl.from($('.service-img'), {duration: .8, opacity: 0, scale: '.1',rotate: '45deg', ease: 'ease-in-out'})
      .from($('.services-content'), {duration: .8, opacity: 0, y: '60%', ease: Expo.easeOut}, '-=.7')
      .from($('.services-content .box'), {duration: .7, opacity: 0, x: '100%', ease: "power3.inOut", stagger: .1}, '-=.7' );
  });
  $('[data-show="#home"]').click(function () {
    tl.from($('.home-content .content'), {duration: .8, y: '-50', opacity: 0,  ease: "ease-in-out"})
      .from($('.content-img .img-1'), {duration: .8, x: '70', opacity: 0,  ease: "ease-in-out"})
      .from($('.content-img .img-2'), {duration: .7, x: '-50', opacity: 0,  ease: "ease-in-out"}, '-=.7');
  });
  $('[data-show="#testim"]').click(function () {
    tl.from($('.testimonial .one'), {duration: .3, x: '-100%', opacity: 0,  ease: "power3.inOut"})
      .from($('.testimonial .two'), {duration: .3, x: '100%', opacity: 0,  ease: "power3.inOut"}, '-=.3')
      .from($('.testimonial .testim'), {duration: .7, y: '-50', opacity: 0,  ease: "power3.inOut"})
      .from($('.testimonial .sub-title, .testimonial form'), {duration: .8, x: '100%', opacity: 0,  ease: "ease-in-out"});
  });
  $('[data-show="#video"]').click(function () {
    tl.from($('.video .plant-bg1'), {duration: 1, x: '-100%', opacity: 0,  ease: "power3.inOut"})
      .from($('.video .plant-bg2'), {duration: 1, x: '100%', opacity: 0,  ease: "power3.inOut"}, '-=1')
      .from($('.video h1, .video .vedio-container'), {duration: .7, y: '-50', opacity: 0,  ease: "power3.inOut"});
  });
  //toggle class
  $(pagination).click(addClass);
  $(pagination).click(showSections);

  //about page filter links
  $('.products-section .filter li').click(addClass);

  //slide the Cart
  const cartOpen = $('nav .cart-i');
  const cartClose = $('.cart-section .cart-content .close-cart');
  const cart = $('.cart-section');
  $(cartOpen).click(function() {
    $(cart).addClass('show');
  });
  $(cartClose).click(function() {
    $(cart).removeClass('show');
  });

  //Call the nice scorll
  /*$("body").niceScroll({
    cursorcolor: "#d6fdf8",
    cursorwidth: "8px",
    cursorborder: "none",
    scrollspeed: 10
  });*/

});
