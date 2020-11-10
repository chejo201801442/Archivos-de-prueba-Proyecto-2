function getPivot(value: number): number {
    return value % 1 == 0 ? value : value - 0.5;
}

function swap(i: number, j: number, x: number[]): void {
    const temp: number = x[i];
    x[i] = x[j];
    x[j] = temp;
}

function quickSort(low: number, high: number, x: number[]): void {
    let i: number = low;
    let j: number = high;
    let pivot: number = x[getPivot((low + high) / 2)];

    while (i <= j) {
        while (x[i] < pivot) {
            i++;
        }

        while (x[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(i, j, x);
            i++;
            j--;
        }
    }

    if (low < j) {
        quickSort(low, j, x);
    }
    if (i < high) {
        quickSort(i, high, x);
    }
}

let array2: number[] = [8, 48, 69, 12, 25, 98, 71, 33, 129, 5];
quickSort(0, array2.length - 1, array2);

for (let x of array2) {
    console.log(x);
}