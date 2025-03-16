
const LEFT_ARROW_CONTAINER = document.querySelector(".left-arrow-container");
const RIGHT_ARROW_CONTAINER = document.querySelector(".right-arrow-container");
const INTENTION_TYPE_CONTAINER = document.querySelector(".intention-type-container");
const INTENTION_DESCRIPTION_CONTAINER = document.querySelector(".intention-description-container");
const INTENTION_SHOP_CONTAINER = document.querySelector(".intention-shop-container");
const INTENTION_IMAGE_CONTAINER = document.querySelector(".intention-image-container");
const INTENTION_INFO_CONTAINER = document.querySelector(".intention-info-container");
const INTENTION_CONTAINER = document.querySelector(".intention-container");

// Starting the slideshow at the first slide on startup. 
INTENTION_TYPE_CONTAINER.children[0].classList.add("active");
INTENTION_DESCRIPTION_CONTAINER.children[0].classList.add("active");
INTENTION_SHOP_CONTAINER.children[0].classList.add("active");
INTENTION_IMAGE_CONTAINER.children[0].classList.add("active");

INTENTION_INFO_CONTAINER.classList.add("confidence");
INTENTION_CONTAINER.classList.add("confidence");
INTENTION_IMAGE_CONTAINER.classList.add("confidence");



// This is for changing the background colors of the containers, There might've been an easier way to do it but this seemed simple enough. 
const intentionList = ["confidence", 
			"energy", 
			"balance", 
			"intuition", 
			"love", 
			"manifestation", 
			"peace", 
			"pregnancy", 
			"protection"]

LEFT_ARROW_CONTAINER.addEventListener("click", ()=> {
	// could have made a function for this since the only difference is going forwards vs backwards, I might do that soon. 
	for(let i=0; i<INTENTION_TYPE_CONTAINER.children.length; i++) {
		try {
			if(INTENTION_TYPE_CONTAINER.children[i].classList.contains("active")) {
				INTENTION_TYPE_CONTAINER.children[i].classList.remove("active");
				INTENTION_DESCRIPTION_CONTAINER.children[i].classList.remove("active");
				INTENTION_SHOP_CONTAINER.children[i].classList.remove("active");
				INTENTION_IMAGE_CONTAINER.children[i].classList.remove("active");

				// Need to activate all the slide components exactly 1 before the current active one. 
				INTENTION_TYPE_CONTAINER.children[i-1].classList.add("active");
				INTENTION_DESCRIPTION_CONTAINER.children[i-1].classList.add("active");
				INTENTION_SHOP_CONTAINER.children[i-1].classList.add("active");
				INTENTION_IMAGE_CONTAINER.children[i-1].classList.add("active");

				INTENTION_INFO_CONTAINER.classList.remove(intentionList[i])
				INTENTION_CONTAINER.classList.remove(intentionList[i])
				INTENTION_IMAGE_CONTAINER.classList.remove(intentionList[i])

				INTENTION_INFO_CONTAINER.classList.add(intentionList[i-1])
				INTENTION_CONTAINER.classList.add(intentionList[i-1])
				INTENTION_IMAGE_CONTAINER.classList.add(intentionList[i-1])
				return;
			}
		}
		//So that the slideshow will revert back to the last slide if it's already at the beginning. 
		catch(TypeError) {
			INTENTION_TYPE_CONTAINER.children[INTENTION_TYPE_CONTAINER.children.length-1].classList.add("active");
			INTENTION_DESCRIPTION_CONTAINER.children[INTENTION_DESCRIPTION_CONTAINER.children.length-1].classList.add("active");
			INTENTION_SHOP_CONTAINER.children[INTENTION_SHOP_CONTAINER.children.length-1].classList.add("active");
			INTENTION_IMAGE_CONTAINER.children[INTENTION_IMAGE_CONTAINER.children.length-1].classList.add("active");

			INTENTION_INFO_CONTAINER.classList.add("protection");
			INTENTION_CONTAINER.classList.add("protection");
			INTENTION_IMAGE_CONTAINER.classList.add("protection");

			INTENTION_TYPE_CONTAINER.children[0].classList.remove("active");
			INTENTION_DESCRIPTION_CONTAINER.children[0].classList.remove("active");
			INTENTION_SHOP_CONTAINER.children[0].classList.remove("active");
			INTENTION_IMAGE_CONTAINER.children[0].classList.remove("active");

			INTENTION_INFO_CONTAINER.classList.remove("confidence");
			INTENTION_CONTAINER.classList.remove("confidence");
			INTENTION_IMAGE_CONTAINER.classList.remove("confidence");
			return;
		}
	}

});

RIGHT_ARROW_CONTAINER.addEventListener("click", ()=> {
	for(i=0; i<INTENTION_TYPE_CONTAINER.children.length; i++) {
		try {
			if(INTENTION_TYPE_CONTAINER.children[i].classList.contains("active")) {
				INTENTION_TYPE_CONTAINER.children[i].classList.remove("active");
				INTENTION_DESCRIPTION_CONTAINER.children[i].classList.remove("active");
				INTENTION_SHOP_CONTAINER.children[i].classList.remove("active");
				INTENTION_IMAGE_CONTAINER.children[i].classList.remove("active");

				// Need to activate all the slide components exactly 1 after the current active one. 
				INTENTION_TYPE_CONTAINER.children[i+1].classList.add("active");
				INTENTION_DESCRIPTION_CONTAINER.children[i+1].classList.add("active");
				INTENTION_SHOP_CONTAINER.children[i+1].classList.add("active");
				INTENTION_IMAGE_CONTAINER.children[i+1].classList.add("active");

				INTENTION_INFO_CONTAINER.classList.remove(intentionList[i])
				INTENTION_CONTAINER.classList.remove(intentionList[i])
				INTENTION_IMAGE_CONTAINER.classList.remove(intentionList[i])

				INTENTION_INFO_CONTAINER.classList.add(intentionList[i+1])
				INTENTION_CONTAINER.classList.add(intentionList[i+1])
				INTENTION_IMAGE_CONTAINER.classList.add(intentionList[i+1])
				return;
			}
		}
		// So that the slideshow will revert back to the first slide if it's reached the end. 
		catch(TypeError) {
			INTENTION_TYPE_CONTAINER.children[0].classList.add("active");
			INTENTION_DESCRIPTION_CONTAINER.children[0].classList.add("active");
			INTENTION_SHOP_CONTAINER.children[0].classList.add("active");
			INTENTION_IMAGE_CONTAINER.children[0].classList.add("active");

			INTENTION_INFO_CONTAINER.classList.add("confidence");
			INTENTION_CONTAINER.classList.add("confidence");
			INTENTION_IMAGE_CONTAINER.classList.add("confidence");

			INTENTION_TYPE_CONTAINER.children[INTENTION_TYPE_CONTAINER.children.length-1].classList.remove("active");
			INTENTION_DESCRIPTION_CONTAINER.children[INTENTION_DESCRIPTION_CONTAINER.children.length-1].classList.remove("active");
			INTENTION_SHOP_CONTAINER.children[INTENTION_SHOP_CONTAINER.children.length-1].classList.remove("active");
			INTENTION_IMAGE_CONTAINER.children[INTENTION_IMAGE_CONTAINER.children.length-1].classList.remove("active");

			INTENTION_INFO_CONTAINER.classList.remove("protection");
			INTENTION_CONTAINER.classList.remove("protection");
			INTENTION_IMAGE_CONTAINER.classList.remove("protection");
			return;
		}
	}
});



