$(function () {
    // Ajax Auth
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });

    // AutoInit component
    M.AutoInit();

    // SearchBox
    $('#searchBoxButton').click(function () {
        $('#searchBox').toggle(200);
    });

    // Resize content margin
    if ($(window).width() < 992) {
        $("div.col:not(.colNotChange)").removeClass("col").addClass("colChangeFlag");
    }
    $(window).resize(function () {
        if ($(window).width() < 992) {
            $("div.col:not(.colNotChange)").removeClass("col").addClass("colChangeFlag");
        } else {
            $("div.colChangeFlag:not(.colNotChange)").addClass("col");
        }
    });

    // Header image animate
    $('header img:first').siblings().hide();
    setInterval(function () {
        $('header img:visible').fadeOut('fast', function () {
            $(this).next('img')[0] === undefined ? $('img:first').fadeIn("fast") : $(this).next('img').fadeIn("slow");
        });
    }, 1000 * 4);

    // Active the hidden Block
    $(".activeTrigger").hover(function () {
        $(this).find(".activeArea").fadeToggle(400).toggleClass("hide");
    });

    // Headroom
    $("#headroom").headroom({
        tolerance: 5,
        offset: 100,
        classes: {
            initial: "headroom-initial",
            pinned: "headroom-pin",
            unpinned: "headroom-unpinned",
            top: "headroom-top",
            notTop: "headroom-not-top",
            bottom: "headroom-bottom",
            notBottom: "headroom-not-bottom"
        },
        onPin: function () {
        },
        onUnpin: function () {
        },
        onTop: function () {
        },
        onNotTop: function () {
        },
        onBottom: function () {
        },
        onNotBottom: function () {
        }
    });
});