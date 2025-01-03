window.addEventListener("DOMContentLoaded", function () {
  const favicon = document.getElementById("favicon");
  const pageTitle = document.title;
  const attentionMessage = "Please Come back !!!";

  if (favicon) {
    // Check if the favicon element exists
    document.addEventListener("visibilitychange", function () {
      const isPageActive = !document.hidden;
      toggle(isPageActive);
    });

    function toggle(isPageActive) {
      if (isPageActive) {
        document.title = pageTitle;
        favicon.href = "./assets/images/happy.png"; // Active favicon
      } else {
        document.title = attentionMessage;
        favicon.href = "./assets/images/sad.png"; // Inactive favicon
      }
    }
  } else {
    console.error("Favicon element not found.");
  }
});
