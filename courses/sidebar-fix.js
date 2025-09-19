// Highlight active TOC link based on scroll position
document.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("h1, h2, h3");
    let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

    let currentId = "";
    sections.forEach(section => {
        if (section.offsetTop - 80 <= scrollPos) {
            currentId = section.id;
        }
    });

    document.querySelectorAll(".toc a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
        }
    });
});
