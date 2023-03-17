$(document).ready(function () {
	let len = $('script').filter(function () {
		return ($(this).attr('src').indexOf("unleashed-slider-popup.js") >= 0);
	}).length;

	//if there are no scripts that match, the load it
	if (len === 0) {
		$.getScript("https://cdn.jsdelivr.net/gh/fionalovett/unleashededucation@latest/unleashed-slider-popup.js?v=7");
	}
});