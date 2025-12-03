export function initNavToggle(): void {
  const toggle = document.getElementById("mobile-menu-toggle");
  const menu = document.getElementById("mobile-menu");

  // Toggle menu on toggle button click
  toggle?.addEventListener("click", (e) => {
    menu?.classList.toggle("hidden");
    e.stopPropagation(); // prevent document click from immediately closing menu
  });

  // Hide menu on window resize
  window.addEventListener("resize", () => {
    menu?.classList.add("hidden");
  });

  // Hide menu on clicking outside menu
  document.addEventListener("click", (event) => {
    const target = event.target;
    if (menu && toggle && target instanceof Node) {
      menu.classList.add("hidden");
    }
  });
}
