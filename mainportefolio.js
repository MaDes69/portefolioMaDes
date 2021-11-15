// toggle nav
$('.navTrigger').click(function () {
  $(this).toggleClass('active');
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();

});

// scroll navbar 
$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      // console.log("OK");
  } else {
      $('.nav').removeClass('affix');
  }
});

// loader

const loader = document.querySelector(".loader");
window.addEventListener('load', ()=> {
loader.classList.add("fondu-out");
})


// intro

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1.5, stagger: 0.25 });
tl.to(".texte1", { y: "0%", duration: 0.5, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
// tl.fromTo("div .air", { opacity: 0 }, { opacity: 1, duration: 1 });
// tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");

 

