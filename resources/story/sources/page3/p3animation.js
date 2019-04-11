// animate wrrrr jitter
anime({
    targets: "#page3 > #panel1 > #e3",
    easing: "easeInOutQuad",
    loop: true,
    direction: "alternate",
    duration: 50,
    translateX: ["-50%", "-50%"],
    translateY: ["-50%", "-50%"],
    scale: [1, 1.1]
});

var p3tl = anime.timeline({
    easing: "easeInOutQuad",
    autoplay: false
});

p3tl
    // add speech entrance
    .add({
        targets: "#page3 > #panel1 > #e2",
        duration: 2000,
        opacity: [0, 1],
        left: ["100", "80%"]
    });

// boolean used to prevent diplicate animation triggers
var isPlayed = false;

// trigger function to be called from index.html
window.MarkAnimations.playp3tl = function() {
    if (!isPlayed) {
        p3tl.play();
    }
};
