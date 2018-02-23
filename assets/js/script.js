var viewAll = document.querySelector("#all-view");
var offer = document.querySelector("#offer-template");
var viewAllEnabled = true;

init();

/* Initially, there'll be 4 offers on the page */
function init(){
	for (var i=0; i<4; i++){
		var clone = offer.content.cloneNode(true);
		document.body.appendChild(clone);
	}
}

/* When clicked on view all button, rest of the 16 offers will be displayed. */
viewAll.addEventListener('click',function(){
	
	if(viewAllEnabled){
		viewAllEnabled = false;
		for (var i=0; i<16; i++){
			var clone = offer.content.cloneNode(true);
			document.body.appendChild(clone);
		}
	}
	/* If clicked again, it will show this alert because offers have already been displayed. */
	else{
		alert("All the top offers are already here!");
	}

	var clone = offer.content.cloneNode(true);
	document.body.appendChild(clone);
});
