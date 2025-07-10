document.addEventListener("DOMContentLoaded", function () {
  // Find all tables that have a <thead> and more than one row (skip nav/foot tables)
  document.querySelectorAll("table").forEach(function (table) {
    if (table.querySelector("thead") && table.rows.length > 2) {
      new Tablesort(table);
    }
  });
});
