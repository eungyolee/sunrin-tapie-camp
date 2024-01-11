const cat = document.querySelector("#cat");
const score = document.querySelector("#score");
const isMobile = /Android|iPhone/i.test(navigator.userAgent);

let count;
if (localStorage.getItem("count") === null) {
    count = 0;
} else {
    count = localStorage.getItem("count");
}

score.innerText = count;

cat.addEventListener(isMobile ? "touchstart" : "mousedown", () => {
    cat.src = "./assets/img/waaaa.png";
    const audio = new Audio("./assets/pop.mp3");
    audio.play();
    score.innerText = ++count;
    localStorage.setItem("count", count);
});

cat.addEventListener(isMobile ? "touchend" : "mouseup", () => {
    cat.src = "./assets/img/normal.png";
});

cat.addEventListener(isMobile ? "touchmove" : "mouseout", () => {
    cat.src = "./assets/img/normal.png";
})