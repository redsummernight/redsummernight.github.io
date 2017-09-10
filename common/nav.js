---
layout: null
---
var pages = [
	{% for p in site.html_pages %}{% if p.jump_allowed and p.url != page.url %}'{{ p.url }}',{% endif %}{% endfor %}
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
	lastVisited.splice(0, lastVisited.length - 5);
	sessionStorage.setItem('lastVisited', JSON.stringify(lastVisited));

	// Don't jump to the last 5 visited pages in this session
	pages = pages.filter(function(x) { return lastVisited.indexOf(x) < 0; });
}

function jump() {
	window.location = pages[Math.floor(Math.random() * pages.length)];
}
