const Util = require('./math');

describe('Factorial', function() {
  test.each([[0, 1], [1, 1], [2, 2], [3, 6], [4, 24], [5, 120]])(
    'Factorial %i equals to %i',
    (n, expected) => {
      expect(Util.factorial(n)).toBe(expected);
    }
  );

  test('Factorial of negative integers throws exception', () => {
    expect(() => {
      Util.factorial(-10);
    }).toThrow();
  });
});

describe('isPrime', function() {
  test('6 is not a prime number', () => {
    expect(Util.isPrime(6)).toBe(false);
  });
  test('5 is a prime number', () => {
    expect(Util.isPrime(5)).toBe(true);
  });
  test('-1 is not a prime number', () => {
    expect(Util.isPrime(-1)).toBe(false);
  });
  test('toto return false', () => {
    expect(Util.isPrime('toto')).toBe(false);
  });
});

describe('sumPrime', function() {
  test('Sum of prime numbers between 0 and 6 equals to 10', () => {
    expect(Util.sumPrime(6)).toBe(10);
  });
  test('Sum of prime numbers between 0 and 8 equals to 17', () => {
    expect(Util.sumPrime(8)).toBe(17);
  });
  test('Sum of prime numbers between 0 and negative numbers throws exception', () => {
    expect(() => {
      Util.sumPrime(-1);
    }).toThrow();
  });
});

describe('fizzBuzz', function() {
  test('Fizzbuzz of 15 must be [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]', () => {
    expect(Util.fizzBuzz(15)).toEqual([
      1,
      2,
      'Fizz',
      4,
      'Buzz',
      'Fizz',
      7,
      8,
      'Fizz',
      'Buzz',
      11,
      'Fizz',
      13,
      14,
      'FizzBuzz'
    ]);
  });
  test('Fizzbuzz of 0 must be []', () => {
    expect(Util.fizzBuzz(0)).toEqual([]);
  });
  test('Fizzbuzz of -2 must be []', () => {
    expect(Util.fizzBuzz(-1)).toEqual([]);
  });
});
