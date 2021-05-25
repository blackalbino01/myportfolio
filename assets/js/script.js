const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    startDelay: 700,
    loop: true,
    typeSpeed: 39,
    backSpeed: 20,
    backDelay: 3400,
});

$(document).on('click', 'a[href^="#"]', function (e) {
    e.preventDefault();
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 700, 'linear');
});