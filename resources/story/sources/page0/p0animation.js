window.MarkAnimations = window.MarkAnimations || {};

// Bg looping animation
anime({
    targets: "#page0 > #panel1 > #e2",
    duration: 2000,
    direction: "alternate",
    loop: true,
    easing: "easeInOutQuad",
    top: ["60%", "58%"]
});

// timeline for triggered animations
var p0tl = anime.timeline({
    easing: "easeInOutQuad",
    autoplay: false
});

p0tl
    // add title animation
    .add({
        targets: "#page0 > #panel1 > #e1",
        delay: 700,
        duration: 2000,
        opacity: [0, 1]
    })

    // add author animation
    .add({
        targets: "#page0 > #panel1 > #e3",
        duration: 2000,
        opacity: [0, 1]
    })

    // invoke scroll icon
    .add({
        targets: "#page0 > .scrollArrow",
        duration: 1000,
        opacity: [0, 1]
    });

// boolean used to prevent diplicate animation triggers
var isPlayed = false;

// trigger function to be called from index.html
window.MarkAnimations.playp0tl = function() {
    if (!isPlayed) {
        p0tl.play();
    }
};
