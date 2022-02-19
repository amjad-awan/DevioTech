$('.owl-carousel').owlCarousel({
    loop:true,
    margin:50,
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

/*--------- ScrollReveal ------*/

window.sr=ScrollReveal();
sr.reveal('.animate-left', {
    origin:'left',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:300
});
window.sr=ScrollReveal();
sr.reveal('.animate-right', {
    origin:'right',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:300
});
sr.reveal('.animate-bottom', {
    origin:'bottom',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:300
});
sr.reveal('.animate-top', {
    origin:'top',
    duration:1000,
    distance:'25rem',
       reset: true,
    delay:600
});

$(document).ready(function(){
    $(".toggle-btn").click(function(){
        $("body").toggleClass("open");
          var child = $(this).children();
        if(child.hasClass("fas fa-bars"))
        {
            child.removeClass("fas fa-bars").addClass("fa-solid fa-xmark");
        }

        else
        {
        child.removeClass("fa-solid fa-xmark").addClass("fas fa-bars");
        }

    })
})

