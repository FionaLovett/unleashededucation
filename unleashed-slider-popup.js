openUnleashedSliderPopup = (id) => {

const fullid = "unleashed-slider-popup-" + id.toString();
alert(fullid);
	const popupelem = document.getElementById(fullid);

	popupelem.style.display= "none";
}

document.addEventListener('DOMContentLoaded', function() {
   const modalbg = document.createElement("div");
   const slidercontainer = document.createElement("div");
   const elfsightscript = document.createElement("script");
   const elfsightsrc = "https://apps.elfsight.com/p/platform.js";
   document.body.appendChild(elfsightscript);
   
   modalbg.setAttribute("id", "unleashed-modal-background");
   modalbg.addEventListener("click", function() {
	   modalbg.style.display = "none";
	   slidercontainer.style.display = "none";
	   slidercontainer.innerHTML = "";
	   elfsightscript.setAttribute("src", "");
   }, false);
   
   slidercontainer.setAttribute("id", "unleashed-slider-popup-container");

   document.body.appendChild(modalbg);
   document.body.appendChild(slidercontainer);
   
   const collection = document.getElementsByClassName("unleashed-slider-thumbnail");
   
	
	for(let i=0;i<collection.length;i++) {
		const t = collection[i];
		
		t.setAttribute("id", "unleashed-slider-thumbnail-" + i);
		t.addEventListener("click", function() {
			modalbg.style.display = "block";
			slidercontainer.style.display = "block";
			
			const e = document.createElement("div");
			e.setAttribute("class", "elfsight-app-" + t.getAttribute("data-elfsightid"));
			slidercontainer.appendChild(e);
			elfsightscript.setAttribute("src", elfsightsrc);
		}, false);
		
		const img = document.createElement("img");
		img.setAttribute("src", t.getAttribute("data-img"));
		t.appendChild(img);
		
		
	}
}, false);
