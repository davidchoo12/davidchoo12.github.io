$( document ).ready(function() {
  //smooth scrolling
  ssc_init();
  /****************************START LOGO ANIMATION********************************/
  $("#logoAnim").height(window.innerHeight * 9);
  $("#logoAnim").attr("data--1-top", "opacity: 1; visibility: visible;");
  $("#logoAnim").attr("data-1000-bottom", "opacity: 1; visibility: visible;"); //scrollTo(0,window.innerHeight*8-200)
  $("#logoAnim").attr("data-top-bottom", "opacity: 0; visibility: hidden;"); //scrollTo(0,window.innerHeight*8-1000)
  var animBP1 = 1200;
  var animBP2 = 3600;
  $("#D").attr("data--1-top", "transform:translate(-73px, -60px)");
  $("#D").attr("data--"+animBP1+"-top", "transform:translate(-73px, -102px)");
  $("#D").attr("data--"+animBP2+"-top", "transform:translate(36px, -102px)");
  $("#D").attr("data-anchor-target", "#logoAnim");
  $("#coverTop").attr("data--"+animBP1+"-top", "transform:translate(-67px, -117.4px)");
  $("#coverTop").attr("data--"+animBP2+"-top", "transform:translate(42px, -117.4px)");
  $("#coverTop").attr("data-anchor-target", "#logoAnim");
  $("#davi").attr("data--"+animBP1+"-top", "transform:translate(-60px, -102px)");
  $("#davi").attr("data--"+animBP2+"-top", "transform:translate(-222px, -102px)");
  $("#davi").attr("data-anchor-target", "#logoAnim");
  $("#C").attr("data--1-top", "transform:translate(6px, -60px)");
  $("#C").attr("data--"+animBP1+"-top", "transform:translate(6px, -18.2px)");
  $("#C").attr("data--"+animBP2+"-top", "transform:translate(-68px, -18.2px)");
  $("#C").attr("data-anchor-target", "#logoAnim");
  var cbtranslateX = 62 -  parseInt($("#coverBottom").css('width'));
  $("#coverBottom").attr("data--"+animBP1+"-top", "transform:translate("+cbtranslateX+"px, 2px)");
  $("#coverBottom").attr("data--"+animBP2+"-top", "transform:translate("+(cbtranslateX-74)+"px, 2px)");
  $("#coverBottom").attr("data-anchor-target", "#logoAnim");
  $("#hoo").attr("data--"+animBP1+"-top", "transform:translate(-154px, -18.2px)");
  $("#hoo").attr("data--"+animBP2+"-top", "transform:translate(1.5px, -18.2px)");
  $("#hoo").attr("data-anchor-target", "#logoAnim");
  /****************************START LOGO ANIMATION*******************************/
  /****************************START CURTAIN EFFECT*******************************/
  //start textillate section
  $('.tlt').attr("data-300-bottom", "opacity:1");
  $('.tlt').attr("data-bottom", "opacity:0");
  $('.tlt').attr("data-anchor-target", "#curtain")
  function startTextillate() {
   $('.tlt').textillate({
       loop: true,
       minDisplayTime: 2000,
       initialDelay: 0,
       in: {
           // effect: 'fadeInUp',
           delayScale: 2,
           delay: 50,
           sync: true,
           shuffle: false
       },
       out: {
           // effect: 'fadeOutUp',
           delayScale: 2,
           delay: 50,
           sync: true,
           shuffle: false
       },
       autoStart: true
    });
  }
   //end textillate section
   //variables for curtain effect
   var offset = 150;
   var colours = [ "#707070", "#555555", "#363636", "black"];
   var slideCount = colours.length;
   var dist = offset * (slideCount - 1);
   var tempDist = dist;
   //styles for right splitting divs
   $(".splitting:nth-of-type(even)").each(function(index) {
    $(".splitting:nth-of-type(" + (index+1)*2 + ")").css({'background-color':colours[index],'right':tempDist+'px'});
    tempDist -= offset;
   });
   // reset tempDist
   tempDist = dist;
   //styles for left splitting divs
   $(".splitting:nth-of-type(odd)").each(function(index) {
    $(".splitting:nth-of-type(" + ((index+1)*2-1) + ")").css({'background-color':colours[index],'left':tempDist+'px'});
    tempDist -= offset;
   });
   //start skrollr section
   var slidingDist = parseInt($(".splitting").css('width')) + dist;
   $("#curtain").height(window.innerHeight * 3);
   $('#curtain').attr('data-bottom-top','opacity: 1');
   $('#curtain').attr('data-top-bottom','opacity: 0');
   $(".splitting:nth-of-type(even)").attr("data-0p-top", "transform: translateX(0px)"); //scrollTo(0,window.innerHeight*10)
   $(".splitting:nth-of-type(even)").attr("data-top-bottom", "transform: translateX("+slidingDist+"px)");
   $(".splitting:nth-of-type(even)").attr("data-anchor-target", "#curtain");
   $(".splitting:nth-of-type(odd)").attr("data-0p-top", "transform: translateX(0px)");
   $(".splitting:nth-of-type(odd)").attr("data-top-bottom", "transform: translateX(-"+slidingDist+"px)");
   $(".splitting:nth-of-type(odd)").attr("data-anchor-target", "#curtain");
   //end skrollr section
   /**************************************END CURTAIN EFFECT**************************************/
   /************************************START FADE IN FACE BG AND P***********************************/
   $('#face-bg div').attr("data-top-top", "transform: translate(0%, 0%); opacity: 0;");
   $('#face-bg div').attr("data-1280-bottom", "transform: translate(10%, 0%); opacity: 1;");
   $('#face-bg div').attr("data-0-bottom", "transform: translate(10%, -20%); opacity: 0.5;");
   $('#face-bg div').attr("data-anchor-target", "#face-bg");
   $('#faceimg').attr("data-top-top", "transform: translate(0%, 0%); opacity: 0;");
   $('#faceimg').attr("data-1280-bottom", "transform: translate(-10%, 0%); opacity: 1;");
   $('#faceimg').attr("data-0-bottom", "transform: translate(-10%, -20%); opacity: 0.5;");
   $('#faceimg').attr("data-anchor-target", "#face-bg");
   /************************************END FADE IN FACE BG AND P*******************************/
   var currNavBar = $('.nav-mobile').css('display')=='none'?$('.nav'):$('.nav-mobile');
   // alert(currNavBar.html());
   var textillateStarted = false;
   var navBarShown = false;
   skrollr.init({
    // smoothScrolling: true,
    // smoothScrollingDuration: 5000,
    render: function(data) {
      if($('#logoAnim').css('opacity')<1) {
        if(!textillateStarted) {
          textillateStarted = true;
          startTextillate();
        }
        if(!navBarShown) {
          currNavBar.addClass('colorFadeIn');
          currNavBar.removeClass('colorFadeOut');
          navBarShown = true;
        }
      } else if(navBarShown) {
          currNavBar.addClass('colorFadeOut');
          currNavBar.removeClass('colorFadeIn');
        navBarShown = false;
      }
      // console.log(''+ data.curTop/data.maxTop*parseInt($('body').css('width')) + 'px');
      $('#progressBar').css('width', ''+ data.curTop/data.maxTop*parseInt($('body').css('width')) + 'px');
    }
   });


//responsive navbar toggle

  // var mobile = document.createElement('div');
  // mobile.className = 'nav-mobile';
  // $(".nav").append("<div class='nav-mobile'></div>");

  // var mobileNav = document.querySelector('.nav-mobile');
  // var toggle = document.querySelector('.nav-list');
  $('.hamburger-button').click(function() {
    // $(this).toggleClass('nav-mobile-open');
    $('.nav').addClass('nav-active');
    $('.mask').addClass('mask-visible');
  });
  $('.mask').click(function() {
    if($('.nav').hasClass('nav-active')) {
      $('.nav').removeClass('nav-active');
      $('.mask').removeClass('mask-visible');
    }
  });
  //Click event to scroll to top
  $('#scrollUp').click(function(){
    $('html, body').animate({scrollTop : 0},2000);
    return false;
  });
  //Click event to scroll bottom
  $('#scrollDown').click(function(){
    $('html, body').animate({scrollTop : $(document).height()-$(window).innerHeight()},10000);
    return false;
  });
  // var originalWidth = window.innerWidth;
  function matrixToArray(matrix) {
    return matrix.substr(7, matrix.length - 8).split(', ');
  }
  //window resizing event handler
  window.onresize=function() {
   // var offset = 150;
   // var colours = [ "#707070", "#555555", "#363636", "black"];
   // var slideCount = colours.length;
   // // var dist = offset * (slideCount - 1);
   // tempDist = dist;
   // //styles for right splitting divs
   // $(".splitting:nth-of-type(even)").each(function(index) {
   //  $(".splitting:nth-of-type(" + (index+1)*2 + ")").css('right', tempDist+'px');
   //  tempDist -= offset;
   // });
   // // reset tempDist
   // tempDist = dist;
   // //styles for left splitting divs
   // $(".splitting:nth-of-type(odd)").each(function(index) {
   //  $(".splitting:nth-of-type(" + ((index+1)*2-1) + ")").css('left', tempDist+'px');
   //  tempDist -= offset;
   // });
    var originaltranslatex = parseInt(matrixToArray($(".splitting:nth-of-type(even)").css('-webkit-transform'))[4]);
    var newslidingDist = parseFloat($(".splitting").css('width')) + dist;
    // var widthDiff = newslidingDist - slidingDist;
   // $(".splitting:nth-of-type(even)").css({'-webkit-transform':'translateX('+(originaltranslatex + widthDiff)+'px)','transform':'translateX('+(originaltranslatex + widthDiff)+'px)'});
   // $(".splitting:nth-of-type(odd)").css({'-webkit-transform':'translateX(-'+(originaltranslatex + widthDiff)+'px)','transform':'translateX('+(originaltranslatex + widthDiff)+'px)'});
   $(".splitting:nth-of-type(even)").attr("data-0p-top", "transform: translateX(0px)");
    $(".splitting:nth-of-type(even)").attr("data-top-bottom", "transform: translateX("+newslidingDist+"px)");
   $(".splitting:nth-of-type(odd)").attr("data-0p-top", "transform: translateX(0px)");
    $(".splitting:nth-of-type(odd)").attr("data-top-bottom", "transform: translateX(-"+newslidingDist+"px)");
  };

  //append learn more buttons
  $('.box').append("<button class='lmBtn'>Learn More</button>");
});

