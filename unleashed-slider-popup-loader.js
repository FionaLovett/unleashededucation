document.addEventListener('DOMContentLoaded', function () {

	let scriptname = "unleashed-slider-popup.js?v=12";

	if (!document.querySelector('script[src="' + scriptname + '"]')) {
		// The script hasn't been loaded yet, so load it now
		var script = document.createElement('script');
		script.src = scriptname;
		document.head.appendChild(script);
	}

});