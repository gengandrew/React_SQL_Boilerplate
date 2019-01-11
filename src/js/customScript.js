import { $ } from "jquery";

function customScript() {
  $(document).ready(function() {
    $("#sidebarCollapse").on("click", function() {
      $("#sidebar").toggleClass("active");
      $(this).toggleClass("active");
    });
  });
}

export default customScript;
