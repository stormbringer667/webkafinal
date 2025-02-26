$(document).ready(function () {
    $(".accordion-button").click(function () {
        var icon = $(this).find(".icon");
        if ($(this).hasClass("collapsed")) {
            icon.text("➖");
        } else {
            icon.text("➕");
        }
    });

    $(".accordion-button").on("click", function () {
        var target = $(this).attr("data-bs-target");
        setTimeout(function () {
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top - 100
                },
                500
            );
        }, 300);
    });
});

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


// Toggle FAQ answers
$(document).ready(function () {
    $('.accordion-button').on('click', function () {
        $(this).next('.accordion-collapse').toggleClass('show');
    });
});