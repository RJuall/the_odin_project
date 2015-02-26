
var a = 1;
var b = 2;
var x = 0;
var fix = 0;
var fiz = [1,2];

do {
    x = a + b;
    a = b;
    b = x;
    fiz.push(x);
    var i = x;
} while (i < 4000000);

for (y = 0; y < fiz.length; y++) {
    if (fiz[y]%2 === 0) {
        fix += fiz[y];
    }
}

console.log(fix);
