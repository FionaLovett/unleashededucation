const GLOBAL_UNLEASHED_VERSION_CURRENT =
  typeof GLOBAL_UNLEASHED_VERSION !== "undefined"
    ? GLOBAL_UNLEASHED_VERSION
    : "1.8";
const GLOBAL_UNLEASHED_CDN =
  "https://cdn.jsdelivr.net/gh/fionalovett/unleashededucation@" +
  GLOBAL_UNLEASHED_VERSION_CURRENT;
let scriptname = GLOBAL_UNLEASHED_CDN + "/unleashed-slider-popup.js";

document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector('script[src="' + scriptname + '"]')) {
    // The script hasn't been loaded yet, so load it now
    var script = document.createElement("script");
    script.src = scriptname;
    document.head.appendChild(script);
  }
});
