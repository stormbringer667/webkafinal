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

$(document).ready(function() {
    $('#contactForm').on('submit', function(event) {
        event.preventDefault(); 
        var formData = {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        };

        if (formData.name === "" || formData.email === "" || formData.message === "") {
            alert("Please fill in all fields.");
            return;
        }
        setTimeout(function() {
            alert("Message successfully sent!");
            $('#contactForm')[0].reset();
        }, 500);
    });
});


// Toggle FAQ answers
$(document).ready(function () {
    $('.accordion-button').on('click', function () {
        $(this).next('.accordion-collapse').toggleClass('show');
    });
});