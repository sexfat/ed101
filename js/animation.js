console.log('start');



TweenMax.to('.box_basic', 3, {
    // x: '200px',
    // y: '200px',
    repeat: -1,
    // ease: Power0.easeNone,
    // ease: Back.easeOut,
    ease: SteppedEase.config(12),
    // repeatDelay:1,
    // yoyo:true
    // rotation: 360,
    // rotationX: 360,
    // rotationY: 360,
    transformOrigin:'10px top 400',
    transformPerspective: 3600,//攝影機鏡頭位置
    // scaleX : 3,
    // scaleY : 3,
    // opacity : 0,
    width: 700,
    height: 400,
    boxShadow: '4px 4px 20px red'
});