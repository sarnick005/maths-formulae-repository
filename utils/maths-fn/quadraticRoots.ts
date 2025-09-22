export function quadraticRoots(a: number, b: number, c: number) {
  // All coefficients are zero → Indeterminate equation
  if (a === 0 && b === 0 && c === 0) {
    return { type: "indeterminate", roots: [] };
  }

  //  a = b = 0 → no solution unless c=0
  if (a === 0 && b === 0) {
    return { type: "no-solution", roots: [] };
  }

  // : a = 0 → Linear equation bx + c = 0
  if (a === 0) {
    return { type: "linear", roots: [-c / b] };
  }

  const d = b * b - 4 * a * c;

  //  c = 0 → roots are x=0 and x=-b/a
  if (c === 0) {
    return { type: "c=0", roots: [0, -b / a] };
  }

  // b = 0 → roots are ±sqrt(-c/a)
  if (b === 0) {
    if (-c / a < 0) {
      const val = Math.sqrt(-c / a);
      return { type: "imaginary", roots: [`${val}i`, `-${val}i`] };
    }
    const val = Math.sqrt(-c / a);
    return { type: "b=0", roots: [val, -val] };
  }

  //  Normal quadratic equation
  if (d === 0) {
    // Real and equal
    return { type: "real-equal", roots: [-b / (2 * a)] };
  } else if (d > 0) {
    const sqrtD = Math.sqrt(d);
    const root1 = (-b + sqrtD) / (2 * a);
    const root2 = (-b - sqrtD) / (2 * a);

    // Check if sqrtD is rational
    const isPerfectSquare = Number.isInteger(sqrtD);
    if (isPerfectSquare) {
      return { type: "real-rational-distinct", roots: [root1, root2] };
    } else {
      return { type: "real-irrational-distinct", roots: [root1, root2] };
    }
  } else {
    // Imaginary roots
    const realPart = -b / (2 * a);
    const imagPart = Math.sqrt(-d) / (2 * a);
    return {
      type: "complex-conjugate",
      roots: [`${realPart} + ${imagPart}i`, `${realPart} - ${imagPart}i`],
    };
  }
}
export const formatEquation = (a: number, b: number, c: number) => {
  const terms = [];
  if (a !== 0) terms.push(a === 1 ? "x^2" : `${a}x^2`);
  if (b !== 0)
    terms.push(
      b > 0
        ? `+ ${b === 1 ? "x" : b + "x"}`
        : `- ${Math.abs(b) === 1 ? "x" : Math.abs(b) + "x"}`
    );
  if (c !== 0) terms.push(c > 0 ? `+ ${c}` : `- ${Math.abs(c)}`);
  return terms.join(" ");
};
