document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
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
  }, 300); // Delay ensures Markdown theme loads first
});
