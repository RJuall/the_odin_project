var arr = [];
var fin = 0;

for (i = 1; i < 1000; i++) {
    if (i%3 === 0 || i%5 === 0) {
        arr.push(i);
    }
}

for (i = 0; i < arr.length; i++) {
    fin += arr[i];
}

console.log(fin);

