jQuery(document).ready(function ($) {
    var str = "bt-";

    function expand() {

    }

    function install(s) {
        var x = $('.button-style-1#' + s + "1").first().position().left;
        var y = $('.button-style-1#' + s + "1").first().position().top;
        var width = $('.button-style-1#' + s + "1").first().width();

        $('.button-style-1').each(function () {
            $(this).css("left", function () {
                var id = parseInt($(this).attr("id").replace(s, ""));
                console.log((Math.round((id - 1) * width + x)) + "px");
                return (Math.round(((id - 1)  * (width + 50)) + x)) + "px";
            });
        })

        $('.button-style-1').mouseover(function () {
            if ($(this).hasClass("button-style-1-active")) {
                return;
            } else {
                $('.button-style-1').removeClass("button-style-1-active");
                $(this).addClass("button-style-1-active");

            }
        })
    }

    install(str);
});
