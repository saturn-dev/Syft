function setTheme(theme) {
  document.body.setAttribute('theme', theme);
  localStorage.setItem('theme', theme);
}
var tab = localStorage.getItem("tab");

if (tab) {
  try {
    var tabData = JSON.parse(tab);
  } catch {
    var tabData = {};
  }
} else {
  var tabData = {};
}

if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

var settingsDefaultTab = {
  title: "Syft",
  icon: "/icon.png",
};

function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (title) {
    tabData.title = title;
  } else {
    delete tabData.title;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  var tab = localStorage.getItem("tab");

  if (tab) {
    try {
      var tabData = JSON.parse(tab);
    } catch {
      var tabData = {};
    }
  } else {
    var tabData = {};
  }

  if (icon) {
    tabData.icon = icon;
  } else {
    delete tabData.icon;
  }

  localStorage.setItem("tab", JSON.stringify(tabData));
}
function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}
function clocktoggle() {
  if (clock.style.display == "none") {
    localStorage.setItem("clocktoggle", "false");
    clock.style.display = "";
  } else {
    clock.style.display = "none";
    localStorage.setItem("clocktoggle", "true");
  }
}
function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}
function setCloak(cloak) {
  switch (cloak) {
    case "canvas":
      setTitle("Dashboard");
      setFavicon("/images/cloak/canvas.png");
      location.reload();
      break;
    case "google-classroom":
      setTitle("Home");
      setFavicon("/images/cloak/google-classroom.png");
      location.reload();
      break;
    case "google":
      setTitle("Google");
      setFavicon("/images/cloak/google.png");
      location.reload();
      break;
    case "google-drive":
      setTitle("Home - Google Drive");
      setFavicon("/images/cloak/googledrive.png");
      location.reload();
      break;
    case "nearpod":
      setTitle("Nearpod: You'll wonder how you taught without it");
      setFavicon("/images/cloak/near-pod.png");
      location.reload();
      break;
  }
}