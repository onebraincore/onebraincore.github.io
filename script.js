
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