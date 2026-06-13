const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");

function updateHeader() {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
}

menuButton?.addEventListener("click", () => {
  const open = nav?.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(Boolean(open)));
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(contactForm);
  const nombre = String(data.get("nombre") || "").trim();
  const telefono = String(data.get("telefono") || "").trim();
  const mensaje = String(data.get("mensaje") || "").trim();
  const subject = encodeURIComponent(`Contacto web - ${nombre}`);
  const body = encodeURIComponent(`Nombre: ${nombre}\nTelefono: ${telefono}\n\nMensaje:\n${mensaje}`);
  window.location.href = `mailto:Gerencia@procesadoramonegro.com?subject=${subject}&body=${body}`;
  if (formNote) formNote.textContent = "Listo. Revisa tu aplicacion de correo para enviar el mensaje.";
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
