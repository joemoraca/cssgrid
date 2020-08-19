var p = document.querySelector("section");

p.addEventListener("input", function() {
    this.setAttribute("data-heading", this.innerText);
});

function variableResize() {
	
	// Minimum & Maximum font weight
	const minFontWeight = 100;
	const maxFontWeight = 700;
	
	const minFontWidth = 85;
	const maxFontWidth = 100;
	
	// Minimum and Maximum viewport size
	const maxWindowSize = 1280;
	const minWindowSize = 320;
	
	// Get current viewport size
	const windowWidth = window.innerWidth
	
	//Scale within a range
	const percent = (windowWidth - minWindowSize) / (maxWindowSize - minWindowSize);
	const fontWeightScale = percent * (minFontWeight - maxFontWeight) + maxFontWeight;
	const fontWidthScale = percent * (minFontWidth + maxFontWidth) - maxFontWidth;
	
	// Get the new font weight
	const newWeight = windowWidth > maxWindowSize
	   ? minFontWeight 
       : windowWidth < minWindowSize 
   			? maxFontWeight 
   			: fontWeightScale;
	
	const newWidth = windowWidth > maxWindowSize
	   ? minFontWidth
       : windowWidth < minWindowSize 
   			? maxFontWidth 
   			: fontWidthScale;
	   
		// Set my CSS Custom Property for weight to update.
     	p.style.setProperty("--weight", newWeight);
	
		p.style.setProperty("--width", newWidth);
}

variableResize();
window.addEventListener("resize", variableResize);