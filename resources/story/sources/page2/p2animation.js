// animate wrrrr jitter
anime({
    targets: "#page2 > #panel2 > #e3",
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
    duration: 50,
    scale: [1, 1.1]
});

// animate swirl rotation
anime({
    targets: "#page2 > #panel2 > #e2",
    easing: "linear",
    loop: true,
    direction: "forward",
    duration: 7000,
    translateX: ["-50%", "-50%"],
    translateY: ["-50%", "-50%"],
    rotate: [0, 360]
});

// animate panel 3 beeping
anime({
    targets: "#page2 > #panel3 > #e2",
    easing: "easeInOutExpo",
    duration: 500,
    direction: "alternate",
    loop: true,
    translateX: ["-50%", "-50%"],
    translateY: ["-50%", "-50%"],
    scale: [1, 1.2]
});

var p2tl = anime.timeline({
    easing: "easeInOutQuad",
    autoplay: false
});

p2tl
    // add panel 1 entrance
    .add({
        targets: "#page2 > #panel1",
        duration: 2000,
        left: ["20%", "26%"],
        opacity: [0, 1]
    })

    // add panel 1 speech entrance
    .add({
        targets: "#page2 > #panel1 > #e2",
        delay: 1000,
        duration: 1000,
        opacity: [0, 1],
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        scale: [0.5, 1]
    })

    // add panel 3 entrance
    .add({
        targets: "#page2 > #panel3",
        delay: 2000,
        duration: 2000,
        left: ["68%", "74%"],
        opacity: [0, 1]
    })

    // add wrrrr entrance
    .add({
        targets: "#page2 > #panel2 > #e3",
        delay: 500,
        duration: 500,
        opacity: [0, 1]
    })

    // add swirl entrance
    .add({
        targets: "#page2 > #panel2 > #e2",
        delay: 500,
        duration: 2000,
        opacity: [0, 1]
    })

    // add beeping entrance
    .add({
        targets: "#page2 > #panel3 > #e2",
        duration: 500,
        opacity: [0, 1]
    })

    // invoke scroll icon
    .add({
        targets: "#page2 > .scrollArrow",
        duration: 1000,
        opacity: [0, 1]
    });

// boolean used to prevent diplicate animation triggers
var isPlayed = false;

// trigger function to be called from index.html
window.MarkAnimations.playp2tl = function() {
    if (!isPlayed) {
        p2tl.play();
    }
};
