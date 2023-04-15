/* Timer*/

if (window.location.href.indexOf('https://onebrain.io/') > -1) {


// Set the date we're counting down to
var countDownDate = new Date("May 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
days = 30;
hours = 0;
minutes = 0;
seconds = 0;
  // Display the result in the element with id="demo"
  document.getElementById("brain-timer").innerHTML = "<div class = 'timer-days d-inline'>" + days + "</div>"+":"+"<div class = 'timer-hours d-inline'>" + hours+ "</div>"+":" +"<div class = 'timer-minutes d-inline'>"+ minutes +"</div>"+":" +"<div class = 'timer-seconds d-inline'>" + seconds + "</div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("brain-timer").innerHTML = "EXPIRED";
  }
}, 1000);

  // Your JavaScript code here
}

/* END Timer */

/* Collapsible content  */
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
/* END Collapsible content */


/* Play videos on scrolling */


function inViewport(item) {
  var elementTop = item.offset().top;
  var elementBottom = elementTop + item.outerHeight();
  var viewportTop = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
}

$.fn.isInViewport = function() {
  const elements = this;
  const found = elements.filter(function() {
    const item = $(this);
    return inViewport(item);
  });
  return !!found.length;
};

function replaceUrlParam(url, paramName, paramValue)
{
    if (paramValue == null) {
        paramValue = '';
    }
    var pattern = new RegExp('\\b('+paramName+'=).*?(&|#|$)');
    if (url.search(pattern)>=0) {
        return url.replace(pattern,'$1' + paramValue + '$2');
    }
    url = url.replace(/[?#]$/,'');
    return url + (url.indexOf('?')>0 ? '&' : '?') + paramName + '=' + paramValue;
}



/* END play videos on scrolling */

var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);



      var player1;
      var player2;
      var player3;
      var player4;
      var player5;
      var player6;

      function onYouTubeIframeAPIReady() {
        player1 = new YT.Player('player1', {
          height: '500',
          width: '900',
          videoId: 'DAACfneP7fY',
          playerVars: {
            'playsinline': 1,
            "mute":1,
            'autoplay': 1,
            "loop":1,
            'playlist': 'DAACfneP7fY',
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        player2 = new YT.Player('player2', {
          height: '500',
          width: '900',
          videoId: 'UALRgeYdjXg',
          playerVars: {
            'playsinline': 1,
            "mute":1,
            'autoplay': 1,
            "loop":1,
            'playlist': 'UALRgeYdjXg',
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        player3 = new YT.Player('player3', {
          height: '500',
          width: '900',
          videoId: '4N9A2h76YKM',
          playerVars: {
            'playsinline': 1,
            "mute":1,
            'autoplay': 1,
            "loop":1,
            'playlist': '4N9A2h76YKM',
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        player4 = new YT.Player('player4', {
          height: '500',
          width: '900',
          videoId: 'PinEsrZePvk',
          playerVars: {
            'playsinline': 1,
            "mute":1,
            'autoplay': 1,
            "loop":1,
            'playlist': 'PinEsrZePvk',
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        player5 = new YT.Player('player5', {
          height: '500',
          width: '900',
          videoId: '1YTRr2zod1w',
          playerVars: {
            'playsinline': 1,
            "mute":1,
            'autoplay': 1,
            "loop":1,
            'playlist': '1YTRr2zod1w',
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
        player6 = new YT.Player('player6', {
          height: '500',
          width: '900',
          videoId: '0Dwocg9HnOw',
          playerVars: {
            'playsinline': 1,
            "mute":1,
            'autoplay': 1,
            "loop":1,
            'playlist': '0Dwocg9HnOw',
          },
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });
      }

      function onPlayerReady(event) {
        event.target.playVideo();
      }

      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          // setTimeout(stopVideo, 6000);
          done = true;
        }
      }

      

    window.onscroll = function() {

      let videoElement = $(document).find('#player1');
      let boolView = videoElement.isInViewport();
      if(boolView){
        player1.playVideo();
      }else{
        player1.pauseVideo();
      }

      let videoElement2 = $(document).find('#player2');
      let boolView2 = videoElement2.isInViewport();
      if(boolView2){
        player2.playVideo();
      }else{
        player2.pauseVideo();
      }

      let videoElement3 = $(document).find('#player3');
      let boolView3 = videoElement3.isInViewport();
      if(boolView3){
        player3.playVideo();
      }else{
        player3.pauseVideo();
      }

      let videoElement4 = $(document).find('#player4');
      let boolView4 = videoElement4.isInViewport();
      if(boolView4){
        player4.playVideo();
      }else{
        player4.pauseVideo();
      }

      let videoElement5 = $(document).find('#player5');
      let boolView5 = videoElement5.isInViewport();
      if(boolView5){
        player5.playVideo();
      }else{
        player5.pauseVideo();
      }

      let videoElement6 = $(document).find('#player6');
      let boolView6 = videoElement6.isInViewport();
      if(boolView6){
        player6.playVideo();
      }else{
        player6.pauseVideo();
      }

    }

/* END Play videos on scrolling */


/* Magnetic scrolling */



$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();   
});

/* END Magnetic scrolling */


/* Anchor navigation hiding */

if (window.location.href.indexOf('https://onebrain.io/') > -1) {

    window.onscroll = function() {
      let pixelsFromTop = window.scrollY;

      if((pixelsFromTop>($('#section1').offset().top-1))&&(pixelsFromTop<($('#section6').offset().top)+$('#section6').height())){
        if($('#magnetic-navigation').hasClass("d-none")){
          $('#magnetic-navigation').removeClass("d-none");
        }
      }else{
        $('#magnetic-navigation').addClass("d-none");
      }


      if(((pixelsFromTop>($('#section1').offset().top-1))&&(pixelsFromTop<($('#section1').offset().top)+$('#section1').height()))){
        $('#magnetic-navigation li:nth-child(1) i').addClass('viewing');
      }else{
        $('#magnetic-navigation li:nth-child(1) i').removeClass('viewing');
      }

      if(((pixelsFromTop>($('#section2').offset().top-1))&&(pixelsFromTop<($('#section2').offset().top)+$('#section2').height()))){
        $('#magnetic-navigation li:nth-child(2) i').addClass('viewing');
      }else{
        $('#magnetic-navigation li:nth-child(2) i').removeClass('viewing');
      }

      if(((pixelsFromTop>($('#section3').offset().top-1))&&(pixelsFromTop<($('#section3').offset().top)+$('#section3').height()))){
        $('#magnetic-navigation li:nth-child(3) i').addClass('viewing');
      }else{
        $('#magnetic-navigation li:nth-child(3) i').removeClass('viewing');
      }

      if(((pixelsFromTop>($('#section4').offset().top-1))&&(pixelsFromTop<($('#section4').offset().top)+$('#section4').height()))){
        $('#magnetic-navigation li:nth-child(4) i').addClass('viewing');
      }else{
        $('#magnetic-navigation li:nth-child(4) i').removeClass('viewing');
      }

      if(((pixelsFromTop>($('#section5').offset().top-1))&&(pixelsFromTop<($('#section5').offset().top)+$('#section5').height()))){
        $('#magnetic-navigation li:nth-child(5) i').addClass('viewing');
      }else{
        $('#magnetic-navigation li:nth-child(5) i').removeClass('viewing');
      }

      if(((pixelsFromTop>($('#section6').offset().top-1))&&(pixelsFromTop<($('#section6').offset().top)+$('#section6').height()))){
        $('#magnetic-navigation li:nth-child(6) i').addClass('viewing');
      }else{
        $('#magnetic-navigation li:nth-child(6) i').removeClass('viewing');
      }

    }
}

      /* END Anchor navigation hiding */

/* Particles run */

    tsParticles
  .loadJSON("tsparticles", "particles.json")
  .then((container) => {
    console.log("callback - tsparticles config loaded");
  })
  .catch((error) => {
    console.error(error);
  });
   

/* END particles run */