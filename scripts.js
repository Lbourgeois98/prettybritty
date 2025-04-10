// Initialize Particles.js for Sparkle Effect
particlesJS("sparkle-canvas", {
  particles: {
    number: { value: 100 },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.7 },
    size: { value: 3 },
    move: { enable: true, speed: 2 },
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } },
  },
});

// GSAP Animation for Snow Leopards
gsap.to("#leopard1", {
  x: 100,
  yoyo: true,
  repeat: -1,
  duration: 2,
  ease: "power1.inOut",
});

gsap.to("#leopard2", {
  x: -100,
  yoyo: true,
  repeat: -1,
  duration: 3,
  ease: "power1.inOut",
});

// Add Hover Effects and Sound
const leopardSound = new Audio('assets/roar.mp3'); // Add a roar sound effect

document.querySelectorAll('.snow-leopard').forEach(leopard => {
  leopard.addEventListener('mouseenter', () => {
    gsap.to(leopard, { scale: 1.2, duration: 0.3 });
    leopardSound.play();
  });

  leopard.addEventListener('mouseleave', () => {
    gsap.to(leopard, { scale: 1, duration: 0.3 });
  });

  leopard.addEventListener('click', () => {
    alert(`You clicked on ${leopard.id}!`);
  });
});