window.addEventListener('scroll',function(){
    let navbar=document.querySelector('.navbar')
    let headadd= document.querySelector('header-active')
    
    navbar.classList.toggle('header-active',this.window.scrollY>100)
})

    $('.owl-sells').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:4
            }
        }
    })


    $('.owl-carousel-testi').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        autoplay: true,
        smartSpeed: 10,
        items: 1,
    })


    $('.owl-carousel-client').owlCarousel({
        loop:true,
        margin:50,
        nav:false,
        autoplay: true,
        smartSpeed: 100,
        responsive:{
            0:{
                items:3
            },
            600:{
                items:4
            },
            1000:{
                items:5
            }
        }
    })