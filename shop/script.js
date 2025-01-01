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


let collectionText = document.querySelector(".collection-text");
let expanded = document.querySelectorAll("expanded");
console.log(expanded);

let collectionHeight = COLLECTION.offsetHeight;
COLLECTION_TITLE.addEventListener("click", () => {
	
	COLLECTION_TITLE.classList.toggle("expanded");

	if(COLLECTION_TITLE.classList.contains("expanded")) {
		collectionText.style.maxHeight = `${collectionText.scrollHeight}px`
	}
	else {
		collectionText.style.maxHeight = "0px"; 
	}
})
/*
COLLECTION.forEach(COLLECTION => {
	console.log(COLLECTION);
	COLLECTION.addEventListener("click", () => {
		COLLECTION.classList.toggle("expanded");
	})

})
*/
