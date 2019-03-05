const Interval = require('./interval');

const regular = new Interval(5, 10);
const ahead = new Interval(1, 3);
const behind = new Interval(11, 13);
const neigha = new Interval(4, 7);
const neighb = new Interval(7, 11);
const bigger = new Interval(3, 12);
const smaller = new Interval(6, 9);
const limita = new Interval(1, 5);
const limitb = new Interval(10, 15);

describe('overlaps', function() {
  test('Overlap NOK ahead', () => {
    expect(regular.overlaps(ahead)).toBe(false);
  });
  test('Overlap NOK behind', () => {
    expect(regular.overlaps(behind)).toBe(false);
  });
  test('Overlap NOK inf limit', () => {
    expect(regular.overlaps(limita)).toBe(false);
  });
  test('Overlap NOK sup limit', () => {
    expect(regular.overlaps(limitb)).toBe(false);
  });
  test('Overlap OK ahead', () => {
    expect(regular.overlaps(neigha)).toBe(true);
  });
  test('Overlap OK behind', () => {
    expect(regular.overlaps(neighb)).toBe(true);
  });
  test('Overlap OK bigger', () => {
    expect(regular.overlaps(bigger)).toBe(true);
  });
  test('Overlap OK smaller', () => {
    expect(regular.overlaps(smaller)).toBe(true);
  });
  test('Overlap OK identical', () => {
    expect(regular.overlaps(regular)).toBe(true);
  });
});

describe('includes', function() {
  test('Test included OK - smaller', () => {
    expect(regular.includes(smaller)).toBe(true);
  });
  test('Test included OK - identical', () => {
    expect(regular.includes(regular)).toBe(true);
  });
  test('Test NOT included - ahead', () => {
    expect(regular.includes(ahead)).toBe(false);
  });
  test('Test NOT included - behind', () => {
    expect(regular.includes(behind)).toBe(false);
  });
  test('Test NOT included - bigger', () => {
    expect(regular.includes(bigger)).toBe(false);
  });
  test('Test NOT included - half ahead', () => {
    expect(regular.includes(neigha)).toBe(false);
  });
  test('Test NOT included - half behind', () => {
    expect(regular.includes(neighb)).toBe(false);
  });
  test('Test NOT included - limit ahead', () => {
    expect(regular.includes(limita)).toBe(false);
  });
  test('Test NOT included - limit behind', () => {
    expect(regular.includes(limitb)).toBe(false);
  });
});
