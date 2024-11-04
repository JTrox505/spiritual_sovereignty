

let LoveAndHappiness = {
	type: "Love And Happiness",
	description: "love and happiness are one of the highest vibrations that you can feel while in your physical body. This selection of crystals will help you open and heal your heart to feel unconditional love towards yourself, others, and lif This selection of crystals will help you open and heal your heart to feel unconditional love towards yourself, others, and life",
	shop: "Shop Love And Happiness",
	left_side_background: "#faf7fa",
	main_background: "#fdf3fb",
	image_background: "#f8ccef",
	image: "./product_images/love_image"
};

let BalanceAndWellness = {
	type: "Balance And Wellnesss",
	description: "Life is all about balance in order to achieve optimal health and wellness. This collection of crystals will assist you in balancing your yin and yang, chakras, and guidance to achieve feeling whole.",
	shop: "Shop Balance And Wellness",
	left_side_background: "#f4f5fa",
	main_background: "#e6eafd",
	image_background: "#99abf2",
	image: "./product_images/balance_image"
};

let IntuitionAndSpirituality = {
	type: "Intuition And Spirituality",
	description: "Through any part of your spiritual journey, this selection of crystals will help you awaken your intuition, spark creativity, ignite a spiritual awakening, and deepen your connection with your spiritual guides.",
	shop: "Shop Intuition And Spirituality",
	left_side_background: "#f7f5f8",
	main_background: "#f1eaf6",
	image_background: "#c4aad7",
	image: "./product_images/intuition_image"
};

let ManifestationAndAbundance {
	type: "Manifestation And Abundance",
	description: "When manifesting and attracting abundance into our lives, we must raise our vibrations, ask the universe, and let go of any limiting beliefs we have tied to our greatest desires. These crystals will assist you in manifesting and attracting more abundance at a faster rate.",
	shop: "Shop Manifestation And Abundance",
	left_side_background: "#f4f9f4",
	main_background: "#e6f7e6",
	image_background: "#9bdd99",
	image: "./product_images/manifestation_image"
};







const intention_type = document.querySelector(".intention_type");
const intention_description = document.querySelector(".intention_description");
const shop_intention = document.querySelector(".shop_intention");


const left_side_intention = document.querySelector(".left_side_intention");
const intention_container = document.querySelector(".intention_container");
const intention_image_container = document.querySelector(".intention_image_container");
const intention_image = document.querySelector(".intention_image");

intention_description.addEventListener("click", ()=> {
	intention_type.textContent = LoveAndHappiness.type;
	intention_description.textContent = LoveAndHappiness.description;
	shop_intention.textContent = LoveAndHappiness.shop;


	left_side_intention.style.background = LoveAndHappiness.left_side_background;
	intention_container.style.background = LoveAndHappiness.main_background;
	intention_image_container.style.background = LoveAndHappiness.image_background;
	intention_image.src = LoveAndHappiness.image;
});
