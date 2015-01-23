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
   var offset = 150;
   var colours = ["violet", "indigo", "blue", "green", "yellow", "orange", "red", "black"];
   var slideCount = colours.length;
   var dist = offset * (slideCount - 1);
   var tempDist = dist;
   $(".splitting:nth-of-type(even)").each(function(index) {
    // alert(index * 2);
    $(".splitting:nth-of-type(" + (index+1)*2 + ")").css({'background-color':colours[index],'right':tempDist+'px'});
    tempDist -= offset;
   });
   tempDist = dist;
   $(".splitting:nth-of-type(odd)").each(function(index) {
    // alert((index+1) * 2 - 1);
    $(".splitting:nth-of-type(" + ((index+1)*2-1) + ")").css({'background-color':colours[index],'left':tempDist+'px'});
    tempDist -= offset;
   });
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
});
//   var tid = setTimeout(mycode, 2000);
//   function mycode() {
//   $(".text").css('visibility', 'hidden');
//   $(".text").textillate('in');
//   // $("#text").textillate({out:{effect:'fadeOut',sync:true}});
//   setTimeout(mycode, 2000); // repeat myself
// }