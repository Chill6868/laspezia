const iconBoxAll = document.querySelectorAll(".icon-box");

iconBoxAll.forEach((iconBox) => {
	const svgElement = iconBox.querySelector("svg");

	const iconBoxStyles = window.getComputedStyle(iconBox);
	const iconBoxHeight = parseInt(iconBoxStyles.height);
	const svgElementDimensions = iconBoxHeight * 0.8;

	svgElement.setAttribute("height", svgElementDimensions);
	svgElement.setAttribute("width", svgElementDimensions);
});

const iconBoxTextAll = document.querySelectorAll(".icon-box__text");

iconBoxTextAll.forEach((iconBox) => {
	const iconBoxSpan = iconBox.querySelector("span");
	const iconBoxSpanTextContent = iconBoxSpan.textContent;
	iconBoxSpan.innerHTML = `&nbsp;${iconBoxSpanTextContent}`;
});