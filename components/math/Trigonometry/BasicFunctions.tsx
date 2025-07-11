import { MathJax } from "better-react-mathjax";

export default function BasicFunctions() {
  return (
    <div className="flex flex-col font-lora text-base md:text-lg md:flex-row md:gap-16">
      {/* Basic Functions Section */}
      <div className="flex flex-col gap-4">
        <p className="underline font-robotoMono text-lg font-semibold">
          Basic Functions
        </p>
        <MathJax>{"\\( \\text{i) } \\sin\\theta = \\frac{AB}{AC} \\)"}</MathJax>
        <MathJax>
          {"\\( \\text{ii) } \\cos\\theta = \\frac{BC}{AC} \\)"}
        </MathJax>
        <MathJax>
          {
            "\\( \\text{iii) } \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{AB}{BC} \\)"
          }
        </MathJax>
        <MathJax>
          {
            "\\( \\text{iv) } \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{BC}{AB} \\)"
          }
        </MathJax>
        <MathJax>
          {
            "\\( \\text{v) } \\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{AC}{AB} \\)"
          }
        </MathJax>
        <MathJax>
          {
            "\\( \\text{vi) } \\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{AC}{BC} \\)"
          }
        </MathJax>
      </div>

      {/* Basic Identities Section */}
      <div className="mt-6 md:mt-0 flex flex-col gap-4">
        <p className="underline font-robotoMono text-lg font-semibold">
          Basic Formulae
        </p>
        <MathJax>
          {"\\( \\text{i) } \\sin^2\\theta + \\cos^2\\theta = 1 \\)"}
        </MathJax>
        <MathJax>
          {"\\( \\text{ii) } \\sec^2\\theta - \\tan^2\\theta = 1 \\)"}
        </MathJax>
        <MathJax>
          {"\\( \\text{iii) } \\ cosec^2\\theta - \\cot^2\\theta = 1 \\)"}
        </MathJax>
      </div>
    </div>
  );
}
