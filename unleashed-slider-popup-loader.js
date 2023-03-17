document.addEventListener('DOMContentLoaded', function () {

	let scriptname = "https://cdn.jsdelivr.net/gh/fionalovett/unleashededucation@1.2/unleashed-slider-popup.js";

	if (!document.querySelector('script[src="' + scriptname + '"]')) {
		// The script hasn't been loaded yet, so load it now
		var script = document.createElement('script');
		script.src = scriptname;
		document.head.appendChild(script);
	}

});