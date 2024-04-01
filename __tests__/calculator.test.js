const Calculator = require('calculator');

describe('Sum function', () => {
  test('adds positive numbers correctly', () => {
    expect(Calculator.Sum(1, 2)).toBe(3);
    expect(Calculator.Sum(5, 7)).toBe(12);
  });

  test('returns null if any of the numbers is not positive', () => {
    expect(Calculator.Sum(-3, 7)).toBe(null);
    expect(Calculator.Sum(5, -7)).toBe(null);
    expect(Calculator.Sum(-5, -7)).toBe(null);
  });
});

describe('multiply function', () => {
  test('multiplies positive numbers correctly', () => {
    expect(Calculator.Multiply(2, 3)).toBe(6);
    expect(Calculator.Multiply(5, 7)).toBe(35);
  });

  // test('returns null if any of the numbers is not positive', () => {
    // expect(Calculator.Multiply(-3, 7)).toBe(null);
    // expect(Calculator.Multiply(5, -7)).toBe(null);
    // expect(Calculator.Multiply(-5, -7)).toBe(null);
  // });
});

describe('subtract function', () => {
  // test('subtracts positive numbers correctly', () => {
    // expect(Calculator.Subtract(5, 3)).toBe(2);
    // expect(Calculator.Subtract(10, 7)).toBe(3);
  // });

  test('returns null if any of the numbers is not positive', () => {
    expect(Calculator.Subtract(-3, 7)).toBe(null);
    expect(Calculator.Subtract(5, -7)).toBe(null);
    expect(Calculator.Subtract(-5, -7)).toBe(null);
  });
});

// describe('Divide function', () => {
  // test('Divides positive numbers correctly', () => {
    // expect(Calculator.Divide(6, 3)).toBe(2);
    // expect(Calculator.Divide(10, 5)).toBe(2);
  // });

  // test('returns null if any of the numbers is not positive or divisor is 0', () => {
    // expect(Calculator.Divide(-3, 7)).toBe(null);
    // expect(Calculator.Divide(5, -7)).toBe(null);
    // expect(Calculator.Divide(-5, -7)).toBe(null);
    // expect(Calculator.Divide(10, 0)).toBe(null);
  // });
// });

describe('performActionBasedOnCondition function', () => {
  test('returns "Even" if number is even', () => {
	// 模擬 isEven 函式返回 true
    jest.spyOn(Calculator, 'isEven').mockImplementation(() => true);
	
	expect(Calculator.PerformActionBasedOnCondition(3)).toBe('Even');

	// 恢復對 isEven 函式的模擬
    Calculator.isEven.mockRestore();
  });

  test('returns "Odd" if number is odd', () => {
    expect(Calculator.PerformActionBasedOnCondition(3)).toBe('Odd');
    expect(Calculator.PerformActionBasedOnCondition(11)).toBe('Odd');
  });
});

describe('checkNumber function', () => {
  test('returns true for positive numbers', () => {
    expect(Calculator.checkNumber(5)).toBe(true);
    expect(Calculator.checkNumber(10)).toBe(true);
  });

  test('returns false for non-positive numbers', () => {
    expect(Calculator.checkNumber(-5)).toBe(false);
    expect(Calculator.checkNumber(0)).toBe(false);
  });
});

describe('isEven function', () => {
  test('returns true for even numbers', () => {
    expect(Calculator.isEven(2)).toBe(true);
    expect(Calculator.isEven(10)).toBe(true);
  });

  test('returns false for odd numbers', () => {
    expect(Calculator.isEven(3)).toBe(false);
    expect(Calculator.isEven(11)).toBe(false);
  });
});