jQuery(document).ready(function ($) {
    var selector = $('div.selector');
    var options = $('div.selector [class*="selector-option-table-"]');
    var imgBox = $('div.selector-img-box');
    var img = $('div.selector-img-box div')
    var width = selector.width();
    var height = selector.width();
    var couldClick = true;

    console.log(options);

    function click(e) {

        console.log(couldClick);

        if (!couldClick) return;

        couldClick = false;

        var t = $(e.target);
        var id = t.attr('id');
        console.log(t);

        $('div.selector-option-table-left').removeClass("selector-option-table-left-selected");
        $('div.selector-option-table-right').removeClass("selector-option-table-right-selected");

        while (1) {
            t = $(t.parent());
            id = t.attr('id');

            if ((typeof id !== typeof undefined && id !== false)) {
                break;
            }
        }

        console.log(id);

        if (t.hasClass("selector-option-table-right")) {
            t.addClass("selector-option-table-right-selected");
        }

        if (t.hasClass("selector-option-table-left")) {
            t.addClass("selector-option-table-left-selected");
        }

        id = id.replace("cell", "");
        id = parseInt(id);

        $('div.selector-img').each(function () {
            if ($(this).hasClass("selector-img-next") && !($(this).hasClass("selector-img-current"))) {
                $(this).removeClass("selector-img-next");
                $(this).addClass("selector-img-hidden");
            } else {

            }
        });

        var n = $('div.selector-img#img' + id);
        if (!(n.hasClass("selector-img-current"))) {
            n.removeClass("selector-img-hidden");
            n.addClass("selector-img-next");
        } else {
            couldClick = true;
            return;
        }

        console.log(id);

        $('div.selector-img-box').animate({opacity: 180}, {
            step: function (now, fx) {
                console.log(now);
                $(this).css("transform", "rotateY(" + now + "deg)");
            },
            duration: 300,
            complete: function() {
                $('div.selector-img').each(function () {
                    if ($(this).hasClass("selector-img-current")) {
                        $(this).removeClass("selector-img-current");
                        $(this).addClass("selector-img-hidden");
                    }
                });
                $('div.selector-img').each(function () {
                    if ($(this).hasClass("selector-img-next")) {
                        $(this).removeClass("selector-img-next");
                        $(this).addClass("selector-img-current");
                    }
                });

                $('div.selector-img-box').css("transform", "rotateY(0deg)");
                $('div.selector-img-box').css("text-indent", "0px");

                couldClick = true;
            }
        });
    }

    console.log(options);

    for (i = 0; i < options.length; i++) {
        var option = options[i];
        var id = "cell" + i;
        $(option).attr("id", "cell" + i);
        $(option).click(function (event) {
           click(event);
        });
    }


});
