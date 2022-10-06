var swiper = new Swiper(".slide-content", {
    slidesPerView: 'auto',
    // spaceBetween: 0,
    loop: true,
    // a11y : true,
    centerSlide: 'true',
    // loopFillGroupWithBlank: true,
    grabCursor: 'true',
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    //   dynamicBullets: true,
    // },
    navigation: {
      nextEl: ".next-element-group",
      prevEl: ".prev-element-group",
    },
  });

var myVideo = document.getElementById("video1"); 

function play() { 
  if (myVideo.paused) {
    myVideo.play(); 
    document.getElementById("video1-playbtn").style.opacity = 0;
  } else {
    document.getElementById("video1-playbtn").style.opacity = 1;
    myVideo.pause(); 
  } 
} 

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("myBtn2");
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close2")[1];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  window.onscroll = function() {};
  modal.style.display = "none";
}

btn2.onclick = function() {
  modal2.style.display = "block";
}

span2.onclick = function() {
  window.onscroll = function() {};
  modal2.style.display = "none";
}

span3.onclick = function() {
  window.onscroll = function() {};
  modal2.style.display = "none";
}

window.onclick = function(event) {
  // if (event.target == modal) {
  //   window.onscroll = function() {};
  //   modal.style.display = "none";
  // }
}

