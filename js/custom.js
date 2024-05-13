// Responsive Nav bar toggle //////////////
function myFunction() {
  let element = document.querySelector("nav");
  element.classList.toggle("nav-show");

  let element2 = document.querySelector(".toggle-btn");
  element2.classList.toggle("toggle-open");
}
document.querySelector(".toggle-btn").addEventListener("click", myFunction)



// Header Active ////////////
document.addEventListener("DOMContentLoaded", function () {
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) {
            document.querySelector("header").classList.add("active");
        } else {
            document.querySelector("header").classList.remove("active");
        }
    });
});


// Testimonial Row Slider ///////////////////
  $('.testimonial-row').slick({
    centerMode: true,
    centerPadding: '300px',
    slidesToShow: 1,
    infinite: true,
    arrows:false,
    autoplay:true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '190px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1,
        }
      }
    ]
  });


// Brands Info Slider ///////////////////////
  $('.brands-info').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll:1,
    autoplay:true,
    arrows:false,
    centerMode:true,
    centerPadding:'90px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          centerPadding: '50px',
        }
      },
    ],
  });
          