// Sélectionne toutes les images
const images = document.querySelectorAll("img");

// Crée un observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // Si l'image est visible à l'écran
      if (entry.isIntersecting) {
        entry.target.classList.add("scroll-up");
      }
    });
  },
  {
    threshold: 0.2, // déclenche à 20% de visibilité
  }
);

// Observe chaque image
images.forEach((img) => {
  observer.observe(img);
});
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX - 10}px`;
  cursor.style.top = `${e.clientY - 10}px`;
});
const boxes = document.querySelectorAll(".mat");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // Supprime la classe active de toutes les divs
    boxes.forEach((b) => b.classList.remove("active"));
    // Ajoute la classe active à la div cliquée
    box.classList.add("active");
    document.querySelector("body").style.overflow = "hidden";
    box.appendChild(p);
  });
});
