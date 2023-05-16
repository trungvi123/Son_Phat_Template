$(document).ready(function () {
    var feedback_slider = $('.project-slider')
    feedback_slider.not('.slick-initialized').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              infinite: true
            }
      
          }, 
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              dots: true
            }
      
          }, {
            breakpoint: 300,
            settings: "unslick" // destroys slick
      
          }]
    });


    var slick_arrow = document.querySelectorAll('.slick-arrow')
    slick_arrow[0].innerHTML = ''
    slick_arrow[1].innerHTML = ''

})



var onTop_btn = document.querySelector('.onTop-btn');
window.onscroll = function (){
  // tùy tnhf duyệt mà sài body hay element
  if(document.body.scrollTop > 621 || document.documentElement.scrollTop > 821){
      onTop_btn.style.opacity = "1";
      onTop_btn.style.display =  "flex";
  }else {
      onTop_btn.style.opacity = "0";
      onTop_btn.style.display =  "none";
  }


  if(onTop_btn){
  onTop_btn.onclick= function topFunction () {
      document.body.scrollTop =0;
      document.documentElement.scrollTop =0;
  }
  }
}


var carousel_item_active = document.querySelector('.carousel-item.active')
var carousel_item_not_active = document.querySelectorAll('.carousel-item:not(.active)')
var carousel_text_btn__text1 = document.querySelectorAll('.carousel-text_btn__text1')
$('.carousel').on('slid.bs.carousel', function () {
 
  carousel_text_btn__text1.forEach((e)=>{
    if(e.parentElement.parentElement.classList.contains('active')){
      e.classList.add('leFlyInBottom')
      e.parentElement.querySelector('.carousel-text_btn__text2').classList.add('leFadeIn')
    }else {
      e.classList.remove('leFlyInBottom')
      e.parentElement.querySelector('.carousel-text_btn__text2').classList.remove('leFadeIn')
    }
  })

})

var h2_second = document.querySelector('.h2-second') 
setInterval(()=>{
  h2_second.classList.add('leFadeInBottom')
},3000)

setInterval(()=>{
  h2_second.classList.remove('leFadeInBottom')
},6000)
