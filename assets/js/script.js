var viewAll = document.querySelector("#all-view");
var offer = document.querySelector("#offer-template");
var viewAllEnabled = true;


init();

function init(){
	for (var i=0; i<4; i++){
		var clone = offer.content.cloneNode(true);
		document.body.appendChild(clone);
	}
}

viewAll.addEventListener('click',function(){
	
	if(viewAllEnabled){
		viewAllEnabled = false;
		for (var i=0; i<16; i++){
			var clone = offer.content.cloneNode(true);
			document.body.appendChild(clone);
		}
	}
	else{
		alert("All the top offers are already here!");
	}

	var clone = offer.content.cloneNode(true);
	document.body.appendChild(clone);
});
