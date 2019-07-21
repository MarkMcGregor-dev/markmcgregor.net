var p4tl = anime.timeline({
    easing: "easeInOutQuad",
    autoplay: false
});

p4tl
    // animate speech entrance
    .add({
        targets: "#page4 > #panel1 > #e2",
        duration: 1000,
        opacity: [0, 1],
        left: ["5%", "22%"],
        top: ["0%", "10%"]
    })

    // animate jack detatching
    .add({
        targets: "#page4 > #panel1 > #e4",
        delay: 2000,
        duration: 3000,
        top: ["45%", "50%"],
        left: ["30%", "42%"],
        translateX: ["-50%", "-50%"],
        translateY: ["-50%", "-50%"],
        rotate: 20
    })

    .add(
        {
            targets: "#page4 > #panel1 > #e3",
            duration: 3000,
            translateX: ["-50%", "-50%"],
            translateY: ["-50%", "-50%"],
            rotate: 15
        },
        "1500"
    );

// boolean used to prevent diplicate animation triggers
var isPlayed = false;

// trigger function to be called from index.html
window.MarkAnimations.playp4tl = function() {
    if (!isPlayed) {
        p4tl.play();
    }
};
