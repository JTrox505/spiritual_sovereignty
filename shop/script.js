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


const COLLECTION_TITLE = document.querySelector(".collection-title");
const COLLECTION = document.querySelector(".collection-container");
const FILTER_CONTAINER = document.querySelector(".filter-container");


let collectionText = document.querySelector(".collection-text");

let collectionHeight = COLLECTION.offsetHeight;
COLLECTION_TITLE.addEventListener("click", () => {
	
	COLLECTION_TITLE.classList.toggle("expanded");
	FILTER_CONTAINER.classList.toggle("expanded");

	if(COLLECTION_TITLE.classList.contains("expanded")) {
		return collectionText.style.maxHeight = `${collectionText.scrollHeight}px`
	}		
	collectionText.style.maxHeight = "0px"; 
})
