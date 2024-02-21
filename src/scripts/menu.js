document.addEventListener('astro:page-load', () => {
	const hamburger = document.querySelector('.hamburger');

	if (hamburger !== null) {
		hamburger.addEventListener('click', () => {
			const links = document.querySelector('.nav-links');

			if (links !== null) {
				links.classList.toggle('expanded');
			}
		});
	}
});
