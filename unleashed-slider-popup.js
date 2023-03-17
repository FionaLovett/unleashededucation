const UNLEASHED_SLIDER_ACTIVE = true;
function unleashedsliderpopupclose() {
	modalbg.style.display = "none";
	slidercontainer.style.display = "none";
	slidercontainer.innerHTML = "";
	elfsightscript.setAttribute("src", "");
}

const cssId = 'unleashed-slider-css';  // you could encode the css path itself to generate id..
if (!document.getElementById(cssId)) {
	var head = document.getElementsByTagName('head')[0];
	var link = document.createElement('link');
	link.id = cssId;
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.href = 'https://cdn.jsdelivr.net/gh/fionalovett/unleashededucation@latest/unleashed-slider-popup.css?v=12';
	link.media = 'all';
	head.appendChild(link);
}

const modalbg = document.createElement("div");
const slidercontainer = document.createElement("div");
const elfsightscript = document.createElement("script");
const elfsightsrc = "https://apps.elfsight.com/p/platform.js";
document.body.appendChild(elfsightscript);

modalbg.setAttribute("id", "unleashed-modal-background");
modalbg.addEventListener("click", unleashedsliderpopupclose, false);

slidercontainer.setAttribute("id", "unleashed-slider-popup-container");

document.body.appendChild(modalbg);
document.body.appendChild(slidercontainer);

const closeicon = document.createElement("img");
closeicon.src = "https://cdn.jsdelivr.net/gh/fionalovett/unleashededucation@latest/close-outline.png";
closeicon.setAttribute("id", "unleashed-slider-close-button");
closeicon.addEventListener("click", unleashedsliderpopupclose, false);

const collection = document.getElementsByClassName("unleashed-slider-thumbnail");


for (let i = 0; i < collection.length; i++) {
	const t = collection[i];

	t.setAttribute("id", "unleashed-slider-thumbnail-" + i);
	t.innerHTML = ""; // necessary because Kajabi adds a &npsb;
	if (UNLEASHED_SLIDER_ACTIVE) {
		t.addEventListener("click", function () {
			modalbg.style.display = "block";
			slidercontainer.style.display = "block";

			const e = document.createElement("div");
			e.setAttribute("class", "elfsight-app-" + t.getAttribute("data-elfsightid"));
			slidercontainer.appendChild(e);
			slidercontainer.appendChild(closeicon);
			elfsightscript.setAttribute("src", elfsightsrc);
		}, false);
	} else {
		t.style.cursor = "unset";
	}

	const img = document.createElement("img");
	img.setAttribute("src", t.getAttribute("data-img"));
	t.appendChild(img);

}
