"use client";

import { MathJax } from "better-react-mathjax";

export default function Derivatives() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
        Differentiation (basics)
      </h2>

      <div className="space-y-4 font-lora text-[10px] md:text-[16px]">
        {/* Section 1 : Derivatives/Differentiation */}
        <section className="p-2 hover:bg-muted/50 rounded transition-colors flex flex-col gap-2">
          <p className="font-semibold  font-robotoMono">
            <span>1. </span>
            <span className="underline">
              Derivatives or Differential Coefficient
            </span>
          </p>

          <div className="flex flex-col gap-2 ml-3">
            <p>
              (i) The Differential coefficient or derivative of a function y =
              f(x) with respect to x is:
            </p>
            <MathJax >
              {
                "\\[ \\frac{dy}{dx}\\:\\left[or, \\: f'(x)\\right] = \\lim_{\\Delta x \\to \\: 0} \\frac{\\Delta y}{\\Delta x} = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h} \\]"
              }
            </MathJax>
          </div>
          <div className="flex flex-col gap-2 ml-3">
            <p>
              (ii) The Differential coefficient or derivative of a function y =
              f(x) with respect to x at x = a is denoted by:
            </p>
            <MathJax >
              {
                "\\[ f'(a) = \\left[ \\frac{dy}{dx} \\right]_{x=a} =  \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} \\]"
              }
            </MathJax>
          </div>
          <div className="flex flex-col gap-2 ml-3">
            <p>
              (iii)
              <b>
                <u>Right hand derivative</u>
              </b>
            </p>
            <MathJax >
              {
                " \\[ f'(a+) = Rf'(a) =  \\lim_{h \\to 0+} \\frac{f(a+h) - f(a)}{h} \\]  "
              }
            </MathJax>
          </div>
          <div className="flex flex-col gap-2 ml-3">
            <p>
              (iv)
              <b>
                <u>Left hand derivative</u>
              </b>
            </p>
            <MathJax >
              {
                " \\[f'(a-) = Lf'(a) =  \\lim_{h \\to 0-} \\frac{f(a+h) - f(a)}{h}  \\]  "
              }
            </MathJax>
          </div>
          <div className="flex flex-col gap-2 ml-3">
            <p>
              (v) The derivative of the function exists if <em>Rf &apos;(a)</em>
              and <em>Lf &apos; (a)</em> both exists and <em>Rf &apos; (a)</em>{" "}
              = <em>Lf &apos; (a)</em>
            </p>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(vi)} \\frac{d}{dx}(x^n) = n \\cdot x^{n-1}, \\text{ where } n \\in \\mathbb{Q} \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {"\\[ \\text{(vii)} \\frac{d}{dx}(e^x) = e^x  \\]"}
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(viii)} \\frac{d}{dx}(a^x) = a^x \\log_e a\\:[a>0]  \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(ix)} \\frac{d}{dx}(\\log x) = \\frac{1}{x} [x \\neq 0] \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {"\\[ \\text{(x)} \\frac{d}{dx}(\\sin x) = \\cos x \\]"}
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {"\\[ \\text{(xi)} \\frac{d}{dx}(\\cos x) = - \\sin x \\]"}
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {"\\[ \\text{(xii)} \\frac{d}{dx}(\\tan x) = \\sec^2 x \\]"}
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xiii)} \\frac{d}{dx}(\\cot x) = - \\text{cosec}^2 \\: x \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xiv)} \\frac{d}{dx}(\\sec x) = \\sec x \\cdot \\tan x \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xv)} \\frac{d}{dx}(\\text{cosec}\\: x) = - \\text{cosec} \\: x \\cdot \\cot x \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xvi)} \\frac{d}{dx}(c) = 0 \\text{[c = constant]} \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xvii)} \\frac{d}{dx}{c \\cdot f(x)} = c \\cdot \\frac{d}{dx} f(x) = c \\cdot f'(x)  \\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xviii)} \\frac{d}{dx}[u \\:\\pm\\: v \\:\\pm\\:  ...] = \\frac{du}{dx} \\pm \\frac{dv}{dx} \\pm\\: ...\\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xix)} \\frac{d}{dx}(u \\cdot v) = u \\cdot \\frac{dv}{dx} + v \\cdot \\frac{du}{dx}\\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xx)} \\frac{d}{dx}(u \\cdot v \\cdot w) = v \\cdot w \\cdot \\frac{du}{dx} + u \\cdot w \\cdot\\frac{dv}{dx}+ u \\cdot v\\cdot\\frac{dw}{dx}\\]"
              }
            </MathJax>
          </div>
          <div className="text-left w-fit ml-3">
            <MathJax>
              {
                "\\[ \\text{(xxi)} \\frac{d}{dx}\\left(\\frac{u}{v} \\right) = \\frac{v \\cdot \\frac{du}{dx} - u \\cdot \\frac{dv}{dx}}{v^2} \\]"
              }
            </MathJax>
          </div>
        </section>
      </div>
    </div>
  );
}
