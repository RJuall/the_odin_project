var primeCheck = function(num) {

  //variables
  span = num;
  fac = [];
  bit = 0;

  //iterate through factor function
  var iter = function(arr) {
    //reset
    bit = 0;

    //getting rid of some useless factorization
    for (i = 0; i <= arr.length; i++) {
      if (arr[i]%2 === 0 && arr[i] != 2 && arr[i] != num) {
        arr.splice(i, 1);
      }
    }

    //dividing by odds through the factor list
    for (i = 0; i<= arr.length; i++) {
      for (y = 3; y <= Math.sqrt(arr[i]); y+=2){
        if (arr[i]%y === 0) {
          arr.push(y, arr[i]/y);
          arr.splice(i, 1);
          bit = 1;
        }
      }
    }
  };

  //remove variables of 2
  if (num%2 === 0) {
    span = num/2;
    fac.push(2, span);
  }

  //divide by odds
  for (i = 3; i < Math.sqrt(num); i+=2) {
    if (span%i === 0) {
      fac.push(i, span/i);
    }
  }

  //do we have a prime number?
  if (fac.length === 0) {
    return(num + " is a prime number.");
  }

  //calling the function to go through the first factor list
  do {
    iter(fac);
  } while (bit === 1);

  //sort and return
  fac.sort(function(a, b) {return a-b});
  return(fac[fac.length - 1] + " is the greatest prime factor");
  
};

console.log(primeCheck());
