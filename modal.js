$(document).ready(function () {
    $("#contactForm").on("submit", function (e) {
        e.preventDefault();
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();
        if (name && email && message) {
            console.log("Name:", name);
            console.log("Email:", email);
            console.log("Message:", message);
            $("#contactModal").modal("hide");
            $("#contactForm")[0].reset();
            alert("Thank you! Your message has been sent.");
        } else {
            alert("Please fill out all fields.");
        }
    });
});