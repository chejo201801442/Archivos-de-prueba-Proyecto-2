let array2:string [] = [["hola","otro","dos"],["neel","talega"],["shit","buena"],["pruebaas","neel"]];
prueba(array2);
function prueba(a:string):void{
console.log(a[1][1]+"\n");
let cadena : string = "cambio";
a[1][1] = cadena.toUpper();
console.log("deberia imprimir talega :C");
console.log(a[1][1]);
console.log("deberia imprimir cambio");
}

function  mostrarFactorial(n2:number):void{
    let fact:number = 1;
    let str:string= "El factorial de: "+n2+" es :";
    if (n2 !=0){
        for(let i:number=n2; i >0; i--){
            fact = fact * i;
            str = str + i;
            if (i > 1){
                str = str + " * ";

            }else {
                str = str + " = ";
            }
        }
    }

        str = str + fact+";";
    console.log(str);
}


function  FactorialIterativo(n2:number):void{
                     console.log("==============for Calificar Ciclos=============");

    let numeroFactorial:number = n2;
    while(numeroFactorial > -1){
        mostrarFactorial(numeroFactorial);
        numeroFactorial--;
    }
        
        console.log("======================================");

}
FactorialIterativo(4);

function getPivot(value : number) : number{
    return value % 1 == 0 ? value : value - 0.5;
}

function swap(i : number, j: number, array : number[]) : void{
    let temp:number = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function quickSort(low: number, high: number, array : number[]) : void{
    let i:number = low;
    let j:number = high;
    let pivot:number = array[getPivot((low + high) / 2)];

    while(i <= j){
        while(array[i] < pivot){
            i++;
        }

        while(array[j] > pivot){
            j--;
        }
        if(i <= j){
            swap(i, j, array);
            i++;
            j--;
        }
    }

    if(low < j){
        quickSort(low, j, array);
    }
    if(i < high){
        quickSort(i, high, array);
    }
}

let array : number[] = [8, 48, 69, 12, 25, 98, 71, 33, 129, 5];
quickSort(0, array.length - 1, array);
for(let x of array){
    console.log(x);
}

  
function ackermann(m: number, n: number): number {
    if (m == 0) {
        return (n + 1);
    } else if (m > 0 && n == 0) {
        return ackermann(m - 1, 1);
    } else {
        return ackermann(m - 1, ackermann(m, n - 1));
    }
}
console.log("\n");
console.log(ackermann(3,7));


  function fibonacci( n:number):number {
        if (n <= 1) {
            return n;
        }
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
    console.log(fibonacci(13));  // 233


 function hanoi( discos:number, origen:number,  auxiliar:number,  destino:number):string {
 let result:string = "";
 if (discos == 1) {
result = result + (origen + destino);
  } else {
    result = result + hanoi(discos - 1, origen, destino, auxiliar);
     result = result + (origen + destino);
     result = result + hanoi(discos - 1, auxiliar, origen, destino);
  }
        return result;
    }

    console.log(hanoi(4,1,5,3));  


  function factorial( n:number):number {
        console.log(n);
        switch(n){
            case 0:
                return 1;
            case 0:
                return -100; 
            default:
                return n * factorial(n - 1); 
               
        }
    }
    console.log(factorial(13));


   function potencia( base:number,  exp:number):number {
    
        switch(exp){
            case 0:
                return 1;
            case 0:
                return -100; 
            default:
                return (base * potencia(base, exp - 1));
               
        }
    }    
console.log(potencia(30,5)); //24300000