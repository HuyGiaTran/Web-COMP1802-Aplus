(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("hero");
  let place1 = document.getElementsByClassName("snow");
  let place2 = document.getElementsByClassName("fog");
  let place3 = document.getElementsByClassName("sakura");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  placeSet(slideIndex);
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}
function placeSet(n){
    let container=document.getElementById('container-snow');
    if (n==1){
        for (var i=0;i<200;i++){
            let Fog=document.getElementsByClassName("fog");
            Fog[i].style.display= "block";
            let leftFog=Math.floor(Math.random()*container.clientWidth-200);
            let topFog=Math.floor(Math.random()*container.clientHeight);
            // let widthFog=Math.floor(Math.random()*50);
            let timeFog=Math.floor(Math.random()*30+5);
            console.log(timeFog);
            let blurFog=Math.floor(Math.random()*30);
            console.log(leftFog);
            let div=document.createElement('div');
            div.classList.add('fog');
            div.style.left = leftFog + 'px';
            div.style.top = topFog + 'px';
            // div.style.width = widthFog + 'px';
            // div.style.height = widthFog + 'px';
            div.style.animationDuration =  timeFog + 's';
            div.style.filter = "blur(" + blurFog + "px)";
            container.appendChild(div);
            setTimeout(fogSet,10000);
        }
    }
    if (n==2){
        for (var i=0;i<200;i++){
            let Sakura=document.getElementsByClassName("sakura");
            Sakura[i].style.display= "block";
            let leftSakura=Math.floor(Math.random()*container.clientWidth-200);
            let topSakura=Math.floor(Math.random()*container.clientHeight);
            let widthSakura=Math.floor(Math.random()*50);
            let timeSakura=Math.floor(Math.random()*30+8);
            console.log(leftSakura);
            let div=document.createElement('div');
            div.classList.add('sakura');
            div.style.left = leftSakura + 'px';
            div.style.top = topSakura + 'px';
            div.style.width = widthSakura + 'px';
            div.style.height = widthSakura + 'px';
            div.style.animationDuration =  timeSakura + 's';
            container.appendChild(div);
            setTimeout(sakuraSet,10000);
        }
    }
    if (n==3){
        for (var i=0;i<200;i++){
            let Snow=document.getElementsByClassName("snow");
            Snow[i].style.display= "block";
            let leftSnow=Math.floor(Math.random()*container.clientWidth);
            let topSnow=Math.floor(Math.random()*container.clientHeight);
            let widthSnow=Math.floor(Math.random()*50);
            let timeSnow=Math.floor(Math.random()*5+5);
            console.log(timeSnow);
            let blurSnow=Math.floor(Math.random()*30);
            console.log(leftSnow);
            let div=document.createElement('div');
            div.classList.add('snow');
            div.style.left = leftSnow + 'px';
            div.style.top = topSnow + 'px';
            div.style.width = widthSnow + 'px';
            div.style.height = widthSnow + 'px';
            div.style.animationDuration =  timeSnow + 's';
            div.style.filter = "blur(" + blurSnow + "px)";
            container.appendChild(div);
            setTimeout(snowSet,10000);
        }
    }
}
function fogSet(){
    for (var i=0;i<200;i++){
        let Fog=document.getElementsByClassName("fog");
        Fog[i].style.display= "none";
    }
}
function snowSet(){
    for (var i=0;i<200;i++){
        let Snow=document.getElementsByClassName("snow");
        Snow[i].style.display= "none";
    }
}
function sakuraSet(){
    for (var i=0;i<200;i++){
        let Sakura=document.getElementsByClassName("sakura");
        Sakura[i].style.display= "none";
    }
}