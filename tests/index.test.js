import sum from '../src/';

describe('Sum', () => {
  it('Should return sum of given numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
