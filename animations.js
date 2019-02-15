// Text area IN timeline
var textTL = anime.timeline({
easing: "easeInOutQuad"
});

textTL.add({
targets: "#TextArea #title",
translateY: "-50%"
});

textTL.add({
targets: "#TextArea #title",
opacity: 1,
duration: 2000
});

textTL.add({
targets: "#TextArea #title",
translateY: "-150%"
});

textTL.add(
{
    targets: "#TextArea table",
    opacity: 1
},
"-=800"
);

// Listeners for menu buttons
var buttons = document.querySelectorAll("#TitleSection td");

buttons.forEach(function (element) {
document.getElementById(element.id).onmouseenter = function () {
    enterButton(this);
};

document.getElementById(element.id).onclick = function () {
    buttonScroll(this);
};

document.getElementById(element.id).onmouseleave = function () {
    exitButton(this);
};
});

// Listeners for image gallery
var pieces = document.querySelectorAll("#ArtworkSection #Gallery div");

pieces.forEach(function (element) {
document.getElementById(element.id).onmouseenter = function () {
    enterArtwork(this);
};

document.getElementById(element.id).onmouseleave = function () {
    exitArtwork(this);
};
});

function buttonScroll(element) {
if (element.id == "aboutButton") {
    scrollDown(document.getElementById("AboutSection").offsetTop, 500);
} else if (element.id == "artworkButton") {
    scrollDown(document.getElementById("ArtworkSection").offsetTop, 1000);
} else if (element.id == "contactButton") {
    scrollDown(document.getElementById("ContactSection").offsetTop, 1500);
}
}

function scrollDown(amount, duration) {
// window.scrollTo(0,amount);
anime({
    targets: window.document.scrollingElement || window.document.body || window.document.documentElement,
    scrollTop: amount,
    duration: duration,
    easing: 'easeInOutQuad'
});
}

function animateButton(element, isEntering) {
var scale;
var duration;
var elasticity;

if (isEntering) {
    scale = 1.2;
    duration = 800;
    elasticity = 400;
} else {
    scale = 1.0;
    duration = 600;
    elasticity = 300;
}

anime.remove(element);
anime({
    targets: element,
    scale: scale,
    duration: duration,
    elasticity: elasticity
});
}

function enterButton(element) {
animateButton(element, true);
}

function exitButton(element) {
animateButton(element, false);
}

function enterArtwork(element) {
var filter = "grayscale(0)";

if (element.id == "artwork1")
    filter = "invert(0)";
if (element.id == "artwork4")
    filter = "sepia(2)";

anime.remove(element);
anime({
    targets: element,
    duration: 1000,
    filter: filter,
    border: "2px solid",
});
}

function exitArtwork(element) {
var filter = "grayscale(1)";

if (element.id == "artwork1")
    filter = "invert(1)";
if (element.id == "artwork4")
    filter = "sepia(0)";

anime.remove(element);
anime({
    targets: element,
    duration: 1000,
    filter: filter,
    border: "0px solid",
});
}