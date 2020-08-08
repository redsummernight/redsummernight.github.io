---
layout: null
---
pages = [
	{% for p in site.html_pages %}{% if p.jump_allowed %}'{{ p.url }}',{% endif %}{% endfor %}
];

if (sessionStorage) {
	var lastVisited;
	try {
		lastVisited = JSON.parse(sessionStorage.getItem('lastVisited'));
	} catch (e) {}
	if (!lastVisited || !Array.isArray(lastVisited)) {
		lastVisited = [];
	}

	if (lastVisited.indexOf(current) < 0) {
		lastVisited.push(current);
	}

	// Don't jump to the last X visited pages in this session.
	// Cap X at 3/4 of the total page count.
	// In other words, you have to go through 75% of the pages
	// before seeing an old one again.
	lastVisited.splice(0, lastVisited.length - pages.length * 0.75);
	sessionStorage.setItem('lastVisited', JSON.stringify(lastVisited));

	pages = pages.filter(function(x) { return lastVisited.indexOf(x) < 0; });
}

if (window.frameElement) {
	// Hide navigation if this page is in an iframe on the same site
	document.getElementsByClassName('nav-bar')[0].style.display = 'none';
}
