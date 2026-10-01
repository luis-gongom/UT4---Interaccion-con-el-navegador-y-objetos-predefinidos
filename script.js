const tocLinks = [...document.querySelectorAll('.toc a[href^="#"]')];
const sections = tocLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const activateCurrentSection = () => {
  const threshold = window.scrollY + window.innerHeight * 0.25;
  let currentId = sections[0]?.id;

  for (const section of sections) {
    if (section.offsetTop <= threshold) {
      currentId = section.id;
    }
  }

  for (const link of tocLinks) {
    const target = link.getAttribute("href").slice(1);
    link.classList.toggle("is-active", target === currentId);
  }
};

window.addEventListener("scroll", activateCurrentSection, { passive: true });
window.addEventListener("load", activateCurrentSection);
