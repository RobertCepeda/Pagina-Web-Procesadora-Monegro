const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const navLinks = Array.from(nav?.querySelectorAll("a[href^='#']") || []);

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

menuButton?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(Boolean(open)));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const active = `#${entry.target.id}`;
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === active);
      });
    });
  },
  { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
);

sections.forEach((section) => observer.observe(section));

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const nombre = String(data.get("nombre") || "").trim();
  const empresa = String(data.get("empresa") || "").trim();
  const email = String(data.get("email") || "").trim();
  const telefono = String(data.get("telefono") || "").trim();
  const servicio = String(data.get("servicio") || "").trim();
  const mensaje = String(data.get("mensaje") || "").trim();
  const subject = encodeURIComponent(`Contacto web - ${nombre}`);
  const body = encodeURIComponent(`Nombre: ${nombre}\nEmpresa: ${empresa || "No indicada"}\nEmail: ${email}\nTelefono: ${telefono}\nServicio de interes: ${servicio}\n\nMensaje:\n${mensaje}`);
  window.location.href = `mailto:Gerencia@procesadoramonegro.com?subject=${subject}&body=${body}`;
  if (formNote) formNote.textContent = "Listo. Revisa tu aplicacion de correo para enviar el mensaje.";
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
