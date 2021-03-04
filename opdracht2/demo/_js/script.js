/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log('bladeren js');

var fotos = ['image00.jpg','image01.jpg', 'image02.jpg', 'image03.jpg', 'image04.jpg', 'image05.jpg', 'image06.jpg'];

var fotoImg = document.querySelector('#foto');
var huidigNrSpan = document.querySelector('#huidigeFotoNr');
var laatsteNrSpan = document.querySelector('#laatsteFotoNr');
var vooruitButton = document.querySelector('#vooruit');
var achteruitButton = document.querySelector('#terug');

var huidigFotoNr = 0 ; // 
toonHuidigeFoto();	

function toonHuidigeFoto() {
	console.log('bladeren ' + huidigFotoNr);
	fotoImg.src = '_img/' + fotos[huidigFotoNr];
	huidigNrSpan.textContent = huidigFotoNr ;
	laatsteNrSpan.textContent = fotos.length - 1;

}



function bladerVooruit() {
	huidigFotoNr = huidigFotoNr + 1 ;
	if ( huidigFotoNr > fotos.length -1 ) { 
		huidigFotoNr = 1 ; 
	}
	toonHuidigeFoto();	
}

function bladerAchteruit() {
	huidigFotoNr = huidigFotoNr - 1 ;
	if ( huidigFotoNr < 1 ) { 
		huidigFotoNr = fotos.length -1 ; 
	}
	toonHuidigeFoto();
}

vooruitButton.addEventListener('click' , bladerVooruit );
vooruitButton.addEventListener('keypress' , bladerVooruit );
achteruitButton.addEventListener('click' , bladerAchteruit );