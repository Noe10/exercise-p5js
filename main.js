
var palabra = "la oreja de van gogh unido";



function CamellCase(palabra){

       
        var letras = palabra.split(" ");
        var firstletter;

       console.log(letras);
   
        var i,texto1,cadena;
        var result = ""; 
        for(i = 0 ; i < letras.length;i++){
          
              texto1 = letras[i].split("");
              firstletter = texto1.shift().toUpperCase();
              cadena  = texto1.join("");
              result += firstletter + cadena +" ";
       
         }
         console.log(result);
   }
CamellCase(palabra);

//


function setup() {
  createCanvas(720, 600);
  
}

var x = 8;
var y = 20;

    
function draw() {
  background(0);
  // put drawing code here
   y++;
   if( y == 600 ){
     y = 8;
   }
  
  rect(x, y, 50, 23);
}