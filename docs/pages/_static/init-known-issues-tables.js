document.addEventListener("DOMContentLoaded", () => {
  requestAnimationFrame(() => {
    const tables = document.querySelectorAll("table");
    tables.forEach((table) => {
      if (table.querySelector("thead")) {
        new simpleDatatables.DataTable(table, {
          searchable: false,
          perPage: 0,
          paging: false,
          perPageSelect: false,
          fixedHeight: false,
        });
      }
    });
  });
});
