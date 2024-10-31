
let LoveAndHappiness = ["Love And Happiness", "love and happiness are one of the highest vibrations that you can feel while in your physical body. This selection of crystals will help you open and heal your heart to feel unconditional love towards yourself, others, and lif This selection of crystals will help you open and heal your heart to feel unconditional love towards yourself, others, and life", "Shop Love And Happiness", "#faf7fa", "#fdf3fb", "#f8ccef", "./product_images/love_image"];








const intention_type = document.querySelector(".intention_type");
const intention_description = document.querySelector(".intention_description");
const shop_intention = document.querySelector(".shop_intention");


const left_side_intention = document.querySelector(".left_side_intention");
const intention_container = document.querySelector(".intention_container");
const intention_image_container = document.querySelector(".intention_image_container");
const intention_image = document.querySelector(".intention_image");

intention_description.addEventListener("click", ()=> {
	intention_type.textContent = LoveAndHappiness[0];
	intention_description.textContent = LoveAndHappiness[1];
	shop_intention.textContent = LoveAndHappiness[2];

	left_side_intention.style.background = LoveAndHappiness[3];
	intention_container.style.background = LoveAndHappiness[4];
	intention_image_container.style.background = LoveAndHappiness[5];
	intention_image.src = LoveAndHappiness[6];
});
