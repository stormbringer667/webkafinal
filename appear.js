$(document).ready(function () {
    $(".card, .service-category, .hero-section, .faq-section").css("opacity", "0");
    $(window).on("scroll", function () {
        $(".card, .service-category, .hero-section, .faq-section").each(function () {
            var scrollTop = $(window).scrollTop();
            var elementTop = $(this).offset().top - $(window).height() + 100;
            if (scrollTop > elementTop) {
                $(this).animate({ opacity: 1 }, 600);
            }
        });
    });
});