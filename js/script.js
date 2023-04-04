//zev counting
const elements = document.querySelectorAll('.count_1, .count_2, .count_3');
elements.forEach(function (element) {
	element.Counter = 0;
	const target = parseInt(element.innerText);
	const increment = target / 80;
	let count = 0;

	const timer = setInterval(function () {
		count += increment;
		element.innerText = Math.ceil(count);

		if (count >= target) {
			clearInterval(timer);
			element.innerText = target;
		}
	}, 50);
});



const sliderElm = document.querySelector('.splide');
const SLIDE_SPEED = 400;
const slider = new Splide(sliderElm, {
	type: 'fade',
	rewind: true,
	speed: SLIDE_SPEED,
}).mount();
const modalButtons = document.querySelectorAll('.js-modal-buton');
modalButtons.forEach(modalButton => {
	modalButton.addEventListener('click', () => {
		sliderElm.dataset.showIndex = modalButton.dataset.index;
	});
});

MicroModal.init({
	onShow: () => {
		slider.options = {
			speed: 0
		};
		slider.go(Number(sliderElm.dataset.showIndex));
		slider.options = {
			speed: SLIDE_SPEED
		};
	}
});
