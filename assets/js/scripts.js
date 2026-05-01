document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navActions = document.querySelector(".nav-actions");
  const navLinkItems = document.querySelectorAll(".nav-actions a");

  if (!hamburger || !navActions) {
    return;
  }

  function closeMenu() {
    navActions.classList.remove("open");
    hamburger.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
  }

  hamburger.addEventListener("click", function () {
    const isOpen = navActions.classList.toggle("open");

    hamburger.classList.toggle("active", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
  });

  navLinkItems.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });
});
