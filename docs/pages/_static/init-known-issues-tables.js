document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const tables = document.querySelectorAll("table");

    tables.forEach((table) => {
      if (table.querySelector("thead")) {
        table.classList.add("known-issues-table");
        table.style.fontSize = "0.8rem";
        new simpleDatatables.DataTable(table, {
          searchable: false,
          perPage: 0,
          paging: false,
          perPageSelect: false,
          fixedHeight: false,
        });
      }
    });
  }, 300);
});
