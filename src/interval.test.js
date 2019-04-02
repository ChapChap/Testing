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

describe('tostring', function() {
  test('toString test', () => {
    expect(regular.toString()).toEqual('[5,10]');
  });
});

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

describe('union', function() {
  test('Union regular & smaller = regular', () => {
    expect(regular.union(smaller).toString()).toEqual(regular.toString());
  });
  test('Union regular & bigger = bigger', () => {
    expect(regular.union(bigger).toString()).toEqual(bigger.toString());
  });
  test('Union regular & regular = regular', () => {
    expect(regular.union(regular).toString()).toEqual(regular.toString());
  });
  test('Union regular & neigha = [Interval(neigha.start,regular.end)]', () => {
    expect(regular.union(neigha).toString()).toEqual(
      new Interval(neigha.start, regular.end).toString()
    );
  });
  test('Union regular & neighb = [Interval(regular.start,neighb.end)]', () => {
    expect(regular.union(neighb).toString()).toEqual(
      new Interval(regular.start, neighb.end).toString()
    );
  });
  test('Union regular & limita = [Interval(limita.start,regular.end)]', () => {
    expect(regular.union(limita).toString()).toEqual(
      new Interval(limita.start, regular.end).toString()
    );
  });
  test('Union regular & limitb = [Interval(regular.start,limitb.end)]', () => {
    expect(regular.union(limitb).toString()).toEqual(
      new Interval(regular.start, limitb.end).toString()
    );
  });
  test('Union regular & ahead = [ahead,regular]', () => {
    expect(regular.union(ahead).toString()).toEqual(
      [ahead, regular].toString()
    );
  });
  test('Union regular & behind = [regular,behind]', () => {
    expect(regular.union(behind).toString()).toEqual(
      [regular, behind].toString()
    );
  });
});

describe('intersection', function() {
  test('Intersection between regular and start limit interval must be null', () => {
    expect(regular.intersection(limita)).toBeNull;
  });
  test('Intersection between regular and end limit interval must be null', () => {
    expect(regular.intersection(limitb)).toBeNull;
  });
  test('Intersection between regular and ahead interval must be null', () => {
    expect(regular.intersection(ahead)).toBeNull;
  });
  test('Intersection between regular and behind interval must be null', () => {
    expect(regular.intersection(behind)).toBeNull;
  });
  test('Intersection regular & smaller = smaller', () => {
    expect(regular.intersection(smaller).toString()).toEqual(
      smaller.toString()
    );
  });
  test('Intersection regular & bigger = regular', () => {
    expect(regular.intersection(bigger).toString()).toEqual(regular.toString());
  });
  test('Intersection regular & regular = regular', () => {
    expect(regular.intersection(regular).toString()).toEqual(
      regular.toString()
    );
  });
  test('Intersection regular & "start" overlaping interval = Interval(regular.start, neigha.end)', () => {
    expect(regular.intersection(neigha).toString()).toEqual(
      new Interval(regular.start, neigha.end).toString()
    );
  });
  test('Intersection regular & "end" overlaping interval = Interval(neighb.start, regular.end)', () => {
    expect(regular.intersection(neighb).toString()).toEqual(
      new Interval(neighb.start, regular.end).toString()
    );
  });
});

describe('exclusion', function() {
  test('Exclusion regular & regular = regular', () => {
    expect(regular.exclusion(regular)).toEqual([]);
  });
  test('Exclusion between regular and ahead interval must be [ahead,regular]', () => {
    expect(regular.exclusion(ahead)).toEqual([ahead, regular]);
  });
  test('Exclusion between regular and behind interval must be [regular,behind]', () => {
    expect(regular.exclusion(behind)).toEqual([regular, behind]);
  });
  test('Exclusion between regular and start limit interval must be [limita, regular]', () => {
    expect(regular.exclusion(limita)).toEqual([limita, regular]);
  });
  test('Exclusion between regular and end limit interval must be [regular, limitb]', () => {
    expect(regular.exclusion(limitb)).toEqual([regular, limitb]);
  });
  test('Exclusion regular & "start" overlaping interval = [[4,5],[7,10]]', () => {
    expect(regular.exclusion(neigha)).toEqual([
      new Interval(neigha.start, regular.start),
      new Interval(neigha.end, regular.end)
    ]);
  });
  test('Exclusion regular & "end" overlaping interval = [[5,7],[10,11]]', () => {
    expect(regular.exclusion(neighb)).toEqual([
      new Interval(regular.start, neighb.start),
      new Interval(regular.end, neighb.end)
    ]);
  });
  test('Exclusion regular & smaller = [[5,6],[9,10]]', () => {
    expect(regular.exclusion(smaller)).toEqual([
      new Interval(regular.start, smaller.start),
      new Interval(smaller.end, regular.end)
    ]);
  });
  test('Exclusion regular & bigger = [[3,5],[10,12]]', () => {
    expect(regular.exclusion(bigger)).toEqual([
      new Interval(bigger.start, regular.start),
      new Interval(regular.end, bigger.end)
    ]);
  });
});
