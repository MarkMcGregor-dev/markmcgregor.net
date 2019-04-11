// timeline for triggered events
var p1tl = anime.timeline({
    easing: "easeInOutQuad",
    autoplay: false
});

p1tl
    // add panel 1 entrance
    .add({
        targets: "#page1 > #panel1 > #e1",
        duration: 2000,
        opacity: [0, 1],
        left: ["20%", "50%"]
    })

    // add panel 2 entrance
    .add({
        targets: "#page1 > #panel2 > #e1",
        duration: 2000,
        opacity: [0, 1],
        left: ["10%", "40%"]
    })

    // invoke scroll icon
    .add({
        targets: "#page1 > .scrollArrow",
        duration: 1000,
        opacity: [0, 1]
    });

// boolean used to prevent diplicate animation triggers
var isPlayed = false;

// trigger function to be called from index.html
window.MarkAnimations.playp1tl = function() {
    if (!isPlayed) {
        p1tl.play();
    }
};
