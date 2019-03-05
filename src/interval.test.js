const Interval = require('./interval');

describe('overlaps', function() {
  let regular = new Interval(5, 10);
  let ahead = new Interval(1, 3);
  let behind = new Interval(11, 13);
  let neigha = new Interval(4, 7);
  let neighb = new Interval(7, 11);
  let bigger = new Interval(3, 12);
  let smaller = new Interval(6, 9);
  let limita = new Interval(1, 5);
  let limitb = new Interval(10, 15);
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
});

describe('overlaps', function() {});
