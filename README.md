# Better React MathJax Guide for Next.js

## Installation

```bash
npm install better-react-mathjax
# or
yarn add better-react-mathjax
```

## Basic Setup

### 1. Wrap Your App with MathJaxContext

In your `pages/_app.js` or `app/layout.js`:

```jsx
import { MathJaxContext } from 'better-react-mathjax';

const config = {
  loader: { load: ["input/asciimath"] },
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']]
  }
};

export default function App({ Component, pageProps }) {
  return (
    <MathJaxContext version={3} config={config}>
      <Component {...pageProps} />
    </MathJaxContext>
  );
}
```

### 2. Using MathJax Component

```jsx
import { MathJax } from 'better-react-mathjax';

export default function MathPage() {
  return (
    <div>
      <MathJax>{"\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)"}</MathJax>
    </div>
  );
}
```

## Configuration Options

### Advanced Configuration

```jsx
const config = {
  // MathJax version
  version: 3,
  
  // Loader configuration
  loader: {
    load: ['input/tex', 'input/asciimath', 'output/chtml', 'ui/menu']
  },
  
  // TeX input configuration
  tex: {
    inlineMath: [['$', '$'], ['\\(', '\\)']],
    displayMath: [['$$', '$$'], ['\\[', '\\]']],
    processEscapes: true,
    processEnvironments: true,
    packages: {
      '[+]': ['ams', 'newcommand', 'configmacros']
    }
  },
  
  // Output configuration
  chtml: {
    scale: 1,
    minScale: 0.5,
    matchFontHeight: false,
    fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2'
  },
  
  // Startup configuration
  startup: {
    typeset: false
  }
};
```

## Basic Math Functions

### 1. Basic Arithmetic

```jsx
<MathJax>{"\\(2 + 3 = 5\\)"}</MathJax>
<MathJax>{"\\(10 - 4 = 6\\)"}</MathJax>
<MathJax>{"\\(3 \\times 4 = 12\\)"}</MathJax>
<MathJax>{"\\(\\frac{8}{2} = 4\\)"}</MathJax>
```

### 2. Fractions

```jsx
// Simple fraction
<MathJax>{"\\(\\frac{1}{2}\\)"}</MathJax>

// Complex fraction
<MathJax>{"\\(\\frac{x^2 + 2x + 1}{x + 1}\\)"}</MathJax>

// Nested fractions
<MathJax>{"\\(\\frac{1}{1 + \\frac{1}{2}}\\)"}</MathJax>
```

### 3. Exponents and Subscripts

```jsx
// Exponents
<MathJax>{"\\(x^2\\)"}</MathJax>
<MathJax>{"\\(e^{i\\pi}\\)"}</MathJax>

// Subscripts
<MathJax>{"\\(x_1\\)"}</MathJax>
<MathJax>{"\\(a_{n+1}\\)"}</MathJax>

// Combined
<MathJax>{"\\(x_1^2 + x_2^2\\)"}</MathJax>
```

### 4. Roots

```jsx
// Square root
<MathJax>{"\\(\\sqrt{16} = 4\\)"}</MathJax>

// Nth root
<MathJax>{"\\(\\sqrt[3]{8} = 2\\)"}</MathJax>

// Complex roots
<MathJax>{"\\(\\sqrt{x^2 + y^2}\\)"}</MathJax>
```

## Advanced Math Functions

### 1. Trigonometric Functions

```jsx
<MathJax>{"\\(\\sin(x)\\)"}</MathJax>
<MathJax>{"\\(\\cos(x)\\)"}</MathJax>
<MathJax>{"\\(\\tan(x)\\)"}</MathJax>
<MathJax>{"\\(\\sec(x)\\)"}</MathJax>
<MathJax>{"\\(\\csc(x)\\)"}</MathJax>
<MathJax>{"\\(\\cot(x)\\)"}</MathJax>

// Inverse functions
<MathJax>{"\\(\\arcsin(x)\\)"}</MathJax>
<MathJax>{"\\(\\arccos(x)\\)"}</MathJax>
<MathJax>{"\\(\\arctan(x)\\)"}</MathJax>
```

### 2. Logarithmic Functions

```jsx
// Natural logarithm
<MathJax>{"\\(\\ln(x)\\)"}</MathJax>

// Base 10 logarithm
<MathJax>{"\\(\\log_{10}(x)\\)"}</MathJax>

// General logarithm
<MathJax>{"\\(\\log_a(x)\\)"}</MathJax>
```

### 3. Calculus

```jsx
// Limits
<MathJax>{"\\(\\lim_{x \\to 0} \\frac{\\sin x}{x} = 1\\)"}</MathJax>

// Derivatives
<MathJax>{"\\(\\frac{d}{dx}f(x)\\)"}</MathJax>
<MathJax>{"\\(f'(x)\\)"}</MathJax>

// Integrals
<MathJax>{"\\(\\int f(x) dx\\)"}</MathJax>
<MathJax>{"\\(\\int_a^b f(x) dx\\)"}</MathJax>

// Partial derivatives
<MathJax>{"\\(\\frac{\\partial f}{\\partial x}\\)"}</MathJax>
```

### 4. Summation and Products

```jsx
// Summation
<MathJax>{"\\(\\sum_{i=1}^{n} i\\)"}</MathJax>
<MathJax>{"\\(\\sum_{i=1}^{\\infty} \\frac{1}{i^2}\\)"}</MathJax>

// Product
<MathJax>{"\\(\\prod_{i=1}^{n} i\\)"}</MathJax>
```

## Matrices and Vectors

### 1. Matrices

```jsx
// 2x2 Matrix
<MathJax>
  {"\\(\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}\\)"}
</MathJax>

// 3x3 Matrix
<MathJax>
  {"\\(\\begin{bmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{bmatrix}\\)"}
</MathJax>

// Determinant
<MathJax>
  {"\\(\\begin{vmatrix} a & b \\\\ c & d \\end{vmatrix}\\)"}
</MathJax>
```

### 2. Vectors

```jsx
// Column vector
<MathJax>
  {"\\(\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix}\\)"}
</MathJax>

// Row vector
<MathJax>{"\\(\\begin{pmatrix} x & y & z \\end{pmatrix}\\)"}</MathJax>
```

## Greek Letters and Symbols

### 1. Greek Letters

```jsx
// Lowercase
<MathJax>{"\\(\\alpha, \\beta, \\gamma, \\delta, \\epsilon\\)"}</MathJax>
<MathJax>{"\\(\\pi, \\theta, \\phi, \\lambda, \\mu\\)"}</MathJax>

// Uppercase
<MathJax>{"\\(\\Alpha, \\Beta, \\Gamma, \\Delta, \\Epsilon\\)"}</MathJax>
<MathJax>{"\\(\\Pi, \\Theta, \\Phi, \\Lambda, \\Mu\\)"}</MathJax>
```

### 2. Special Symbols

```jsx
// Infinity
<MathJax>{"\\(\\infty\\)"}</MathJax>

// Plus/minus
<MathJax>{"\\(\\pm\\)"}</MathJax>

// Approximately equal
<MathJax>{"\\(\\approx\\)"}</MathJax>

// Not equal
<MathJax>{"\\(\\neq\\)"}</MathJax>

// Less than or equal
<MathJax>{"\\(\\leq\\)"}</MathJax>

// Greater than or equal
<MathJax>{"\\(\\geq\\)"}</MathJax>
```

## Set Theory and Logic

### 1. Set Operations

```jsx
// Union
<MathJax>{"\\(A \\cup B\\)"}</MathJax>

// Intersection
<MathJax>{"\\(A \\cap B\\)"}</MathJax>

// Subset
<MathJax>{"\\(A \\subset B\\)"}</MathJax>

// Element of
<MathJax>{"\\(x \\in A\\)"}</MathJax>

// Empty set
<MathJax>{"\\(\\emptyset\\)"}</MathJax>
```

### 2. Logic Symbols

```jsx
// Logical AND
<MathJax>{"\\(\\land\\)"}</MathJax>

// Logical OR
<MathJax>{"\\(\\lor\\)"}</MathJax>

// Logical NOT
<MathJax>{"\\(\\neg\\)"}</MathJax>

// Implies
<MathJax>{"\\(\\Rightarrow\\)"}</MathJax>

// If and only if
<MathJax>{"\\(\\Leftrightarrow\\)"}</MathJax>
```

## Arrays and Alignment

### 1. Equation Arrays

```jsx
<MathJax>
  {`\\begin{align}
    x &= a + b \\\\
    y &= c + d \\\\
    z &= e + f
  \\end{align}`}
</MathJax>
```

### 2. Cases

```jsx
<MathJax>
  {`\\(f(x) = \\begin{cases}
    x^2 & \\text{if } x \\geq 0 \\\\
    -x^2 & \\text{if } x < 0
  \\end{cases}\\)`}
</MathJax>
```

## Practical Examples

### 1. Quadratic Formula Component

```jsx
import { MathJax } from 'better-react-mathjax';

export function QuadraticFormula() {
  return (
    <div>
      <h3>Quadratic Formula</h3>
      <MathJax>
        {"\\[x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}\\]"}
      </MathJax>
    </div>
  );
}
```

### 2. Dynamic Math with State

```jsx
import { useState } from 'react';
import { MathJax } from 'better-react-mathjax';

export function DynamicMath() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(2);
  const [c, setC] = useState(1);

  return (
    <div>
      <input 
        value={a} 
        onChange={(e) => setA(e.target.value)}
        placeholder="a"
      />
      <input 
        value={b} 
        onChange={(e) => setB(e.target.value)}
        placeholder="b"
      />
      <input 
        value={c} 
        onChange={(e) => setC(e.target.value)}
        placeholder="c"
      />
      
      <MathJax>
        {`\\[${a}x^2 + ${b}x + ${c} = 0\\]`}
      </MathJax>
    </div>
  );
}
```

## Performance Tips

### 1. Lazy Loading

```jsx
import dynamic from 'next/dynamic';

const MathJax = dynamic(
  () => import('better-react-mathjax').then(mod => mod.MathJax),
  { ssr: false }
);
```

### 2. Memoization

```jsx
import { memo } from 'react';
import { MathJax } from 'better-react-mathjax';

const MemoizedMath = memo(({ children }) => (
  <MathJax>{children}</MathJax>
));
```

## Common Issues and Solutions

### 1. SSR Issues

If you encounter server-side rendering issues:

```jsx
// In _app.js or layout.js
const config = {
  startup: {
    typeset: false
  }
};
```

### 2. Styling Issues

```css
/* In your CSS file */
.MathJax {
  font-size: 1.2em;
}

/* For inline math */
.MathJax_Display {
  margin: 1em 0;
}
```

### 3. Performance Optimization

```jsx
// Use display math for complex equations
<MathJax>{"\\[\\text{Complex equation here}\\]"}</MathJax>

// Use inline math for simple expressions
<MathJax>{"\\(x = 5\\)"}</MathJax>
```

## Best Practices

1. **Use display math** (`\\[...\\]`) for complex standalone equations
2. **Use inline math** (`\\(...\\)`) for simple expressions within text
3. **Escape backslashes** properly in JavaScript strings
4. **Use raw strings** when possible to avoid escaping issues
5. **Configure MathJax** at the app level for consistent behavior
6. **Test on different devices** to ensure proper rendering
7. **Use semantic HTML** around math expressions for accessibility

This guide covers the essential usage patterns for better-react-mathjax in Next.js applications. Remember to adjust the configuration based on your specific needs and mathematical requirements.







Here’s a **complete guide to using `better-react-mathjax`** in a **Next.js + TypeScript** project, with working examples for all major math functions.

---

## ✅ 1. Installation

```bash
npm install better-react-mathjax
```

---

## ✅ 2. Setup a Math component

> SSR must be disabled because MathJax is client-side only.

```tsx
// components/Math.tsx
"use client";

import { MathJax, MathJaxContext } from "better-react-mathjax";

interface MathProps {
  texExpression: string;
  inline?: boolean;
}

const config = {
  loader: { load: ["[tex]/ams"] },
  tex: { packages: { "[+]": ["ams"] } },
};

export default function Math({ texExpression, inline = false }: MathProps) {
  return (
    <MathJaxContext config={config}>
      <MathJax inline={inline}>
        {inline ? `\\(${texExpression}\\)` : `\\[${texExpression}\\]`}
      </MathJax>
    </MathJaxContext>
  );
}
```

---

## ✅ 3. Dynamic Import for Next.js

In `app/page.tsx` or `pages/index.tsx`:

```tsx
import dynamic from "next/dynamic";
const Math = dynamic(() => import("@/components/Math"), { ssr: false });

export default function Home() {
  return (
    <div>
      <h1>Math Examples</h1>
      <Math texExpression="\\frac{a}{b}" />
    </div>
  );
}
```

---

## 📘 4. Guide: Common Math Expressions

### ▶️ Fractions

```tsx
<Math texExpression="\\frac{3}{4}" />
```

**Output:** $\frac{3}{4}$

---

### ▶️ Square and n-th Roots

```tsx
<Math texExpression="\\sqrt{16}" />
<Math texExpression="\\sqrt[3]{8}" />
```

**Output:** $\sqrt{16}$, $\sqrt[3]{8}$

---

### ▶️ Superscript & Subscript

```tsx
<Math texExpression="x^2" />
<Math texExpression="a_i" />
<Math texExpression="x^{n+1}" />
```

**Output:** $x^2, a_i, x^{n+1}$

---

### ▶️ Summation and Product

```tsx
<Math texExpression="\\sum_{i=1}^{n} i" />
<Math texExpression="\\prod_{i=1}^{n} i" />
```

**Output:** $\sum_{i=1}^{n} i$, $\prod_{i=1}^{n} i$

---

### ▶️ Integrals

```tsx
<Math texExpression="\\int x^2 dx" />
<Math texExpression="\\int_{0}^{1} x dx" />
```

**Output:** $\int x^2 dx$, $\int_{0}^{1} x dx$

---

### ▶️ Limits

```tsx
<Math texExpression="\\lim_{x \\to 0} \\frac{\\sin x}{x}" />
```

**Output:** $\lim_{x \to 0} \frac{\sin x}{x}$

---

### ▶️ Greek Letters

```tsx
<Math texExpression="\\alpha + \\beta = \\gamma" />
```

**Output:** $\alpha + \beta = \gamma$

---

### ▶️ Inequalities

```tsx
<Math texExpression="a \\le b \\neq c \\ge d" />
```

**Output:** $a \le b \neq c \ge d$

---

### ▶️ Brackets and Parentheses

```tsx
<Math texExpression="\\left( \\frac{a}{b} \\right)" />
```

**Output:** $\left( \frac{a}{b} \right)$

---

### ▶️ Matrices

```tsx
<Math texExpression="\\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}" />
```

**Output:**

$$
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

---

### ▶️ Piecewise (Cases)

```tsx
<Math texExpression="f(x) = \\begin{cases} x^2 & x \\ge 0 \\\\ -x^2 & x < 0 \\end{cases}" />
```

**Output:**

$$
f(x) = \begin{cases}
x^2 & x \ge 0 \\
-x^2 & x < 0
\end{cases}
$$

---

### ▶️ Logic & Set Theory

```tsx
<Math texExpression="\\forall x \\in A, \\exists y \\in B, x \\neq y" />
```

**Output:** $\forall x \in A, \exists y \in B, x \neq y$

---

### ▶️ Trigonometry

```tsx
<Math texExpression="\\sin(\\theta) + \\cos(\\theta)" />
```

**Output:** $\sin(\theta) + \cos(\theta)$

---

### ▶️ Log & Exponent

```tsx
<Math texExpression="\\log_{2} 8 = 3" />
<Math texExpression="\\exp(x)" />
```

**Output:** $\log_{2} 8 = 3$, $\exp(x)$

---

## 🧪 Testing Tip

Use [this LaTeX equation editor](https://latex.codecogs.com/eqneditor/editor.php) to preview and copy expressions.

---

## 🧠 Bonus: Inline Math

```tsx
<Math texExpression="\\frac{1}{2}" inline />
```

**Renders inside text like:**
`The value is` $\frac{1}{2}$

---

Let me know if you want:

* A downloadable starter template
* A Next.js math-heavy blog or quiz example
* Editable input + preview setup
