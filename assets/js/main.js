$(document).ready(function ($) {
    "use strict";

    // WOW Js Active
    new WOW().init();

    // $("#m_menu").click(function () {
    //     $("#d_menu").toggleClass("menu_show")
    // });


    $(".off_canvas_menu").hide();
    $("#m_menu").click(function () {
        $(".off_canvas_menu").show(500);
    });

    $("#m_close").click(function () {
        $(".off_canvas_menu").hide(500);
    });


}(jQuery));


