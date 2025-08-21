// utils/math.ts
export function gcdTwo(a: number, b: number): number {
  if (b === 0) return a;
  return gcdTwo(b, a % b);
}

export function calculateGCD(numbers: number[]): number {
  if (numbers.length === 0) return 0;
  return numbers.reduce((acc, num) => gcdTwo(acc, num));
}

export function euclideanSteps(
  a: number,
  b: number
): { step: string; remainder: number }[] {
  const steps = [];
  let x = Math.abs(a);
  let y = Math.abs(b);

  if (x < y) [x, y] = [y, x];

  while (y !== 0) {
    const quotient = Math.floor(x / y);
    const remainder = x % y;
    steps.push({
      step: `${x} = ${y} × ${quotient} + ${remainder}`,
      remainder,
    });
    x = y;
    y = remainder;
  }

  return steps;
}

export function calculateGCDWithSteps(nums: number[]): {
  result: number;
  allSteps: { step: string; remainder: number }[][];
} {
  if (nums.length === 0) return { result: 0, allSteps: [] };
  if (nums.length === 1) return { result: nums[0], allSteps: [] };

  let result = Math.abs(nums[0]);
  const allSteps = [];

  for (let i = 1; i < nums.length; i++) {
    const steps = euclideanSteps(result, nums[i]);
    allSteps.push(steps);
    result = calculateGCD([result, nums[i]]);
  }

  return { result, allSteps };
}
