//administration Inhaltsverzeichnis animation
function button() {
    const aside = document.getElementById("aside");
    if (window.getComputedStyle(aside).display === "none") {
        aside.style.display = "block";
        setTimeout(() => {
            aside.style.opacity = 1;
        }, this.animationDelay + 20);
    } else {
        aside.style.display = "none";
        aside.style.opacity = 0;
    }
}
