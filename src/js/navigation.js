// Sticky navigation bar
const siteHeader = document.querySelector(".site-header");
const stickyBar = document.querySelector(".sticky-bar");

if (siteHeader && stickyBar) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      stickyBar.classList.toggle(
        "is-visible",
        !entry.isIntersecting
      );
    },
    {
      threshold: 0,
    }
  );

  observer.observe(siteHeader);
}

// Menu button and Navigation Panel
const menuButton = document.querySelector(".menu-button");
const navigationPanel = document.querySelector(".navigation-panel");
const navigationCloseButton = document.querySelector(
  ".navigation-close-button"
);
const navigationBackdrop = document.querySelector(
  ".navigation-menu-backdrop"
);

function openNavigation() {
  navigationPanel.classList.add("is-open");
  document.body.classList.add("navigation-open");
}

function closeNavigation() {
  navigationPanel.classList.remove("is-open");
  document.body.classList.remove("navigation-open");
}

menuButton?.addEventListener("click", openNavigation);

navigationCloseButton?.addEventListener("click", closeNavigation);

navigationBackdrop?.addEventListener("click", closeNavigation);

// Navigation anchor links
document.querySelectorAll(".navigation-menu a").forEach((link) => {
    const href = link.getAttribute("href");

    if(!href || !href.startsWith("#")) return;

    link.addEventListener("click", (event) => {
        event.preventDefault();
        const target = document.querySelector(href);

        if(!target) return;

        closeNavigation();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});