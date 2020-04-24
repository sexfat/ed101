console.log('start');



TweenMax.to('.box_basic', 1, {
    x: '200px',
    y: '200px',
    repeat: -1,
    // ease: Power0.easeNone,
    ease: Back.easeOut,
    repeatDelay:1,
    // yoyo:true
});