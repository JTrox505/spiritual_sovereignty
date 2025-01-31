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
const COLLECTION_CONTAINER = document.querySelector(".collection-container");


const COLLECTION_TEXT = document.querySelector(".collection-text");

let collectionHeight = COLLECTION_CONTAINER.offsetHeight;
COLLECTION_TITLE.addEventListener("click", () => {
	
	COLLECTION_TITLE.classList.toggle("expanded");

	if(COLLECTION_TITLE.classList.contains("expanded")) {
		return COLLECTION_TEXT.style.maxHeight = `${COLLECTION_TEXT.scrollHeight}px`
	}		
	COLLECTION_TEXT.style.maxHeight = "0px"; 
})
