'use strict';

function sumOfDivided(lst) {
  if (lst.length == 0) return [] ;
  
  function getPrimes(num) {
    let primes = [];
    for (let i = 2; i <= num; i++) {
      for (let j = 2; j <= i; j++) {
        if (j == i) primes.push(i);
        if (i % j == 0) break;
      }
    }
    return primes;
  }

  let maxNum = Math.max(...lst, Math.abs(Math.min(...lst)));
  let primes = getPrimes(maxNum);
  let primeFactors = [];
  for (let i = 0; i < primes.length; i++) {
    let primeFactor = [primes[i], 0];
    let addOrNot = false;
    for (let number of lst) {
      if (number % primes[i] == 0) {
        primeFactor[1] += number;
        addOrNot = true;
      }
    }
    if (addOrNot) primeFactors.push(primeFactor);
  }
  return primeFactors;
}
