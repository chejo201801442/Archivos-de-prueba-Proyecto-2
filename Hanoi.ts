let var1 : string = "aasdf";
let var2 : number = 569;
let var3 : boolean = 0==0;
function hanoi(discos: number, origen: number, auxiliar: number, destino: number): void {
    if (discos == 1) {
        console.log("Mover disco de " + origen + " a " + destino);
    } else {
        hanoi(discos - 1, origen, destino, auxiliar);
        console.log("Mover disco de " + origen + " a " + destino);
        hanoi(discos - 1, auxiliar, origen, destino);
    }
}
hanoi(3, 1, 2, 3);
function hanoi2(discos: number, origen: number, auxiliar: number, destino: number): string {
    let result: string = "";
    if (discos == 1) {
        result = result + (origen + destino);
    } else {
        result = result + hanoi2(discos - 1, origen, destino, auxiliar);
        result = result + (origen + destino);
        result = result + hanoi2(discos - 1, auxiliar, origen, destino);
    }
    return result;
}

console.log(hanoi2(4, 1, 5, 3));  //648648648648648