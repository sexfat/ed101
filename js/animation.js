console.log('start');
//控制器
var controller = new ScrollMagic.Controller();



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



//動畫
var tweenscroll = TweenMax.to('.box_scroll', 1, {
    x: 400
});


//scoll 觸發事件
new ScrollMagic.Scene({
    triggerElement: '#keypoint1',
    offset: 100,
    triggerHook: .2
}).setTween(tweenscroll).addIndicators({
    name: 'keypoint01'
}).addTo(controller);


//第二個場景
var tweenline = new TimelineMax();

tweenline.to('.box_scroll01', 1, {
    x: 300
}).to('.box_scroll01', 1, {
    y: 400
}).to('.box_scroll01', 1, {
    x: 500
})



//scoll 觸發事件
new ScrollMagic.Scene({
    triggerElement: '#keypoint2',
    offset: 0,
    // triggerHook: .3,
    // duration: 400,
    reverse: true,
}).setClassToggle('.bg4', 'on').setTween(tweenline).addIndicators({
    name: 'keypoint02'
}).addTo(controller);
//.setClassToggle('.bg4','on') 選擇到.bg4 物件 然後動態加入on


// 固定住場景
var tlstick = new TimelineMax();
//動畫執行
// tlstick.fromTo('.text1', 1, {
//     x: -100,
//     opacity: 0
// }, {
//     x: 0,
//     opacity: 1
// }).fromTo('.text2', 1, {
//     x: -100,
//     opacity: 0
// }, {
//     x: 0,
//     opacity: 1
// }).fromTo('.text3', 1, {
//     x: -100,
//     opacity: 0
// }, {
//     x: 0,
//     opacity: 1
// }).fromTo('.text4', 1, {
//     y: -100,
//     opacity: 0
// }, {
//     y: 0,
//     opacity: 1
// })
//觸發事件

tlstick.to('.b04', 1, {
    y: '120%',
    scale: 1.2,
    backgroundColor: '#57ffa8'
 }).to('.b03', 1, {
    y: '120%',
    scale: 1.2,
    backgroundColor: '#ffbd61'
 }).to('.b02', 1, {
    y: '120%',
    scale: 1.2,
    backgroundColor: '#cca4ff'
 }).to('.b01', 1, {
    y: '120%',
    scale: 1.2,
    backgroundColor: '#bcfa1e'
})


new ScrollMagic.Scene({
    triggerElement: '#keypoint3',
    offset: 0,
    triggerHook: 0,
    duration: '400%',

}).setPin('.bg5').setTween(tlstick).addIndicators({
    name: 'keypoint03'
}).addTo(controller);



//固定場景

var wipeAnimation = new TimelineMax();
wipeAnimation.fromTo(".panel.yellow", 1, {
    x: "-100%"
}, {
    x: "0%",
    ease: Linear.easeNone
}) // in from left
    .fromTo(".panel.green", 1, {
        x: "100%"
    }, {
        x: "0%",
        ease: Linear.easeNone
    }) // in from right
    .fromTo(".panel.red", 1, {
        y: "-100%"
    }, {
        y: "0%",
        ease: Linear.easeNone
    }); // in from top


//觸發事件
new ScrollMagic.Scene({
    triggerElement: '#keypoint4',
    offset: 0,
    triggerHook: 0,
    duration: '300%',

}).setPin('.bg6').setTween(wipeAnimation).addIndicators({
    name: 'keypoint04'
}).addTo(controller);


//滾動式差

var parallaxs = new TimelineMax();


var parallax_01 = TweenMax.to('.boxpallax1', 1, {
    y: '-10%'
})

var parallax_02 = TweenMax.to('.boxpallax2', 1, {
    y: '50%'
})

var parallax_03 = TweenMax.to('.boxpallax3', 1, {
    y: '-120%'
})


parallaxs.add([parallax_01, parallax_02, parallax_03]);



//scoll 觸發事件
new ScrollMagic.Scene({
    triggerElement: '#keypoint5',
    duration: '100%'
}).setTween(parallaxs).addIndicators({
    name: 'keypoint05'
}).addTo(controller);












