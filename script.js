searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}





window.onscroll = () =>{
    searchForm.classList.remove('active');

    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () =>{
    if(window.scrollY > 80){
        document.querySelector('.header .header-2').classList.add('active');

    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
var swiper  = new swiper (".arrivals-slider",{
    spaceBetween:10,
    loop:true,
    centeredSlides:true,
    autoplay:{
        delay:9500,
        disableOnInteraction: false,
    },
   
    breakpoints:{
        0:{
            slidesperView: 1,
        },
       
        768:{
            slidesperView: 2,
        },
        1024:{
            slidesperView: 3,

        },
    },
});