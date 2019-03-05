(function($) {

    // Animate to section when nav is clicked
    $('#menu a').click(function(e) {

        // Treat as normal link if no-scroll class
        if ($(this).hasClass('no-scroll')) return;

        e.preventDefault();
        var heading = $(this).attr('href');
        var scrollDistance = $(heading).offset().top;

        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, Math.abs(window.pageYOffset - $(heading).offset().top) / 1);

        // Hide the menu once clicked if mobile
        if ($('header').hasClass('active')) {
            $('header, body').removeClass('active');
        }
    });

    // Scroll to top
    $('#to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });

    // Scroll to first element
    $('#dashboard-down span').click(function() {
        var scrollDistance = $('#dashboard').next().offset().top;
        $('html, body').animate({
            scrollTop: scrollDistance + 'px'
        }, 500);
    });


    // Open mobile menu
    $('#mobile-menu-open').click(function() {
        $('header, body').addClass('active');
    });

    // Close mobile menu
    $('#mobile-menu-close').click(function() {
        $('header, body').removeClass('active');
    });

    // Load additional projects
    $('#view-more-projects').click(function(e){
        e.preventDefault();
        $(this).fadeOut(300, function() {
            $('.more-projects').fadeIn(300);
        });
    });

    // ScrollMagic/TweenMax - animations
    var controller = new ScrollMagic.Controller();

        // Animation (dashboard)- sliding letters
        var tween1 = TweenMax.staggerFromTo(".animate-sub", 2, {left: -1400}, {left: 0, ease: Back.easeOut}, 0.15);
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger-sub", duration: 300})
            .setTween(tween1)
            .triggerHook(0.7)
            .addTo(controller);

        //Animate (about) - rotating profile image
        var mouseTopPerc = 0;
        function getMousePos() {
            return (mouseTopPerc * 400) + 10;
        }
        $("body").on("mousemove", function (e) {
            mouseTopPerc = e.clientY/$(this).innerHeight();
        });

        var tween = TweenMax.to("#animate-rotate", 0.5, {rotationY: 180});
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger-rotate1", duration: 200})
                        .setTween(tween)
                        .triggerHook(0.8)
                        .addTo(controller);

        var tween = TweenMax.to("#animate-rotate", 0.5, {rotationY: 360});
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger-rotate2", duration: 200})
                        .setTween(tween)
                        .triggerHook(0)
                        .addTo(controller);

        // Animation (projects)- sliding images
        function animateImages(num) {
            var tween = TweenMax.to("#animate"+num, 1, {className: "+=move"});
            var scene = new ScrollMagic.Scene({triggerElement: "#trigger"+num, duration: 400, offset: -200})
                .setTween(tween)
                .addTo(controller);
        }
        for (index = 1; index < 13; index++) {
            animateImages([index]);
        }

        // Animation (about) - SVG path - About me
        function pathPrepareAbout ($el) {
            var lineLengthAbout = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLengthAbout);
            $el.css("stroke-dashoffset", lineLengthAbout);
        }

        var $wordAbout1 = $("path#wordAbout1");
        var $wordAbout2 = $("path#wordAbout2");
        var $wordAbout3 = $("path#wordAbout3");
        var $wordAbout4 = $("path#wordAbout4");
        var $wordAbout5 = $("path#wordAbout5");

        pathPrepareAbout($wordAbout1);
        pathPrepareAbout($wordAbout2);
        pathPrepareAbout($wordAbout3);
        pathPrepareAbout($wordAbout4);
        pathPrepareAbout($wordAbout5);

        var tweenAbout = new TimelineMax()
            .add(TweenMax.to($wordAbout1, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to($wordAbout2, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to($wordAbout3, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to($wordAbout4, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to($wordAbout5, 0.8, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);

        var scene = new ScrollMagic.Scene({triggerElement: "#trigger-aboutMe", duration: 200, tweenChanges: true})
                        .setTween(tweenAbout)
                        .triggerHook(0.8)
                        .addTo(controller);

        // Animation (projects) - SVG path - Projects
        function pathPrepareProjects ($el) {
    		var lineLengthProjects = $el[0].getTotalLength();
    		$el.css("stroke-dasharray", lineLengthProjects);
    		$el.css("stroke-dashoffset", lineLengthProjects);
    	}

    	var $wordProjects1 = $("path#wordProjects1");
    	var $wordProjects2 = $("path#wordProjects2");
    	var $wordProjects3 = $("path#wordProjects3");
    	var $wordProjects4 = $("path#wordProjects4");
    	var $wordProjects5 = $("path#wordProjects5");

    	pathPrepareProjects($wordProjects1);
    	pathPrepareProjects($wordProjects2);
    	pathPrepareProjects($wordProjects3);
    	pathPrepareProjects($wordProjects4);
    	pathPrepareProjects($wordProjects5);

    	var tweenProjects = new TimelineMax()
    		.add(TweenMax.to($wordProjects1, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
    		.add(TweenMax.to($wordProjects2, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
    		.add(TweenMax.to($wordProjects3, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}))
    		.add(TweenMax.to($wordProjects4, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))
    		.add(TweenMax.to($wordProjects5, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
    		.add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);

    	var scene = new ScrollMagic.Scene({triggerElement: "#trigger-projects", duration: 200, tweenChanges: true})
                        .setTween(tweenProjects)
                        .triggerHook(0.8)
                        .addTo(controller);

        // Animation (skilks) - SVG path - Skills
        function pathPrepareSkills ($el) {
            var lineLengthSkills = $el[0].getTotalLength();
            $el.css("stroke-dasharray", lineLengthSkills);
            $el.css("stroke-dashoffset", lineLengthSkills);
        }

        var $wordSkills1 = $("path#wordSkills1");
        var $wordSkills2 = $("path#wordSkills2");
        var $wordSkills3 = $("path#wordSkills3");

        pathPrepareSkills($wordSkills1);
        pathPrepareSkills($wordSkills2);
        pathPrepareSkills($wordSkills3);

        var tweenSkills = new TimelineMax()
            .add(TweenMax.to($wordSkills1, 0.4, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to($wordSkills2, 0.8, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to($wordSkills3, 0.2, {strokeDashoffset: 0, ease:Linear.easeNone}))
            .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);

        var scene = new ScrollMagic.Scene({triggerElement: "#trigger-skills", duration: 200, tweenChanges: true})
                        .setTween(tweenSkills)
                        .triggerHook(0.8)
                        .addTo(controller);

        // Animation (contact) - Wider Btn - Email Me
        var tweenEmailMe = TweenMax.to("#animate-emailMe", 1, {className: "+=btn-wider"});

        var scene = new ScrollMagic.Scene({triggerElement: "#trigger-emailMe", duration: 200, offset: -50})
                        .setTween(tweenEmailMe)
                        .triggerHook(0.9)
                        .addTo(controller);

})(jQuery);
