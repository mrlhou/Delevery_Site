// Links NavBar
let linksNavbar = document.querySelectorAll("header .links a");
linksNavbar.forEach((link) => {
  link.addEventListener("click", function () {
    linksNavbar.forEach((link) => {
      link.classList.remove("active");
    });
    this.classList.add("active");
  });
});
// Links NavBar On Mobile Media
let menuBtn = document.querySelector("header .menu");
let navBarWindow = document.querySelector("header .navbars");
menuBtn.onclick = function () {
  this.classList.toggle("active");
  navBarWindow.classList.toggle("active");
};
document.onclick = (e) => {
  e.stopPropagation();
  if (
    !e.target.classList.contains("navbars") &&
    !e.target.classList.contains("menu")
  ) {
    navBarWindow.classList.contains("active")
      ? navBarWindow.classList.remove("active")
      : null;
  }
};

// Scroll To Top
let scrollBtn = document.querySelector(".scroll-up");
let landing = document.querySelector(".landing");
window.onscroll = () => {
  // Add Shadow To Header When Scrolling
  let header = landing.previousElementSibling;
  this.scrollY >= 80
    ? header.classList.add("scrolled")
    : header.classList.remove("scrolled");
  // Show / Hide Btn Scroll To Top
  this.scrollY >= landing.scrollHeight - 500
    ? scrollBtn.classList.add("show")
    : scrollBtn.classList.remove("show");
  // Change Active Class For Links When Recipt The Section
};
scrollBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// Switch Mode (Light / Dark)
let iconSwichMode = document.querySelector(".icon-light-dark");
let bodyChildren = document.body.children;
iconSwichMode.onclick = function () {
  if (document.body.classList.contains("dark")) {
    for (let i = 0; i < bodyChildren.length; i++) {
      if (bodyChildren[i].tagName.toLowerCase() != "script") {
        bodyChildren[i].classList.remove("dark");
        console.log(bodyChildren[i]);
      }
    }
    document.body.classList.remove("dark");
    localStorage.setItem("mode", "light");
  } else {
    for (let i = 0; i < bodyChildren.length; i++) {
      if (bodyChildren[i].tagName.toLowerCase() != "script") {
        bodyChildren[i].classList.add("dark");
      }
    }
    document.body.classList.add("dark");
    localStorage.setItem("mode", "dark");
  }
};
// Get Data From Local Storage To Enter Mode Case (Light || Night)
if (localStorage.getItem("mode") === "dark") {
  for (let i = 0; i < bodyChildren.length; i++) {
    if (bodyChildren[i].tagName.toLowerCase() != "script") {
      bodyChildren[i].classList.add("dark");
    }
  }
  document.body.classList.add("dark");
} else {
  for (let i = 0; i < bodyChildren.length; i++) {
    if (bodyChildren[i].tagName.toLowerCase() != "script") {
      bodyChildren[i].classList.remove("dark");
    }
  }
  document.body.classList.remove("dark");
}
