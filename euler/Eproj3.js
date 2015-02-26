var eve = function(num) {
  if (num === 0) {
    return 'error';
  }
  
  while (num%2 === 0) {
      num = num/2;
    }
    return num;
}

var facArr = function(num) {
   
   root = Math.ceil(Math.sqrt(num));
   pri = eve(num);
   arr = [];
   var filt = [];
  
   if (num === 0) {
     return 'error';
   }
  
   if (num%2 === 0) {
     filt.push(2);
   }
  
   for (i = 3; i <= root; i++) {
     if (pri%i === 0) {
       arr.push(i);
       arr.push(pri/i);
     }
   }
  
   for (i = 0; i < arr.length; i++) {
     if (arr[i] === 2 || arr[i] === 5) {
       filt.push(arr[i]);
     } else
     if (arr[i]%2 != 0 && arr[i]%5 != 0) {
       filt.push(arr[i]);
     }
   }  
  
   filt.sort(function(a, b){return b-a});
   document.write("Starting with " + pri + "<br>");
   document.write(filt.join('\n' + '|' + '\n') + '<br>');
   return filt[0];
  
};

//for...of !!!

//var ans = function(num) {
//  x = facArr(num);
//  y = facArr(x);
  
//  while ( x != undefined) {
    
//  }
  
  
//  alert(x);
//  alert(y);
  
//}

//ans(10);

facArr(1000);
//facArr(1128282827);
//facArr(161183261);
//alert(facArr(1941967) === undefined);
