const audio = document.getElementById("bronyAudio");
const hoverTarget = document.getElementById("h3HoverTarget");
const paragraphHoverTarget = document.getElementById("paragraphHover");
const bronyImage = document.getElementById("bronyAudioImage");
hoverTarget.addEventListener('mouseover', playAudio);
paragraphHoverTarget.addEventListener('mouseover', play3rdAudio);
const moan = document.getElementById("rx8shit");
const scrollers = document.querySelectorAll(".scroller");
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
}

function addAnimation() {
    scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", true);
    });
}

function showImage() {
    bronyImage.style.visibility = "visible";
}
function hideImage() {
    bronyImage.style.visibility = "hidden";
}
function playAudio() {
    audio.play();
    showImage();
    audio.addEventListener("ended", () => {
        hideImage();
    });
}


function show3rdParagraph() {
    moan.style.visibility = "visible";
}

function hide3rdParagraph() {
    moan.style.visibility = "hidden";
}

function play3rdAudio() {
    moanAudio.play();
    show3rdParagraph();
    moanAudio.addEventListener("ended", () => {
        hide3rdParagraph();
    });
}