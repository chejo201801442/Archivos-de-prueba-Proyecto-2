
let arr : boolean[] = [true,true,false,false,false,true,true]; 
for(let i : number =0; i<arr.length; i++){
    console.log(arr[i] + ": booleano");
    console.log(arr[i] + 1);
    if(arr[i]){
        console.log("Indice: "+i + " es "+arr[i]);
    }
}


let ar1 : number[] = [5,8,9,6,4,7,8];
let ar2 : number[] = ar1;

if(ar1 == ar2){
    console.log("ARREGLOS IGUALES JAJAJA ALV");
}

let matriz : number[][] = [[52,89],[66,45]];

for(let i :number =0; i<matriz.length;i++){
    for(let j : number =0; j< matriz[i].length;j++){
        console.log(matriz[i][j]); 
    }
}

let matriz3d : number[][][] = [[[1],[2],[3]],[[4],[5],[6]],[[7],[8],[9]]];

for(let i :number =0; i<matriz3d.length;i++){
    for(let j : number =0; j< matriz3d[i].length;j++){
        for(let k : number =0; k< matriz3d[i][j].length;k++){
            console.log(matriz3d[i][j][k]); 
        } 
    }
}
console.log(matriz3d[1][2][0]);

let matriz3dstring : string[][][] = [[["HOLA "],["COMO ESTAS"],["SERA QUE SALE?"]],[["A LO MEJOR "],["XD"],["A "]],[["VER"],["QUE"],["PASA"]]];

for(let i :number =0; i<matriz3dstring.length;i++){
    for(let j : number =0; j< matriz3dstring[i].length;j++){
        for(let k : number =0; k< matriz3dstring[i][j].length;k++){
            console.log(matriz3dstring[i][j][k]); 
            console.log("CHAR AT 0: "+matriz3dstring[i][j][k].charAt(0));
            console.log(matriz3dstring[i][j][k].length);
        } 
    }
}