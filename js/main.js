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
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("hero");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
let container=document.getElementById('container-snow');
let count=50;
for (var i=0;i<200;i++){
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
    
}
let containers=document.getElementById('container-snow');
for (var i=0;i<200;i++){
    let leftSnow=Math.floor(Math.random()*containers.clientWidth-200);
    let topSnow=Math.floor(Math.random()*containers.clientHeight);
    let widthSnow=Math.floor(Math.random()*50);
    let timeSnow=Math.floor(Math.random()*7+10);
    console.log(leftSnow);
    let div=document.createElement('div');
    div.classList.add('sakura');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    div.style.width = widthSnow + 'px';
    div.style.height = widthSnow + 'px';
    div.style.animationDuration =  timeSnow + 's';
    containers.appendChild(div);
    
}
let containerss=document.getElementById('container-snow');
for (var i=0;i<200;i++){
    let leftSnow=Math.floor(Math.random()*containerss.clientWidth-200);
    let topSnow=Math.floor(Math.random()*containerss.clientHeight);
    // let widthSnow=Math.floor(Math.random()*50);
    let timeSnow=Math.floor(Math.random()*8+10);
    console.log(timeSnow);
    let blurSnow=Math.floor(Math.random()*30);
    console.log(leftSnow);
    let div=document.createElement('div');
    div.classList.add('fog');
    div.style.left = leftSnow + 'px';
    div.style.top = topSnow + 'px';
    // div.style.width = widthSnow + 'px';
    // div.style.height = widthSnow + 'px';
    div.style.animationDuration =  timeSnow + 's';
    div.style.filter = "blur(" + blurSnow + "px)";
    containerss.appendChild(div);
    
}
