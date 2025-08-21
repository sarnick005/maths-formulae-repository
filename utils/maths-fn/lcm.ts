function gcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

export function primeFactorization(n: number): {
  factors: number[];
  powers: Record<number, number>;
  factorString: string;
} {
  const factors: number[] = [];
  const powers: Record<number, number> = {};

  while (n % 2 === 0) {
    factors.push(2);
    powers[2] = (powers[2] || 0) + 1;
    n = n / 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      factors.push(i);
      powers[i] = (powers[i] || 0) + 1;
      n = n / i;
    }
  }

  if (n > 2) {
    factors.push(n);
    powers[n] = 1;
  }

  const factorString = Object.entries(powers)
    .map(([prime, power]) => (power === 1 ? prime : `${prime}^${power}`))
    .join(" × ");

  return { factors, powers, factorString };
}

export function calculateLCMWithSteps(nums: number[]): {
  lcm: number;
  factorizations: ReturnType<typeof primeFactorization>[];
  allPrimePowers: Record<number, number>;
  lcmCalculation: { formula: string; calculation: string };
  gcdUsed: number | null;
} {
  const factorizations = nums.map(primeFactorization);
  const allPrimePowers: Record<number, number> = {};

  factorizations.forEach(({ powers }) => {
    Object.entries(powers).forEach(([prime, power]) => {
      const p = parseInt(prime, 10);
      allPrimePowers[p] = Math.max(allPrimePowers[p] || 0, power);
    });
  });

  let lcm = 1;
  const lcmTerms: string[] = [];

  Object.entries(allPrimePowers).forEach(([prime, power]) => {
    const p = parseInt(prime, 10);
    const term = Math.pow(p, power);
    lcm *= term;
    lcmTerms.push(power === 1 ? prime : `${prime}^${power}`);
  });

  return {
    lcm,
    factorizations,
    allPrimePowers,
    lcmCalculation: {
      formula: lcmTerms.join(" × "),
      calculation: Object.entries(allPrimePowers)
        .map(([prime, power]) => Math.pow(parseInt(prime, 10), power))
        .join(" × "),
    },
    gcdUsed: nums.length === 2 ? gcd(nums[0], nums[1]) : null,
  };
}
