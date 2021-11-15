//Active Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}

// hide nav
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
 navBar.forEach(function(a){
     a.addEventListener("click", function(){
         navCollapse.classList.remove("show");
     })
 })

$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".card-header").addClass("highlight");
    });
    
    // Highlight open collapsed element 
    $(".card-header .btn").click(function(){
        $(".card-header").not($(this).parents()).removeClass("highlight");
        $(this).parents(".card-header").toggleClass("highlight");
    });
});
    
// back-to-top 
    jQuery(document).ready(function() {
         var offset =250;
         var duration = 300;
    jQuery(Window).scroll(function(){
        if(jQuery(this).scrollTop() > offset) {
            jQuery('back-to-top').fadeIn(duration);
        } else {
            jQuery('back-to-top').fadeOut(duration);
        }
    });
    jQuery('back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html,body').animate({screenTop:0 }, duration);
        return false;
    })
})
//AOS
AOS.init();

//Heroimage
$.fn.SnakeParallax=function(a){this.ready(function(){$('[snake-parallax="hero"]').css({"background-repeat":"no-repeat","background-size":"cover",overflow:"hidden",width:"100%",height:"100vh",position:"relative"}),$("head").append($("<style>body,html{width:100%;height:100%;}</style>"));var e=$.extend({backgroundPosition:"center top",backgroundImage:""},a);return $('[snake-parallax="hero"]').css({backgroundPosition:e.backgroundPosition,backgroundImage:e.backgroundImage})}),this.scroll(function(){var a=$(document).scrollTop().valueOf()/2;$('[snake-parallax="hero"]').css({height:"calc(100vh - "+Math.round(a)+"px)"})})};

//  Initialize Swiper (image slider)

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
    breakpoints: {  
   
        // when window width is <= 320px     
        285: {       
           slidesPerView: 1,
           spaceBetween: 10     
        },     
        // when window width is <= 480px     
        480: {       
           slidesPerView: 2,       
           spaceBetween: 20     
        },   
    
        // when window width is <= 640px     
        767: {       
           slidesPerView: 3,       
           spaceBetween: 30     
        } 
    
     } 
  });
  var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    loop:true,
    autoplay:{
        delay:3000,
        disableOnInteraction:false,
    },
  });


  let slides = document.querySelectorAll('.home-slide .slides-container .slide');
  let index = 0;
  
  function next(){
      slides[index].classList.remove('active');
      index = (index + 1) % slides.length;
      slides[index].classList.add('active');
  }
  
  function prev(){
      slides[index].classList.remove('active');
      index = (index - 1 + slides.length) % slides.length;
      slides[index].classList.add('active');
  }

  // section -About -us slides
var sliderSelector = '.swiper-container',
options = {
  init: false,
  loop: true,
  speed:800,
  slidesPerView: 1, // or 'auto'
  // spaceBetween: 10,
  centeredSlides : true,
  effect: 'cube', // 'cube', 'fade', 'coverflow',
  coverflowEffect: {
    rotate: 50, // Slide rotate in degrees
    depth: 0, // Depth offset in px (slides translate in Z axis)
    modifier: 1, // Effect multipler
    slideShadows : true, // Enables slides shadows
  },
  grabCursor: true,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // 1023: {
    //   slidesPerView: 1,
    //   spaceBetween: 0
    // }
  },
  // Events
  on: {
    imagesReady: function(){
      this.el.classList.remove('loading');
    }
  }
};
var mySwiper = new Swiper(sliderSelector, options);

// Initialize slider
mySwiper.init();

//Section staff
var slide = document.getElementById("review-slide");
var upArrow = document.getElementById("upArrow");
var downArrow = document.getElementById("downArrow");

let x = 0;
 upArrow.onclick = function(){
   if(x > "-600"){
    x = x - 350;
    slide.style.top = x + "px";
   }
 }
 downArrow.onclick = function(){
  if(x < 0){
   x = x + 350;
   slide.style.top = x + "px";
  }
}


// review section
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 4500,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}