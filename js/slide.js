( () => {
	const breadCrumb = document.querySelectorAll('.round');
	breadCrumb.forEach(b =>{
		b.addEventListener('click', function(e) {

			let x = e.clientX - e.target.offsetLeft;
			let y = e.clientY - e.target.offsetTop + (document.documentElement.scrollTop || document.body.scrollTop);

			let aRound = document.createElement('span');
			aRound.id = "aRound";
			aRound.style.left = x + 'px';
			aRound.style.top = y + 'px';
			this.appendChild(aRound);

			setTimeout(() => {
				aRound.remove();
			},500);

		});
	});

	window.sr = ScrollReveal();
	sr.reveal('.frame', {
		origin: 'right',
		distance: '50px',
		interval: '16',
		duration: '500',
		delay: '80',
		reset: 'true'
	});
	sr.reveal('.tile', {
		origin: 'right',
		distance: '200px',
		interval: '16',
		duration: '600',
		delay: '80',
	});
})();