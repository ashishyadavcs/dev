export const animateList = selector => {
    if (typeof document == "undefined") return;
    const slides = document.querySelectorAll(selector);
    slides[0]?.classList.add("active");
    slides.forEach((li, index) => {
        li.onclick = e => {
            slides.forEach(li => li.classList.remove("active"));
            li.classList.add("active");
        };
        li.addEventListener("animationend", () => {
            li.classList.remove("active");
            if (li.nextElementSibling) {
                li.nextElementSibling.classList.add("active");
            } else {
                slides[0]?.classList.add("active");
            }
        });
    });
};
