function hola():void{
let cadena : string = "Autor: ";
let cadena2 : string = "Sergio " + "Fernando";


console.log(cadena + "\n"+cadena2);
let numero : number = 100;
numero--;
let numero2 : number = 99;

console.log("AMBOS 99 ->["+numero +"] ["+numero2+"]");
let bool : boolean = (5==5) && ("sergio" == "sergio") && ("hola" != "compu");
console.log(bool);
if(bool){
    console.log("nativa string == string CORRECTA");
} else{
    console.log("HAY UN ERROR EN LA LINEA 10");
}
let sergio : string = "Autor\n";

console.log(sergio.concat(" DINOSAURIOS EN EL PARQUE "));

let verdadera : string = 56 + "alv jaja";
console.log(verdadera);
}
hola();