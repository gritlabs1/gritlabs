(document.addEventListener("DOMContentLoaded", () => {
  const options = {
    valueNames: ["id", "title", "status", "date"]
  };

  const addCellClasses = (tbody) => {
    if (!tbody) return;
    tbody.querySelectorAll("tr").forEach((tr) => {
      const cells = tr.querySelectorAll("td");
      if (cells[0]) cells[0].classList.add("id");
      if (cells[1]) cells[1].classList.add("title");
      if (cells[2]) cells[2].classList.add("status");
      if (cells[3]) cells[3].classList.add("date");
    });
  };

  const setupList = (containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;
    const table = container.querySelector("table");
    if (table) table.classList.add("list");
    const tbody = container.querySelector("tbody");
    if (tbody) tbody.classList.add("list");
    addCellClasses(tbody);
    new List(containerId, options);
  };

  setupList("known-issues");
  setupList("archived-known-issues");
}));
