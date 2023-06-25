function showContent(contentId) {
  var homeContent = document.getElementById("home-content");
  var contactContent = document.getElementById("contact-content");
  var infoContent = document.getElementById("info-content");
  var guideContent = document.getElementById("guide-content");
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");

  homeContent.style.display = "none";
  contactContent.style.display = "none";
  infoContent.style.display = "none";
  guideContent.style.display = "none";

  if (contentId === "home") {
    homeContent.style.display = "block";
  } else if (contentId === "contact") {
    contactContent.style.display = "block";
  } else if (contentId === "info") {
    infoContent.style.display = "block";
  } else if (contentId === "guide") {
    guideContent.style.display = "block";
  }
}

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
