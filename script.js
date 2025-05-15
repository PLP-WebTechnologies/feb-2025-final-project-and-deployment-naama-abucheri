// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll for nav links
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetID = link.getAttribute("href");
      if (targetID.startsWith("#")) {
        document.querySelector(targetID).scrollIntoView({ behavior: "smooth" });
      } else {
        // For multi-page links, just go there
        window.location.href = targetID;
      }
    });
  });

  // Add hover effect for nav links - subtle pink underline
  navLinks.forEach(link => {
    link.addEventListener("mouseenter", () => {
      link.style.textDecoration = "underline";
      link.style.textDecorationColor = "#d48abf";
    });
    link.addEventListener("mouseleave", () => {
      link.style.textDecoration = "none";
    });
  });

  // Interactive highlight box: gently pulse on mouse over
  const highlights = document.querySelectorAll(".highlight");
  highlights.forEach(box => {
    box.style.transition = "box-shadow 0.3s ease-in-out";
    box.addEventListener("mouseenter", () => {
      box.style.boxShadow = "0 0 15px 5px rgba(212, 138, 191, 0.6)";
    });
    box.addEventListener("mouseleave", () => {
      box.style.boxShadow = "none";
    });
  });

  // Back to top button (creates and handles button)
  const btn = document.createElement("button");
  btn.textContent = "↑ Top";
  btn.style.position = "fixed";
  btn.style.bottom = "30px";
  btn.style.right = "30px";
  btn.style.padding = "10px 15px";
  btn.style.backgroundColor = "#d48abf";
  btn.style.color = "white";
  btn.style.border = "none";
  btn.style.borderRadius = "25px";
  btn.style.cursor = "pointer";
  btn.style.display = "none";
  btn.style.fontWeight = "bold";
  btn.style.boxShadow = "0 4px 8px rgba(212, 138, 191, 0.5)";
  btn.style.zIndex = "1000";
  document.body.appendChild(btn);

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  });

  // Simple image gallery modal for gallery.html (if gallery images have class .gallery-img)
  const galleryImgs = document.querySelectorAll(".gallery-img");
  if (galleryImgs.length > 0) {
    const modal = document.createElement("div");
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100vh";
    modal.style.backgroundColor = "rgba(0,0,0,0.8)";
    modal.style.display = "none";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.zIndex = "2000";
    modal.style.cursor = "pointer";

    const modalImg = document.createElement("img");
    modalImg.style.maxWidth = "90%";
    modalImg.style.maxHeight = "90%";
    modalImg.style.borderRadius = "15px";
    modal.appendChild(modalImg);

    document.body.appendChild(modal);

    galleryImgs.forEach(img => {
      img.style.cursor = "pointer";
      img.addEventListener("click", () => {
        modalImg.src = img.src;
        modal.style.display = "flex";
      });
    });

    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Optional: Add a cute welcome alert with delay
  setTimeout(() => {
    alert("Welcome to WanderChic! Let's make your travel dreams come true 💖");
  }, 1500);
});
