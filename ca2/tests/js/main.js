$( document ).ready(function() {
  /****************************START LOGO ANIMATION********************************/
  $("#logoAnim").height(window.innerHeight * 9);
  $("#logoAnim").attr("data-top-top", "opacity: 1");
  $("#logoAnim").attr("data-1000-bottom", "opacity: 1");
  $("#logoAnim").attr("data-200-bottom", "opacity: 0");
  var animBP1 = 1200;
  var animBP2 = 3600;
  $("#D").attr("data-top-top", "-webkit-transform:translate(-73px, -50%)");
  $("#D").attr("data--"+animBP1+"-top", "-webkit-transform:translate(-73px, -81%)");
  $("#D").attr("data--"+animBP2+"-top", "-webkit-transform:translate(36px, -81%)");
  $("#D").attr("data-anchor-target", "#logoAnim");
  $("#coverTop").attr("data--"+animBP1+"-top", "-webkit-transform:translate(-60px, -97%)");
  $("#coverTop").attr("data--"+animBP2+"-top", "-webkit-transform:translate(40px, -97%)");
  $("#coverTop").attr("data-anchor-target", "#logoAnim");
  $("#davi").attr("data--"+animBP1+"-top", "-webkit-transform:translate(-60px, -81%)");
  $("#davi").attr("data--"+animBP2+"-top", "-webkit-transform:translate(-222px, -81%)");
  $("#davi").attr("data-anchor-target", "#logoAnim");
  $("#C").attr("data-top-top", "-webkit-transform:translate(6px, -50%)");
  $("#C").attr("data--"+animBP1+"-top", "-webkit-transform:translate(6px, -21%)");
  $("#C").attr("data--"+animBP2+"-top", "-webkit-transform:translate(-68px, -21%)");
  $("#C").attr("data-anchor-target", "#logoAnim");
  $("#coverBottom").attr("data--"+animBP1+"-top", "-webkit-transform:translate(-154px, 0.5%)");
  $("#coverBottom").attr("data--"+animBP2+"-top", "-webkit-transform:translate(-228px, 0.5%)");
  $("#coverBottom").attr("data-anchor-target", "#logoAnim");
  $("#hoo").attr("data--"+animBP1+"-top", "-webkit-transform:translate(-154px, -21%)");
  $("#hoo").attr("data--"+animBP2+"-top", "-webkit-transform:translate(1.5px, -21%)");
  $("#hoo").attr("data-anchor-target", "#logoAnim");
  /****************************START CURTAIN EFFECT*******************************/
  //start textillate section
   $('.tlt').textillate({
       selector: '.texts',
       loop: true,
       minDisplayTime: 2000,
       initialDelay: 0,
       in: {
           effect: 'fadeInUp',
           delayScale: 2,
           delay: 50,
           sync: true,
           shuffle: false
       },
       out: {
           effect: 'fadeOutUp',
           delayScale: 2,
           delay: 50,
           sync: true,
           shuffle: false
       },
       autoStart: true
   });
   //end textillate section
   //variables for curtain effect
   var offset = 150;
   var colours = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "black"];
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
   $(".splitting:nth-of-type(even)").attr("data-0p-top", "-webkit-transform: translateX(0px)");
   $(".splitting:nth-of-type(even)").attr("data--300p-top", "-webkit-transform: translateX("+slidingDist+"px)");
   $(".splitting:nth-of-type(even)").attr("data-anchor-target", "#curtain");
   $(".splitting:nth-of-type(odd)").attr("data-0p-top", "-webkit-transform: translateX(0px)");
   $(".splitting:nth-of-type(odd)").attr("data--300p-top", "-webkit-transform: translateX(-"+slidingDist+"px)");
   $(".splitting:nth-of-type(odd)").attr("data-anchor-target", "#curtain");
   skrollr.init();
   //end skrollr section
   /**************************************END CURTAIN EFFECT**************************************/
});