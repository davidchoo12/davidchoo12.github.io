$( document ).ready(function() {
  /****************************START LOGO ANIMATION****************************/
  /*
  skrollr syntax: data-a-b = when element's b is at viewport's a
  example: data-top-bottom = when element's bottom is at viewport's top
  */
  $("#logoAnim").height(window.innerHeight * 9);
  $("#logoAnim").attr("data--1-top", "opacity: 1; visibility: visible;");
  $("#logoAnim").attr("data-1000-bottom", "opacity: 1; visibility: visible;");
  $("#logoAnim").attr("data-top-bottom", "opacity: 0; visibility: hidden;");
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
  /****************************START LOGO ANIMATION****************************/
  /****************************START CURTAIN EFFECT****************************/
  //textillate for welcome texts list
  $('.tlt').attr("data-300-bottom", "opacity:1");
  $('.tlt').attr("data-bottom", "opacity:0");
  $('.tlt').attr("data-anchor-target", "#curtain")
  function startTextillate() {
   $('.tlt').textillate({
       loop: true,
       minDisplayTime: 2000,
       initialDelay: 0,
       in: {
           delayScale: 2,
           delay: 50,
           sync: true,
           shuffle: false
       },
       out: {
           delayScale: 2,
           delay: 50,
           sync: true,
           shuffle: false
       },
       autoStart: true
    });
  }
  //end textillate
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
  //skrollr for curtain effect
  var slidingDist = parseInt($(".splitting").css('width')) + dist;
  $("#curtain").height(window.innerHeight * 3);
  $('#curtain').attr('data-top-top','opacity: 1');
  $('#curtain').attr('data-top-bottom','opacity: 0');
  $(".splitting:nth-of-type(even)").attr("data-0p-top", "transform: translateX(0px)"); //scrollTo(0,window.innerHeight*10)
  $(".splitting:nth-of-type(even)").attr("data-top-bottom", "transform: translateX("+slidingDist+"px)");
  $(".splitting:nth-of-type(even)").attr("data-anchor-target", "#curtain");
  $(".splitting:nth-of-type(odd)").attr("data-0p-top", "transform: translateX(0px)");
  $(".splitting:nth-of-type(odd)").attr("data-top-bottom", "transform: translateX(-"+slidingDist+"px)");
  $(".splitting:nth-of-type(odd)").attr("data-anchor-target", "#curtain");
  //end skrollr for curtain effect
  /**************************************END CURTAIN EFFECT**************************************/
  /************************************START FADE IN FACE BG AND P*******************************/
  $('#welcome div').attr("data-top-top", "transform: translate(0vw, 0vh); opacity: 0;");
  $('#welcome div').attr("data-1280-bottom", "transform: translate(10vw, 0vh); opacity: 1;");
  $('#welcome div').attr("data-640-bottom", "transform: translate(10vw, 0vh); opacity: 1;");
  $('#welcome div').attr("data-0-bottom", "transform: translate(10vw, -10vh); opacity: 0;");
  $('#welcome div').attr("data-anchor-target", "#face-bg");
  $('#faceimg').attr("data-top-top", "transform: translate(0vw, 0vh); opacity: 0;");
  $('#faceimg').attr("data-1280-bottom", "transform: translate(-10vw, 0vh); opacity: 1;");
  $('#faceimg').attr("data-640-bottom", "transform: translate(-10vw, 0vh); opacity: 1;");
  $('#faceimg').attr("data-0-bottom", "transform: translate(-10vw, -10vh); opacity: 0;");
  $('#faceimg').attr("data-anchor-target", "#face-bg");
  /************************************END FADE IN FACE BG AND P*********************************/
  /***********************************START SKROLLR INIT SETTINGS********************************/
  var currNavBar = $('.nav-mobile').css('display')=='none'?$('.nav'):$('.nav-mobile');
  var textillateStarted = false;
  var navBarShown = false;
  var skr = skrollr.init({
    //before rendering any frames do the following
    beforerender: function(data) {
      currNavBar = $('.nav-mobile').css('display')=='none'?$('.nav'):$('.nav-mobile');
      //checks whether logoAnim has started to fade out
      if($('#logoAnim').css('opacity')<1) {
        if(!textillateStarted) {
          textillateStarted = true;
          //starts textillate only when logoAnim starts fading out, to show the word welcome before any others
          startTextillate();
        }
        //toggles colouring of navigation bar
        if(!navBarShown) {
          currNavBar.addClass('colorFadeIn');
          currNavBar.removeClass('colorFadeOut');
          navBarShown = true;
        }
      //if logoAnim is still animating and hasnt start fading out and navigation bar is coloured
      } else if(navBarShown) {
        currNavBar.addClass('colorFadeOut');
        currNavBar.removeClass('colorFadeIn');
        navBarShown = false;
      }
      //expands progressbar according to position of viewPort on document (data.curTop and data.maxTop is from skrollr)
      $('#progressBar').css('width', ''+ data.curTop/data.maxTop*parseInt($('body').css('width')) + 'px');
    }
   });
/***********************************END SKROLLR INIT SETTINGS***********************************/
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
  //window resizing event handler
  window.onresize=function() {
    //in case user expands window width from mobile to desktop
    if(window.innerWidth > 768) {
      //in case side navigation was active when resizing, remove the following classes
      $('.nav').removeClass('nav-active');
      $('.mask').removeClass('mask-visible');
    }

    //determines whether should the navigation bar be colourised
    //if the logo has started fading out
    if($('#logoAnim').css('opacity')<1)
    {
      currNavBar.addClass('colorFadeIn');
      currNavBar.removeClass('colorFadeOut');
    }
    //if the logo has not start fading out
    else if($('#logoAnim').css('opacity')==1)
    {
      currNavBar.addClass('colorFadeOut');
      currNavBar.removeClass('colorFadeIn');
    }
  };
});

