console.log('start');



TweenMax.to('.box_basic', 3, {
    // x: '200px',
    // y: '200px',
    repeat: 1,
    // ease: Power0.easeNone,
    // ease: Back.easeOut,
    ease: SteppedEase.config(12),
    // repeatDelay:1,
    // yoyo:true
    // rotation: 360,
    // rotationX: 360,
    // rotationY: 360,
    transformOrigin: '10px top 400',
    transformPerspective: 3600, //攝影機鏡頭位置
    // scaleX : 3,
    // scaleY : 3,
    // opacity : 0,
    width: 700,
    height: 400,
    boxShadow: '4px 4px 20px red'
});

// to from fromTo
TweenMax.to('.box_to', 2, {
    x: 300
});

TweenMax.from('.box_from', 2, {
    x: 300
});
TweenMax.fromTo('.box_fromTo', 1, {
    x: 100 //a
}, {
    x: 500 //b
})


// TweenMax.staggerTo('.box_staggerTo' , 1 , {
//     x: 200
// }, .3);//間隔秒數


function animation() {
    var tlmax = new TimelineMax({
        //    repeat: -1,
        yoyo: true

    });

    tlmax.to('.box_a', 2, {
        x: 300
    }).to('.box_a', 2, {
        y: 300
    }).to('.box_a', 2, {
        x: 400
    }).to('.box_a', 1, {
        rotation: 360
    })

}

animation();



// TweenMax.to('.box_a', 2, {
//     x: 300,
//     delay: 1
// })
// TweenMax.to('.box_b', 2, {
//     y: 300,
//     delay: 2
// })
// TweenMax.to('.box_c', 2, {
//     y: 300,
//     x: 400
// });