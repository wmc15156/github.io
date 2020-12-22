$(window).on("load", function() {
    $(".loader").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });

    $(".items").isotope({
        filter: "*",
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false,
        }
    });

});

$(document).ready(function() {
    $('#slides').superslides({
        animation: 'fade',
        play: 5000, // 5초 뒤
        pagination: false, // 하단 페이지네이션 삭제
    });

    const typed = new Typed('.typed', {
        strings:['Software Engineer.', "Developer.", 'Backend developer.', 'Frontend developer.'],
        typeSpeed: 100,
        loop: true,
        startDelay: 1000,
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:5
            }
        }
    });


    const skillsTopOffset = $('.skillsSection').offset().top;
    $(window).scroll(() => {
       if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
           $('.chart').easyPieChart({
               //your options goes here
               easing: 'easeInOut',
               barColor: '#fff',
               trackColor: false,
               scaleColor: false,
               lineWidth: 4,
               size: 152,
               onStep: function(from, to, percent) {
                   $(this.el).find('.percent').text(Math.round(percent));
               }
           });
       }

    });

    $("[data-fancybox]").fancybox();



    $("#filters a").click(function() {
        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        const selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });

    $("#navigation li a").click(function(e) {
        e.preventDefault();

        let targetElement = $(this).attr("href");
        let targetPosition = $(targetElement).offset().top;
        $("html, body").animate({ scrollTop: targetPosition - 50 }, "slow");
    })

    const nav = $("#navigation");
    const navTop = nav.offset().top;

    $(window).on("scroll", stickyNavigation);

    function stickyNavigation() {
        const body = $("body");

        if($(window).scrollTop() >= navTop) {
            // body.css("padding-top", nav.outerHeight() + "px");
            body.addClass("fixedNav");

        } else {
            body.removeClass("fixedNav");
        }
    }

});















