//To make the price range slider look right on startup.
window.addEventListener("load", () => {
	setRangeSlider();
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



// This is to catch if the slider hits 0-1000 before the respective active filtter is displayed. Otherwise it will try to remove something that isn't there. 
const isPriceRangeFilter = () => {
	if(MIN_SLIDER.value === "0" && MAX_SLIDER.value === "1000") {
		try {
			removeClearAllButton("price-range-active-filter");
			document.getElementById("price-range-active-filter").remove();
		}
		catch(TypeError) {
			return true;
		}
	}

}



//This is to check whether the min or max slider changed.
const displayPriceRangeFilter = (e, filter) => {
	currentMin = e.target.closest("[data-min-slider]");
	currentMax = e.target.closest("[data-max-slider]");
	if(currentMin === null) {
		return filter.textContent = (`$${currentMax.previousElementSibling.value}-$${e.target.value}`);

	}
	return filter.textContent = (`$${e.target.value}-$${currentMin.nextElementSibling.value}`)
}

let activeFilters = new Set();
const displayClearAllButton = (activeFilter => {
	activeFilters.add(activeFilter);
	const FILTER_DISPLAY_CLEAR_ALL_BUTTON = document.querySelector(".filter-display-clear-all-button");
	FILTER_DISPLAY_CLEAR_ALL_BUTTON.classList.add("active");
})

const removeClearAllButton = (activeFilter => {
	activeFilters.delete(activeFilter);
	if(activeFilters.size === 0) {
		document.querySelector(".filter-display-clear-all-button").classList.remove("active");
	}
})



FILTER_CONTAINER.addEventListener("change", e => {
	const FILTER_DISPLAY_TEXT = document.querySelector(".filter-display-text");

	if(e.target.matches("[data-price-slider]")) {
		//I don't want a new active filter created every time the price range changes. Instead if one already exists then I'll just update it. 
		const existingFilter = document.getElementById("price-range-active-filter")
		if(existingFilter) {
			return displayPriceRangeFilter(e, existingFilter);
		}

		let filter = document.createElement("li");
		filter.classList.add("filter-display-item");
		filter.id = "price-range-active-filter";
		filter.setAttribute("data-price-range-active-filter", "");
		displayPriceRangeFilter(e, filter);
		//If I don't prevent the active filter from being appended the price range will always add itself back when the range is reset instead of staying blank. 
		let stop = isPriceRangeFilter();
		if(stop) {
			return;
		}
		FILTER_DISPLAY_TEXT.appendChild(filter);
		displayClearAllButton("price-range-active-filter");
		return;	
	}
	//Since all of the other filters are checkboxes instead of ranges. 
	if(e.target.checked) {
		let filter = document.createElement("li");
		filter.classList.add("filter-display-item");
		filter.id = `${e.target.id}-active-checkbox-filter`;
		filter.setAttribute("data-checkbox-active-filter", "");
		filter.textContent = e.target.id;
		FILTER_DISPLAY_TEXT.appendChild(filter);
		displayClearAllButton(`${e.target.id}-active-checkbox-filter`);
		return;
	}

	removeClearAllButton(`${e.target.id}-active-checkbox-filter`);
	document.getElementById(`${e.target.id}-active-checkbox-filter`).remove();
})



const MIN_PRICE_VALUE = document.getElementById("min-price-value");
const MAX_PRICE_VALUE= document.getElementById("max-price-value");
const MIN_SLIDER = document.getElementById("min-slider");
const MAX_SLIDER = document.getElementById("max-slider");
const SLIDER_TRACK = document.getElementById("slider-track");


//active filter removal function. 
const FILTER_DISPLAY_CONTAINER = document.querySelector(".filter-display-container");
FILTER_DISPLAY_CONTAINER.addEventListener("click", e => {
	const isCheckboxActiveFilter = e.target.matches("[data-checkbox-active-filter]");
	if(isCheckboxActiveFilter) {
		removeClearAllButton(e.target.id);
		console.log(e.target);
		document.getElementById(e.target.textContent).checked = false;
		document.getElementById(e.target.id).remove();
	}
	//Instead of just uncheking a box the price range filter has to completely reset visually and technically if the filter is remvoed. 
	const isPriceRangeActiveFilter = e.target.matches("[data-price-range-active-filter]");
	if(isPriceRangeActiveFilter) {
		MIN_SLIDER.value = 0;
		MAX_SLIDER.value = 1000;
		SLIDER_TRACK.style.left = 0;
		SLIDER_TRACK.style.right = 0;
		MIN_PRICE_VALUE.textContent = 0;
		MAX_PRICE_VALUE.textContent = 1000;
		removeClearAllButton(e.target.id);
		document.getElementById(e.target.id).remove();
	}
	const isClearAllButton = e.target.matches("[data-clear-all-button]");
	if(isClearAllButton) {
		activeFilters.forEach(filter => {
			//need to repeat this code to reset the price range. I could've made it into a function but I didn't think it was that big of a deal. 
			if(filter ==="price-range-active-filter") {
				MIN_SLIDER.value = 0;
				MAX_SLIDER.value = 1000;
				SLIDER_TRACK.style.left = 0;
				SLIDER_TRACK.style.right = 0;
				MIN_PRICE_VALUE.textContent = 0;
				MAX_PRICE_VALUE.textContent = 1000;
				removeClearAllButton(filter);
				document.getElementById(filter).remove();
				return;
			}
			// clear all function for the checkbox filters. the filter element is so that when I check for the textContent it's looking for the content of an element and not a string. 
			let filterElement = document.getElementById(filter);
			document.getElementById(filterElement.textContent).checked = false;
			document.getElementById(filter).remove();
			removeClearAllButton(filter);
			
		})
	}
})



const setPriceRange = (price, priceSlider, sliderLimit) => {
	//To make sure that the min slide4r can't go past the max slider and vice versa. 
	let rangeGap = parseInt(MAX_SLIDER.value) - parseInt(MIN_SLIDER.value);
	if(rangeGap <= 0) {
		priceSlider.value = parseInt(sliderLimit.value);
	}
	price.textContent = `$${priceSlider.value}`;

	setRangeSlider();
	isPriceRangeFilter();
}


// Making sure the slider track always follows the min and max slider buttons. 
const setRangeSlider = () => {
	SLIDER_TRACK.style.left = `${MIN_SLIDER.value / MAX_SLIDER.max * 100}%`;
	SLIDER_TRACK.style.right = `${100 - MAX_SLIDER.value / MAX_SLIDER.max * 100}%`;
}



MIN_SLIDER.addEventListener("input", () => {
	setPriceRange(MIN_PRICE_VALUE, MIN_SLIDER, MAX_SLIDER);
})
MAX_SLIDER.addEventListener("input", () => {
	setPriceRange(MAX_PRICE_VALUE, MAX_SLIDER, MIN_SLIDER);
})



//I need this to be a document event listener so that the dropdown will collapse if there is a click anywhere else on the page. 
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



