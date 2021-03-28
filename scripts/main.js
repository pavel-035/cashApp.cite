$(window).on('mousemove', function(e) {
    var x = e.clientX;
    var y = e.clientY;
    var windowWidth = $(window).width() / 2;
    var windowHeight = $(window).height() / 2;
    $('.translateOnMouseMove').each(function() {
        var translateSpeed = $(this).attr('data-animateSpeed');
        $(this).css({
            transform: `translate( ${ (windowWidth - x)/translateSpeed}px, ${( windowHeight - y )/translateSpeed}px)`
        });
    });
    $('.rotateOnMouseMove').each(function() {
        var rotateSpeed = $(this).attr('data-animateSpeed');
        $(this).css({
            transform: `rotateX( ${ (windowHeight - y)/rotateSpeed}deg) rotateY(${( windowWidth - x )/rotateSpeed * -1 }deg)`
        });
        console.log(windowWidth, windowHeight)
    });
});