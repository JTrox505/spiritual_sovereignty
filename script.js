

// this function operates the slideshow within the website.
function slideShow(nextSlide=false, previousSlide=false) {
	//I have multiple of these arrays so that I can easily iterate through each slideshow component easier.
	let intentionCategories = [
		ConfidenceAndAcceptance, 
		EnergyAndVitality, 
		BalanceAndWellness, 
		IntuitionAndSpirituality, 
		LoveAndHappiness, 
		ManifestationAndAbundance, 
		PeaceAndHarmony, 
		PregnancyAndIntimacy, 
		ProtectionAndGrounding
	];


//I get the animation of the slide to work by overlapping all the content, 
//this function makes sure the previous content goes back to being hidden after the animation happens.
	function fadeAwaySlide() {
		for(let i=0; i<intentionTypeDivs.length; i++) {
			if(intentionTypeDivs[i] !== intentionTypeDivs[slideNumber]) {
				intentionTypeDivs[i].style.opacity = 0;
			}
			if(intentionDescriptionDivs[i] !== intentionDescriptionDivs[slideNumber]) {
				intentionDescriptionDivs[i].style.opacity = 0;
			}
			if(intentionShopDivs[i] !== intentionShopDivs[slideNumber]) {
				intentionShopDivs[i].style.opacity = 0;
			}
			if(intentionImageDivs[i] !== intentionImageDivs[slideNumber]) {
				intentionImageDivs[i].style.opacity =0;
			}
		}
	}
	
	function nextSlideNumber() {
		slideNumber++;
		if (slideNumber >= intentionCategories.length) {
			slideNumber = 0;
		}
	}

	function previousSlideNumber() {
		slideNumber--;
		if (slideNumber < 0) {
			slideNumber = intentionCategories.length-1;
		}
	}
// Only one of these will be true at a time if a slideshow arraw is pressed. 
	if(nextSlide===true) {
		nextSlideNumber();
	}
	if(previousSlide===true) {
		previousSlideNumber();
	}


	let intentionTypeDivs = [
		CONFIDENCE_INTENTION_TYPE,
		ENERGY_INTENTION_TYPE,
		BALANCE_INTENTION_TYPE,
		INTUITION_INTENTION_TYPE,
		LOVE_INTENTION_TYPE,
		MANIFESTATION_INTENTION_TYPE,
		PEACE_INTENTION_TYPE,
		PREGNANCY_INTENTION_TYPE,
		PROTECTION_INTENTION_TYPE
	];

	let intentionDescriptionDivs = [
		CONFIDENCE_INTENTION_DESCRIPTION,
		ENERGY_INTENTION_DESCRIPTION,
		BALANCE_INTENTION_DESCRIPTION,
		INTUITION_INTENTION_DESCRIPTION,
		LOVE_INTENTION_DESCRIPTION,
		MANIFESTATION_INTENTION_DESCRIPTION,
		PEACE_INTENTION_DESCRIPTION,
		PREGNANCY_INTENTION_DESCRIPTION,
		PROTECTION_INTENTION_DESCRIPTION
	];

	let intentionShopDivs = [
		CONFIDENCE_INTENTION_SHOP,
		ENERGY_INTENTION_SHOP,
		BALANCE_INTENTION_SHOP,
		INTUITION_INTENTION_SHOP,
		LOVE_INTENTION_SHOP,
		MANIFESTATION_INTENTION_SHOP,
		PEACE_INTENTION_SHOP,
		PREGNANCY_INTENTION_SHOP,
		PROTECTION_INTENTION_SHOP
	];

	let intentionImageDivs = [
		CONFIDENCE_INTENTION_IMAGE,
		ENERGY_INTENTION_IMAGE,
		BALANCE_INTENTION_IMAGE,
		INTUITION_INTENTION_IMAGE,
		LOVE_INTENTION_IMAGE,
		MANIFESTATION_INTENTION_IMAGE,
		PEACE_INTENTION_IMAGE,
		PREGNANCY_INTENTION_IMAGE,
		PROTECTION_INTENTION_IMAGE
	];



	intentionTypeDivs[slideNumber].style.opacity = 1;
	intentionDescriptionDivs[slideNumber].style.opacity = 1;
	intentionShopDivs[slideNumber].style.opacity = 1;
	intentionImageDivs[slideNumber].style.opacity = 1;

	//Since these are style changes and not content changes, I didn't have to overlap anything here but instead just add transitions to the CSS.
	INTENTION_INFO_CONTAINER.style.background = intentionCategories[slideNumber].leftSideBackground;
	INTENTION_CONTAINER.style.background = intentionCategories[slideNumber].mainBackground;
	INTENTION_IMAGE_CONTAINER.style.background = intentionCategories[slideNumber].imageBackground;

	//make sure to do this after the current content is already displayed to make for a smoother looking animation.
	fadeAwaySlide();
}








//I added all of the slideshow content in JS rather than in the HTML because I thought it looked cleaner.
let ConfidenceAndAcceptance = {
	type: "Confidence And Acceptance",
	description: "You are the most incredible version of yourself, and this collection of crystals will assist you in accepting, honoring, and loving yourself just as you are. Use these to help you unravel all of those blocks and barriers that have shielded you away from being your most authentic self.",
	shop: "Shop Confidence And Acceptance",
	leftSideBackground: "#fbfbf4",
	mainBackground: "#fffee7",
	imageBackground: "#fef7a3",
	image: "./product_images/confidence_image",
};

let EnergyAndVitality = {
	type: "Energy And Vitality",
	description: "Feeling energized, blissful, full of passion and desire is what we crave and long for. This selection of crystals will help you feel an increase in energy, stamina, joy, passion, vitality, and physical strength",
	shop: "Shop Energy And Vitality",
	leftSideBackground: "#fbf8f3",
	mainBackground: "#fff6e5",
	imageBackground: "#fedc98",
	image: "./product_images/energy_image",
};

let LoveAndHappiness = {
	type: "Love And Happiness",
	description: "love and happiness are one of the highest vibrations that you can feel while in your physical body. This selection of crystals will help you open and heal your heart to feel unconditional love towards yourself, others, and lif This selection of crystals will help you open and heal your heart to feel unconditional love towards yourself, others, and life",
	shop: "Shop Love And Happiness",
	leftSideBackground: "#faf7fa",
	mainBackground: "#fdf3fb",
	imageBackground: "#f8ccef",
	image: "./product_images/love_image"
};

let BalanceAndWellness = {
	type: "Balance And Wellnesss",
	description: "Life is all about balance in order to achieve optimal health and wellness. This collection of crystals will assist you in balancing your yin and yang, chakras, and guidance to achieve feeling whole.",
	shop: "Shop Balance And Wellness",
	leftSideBackground: "#f4f5fa",
	mainBackground: "#e6eafd",
	imageBackground: "#99abf2",
	image: "./product_images/balance_image"
};

let IntuitionAndSpirituality = {
	type: "Intuition And Spirituality",
	description: "Through any part of your spiritual journey, this selection of crystals will help you awaken your intuition, spark creativity, ignite a spiritual awakening, and deepen your connection with your spiritual guides.",
	shop: "Shop Intuition And Spirituality",
	leftSideBackground: "#f7f5f8",
	mainBackground: "#f1eaf6",
	imageBackground: "#c4aad7",
	image: "./product_images/intuition_image"
};

let ManifestationAndAbundance = {
	type: "Manifestation And Abundance",
	description: "When manifesting and attracting abundance into our lives, we must raise our vibrations, ask the universe, and let go of any limiting beliefs we have tied to our greatest desires. These crystals will assist you in manifesting and attracting more abundance at a faster rate.",
	shop: "Shop Manifestation And Abundance",
	leftSideBackground: "#f4f9f4",
	mainBackground: "#e6f7e6",
	imageBackground: "#9bdd99",
	image: "./product_images/manifestation_image"
};

let PeaceAndHarmony = {
	type: "Peace And Harmony",
	description: "If you are feeling stressed, overworked, overwhelmed, anxious, or overcome by irrational fears, this collection of crystals will bring you back into the present moment allowing you to feel peace, relaxed, tranquility, and harmony",
	shop: "Shop Peace And Harmony",
	leftSideBackground: "#f3f9fb",
	mainBackground: "#e5f8ff",
	imageBackground: "#95e5ff",
	image: "./product_images/peace_image",
};

let PregnancyAndIntimacy = {
	type: "Pregnancy And Intimacy",
	description: "whether you're struggling with fertility, being pregnant, or your romantic relationship, this selection of crystals will help spark the sacral chakra to bring balance, passion, intimacy, fertility, a healthy pregnancy, and encourage positive relationships.",
	shop: "Shop Pregnancy And Intimacy",
	leftSideBackground: "#fbf3f3",
	mainBackground: "#fee5e4",
	imageBackground: "#ff9795",
	image: "./product_images/pregnancy_image",
};

let ProtectionAndGrounding = {
	type: "Protection And Grounding",
	description: "Bad vibes are not welcome into your energy when you carry this selection of crystals with you. You will also feel grounded, safe, and present within your mind, body, and soul.",
	shop: "Shop Protection And Grounding",
	leftSideBackground: "#f8f6f5",
	mainBackground: "#f5efea",
	imageBackground: "#d1c0aa",
	image: "./product_images/protection_image",
};


//need all of these variables to be able to change the HTML and CSS of each property. 
const CONFIDENCE_INTENTION_TYPE = document.querySelector(".confidence-intention-type");
const ENERGY_INTENTION_TYPE = document.querySelector(".energy-intention-type");
const BALANCE_INTENTION_TYPE = document.querySelector(".balance-intention-type");
const INTUITION_INTENTION_TYPE = document.querySelector(".intuition-intention-type");
const LOVE_INTENTION_TYPE = document.querySelector(".love-intention-type");
const MANIFESTATION_INTENTION_TYPE = document.querySelector(".manifestation-intention-type");
const PEACE_INTENTION_TYPE = document.querySelector(".peace-intention-type");
const PREGNANCY_INTENTION_TYPE = document.querySelector(".pregnancy-intention-type");
const PROTECTION_INTENTION_TYPE = document.querySelector(".protection-intention-type");

const CONFIDENCE_INTENTION_DESCRIPTION = document.querySelector(".confidence-intention-description"); 
const ENERGY_INTENTION_DESCRIPTION = document.querySelector(".energy-intention-description"); 
const BALANCE_INTENTION_DESCRIPTION = document.querySelector(".balance-intention-description"); 
const INTUITION_INTENTION_DESCRIPTION = document.querySelector(".intuition-intention-description"); 
const LOVE_INTENTION_DESCRIPTION = document.querySelector(".love-intention-description"); 
const MANIFESTATION_INTENTION_DESCRIPTION = document.querySelector(".manifestation-intention-description"); 
const PEACE_INTENTION_DESCRIPTION = document.querySelector(".peace-intention-description"); 
const PREGNANCY_INTENTION_DESCRIPTION = document.querySelector(".pregnancy-intention-description"); 
const PROTECTION_INTENTION_DESCRIPTION = document.querySelector(".protection-intention-description"); 

const CONFIDENCE_INTENTION_SHOP = document.querySelector(".confidence-intention-shop");
const ENERGY_INTENTION_SHOP = document.querySelector(".energy-intention-shop");
const BALANCE_INTENTION_SHOP = document.querySelector(".balance-intention-shop");
const INTUITION_INTENTION_SHOP = document.querySelector(".intuition-intention-shop");
const LOVE_INTENTION_SHOP = document.querySelector(".love-intention-shop");
const MANIFESTATION_INTENTION_SHOP = document.querySelector(".manifestation-intention-shop");
const PEACE_INTENTION_SHOP = document.querySelector(".peace-intention-shop");
const PREGNANCY_INTENTION_SHOP = document.querySelector(".pregnancy-intention-shop");
const PROTECTION_INTENTION_SHOP = document.querySelector(".protection-intention-shop");

const CONFIDENCE_INTENTION_IMAGE = document.querySelector(".confidence-intention-image");
const ENERGY_INTENTION_IMAGE = document.querySelector(".energy-intention-image");
const BALANCE_INTENTION_IMAGE = document.querySelector(".balance-intention-image");
const INTUITION_INTENTION_IMAGE = document.querySelector(".intuition-intention-image");
const LOVE_INTENTION_IMAGE = document.querySelector(".love-intention-image");
const MANIFESTATION_INTENTION_IMAGE = document.querySelector(".manifestation-intention-image");
const PEACE_INTENTION_IMAGE = document.querySelector(".peace-intention-image");
const PREGNANCY_INTENTION_IMAGE = document.querySelector(".pregnancy-intention-image");
const PROTECTION_INTENTION_IMAGE = document.querySelector(".protection-intention-image");

const INTENTION_INFO_CONTAINER = document.querySelector(".intention-info-container");
const INTENTION_CONTAINER = document.querySelector(".intention-container");
const INTENTION_IMAGE_CONTAINER = document.querySelector(".intention-image-container");
const INTENTION_IMAGE = document.querySelector(".intention-image");

const LEFT_ARROW = document.querySelector(".left-arrow-container");
const RIGHT_ARROW = document.querySelector(".right-arrow-container");



CONFIDENCE_INTENTION_TYPE.textContent = ConfidenceAndAcceptance.type;
ENERGY_INTENTION_TYPE.textContent = EnergyAndVitality.type;
BALANCE_INTENTION_TYPE.textContent = BalanceAndWellness.type;
INTUITION_INTENTION_TYPE.textContent = IntuitionAndSpirituality.type;
LOVE_INTENTION_TYPE.textContent = LoveAndHappiness.type;
MANIFESTATION_INTENTION_TYPE.textContent = ManifestationAndAbundance.type;
PEACE_INTENTION_TYPE.textContent = PeaceAndHarmony.type;
PREGNANCY_INTENTION_TYPE.textContent = PregnancyAndIntimacy.type;
PROTECTION_INTENTION_TYPE.textContent = ProtectionAndGrounding.type;

CONFIDENCE_INTENTION_DESCRIPTION.textContent = ConfidenceAndAcceptance.description;
ENERGY_INTENTION_DESCRIPTION.textContent = EnergyAndVitality.description;
BALANCE_INTENTION_DESCRIPTION.textContent = BalanceAndWellness.description;
INTUITION_INTENTION_DESCRIPTION.textContent = IntuitionAndSpirituality.description;
LOVE_INTENTION_DESCRIPTION.textContent = LoveAndHappiness.description;
MANIFESTATION_INTENTION_DESCRIPTION.textContent = ManifestationAndAbundance.description;
PEACE_INTENTION_DESCRIPTION.textContent = PeaceAndHarmony.description;
PREGNANCY_INTENTION_DESCRIPTION.textContent = PregnancyAndIntimacy.description;
PROTECTION_INTENTION_DESCRIPTION.textContent = ProtectionAndGrounding.description;

CONFIDENCE_INTENTION_SHOP.textContent = ConfidenceAndAcceptance.shop;
ENERGY_INTENTION_SHOP.textContent = EnergyAndVitality.shop;
BALANCE_INTENTION_SHOP.textContent = BalanceAndWellness.shop;
INTUITION_INTENTION_SHOP.textContent = IntuitionAndSpirituality.shop;
LOVE_INTENTION_SHOP.textContent = LoveAndHappiness.shop;
MANIFESTATION_INTENTION_SHOP.textContent = ManifestationAndAbundance.shop;
PEACE_INTENTION_SHOP.textContent = PeaceAndHarmony.shop;
PREGNANCY_INTENTION_SHOP.textContent = PregnancyAndIntimacy.shop;
PROTECTION_INTENTION_SHOP.textContent = ProtectionAndGrounding.shop;

CONFIDENCE_INTENTION_IMAGE.src = ConfidenceAndAcceptance.image;
ENERGY_INTENTION_IMAGE.src = EnergyAndVitality.image;
BALANCE_INTENTION_IMAGE.src = BalanceAndWellness.image;
INTUITION_INTENTION_IMAGE.src = IntuitionAndSpirituality.image;
LOVE_INTENTION_IMAGE.src = LoveAndHappiness.image;
MANIFESTATION_INTENTION_IMAGE.src = ManifestationAndAbundance.image;
PEACE_INTENTION_IMAGE.src = PeaceAndHarmony.image;
PREGNANCY_INTENTION_IMAGE.src = PregnancyAndIntimacy.image;
PROTECTION_INTENTION_IMAGE.src = ProtectionAndGrounding.image;



let slideNumber = 0;
slideShow();

LEFT_ARROW.addEventListener("click", ()=> {
	slideShow(false, true);
});

RIGHT_ARROW.addEventListener("click", ()=> {
	slideShow(true);
});


