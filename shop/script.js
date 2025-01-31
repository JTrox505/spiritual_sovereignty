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
