let Util = {};
Util.factorial = n => {
  if (n < 0) {
    throw 'Unable to compute factorial for n < 0';
  }

  if (!(typeof n === 'number')) {
    throw 'Unable to compute factorial of non number values';
  }

  if (Math.floor(n) !== n) {
    throw 'Unable to compute factorial of non integer values';
  }

  if (n >= 100) {
    throw 'Unable to compute factorial for n > 100';
  }

  if (0 === n) {
    return 1;
  }

  return n * Util.factorial(n - 1);
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => true
 * Util.isPrime(6) => false
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
  if (isNaN(n) || !isFinite(n) || n % 1 || n < 2) return false;
  var m = Math.sqrt(n);
  for (var i = 2; i <= m; i++) if (n % i == 0) return false;
  return true;
};

/**
 * Additionne l'ensemble des nombres premiers de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {
  if (n < 0) {
    throw 'Unable to compute sum of prime numbers for n < 0';
  }
  var sieve = [],
    i,
    j,
    primes = [],
    sum = 0;
  for (i = 2; i <= n; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i);
      for (j = i << 1; j <= n; j += i) {
        sieve[j] = true;
      }
    }
  }
  for (let p of primes) {
    sum += p;
  }
  return sum;
};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {
  var str = [];
  if (n < 1) return str;
  var i = 1;
  while (i <= n) {
    if (i % 3 == 0 && i % 5 == 0) str.push('FizzBuzz');
    else if (i % 5 == 0) str.push('Buzz');
    else if (i % 3 == 0) str.push('Fizz');
    else str.push(i);
    i++;
  }
  return str;
};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Vojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function(phrase) {
  var result = '';
  var charcode = 0;
  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i] == ' ') result += ' ';
    else {
      charcode = phrase[i].charCodeAt() + 1;
      result += String.fromCharCode(charcode);
    }
  }
  return result;
};

module.exports = Util;
