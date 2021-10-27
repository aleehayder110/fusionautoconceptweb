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

//  Initialize Swiper 

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
        320: {       
           slidesPerView: 1,
           spaceBetween: 10     
        },     
        // when window width is <= 480px     
        // 480: {       
        //    slidesPerView: 2,       
        //    spaceBetween: 20     
        // },   
    
        // when window width is <= 640px     
        640: {       
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


