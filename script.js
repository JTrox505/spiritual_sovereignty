

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





const CONFIDENCE_INTENTION_TYPE = document.querySelector(".confidence_intention_type");
const ENERGY_INTENTION_TYPE = document.querySelector(".energy_intention_type");
const BALANCE_INTENTION_TYPE = document.querySelector(".balance_intention_type");
const INTUITION_INTENTION_TYPE = document.querySelector(".intuition_intention_type");
const LOVE_INTENTION_TYPE = document.querySelector(".love_intention_type");
const MANIFESTATION_INTENTION_TYPE = document.querySelector(".manifestation_intention_type");
const PEACE_INTENTION_TYPE = document.querySelector(".peace_intention_type");
const PREGNANCY_INTENTION_TYPE = document.querySelector(".pregnancy_intention_type");
const PROTECTION_INTENTION_TYPE = document.querySelector(".protection_intention_type");

const CONFIDENCE_INTENTION_DESCRIPTION = document.querySelector(".confidence_intention_description"); 
const ENERGY_INTENTION_DESCRIPTION = document.querySelector(".energy_intention_description"); 
const BALANCE_INTENTION_DESCRIPTION = document.querySelector(".balance_intention_description"); 
const INTUITION_INTENTION_DESCRIPTION = document.querySelector(".intuition_intention_description"); 
const LOVE_INTENTION_DESCRIPTION = document.querySelector(".love_intention_description"); 
const MANIFESTATION_INTENTION_DESCRIPTION = document.querySelector(".manifestation_intention_description"); 
const PEACE_INTENTION_DESCRIPTION = document.querySelector(".peace_intention_description"); 
const PREGNANCY_INTENTION_DESCRIPTION = document.querySelector(".pregnancy_intention_description"); 
const PROTECTION_INTENTION_DESCRIPTION = document.querySelector(".protection_intention_description"); 


const CONFIDENCE_INTENTION_SHOP = document.querySelector(".confidence_intention_shop");
const ENERGY_INTENTION_SHOP = document.querySelector(".energy_intention_shop");
const BALANCE_INTENTION_SHOP = document.querySelector(".balance_intention_shop");
const INTUITION_INTENTION_SHOP = document.querySelector(".intuition_intention_shop");
const LOVE_INTENTION_SHOP = document.querySelector(".love_intention_shop");
const MANIFESTATION_INTENTION_SHOP = document.querySelector(".manifestation_intention_shop");
const PEACE_INTENTION_SHOP = document.querySelector(".peace_intention_shop");
const PREGNANCY_INTENTION_SHOP = document.querySelector(".pregnancy_intention_shop");
const PROTECTION_INTENTION_SHOP = document.querySelector(".protection_intention_shop");



const CONFIDENCE_INTENTION_IMAGE = document.querySelector(".confidence_intention_image");
const ENERGY_INTENTION_IMAGE = document.querySelector(".energy_intention_image");
const BALANCE_INTENTION_IMAGE = document.querySelector(".balance_intention_image");
const INTUITION_INTENTION_IMAGE = document.querySelector(".intuition_intention_image");
const LOVE_INTENTION_IMAGE = document.querySelector(".love_intention_image");
const MANIFESTATION_INTENTION_IMAGE = document.querySelector(".manifestation_intention_image");
const PEACE_INTENTION_IMAGE = document.querySelector(".peace_intention_image");
const PREGNANCY_INTENTION_IMAGE = document.querySelector(".pregnancy_intention_image");
const PROTECTION_INTENTION_IMAGE = document.querySelector(".protection_intention_image");




const LEFT_SIDE_INTENTION = document.querySelector(".left_side_intention");
const INTENTION_CONTAINER = document.querySelector(".intention_container");
const INTENTION_IMAGE_CONTAINER = document.querySelector(".intention_image_container");
const INTENTION_IMAGE = document.querySelector(".intention_image");

const INTENTION_DESCRIPTION_CONTAINER = document.querySelector(".intention_description_container");


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




let intentionCycle = 0;
slideshow();

INTENTION_DESCRIPTION_CONTAINER.addEventListener("click", ()=> {
	slideshow();
});

function slideshow() {
	var intentionCategories = [
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

	var intentionTypeDivs = [
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

	var intentionDescriptionDivs = [
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

	var intentionShopDivs = [
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


	var intentionImageDivs = [
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





	intentionTypeDivs[intentionCycle].style.opacity = 1;
	intentionDescriptionDivs[intentionCycle].style.opacity = 1;
	intentionShopDivs[intentionCycle].style.opacity = 1;
	intentionImageDivs[intentionCycle].style.opacity = 1;


	LEFT_SIDE_INTENTION.style.background = intentionCategories[intentionCycle].leftSideBackground;
	INTENTION_CONTAINER.style.background = intentionCategories[intentionCycle].mainBackground;
	INTENTION_IMAGE_CONTAINER.style.background = intentionCategories[intentionCycle].imageBackground;

	for(let i=0; i<intentionTypeDivs.length; i++) {
		if(intentionTypeDivs[i] !== intentionTypeDivs[intentionCycle]) {
			intentionTypeDivs[i].style.opacity = 0;
		}
		if(intentionDescriptionDivs[i] !== intentionDescriptionDivs[intentionCycle]) {
			intentionDescriptionDivs[i].style.opacity = 0;
		}
		if(intentionShopDivs[i] !== intentionShopDivs[intentionCycle]) {
			intentionShopDivs[i].style.opacity = 0;
		}
		if(intentionImageDivs[i] !== intentionImageDivs[intentionCycle]) {
			intentionImageDivs[i].style.opacity =0;
		}
	}



	intentionCycle += 1;
	if (intentionCycle >= intentionCategories.length) {
		intentionCycle = 0;
	}
}



