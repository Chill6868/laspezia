// ===========================================================================
// Navigation on Mobile
// ===========================================================================

const navMobile = document.querySelector(".nav-mobile");
const navMobileBtn = document.querySelector(".hamburger");
const navMobileMenu = document.querySelector(".nav-mobile__link-box");
const navMobileMenuItems = document.querySelectorAll(".nav-mobile__link-item");

navMobileBtn.addEventListener("click", () => {
	navMobile.classList.toggle("nav-mobile--active");
	navMobileMenu.classList.toggle("nav-mobile__link-box--active");

	if (document.body.classList.contains("disable-scroll")) {
		document.body.classList.remove("disable-scroll");
	} else {
		document.body.classList.add("disable-scroll");
	}
});

navMobileMenuItems.forEach((item) => {
	item.addEventListener("click", () => {
		navMobile.classList.remove("nav-mobile--active");
		navMobileMenu.classList.remove("nav-mobile__link-box--active");
		document.body.classList.remove("disable-scroll");
	});
});

// ===========================================================================
// Navigation on Desktop
// ===========================================================================

const navDesktop = document.querySelector(".nav-desktop");

document.addEventListener("scroll", () => {
	if (scrollY >= 100) {
		navDesktop.classList.add("nav-desktop--bg-active");
	} else {
		navDesktop.classList.remove("nav-desktop--bg-active");
	}
});
