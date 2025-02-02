window.addEventListener("load", () => {
	setRangeSlider();
})

document.addEventListener("click", e => {
	const isDropdownButton = e.target.matches("[data-dropdown-button]");
	if(!isDropdownButton && e.target.closest('[data-dropdown]')!= null) return;


	let currentDropdown;
	if(isDropdownButton) {
		currentDropdown = e.target.closest("[data-dropdown]");
		currentDropdown.classList.toggle("active");
	}

	document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
		if(dropdown === currentDropdown) return;
		dropdown.classList.remove("active");
	})
})


document.addEventListener("click", e => {
	const isFilterDropdown = e.target.matches("[data-filter-dropdown-button]");
	if(!isFilterDropdown && e.target.closest("[data-filter-dropdown]") !=null) return;

	let currentFilter;
	let currentText;
	if(isFilterDropdown) {
		currentFilter = e.target.closest("[data-filter-dropdown-button]");
		currentFilter.classList.toggle("expanded");

		currentText = currentFilter.nextElementSibling;
		if(currentFilter.classList.contains("expanded")) {
			currentText.style.maxHeight = `${currentText.scrollHeight}px`;
		}
		else {
			currentText.style.maxHeight = "0px";
		}

	}

	document.querySelectorAll("[data-filter-dropdown-button].expanded").forEach(filterDropdown => {
		if(filterDropdown === currentFilter) return;
//This is implemented because I only want a filter dropdown to reset if another one is expanded. 
		else if(isFilterDropdown) {
			filterDropdown.classList.remove("expanded");
			filterDropdown.nextElementSibling.style.maxHeight = "0px";
		}
	})
})

const MIN_PRICE_RANGE = document.getElementById("min-price-range");
const MAX_PRICE_RANGE = document.getElementById("max-price-range");
const MIN_PRICE = document.getElementById("min-price");
const MAX_PRICE = document.getElementById("max-price");
const PRICE_RANGE_SLIDER_TRACK = document.getElementById("price-range-slider-track");

function setPriceRange(price, priceSlider, oppositeSlider) {
	let gap = parseInt(MAX_PRICE_RANGE.value) - parseInt(MIN_PRICE_RANGE.value);
	if(gap <= 0) {
		priceSlider.value = parseInt(oppositeSlider.value);
	}
	price.innerHTML = `$${priceSlider.value}`;
}

function setRangeSlider() {
	PRICE_RANGE_SLIDER_TRACK.style.left = `${MIN_PRICE_RANGE.value / MAX_PRICE_RANGE.max * 100}%`;
	PRICE_RANGE_SLIDER_TRACK.style.right = `${100 - MAX_PRICE_RANGE.value / MAX_PRICE_RANGE.max * 100}%`;
}

MIN_PRICE_RANGE.addEventListener("input", () => {
	setPriceRange(MIN_PRICE, MIN_PRICE_RANGE, MAX_PRICE_RANGE);
	setRangeSlider();
})

MAX_PRICE_RANGE.addEventListener("input", () => {
	setPriceRange(MAX_PRICE, MAX_PRICE_RANGE, MIN_PRICE_RANGE);
	setRangeSlider();
})




