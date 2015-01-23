$( document ).ready(function() {
  //start textillate section
  // var viewportHeight = window.innerHeight;
  // var viewportWidth = window.innerWidth;
  // $('.tlt').css('top', viewportHeight/2 - $('.tlt').height());
  // $('.tlt').css('left', viewportWidth/2 - $('.tlt').width());
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
   //start skrollr section
   var slidingDist = parseInt($(".splitting").css('width')) + 400;
   $("#curtain").height(window.innerHeight * 3);
   $(".splitting:nth-of-type(even)").attr("data-0p-top", "-webkit-transform: translateX(0px)");
   $(".splitting:nth-of-type(even)").attr("data--300p-top", "-webkit-transform: translateX("+slidingDist+"px)");
   $(".splitting:nth-of-type(even)").attr("data-anchor-target", "#curtain");
   $(".splitting:nth-of-type(odd)").attr("data-0p-top", "-webkit-transform: translateX(0px)");
   $(".splitting:nth-of-type(odd)").attr("data--300p-top", "-webkit-transform: translateX(-"+slidingDist+"px)");
   $(".splitting:nth-of-type(odd)").attr("data-anchor-target", "#curtain");
   skrollr.init();
});
//   var tid = setTimeout(mycode, 2000);
//   function mycode() {
//   $(".text").css('visibility', 'hidden');
//   $(".text").textillate('in');
//   // $("#text").textillate({out:{effect:'fadeOut',sync:true}});
//   setTimeout(mycode, 2000); // repeat myself
// }