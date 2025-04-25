const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

gsap.from(".fade-in", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});


function copyCode(btn) {
  const pre = btn.nextElementSibling;
  const text = pre.innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    }, 2000);
  });
}