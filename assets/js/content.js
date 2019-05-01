//$(document).ready(function () {
//    $('#fullpage').fullpage({
//        anchors: ["home","about","travel","dance","connect"],
//        menu: "#menu",
//        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
//        afterLoad: function (origin, destination, section) {
//            if (destination.index == 1) {
//                $('#wave').animate({
//                    left: '0px'
//                }, 1000, function () {
//
//                });
//            }
//        },
//        animateAnchor: false,
//        scrollOverflow: true,
//    });
//    
//}
//$('#arrow-below').click(function (e) {
//        e.preventDefault();
//        fullpage_api.moveSectionDown();
//    });

$(document).ready(function () {
    $('#fullpage').fullpage({
        anchors: ["home", "about", "travel", "dance", "connect"],
        menu: "#menu",
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        afterLoad: function (origin, destination, section) {
            if (destination.index == 1) {
                $('#wave').animate({
                    left: '0px'
                }, 1000, function () {

                });
            }
        },
        animateAnchor: false,
        scrollOverflow: true,
    });


//    let curr_mode = sessionStorage.getItem("mode");
//
//    if (curr_mode == "black") {
//        fontChangeBlack();
//        $('#menu-bar-toggle').prop('checked', true);
//        $('#regular-toggle').prop('checked', true);
//    } else {
//        fontChangeWhite();
//        $('#menu-bar-toggle').prop('checked', false);
//        $('#regular-toggle').prop('checked', false);
//    }


    $('#arrow-below').click(function (e) {
        e.preventDefault();
        fullpage_api.moveSectionDown();
    });

//    $('#regular-toggle').on('change', function () {
//        if ($(this).is(':checked')) {
//
//            $('#menu-bar-toggle').prop('checked', true);
//            $('.trans').fadeOut(150, function () {
//                fontChangeBlack();
//                sessionStorage.setItem("mode", "black");
//                $('.trans').fadeIn(150);
//            });
//        } else {
//            $('#menu-bar-toggle').prop('checked', false);
//            $('.trans').fadeOut(150, function () {
//                fontChangeWhite();
//                sessionStorage.setItem("mode", "white");
//                $('.trans').fadeIn(150);
//            });
//        }
//    });

//    $('#menu-bar-toggle').on('change', function () {
//        $('#regular-toggle').click();
//    })
    
});
