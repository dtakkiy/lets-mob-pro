const fizzBuzz = (i: number): string => {
  if (i % 3 === 0 && i % 5 === 0) {
    return 'FizzBuzz';
  }

  if (i % 3 === 0) {
    return 'Fizz';
  }

  if (i % 5 === 0) {
    return 'Buzz';
  }

  return i.toString();
};

export default fizzBuzz;
