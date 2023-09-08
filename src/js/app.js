"use strict";

document.addEventListener('DOMContentLoaded', function () {
	const buttonPrev = document.querySelector('.prev');
	const buttonNext = document.querySelector('.next')
	const slides = document.querySelectorAll('.gallery__slider-img');

	let currentIndex = 0;

	function changeOpacity() {
		if (currentIndex === 0) {
			buttonPrev.classList.add('opacity');
		} else {
			buttonPrev.classList.remove('opacity');
		}
		if (currentIndex === slides.length - 1) {
			buttonNext.classList.add('opacity');
		} else {
			buttonNext.classList.remove('opacity');
		}
	}

	function showSlide(index) {
		slides[currentIndex].classList.remove('active');
		slides[index].classList.add('active');
		currentIndex = index;
		changeOpacity();
	}
	buttonPrev.addEventListener('click', function () {
		let index = currentIndex - 1;
		if (index >= 0) {
			showSlide(index);
		}
	})
	buttonNext.addEventListener('click', function () {
		let index = currentIndex + 1;
		if (index < slides.length) {
			showSlide(index);
		}
	})
	showSlide(currentIndex);
	changeOpacity();
});



