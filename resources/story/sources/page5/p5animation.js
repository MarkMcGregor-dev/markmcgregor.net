var p5tl = anime.timeline({
    easing: "easeInOutQuad",
    autoplay: false
});

p5tl
    // add panel 1 entrance
    .add({
        targets: "#page5 > #panel1",
        delay: 0,
        duration: 2000,
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        scale: ["0.8", "1"],
        opacity: [0, 1]
    })

    // add panel 2 entrance
    .add({
        targets: "#page5 > #panel2",
        duration: 2000,
        delay: 250,
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        scale: ["0.8", "1"],
        opacity: [0, 1]
    })

    // add panel 3 entrance
    .add({
        targets: "#page5 > #panel3",
        duration: 2000,
        delay: 250,
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        scale: ["0.8", "1"],
        opacity: [0, 1]
    });

// boolean used to prevent diplicate animation triggers
var isPlayed = false;

// trigger function to be called from index.html
window.MarkAnimations.playp5tl = function() {
    if (!isPlayed) {
        p5tl.play();
    }
};
