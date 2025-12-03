/**
 * Populate the current calendar year into all DOM elements containing the `data-year` attribute.
 */
export function setDataYear(): void {
  const year = new Date().getFullYear();
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = String(year);
  });
}
