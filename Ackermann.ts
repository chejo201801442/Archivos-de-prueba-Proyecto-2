function ackermann(m: number, n: number): number {
    if (m == 0) {
        return (n + 1);
    } else if (m > 0 && n == 0) {
        let cuatro: number = ackermann(m - 1, 1);
        return cuatro;
    } else {
        let ret: number = ackermann(m, n - 1);
        let nueva: number = ackermann(m - 1, ret);
        return nueva;
    }

}
console.log(ackermann(3, 8)); //2045 

function ackermann2(m: number, n: number): number {
    if (m == 0) {
        return (n + 1);
    } else if (m > 0 && n == 0) {
        return ackermann2(m - 1, 1);
    } else {
        return ackermann2(m - 1, ackermann2(m, n - 1));
    }
}
console.log(ackermann2(3, 7)); //1021
