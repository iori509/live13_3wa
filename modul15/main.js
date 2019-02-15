//On récupère l'élément du DOM canvas
let canvas = document.querySelector("#cvs");

canvas.addEventListener("click", function( e ){
	// LayerX et layerY sont en cours de développement
	// ces valeurs ne sont pas accessibles pour tous
	// Les utilisateurs
	// console.log( e.layerX, e.layerY );


	let offset = canvas.getBoundingClientRect();

	let clickX = e.clientX - offset.left;
	let clickY = e.clientY - offset.top;
	console.log(  clickX,clickY );

});

/* Défini la largeur du canvas */ 
cvs.width = 800;

/* Défini la hauteur du canvas */
cvs.height = 600;
/*
	On doit prendre le context pour pouvoir dessiner
	il existe 2 type de context :
		2d : pour avoir les fonctionnalités de dessin en 2d
		3d : pour pouvoir faire de la 3d dans le navigateur
*/
let ctx = canvas.getContext("2d");

/*
	On signale au context qu'on commence un tracé
	par défaut, la position du crayon est à { x: 0, y: 0 }
*/
// ctx.beginPath();

//  moveTo : permet de déplacer 
// le crayon vers la position donnée
// ctx.moveTo( 50, 0 );

/*
	lineTo : Permet de tracer une ligne entre la 
	dernière position du crayon et la position du
	lineTo

	Les paramètres de moveTo et lineTo sont toujours
	dans cet ordre : x, y
*/
// ctx.lineTo( 50, 100 );
// ctx.lineTo( 200, 50 );

// ctx.moveTo( 0, 0 );
// ctx.lineTo( 50, 50 );

/* On ferme le tracé */
// ctx.closePath();

// /* Change la couleur du tracé */
// ctx.strokeStyle = "red";

// /* Change le remplissage de la forme */
// ctx.fillStyle = "rgba( 125,0,125, 0.1)";

// /* Dessine les contours du tracé */
// ctx.stroke();

// /* Rempli le tracé de couleur */
// ctx.fill();


// ctx.beginPath();

//ctx.arc( x, y, r, startAngle, endAngle );

/* 
	En radian : 
	2 * Math.PI = 360°
	Math.PI = 180°
	Math.PI / 2 = 90°
*/
// ctx.arc( 50, 100, 50, 0, Math.PI );
// ctx.closePath();
// ctx.strokeStyle = "blue";
// ctx.stroke();
// ctx.fillStyle = "green";
// ctx.fill();


function rectangle( x, y, width, height ){
	ctx.beginPath();

	ctx.moveTo( x,y );

	ctx.lineTo( x + width, y );
	ctx.lineTo( x + width, y + height );
	ctx.lineTo( x, y + height );
	ctx.lineTo( x, y );

	let red = Math.floor( Math.random() * 255 );
	let green = Math.floor( Math.random() * 255 );
	let blue = Math.floor( Math.random() * 255 );

	let color = "rgb("+red+","+green+","+blue+")";

	let colorHexa = "#" + Math.random().toString( 16 ).substr( - 6 );
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = colorHexa;
	ctx.fill();

}

/*
0-255

rgb(255,255,255)

red : 0-255
green : 0-255
blue : 0-255

hexadecimal : 0-F > 16

#ab1fc3

red : ab  > 00 - FF
green : 1F > 00 - FF
blue : c3 > 00 - FF

*/
/*
rectangle( 10,10,20,50);
rectangle( 250, 250, 50, 50 );
rectangle( 300, 250, 20, 50 );
rectangle( 500, 3500, 10, 500 );
rectangle( 250, 150, 70, 80 );
*/