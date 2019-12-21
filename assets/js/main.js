window.onload = () => {
	scrollToProjects();
	projectsTabs();
	lazyLoadImages();
	updateProjecthumbnails();
};

let allCards = document.querySelectorAll('.my-card');
let buttons = document.querySelectorAll('button')

buttons.forEach(category => category.addEventListener('click', function () {
	document.querySelector('.top-button .active').classList.remove('active');
	category.classList.add('active');

	allCards.forEach(card => {

		if (category.id === 'all') {
			card.classList.remove('hide')
			return;
		}
		if (category.id !== card.getAttribute('data-name')) {
			card.classList.add('hide')
		} else {
			card.classList.remove('hide')
		}

	})
}))


// function lazyLoadImages() {
//     const lazyImages = document.querySelectorAll('.project_image');
//     lazyImages.forEach(img => {
//         img.style.backgroundImage = `url('${img.getAttribute('data-bg')}')`
//     })
// }

// function updateProjecthumbnails() {
//     let projectThumbnails = document.querySelectorAll('.project_image');
//     // Update the height of thumbnails when window load
//     projectThumbnails.forEach(thumbnail => {
//         thumbnail.style.height = `calc(${thumbnail.clientWidth}px / 1.3)`;
//     })
//     // Update the height of thumbnails when window resize
//     window.addEventListener("resize", function () {
//         projectThumbnails.forEach(thumbnail => {
//             thumbnail.style.height = `calc(${thumbnail.clientWidth}px / 1.3)`;
//         })
//     });
// }