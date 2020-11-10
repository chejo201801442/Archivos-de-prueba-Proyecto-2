// ENTRAADAS CON LENGTH FOR IN DIMENSIONES 
function arreglos(): void{
let x: number[] = [0, 1, 4, 5, 6];
let y: number[] = new Array(5 - 3);
let z: string[][][] = [[["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"]], [["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"]], [["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"], ["asdf", "asdf", "asdf"]]];
console.log(x.length);//5
console.log(y.length);//2
console.log(x.length + y.length);
console.log(x.length - y.length);
console.log(x.length * y.length);
console.log(x.length / y.length);
console.log(x.length ** y.length);
console.log(x.length % y.length);
console.log("INICIA FOR IN");
for (let i in x) {
    console.log(i);
}
console.log("INICIA FOR IN 3D");
for (let i in z[0][1]) {
    console.log(i);
}
/********************************************************************/
let x2 : number[] = [0,1,4,5,6]; 
let y2 : string[][]= [["popo","kaka"],["ronaldo","messi"]];
// y : number[][] = [[6,9],[7,8]];
console.log(" FOR IN UNA DIMENSION NUMEROS ");
for(let i in x2){
    console.log(i);
}
console.log(" FOR OF UNA DIMENSION NUMEROS ");
for(let i of x2){
    console.log(i);
}

console.log(" FOR OF DOS DIMENSION NUMEROS ");
for(let i in y2[0]){
    console.log(i);
}
console.log(" FOR OF DOS DIMENSION NUMEROS ");
for(let i of y2[0]){
    console.log(i);
}

console.log('\n\t\"\r sho');

console.log("0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0");
console.log("1\t0\t1\t0\t1\t0\t1\t0\t1\t0\t1");
console.log("0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0");
for (let i : number = 0; i < 10; i++) {
    let output : string = '';
    for (let j : number= 0; j < 10 - i; j++) {
        output = output + ' ';
    }
    for (let k : number= 0; k <= i; k++) {
        output = output + '* ';
    }
    console.log(output);
}
console.log("0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0");
console.log("1\t0\t1\t0\t1\t0\t1\t0\t1\t0\t1");
console.log("0\t1\t0\t1\t0\t1\t0\t1\t0\t1\t0");
}
arreglos();