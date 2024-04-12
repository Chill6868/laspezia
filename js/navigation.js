// ===========================================================================
// Navigation on Mobile
// ===========================================================================

const navMobile = document.querySelector(".nav-mobile");
const navMobileBtn = document.querySelector(".hamburger");
const navMobileMenu = document.querySelector(".nav-mobile__menu");
const navMobileMenuItems = document.querySelectorAll(".nav-mobile__menu-item");

navMobileBtn.addEventListener("click", () => {
	navMobile.classList.toggle("nav-mobile--active");
	navMobileMenu.classList.toggle("nav-mobile__menu--active");

	if (document.body.classList.contains("disable-scroll")) {
		document.body.classList.remove("disable-scroll");
	} else {
		document.body.classList.add("disable-scroll");
	}
});

navMobileMenuItems.forEach((item) => {
	item.addEventListener("click", () => {
		navMobile.classList.remove("nav-mobile--active");
		navMobileMenu.classList.remove("nav-mobile__menu--active");
		document.body.classList.remove("disable-scroll");
	});
});
