import React from "react";

export default function useAnimation() {
	React.useEffect(() => {
		const elements = document.querySelectorAll("[data-animate]");
		const callback = (entries, observer) => {
			const animate = ({ isIntersecting, target }) => {
				if (isIntersecting) {
					target.classList.add("--animated");
					observer.unobserve(target);
				}
			};
	
			if (entries.length > 1) {
				entries.reduce((acc, entry) => {
					if (entry.isIntersecting) {
						setTimeout(() => animate(entry), acc);
		
						return acc + 400;
					}
				}, 0);
			} else animate(entries[0]);
	
			console.log(entries)
		};
		const isVisible = new IntersectionObserver(callback, { threshold: 0.7 });
	
		elements.forEach(element => isVisible.observe(element));
	}, [])
}
