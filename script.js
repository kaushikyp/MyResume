const observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      entry.target.classList.add("in-view");
    }
  }
}, { threshold: 0.16 });

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
