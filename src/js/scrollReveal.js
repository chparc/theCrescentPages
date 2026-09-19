const revealElements = document.querySelectorAll(".content-section");
const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    },
    {
        threshold: 0.1,
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    observer.observe(element);
});