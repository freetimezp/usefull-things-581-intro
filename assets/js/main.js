const content = document.querySelector(".content-text");

window.addEventListener("scroll", () => {
    const scrollProgress =
        window.pageYOffset /
        (document.documentElement.scrollHeight - window.innerHeight);
    content.style.top = 80 - scrollProgress * 100 + "%";
});
