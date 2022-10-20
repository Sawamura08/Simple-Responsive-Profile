const picAnim = document.querySelectorAll(".pic-anim");
const desAnim = document.querySelectorAll(".description-anim");
const socialsAnim = document.querySelectorAll(".socials-anim");

const picObserver = new IntersectionObserver(
	(entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.style.animation = `pic-anim 1s ${entry.target.dataset.delay} forwards ease-in-out`;
			}
		});
	},
	{
		threshold: 0.5,
	}
);

const desObserver = new IntersectionObserver(
	(desEntries) => {
		desEntries.forEach((desEntry) => {
			if (desEntry.isIntersecting) {
				desEntry.target.style.animation = `description-anim 1s ${desEntry.target.dataset.delay} forwards ease-in-out`;
			}
		});
	},
	{
		threshold: 0.5,
	}
);

const socialsObserver = new IntersectionObserver(
	(socialsEntries) => {
		socialsEntries.forEach((socialsEntry) => {
			if (socialsEntry.isIntersecting) {
				socialsEntry.target.style.animation = `socials-anim 1s ${socialsEntry.target.dataset.delay} forwards ease-in-out`;
			}
		});
	},
	{
		threshold: 1,
	}
);

picAnim.forEach((images) => {
	picObserver.observe(images);
});

desAnim.forEach((des) => {
	desObserver.observe(des);
});

socialsAnim.forEach((social) => {
	socialsObserver.observe(social);
});
