

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





const INTENTION_TYPE = document.querySelector(".intention_type");
const INTENTION_DESCRIPTION = document.querySelector(".intention_description"); 
const SHOP_INTENTION = document.querySelector(".shop_intention");


const LEFT_SIDE_INTENTION = document.querySelector(".left_side_intention");
const INTENTION_CONTAINER = document.querySelector(".intention_container");
const INTENTION_IMAGE_CONTAINER = document.querySelector(".intention_image_container");
const INTENTION_IMAGE = document.querySelector(".intention_image");


let intentionCycle = 0;
slideshow();

INTENTION_DESCRIPTION.addEventListener("click", ()=> {
	slideshow();
});
function slideshow() {
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

	INTENTION_TYPE.textContent = intentionCategories[intentionCycle].type;
	INTENTION_DESCRIPTION.textContent = intentionCategories[intentionCycle].description;
	SHOP_INTENTION.textContent = intentionCategories[intentionCycle].shop;


	LEFT_SIDE_INTENTION.style.background = intentionCategories[intentionCycle].left_side_background;
	INTENTION_CONTAINER.style.background = intentionCategories[intentionCycle].main_background;
	INTENTION_IMAGE_CONTAINER.style.background = intentionCategories[intentionCycle].image_background;
	INTENTION_IMAGE.src = intentionCategories[intentionCycle].image;
	intentionCycle += 1;
	if (intentionCycle >= intentionCategories.length) {
		intentionCycle = 0;
	}
}
