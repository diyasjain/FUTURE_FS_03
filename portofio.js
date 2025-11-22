// Mobile Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.style.display =
        navLinks.style.display === "flex" ? "none" : "flex";
});

// Contact form (demo alert)
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Your message has been sent!");
});
