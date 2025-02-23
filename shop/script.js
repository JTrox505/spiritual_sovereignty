window.addEventListener("load", () => {
	setRangeSlider();
})

const SORT_CONTAINER = document.querySelector(".sort-container");
SORT_CONTAINER.addEventListener("click", e => {
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


const FILTER_CONTAINER = document.querySelector(".filter-container");
FILTER_CONTAINER.addEventListener("click", e => {
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

const FILTER_DISPLAY_TEXT = document.querySelector(".filter-display-text");

function displayActiveFilter(e) {
	let filter = document.createElement("li");
	filter.classList.add("filter-display-item");
	filter.id = `${e.target.id}-active-filter`;
	filter.setAttribute("data-active-filter", "");
	filter.textContent = e.target.id;
	FILTER_DISPLAY_TEXT.appendChild(filter);
	return;
	
}

function isPriceRangeFilter() {
	if(MIN_SLIDER.value === "0" && MAX_SLIDER.value === "1000") {
		try {
			document.getElementById("price-range-active-filter").remove();
		}
		catch(TypeError) {
			return true;
		}
	}

}
function displayPriceRangeFilter(e, filter) {
	currentMin = e.target.closest("[data-min-slider]");
	currentMax = e.target.closest("[data-max-slider]");
	if(currentMin === null) {
		return filter.textContent = (`$${currentMax.previousElementSibling.value}-$${e.target.value}`);

	}
	return filter.textContent = (`$${e.target.value}-$${currentMin.nextElementSibling.value}`)
}


FILTER_CONTAINER.addEventListener("change", e => {

	if(e.target.matches("[data-price-slider]")) {
		const existingFilter = document.getElementById("price-range-active-filter")
		if(existingFilter) {
			return displayPriceRangeFilter(e, existingFilter);
		}

		let filter = document.createElement("li");
		filter.classList.add("filter-display-item");
		filter.id = "price-range-active-filter";
		filter.setAttribute("data-price-range-filter", "");
		displayPriceRangeFilter(e, filter);
		let stop = isPriceRangeFilter();
		if(stop) {
			return;
		}
		FILTER_DISPLAY_TEXT.appendChild(filter);
		return;	
	}
	if(e.target.checked) {
		displayActiveFilter(e);
		return;
	}
	document.getElementById(`${e.target.id}-active-filter`).remove();
})


const MIN_PRICE_VALUE = document.getElementById("min-price-value");
const MAX_PRICE_VALUE= document.getElementById("max-price-value");
const MIN_SLIDER = document.getElementById("min-slider");
const MAX_SLIDER = document.getElementById("max-slider");
const SLIDER_TRACK = document.getElementById("slider-track");

const FILTER_DISPLAY_TEXT_CONTAINER = document.querySelector(".filter-display-text-container");

FILTER_DISPLAY_TEXT_CONTAINER.addEventListener("click", e => {
	const isActiveFilter = e.target.matches("[data-active-filter]");
	if(isActiveFilter) {
		document.getElementById(e.target.textContent).checked = false;
		document.getElementById(e.target.id).remove();
	}
	const isPriceRangeFilter = e.target.matches("[data-price-range-filter]");
	if(isPriceRangeFilter) {
		MIN_SLIDER.value = 0;
		MAX_SLIDER.value = 1000;
		SLIDER_TRACK.style.left = 0;
		SLIDER_TRACK.style.right = 0;
		MIN_PRICE_VALUE.textContent = 0;
		MAX_PRICE_VALUE.textContent = 1000;
		document.getElementById(e.target.id).remove();
	}
})

function setPriceRange(price, priceSlider, sliderLimit) {
	let rangeGap = parseInt(MAX_SLIDER.value) - parseInt(MIN_SLIDER.value);
	if(rangeGap <= 0) {
		priceSlider.value = parseInt(sliderLimit.value);
	}
	price.textContent = `$${priceSlider.value}`;

	setRangeSlider();
	isPriceRangeFilter();
}

function setRangeSlider() {
	SLIDER_TRACK.style.left = `${MIN_SLIDER.value / MAX_SLIDER.max * 100}%`;
	SLIDER_TRACK.style.right = `${100 - MAX_SLIDER.value / MAX_SLIDER.max * 100}%`;
}

MIN_SLIDER.addEventListener("input", () => {
	setPriceRange(MIN_PRICE_VALUE, MIN_SLIDER, MAX_SLIDER);
})

MAX_SLIDER.addEventListener("input", () => {
	setPriceRange(MAX_PRICE_VALUE, MAX_SLIDER, MIN_SLIDER);
})




