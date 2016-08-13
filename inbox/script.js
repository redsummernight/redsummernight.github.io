(function() {
	'use strict';
	var inbox = document.getElementById('inbox');

	function poll() {
		var max = 99999,
			min = 2;
		var zeroPad = '00000'; // zero-pad to this many digits

		// Returns a random integer between min (included) and max (included)
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
		var r = Math.floor(Math.random() * (max - min + 1)) + min;
		inbox.textContent = (zeroPad + r).slice(-zeroPad.length) + ' unread';
	}

	document.onclick = poll;
	document.onmousemove = poll;
	document.addEventListener('touchmove', poll);
	poll();
})();