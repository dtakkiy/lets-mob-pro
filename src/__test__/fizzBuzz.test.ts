import { fizzBuzz } from '../fizzBuzz';

describe('fizzBuzz問題', () => {
  it('引数に3を与えた場合', () => {
    expect(fizzBuzz(3)).toMatch(/Fizz/);
  });

  it('引数に5を与えた場合', () => {
    expect(fizzBuzz(5)).toMatch(/Buzz/);
  });

  it('引数に15を与えた場合', () => {
    expect(fizzBuzz(15)).toMatch(/FizzBuzz/);
  });

  it('引数に11を与えた場合', () => {
    expect(fizzBuzz(11)).toMatch(/11/);
  });
});
