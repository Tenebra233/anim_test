var animation = bodymovin.loadAnimation({
    container: document.getElementById('anim'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'data.json'
})

var div = document.getElementById('anim');

div.onmouseenter = function () {
        animation.setDirection(1);
        animation.goToAndPlay(0)
    // animation.play();
}

div.onmouseleave = function () {
    animation.setDirection(-1);


    // ferma completamente l'animazione e resetta i frame
    // animation.stop();
}
