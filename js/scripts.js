$(function () {

    // init feather icons
    feather.replace();

    // init tooltip & popovers
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="popover"]').popover();

    //page scroll
    $('a.page-scroll').bind('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 20
        }, 1000);
        event.preventDefault();
    });

    // slick slider
    $('.slick-about').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false
    });

    //toggle scroll menu
    var scrollTop = 0;
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        //adjust menu background
        if (scroll > 80) {
            if (scroll > scrollTop) {
                $('.smart-scroll').addClass('scrolling').removeClass('up');
            } else {
                $('.smart-scroll').addClass('up');
            }
        } else {
            // remove if scroll = scrollTop
            $('.smart-scroll').removeClass('scrolling').removeClass('up');
        }

        scrollTop = scroll;

        // adjust scroll to top
        if (scroll >= 600) {
            $('.scroll-top').addClass('active');
        } else {
            $('.scroll-top').removeClass('active');
        }
        return false;
    });

    // scroll top top
    $('.scroll-top').click(function () {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000);
    });

    /**Theme switcher - DEMO PURPOSE ONLY */
    $('.switcher-trigger').click(function () {
        $('.switcher-wrap').toggleClass('active');
    });
    $('.color-switcher ul li').click(function () {
        var color = $(this).attr('data-color');
        $('#theme-color').attr("href", "css/" + color + ".css");
        $('.color-switcher ul li').removeClass('active');
        $(this).addClass('active');
    });
});


function focusLeftItem() {
    var item = document.getElementById("left_text");
    item.style.visibility = "visible";
}
function unFocusLeftItem() {
    var item = document.getElementById("left_text");
    item.style.visibility = "hidden";
}

function focusRightItem() {
    var item = document.getElementById("right_text");
    item.style.visibility = "visible";
}
function unFocusRightItem() {
    var item = document.getElementById("right_text");
    item.style.visibility = "hidden";
}
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function subscribedForm() {
    var div = document.getElementById("mc_embed_signup");
    sleep(500).then(() => {
        div.innerHTML = "";
        div.innerHTML = "<p class=\"lead py-3\">Thanks for signing up!</p>"
    });
}


if(screen.width>850){
    //console.log("desktop!!!");
    //document.getElementById('circle').setAttribute("style","display:block;width:50vw;height:50vh;");
    document.getElementById('circle').style.width='50vw';
    document.getElementById('circle').style.height='50vw';

    document.getElementById('inner-circle').style.width='10vw';
    document.getElementById('inner-circle').style.height='10vw';
    document.getElementById('inner-circle').style.fontSize='3vw';
    document.getElementById('left_text').style.fontSize='3vw';
    document.getElementById('right_text').style.fontSize='3vw';

} else {
    //jo
    //console.log("mobile!!!");
    //document.getElementById('circle').setAttribute("style","display:block;width:80vw;height:80vh;");
    document.getElementById('circle').style.width='90vw';
    document.getElementById('circle').style.height='90vw';

    document.getElementById('inner-circle').style.width='28vw';
    document.getElementById('inner-circle').style.height='28vw';
    document.getElementById("inner-circle").style.transform = "translate(-14vw, -14vw)"
    document.getElementById('inner-circle').style.fontSize='8vw';
    document.getElementById('left_text').style.fontSize='5.5vw';
    document.getElementById('right_text').style.fontSize='5.5vw';
}