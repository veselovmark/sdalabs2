jQuery(document).ready(function ($) {

    function setSlider(sliderID) {
        var slideCount = $('.slider#' + sliderID + ' ul li').length;

        var currentSlide = 0;

        $('.slider#' + sliderID + ' ul.slider-list').css("width", slideCount * 100 + "%");
        $('.slider#' + sliderID + ' ul li').css("width", Math.round(100 / slideCount * 100) / 100 + "%");

        /*setInterval(function () {
            moveRight();
        }, 10000);
*/
        function setCircleGroup() {

            $('.slider#' + sliderID).append("<div class = 'slider-circle-group'></div>")
            var circleGroup =  $('.slider#' + sliderID + ' .slider-circle-group');

            for (i = 0; i < slideCount; i ++) {
                $('.slider#' + sliderID+ ' .slider-circle-group').append("<div class = 'slider-circle' id = 'slide" + i + "'></div>")
            }

            var circleRadius = 0.014;

            var circles = $('.slider#' + sliderID + ' .slider-circle-group .slider-circle');
            var sliderWidth = $('.slider#' + sliderID).width();
            var width = circleRadius * sliderWidth;
            circles.css('width', width + 'px');
            circles.css('height', width + 'px');
            circles.css('margin', width + 'px');
            circleGroup.css('left', (100 - circleRadius * 100 * 3 * slideCount)/2 + '%');

            $('.slider#' + sliderID + ' .slider-circle-group .slider-circle').css('background-color', '');
            $('.slider#' + sliderID + ' .slider-circle-group .slider-circle#slide' + currentSlide).css('background-color', 'purple');
        }

        setCircleGroup();

        function moveLeft() {
            var s = $('.slider#' + sliderID + ' ul');

            console.log("moveRight()");

            $('.slider#' + sliderID + ' ul').animate({
                marginLeft: "0%"
            }, 300, function () {
                $('.slider#' + sliderID + ' ul li:last-child').prependTo('.slider#' + sliderID + ' ul');
                $('.slider#' + sliderID + ' ul').css('margin-left', '-100%');
            })

            currentSlide--;
            currentSlide = (currentSlide + slideCount) % (slideCount);

            $('.slider#' + sliderID + ' .slider-circle-group .slider-circle').css('background-color', '');
            $('.slider#' + sliderID + ' .slider-circle-group .slider-circle#slide' + currentSlide).css('background-color', 'purple');
        }

        function moveRight() {
            var s = $('.slider#' + sliderID + ' ul');

            console.log("moveLeft()");

            $('.slider#' + sliderID + ' ul').animate({
                marginLeft: "-200%"
            }, 300, function () {
                $('.slider#' + sliderID + ' ul li:first-child').appendTo('.slider#' + sliderID + ' ul');
                $('.slider#' + sliderID + ' ul').css('margin-left', '-100%');
            })

            currentSlide++;
            currentSlide = currentSlide % (slideCount);

            $('.slider#' + sliderID + ' .slider-circle-group .slider-circle').css('background-color', '');
            $('.slider#' + sliderID + ' .slider-circle-group .slider-circle#slide' + currentSlide).css('background-color', 'purple');
        }

        $('.slider#' + sliderID + ' a.slider-prev').click(function () {
            moveLeft();
        });
        $('.slider#' + sliderID + ' a.slider-next').click(function () {
            moveRight();
        });
    }

    setSlider("slider1");
    setSlider("slider2");

    $(window).scroll(function () {
        var selectorTop = $('.box1-2').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= selectorTop) {
            $('.selector').addClass('appear');
        }

        var option1Top = $('#option1').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= option1Top) {
            $('#option1').addClass('appear');
        }

        var option2Top = $('#option2').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= option2Top) {
            $('#option2').addClass('appear');
        }

        var option3Top = $('#option3').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= option3Top) {
            $('#option3').addClass('appear');
        }

        var option4Top = $('#option4').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= option4Top) {
            $('#option4').addClass('appear');
        }

        var option5Top = $('#option5').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= option5Top) {
            $('#option5').addClass('appear');
        }

        var option6Top = $('#option6').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= option6Top) {
            $('#option6').addClass('appear');
        }

        var contactTop = $('.contact').offset().top;
        //console.log($(window).scrollTop() + "::" + selectorTop);
        if ($(window).scrollTop() + $(window).height() >= contactTop) {
            $('.contact').addClass('appear');
        }

        var topHeight = $('.top-content').height();
        var op = $(window).scrollTop()/topHeight;
        if (op > 1) op = 1;
        if (op < 0) op = 0;
        $('.top-menu-filler').css('opacity', op);



        /*if ($(this).scrollTop() > aTop/2) {
            $('div.top-menu').addClass("top-menu-fixed");
        }
        if ($(this).scrollTop() < aTop/2) {
            $('div.top-menu').removeClass("top-menu-fixed");
        }
        if ($(this).scrollTop() > aTop) {
            $('div.top-menu').addClass("top-menu-fixed-appear");
        }
        if ($(this).scrollTop() < aTop) {
            $('div.top-menu').removeClass("top-menu-fixed-appear");
        }*/
    });

    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
        $(this).toggleClass('open');
        $('div.top-menu-option-group').toggleClass('shown');
    });

    //$('body').css("min-width", 2 * screen.width);
});
