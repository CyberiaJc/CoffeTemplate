// Swiper js


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },
  autoplayHoverPause: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  });




// Nav open close



const body = document.querySelector('body'),
navMenu= body.querySelector('.menu-content'),
navOpenBtn=  body.querySelector('.navOpen-btn'),
navCloseBtn=  navMenu.querySelector('.navClose-btn');



if(navMenu && navOpenBtn){

    navOpenBtn.addEventListener("click", ()=> {
        navMenu.classList.add("open");
        body.style.overflowy="hidden";

    })

}

if(navMenu && navCloseBtn){

    navCloseBtn.addEventListener("click", ()=> {
        navMenu.classList.remove("open");
        body.style.overflowy="scroll";
    })

}

// Change header bg color
window.addEventListener("scroll", () => {

const scrollY=window.pageYOffset;
//console.log(scrollY);
  if(scrollY > 5){
document.querySelector("header").classList.add("header-active")

  }else{
    document.querySelector("header").classList.remove("header-active")
  }

  
  // Scroll up button

  const scrollUpBtn = document.querySelector(".scrollUp-btn");
  
  
  if(scrollY > 250){
    scrollUpBtn.classList.add("scrollUpBtn-active")
  }
  else{
    scrollUpBtn.classList.remove("scrollUpBtn-active")
  }
  
  

// Nav link indicator
 
  const sections = document.querySelectorAll("section[id]")
  
  sections.forEach(section =>{
const sectionHeight = section.offsetHeight,
sectionTop = section.offsetTop - 60 ;

let navId = document.querySelector(`.menu-content a[href*= ${section.id}]`)

if(scrollY > sectionTop && scrollY <= sectionTop+ sectionHeight){
 
  navId.classList.add("active-navlink");
//  console.log(navId);

}else{
  navId.classList.remove("active-navlink");
}






  })
  
  //console.log(sections);


})
// Scroll Reveal Animation
  

const sr= ScrollReveal({
origin: 'top',
distance: '60px',
duration: 2500,
dely:400,


})


/*
sr.reveal('.logo-content', {interval:100,});



sr.reveal('.section-subtitle, .section-title, .section-description, .brand-img, .testimonial, .logo-content, .neswletter, .newsletter-inputBox,.newsletter-mediaIcon, .footer-content, .footer-links', {interval:100,});


sr.reveal(`.about-imageContent, .menu-items`, {origin:'left'})
sr.reveal(`.about-details, .time-table`, {origin:'right'})*/