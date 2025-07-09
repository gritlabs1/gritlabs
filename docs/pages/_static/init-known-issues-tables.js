document.addEventListener("DOMContentLoaded", function () {
  const tables = document.querySelectorAll("table");

  tables.forEach((table) => {
    if (table.querySelector("thead")) {
      new simpleDatatables.DataTable(table, {
        searchable: true,
        fixedHeight: false,
        perPage: 25,
        perPageSelect: [10, 25, 50, 100],
      });
    }
  });
});
