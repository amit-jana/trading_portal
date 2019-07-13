$(document).ready(function() {

    $(".dropdown-menu li a").click(function() {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });


    // Partner slider
    $('#partner-slider').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    }); // end of #partner-slider


    $('.map_canvas').addClass('scrolloff'); // set the pointer events to none on doc ready
    $('#map').on('click', function() {
        $('.map_canvas').removeClass('scrolloff'); // set the pointer events true on click
    }); // you want to disable pointer events when the mouse leave the canvas area;

    $(".map_canvas").mouseleave(function() {
        $('.map_canvas').addClass('scrolloff'); // set the pointer events to none when mouse leaves the map area
    }); //end of Turn off Google Map zooming


    var h = $('.team-img-detail').height();
    var mbottom = h;
    h = h / 2;
    var top = $('.team-box').height();
    top = (top / 2) - h;
    var win = $(window).width();

    if (win >= 768) {
        $(".team-img-detail").css("top", top);
    } else {
        $(".team-img-detail").css({
            "bottom": -mbottom + 20,
            "left": "0",
            "width": "100%"
        });
        $(".team-box").css("margin-bottom", mbottom + 30);
    } // end of Team box height


    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    }); //end of Pop Up


    $(".dropdown-menu li a").click(function() {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    }); //end of Dropdown Toggle


    $('.nav-toggle').click(function() {
        var collapse_content_selector = $(this).attr('href');
        var toggle_switch = $(this);
        $(collapse_content_selector).toggle(function() {
            if ($(this).css('display') == 'none') {
                toggle_switch.html('Read More');
            } else {
                toggle_switch.html('Read Less');
            }
        });
    }); //end of Read More


}); // end of $(document).ready(function()