import { MathJax } from "better-react-mathjax";

export default function BasicFunctions() {
  return (
    <div className="flex flex-col font-lora text-base md:text-lg md:flex-row md:gap-16">
      {/* Basic Functions Section */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold font-robotoMono border-b border-border pb-2">
          Basic Functions
        </h2>

        <div className="space-y-4">
          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {"\\( \\text{i) } \\sin\\theta = \\frac{AB}{AC} \\)"}
            </MathJax>
          </div>

          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {"\\( \\text{ii) } \\cos\\theta = \\frac{BC}{AC} \\)"}
            </MathJax>
          </div>

          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {
                "\\( \\text{iii) } \\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta} = \\frac{AB}{BC} \\)"
              }
            </MathJax>
          </div>

          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {
                "\\( \\text{iv) } \\cot\\theta = \\frac{1}{\\tan\\theta} = \\frac{BC}{AB} \\)"
              }
            </MathJax>
          </div>

          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {
                "\\( \\text{v) } \\csc\\theta = \\frac{1}{\\sin\\theta} = \\frac{AC}{AB} \\)"
              }
            </MathJax>
          </div>

          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {
                "\\( \\text{vi) } \\sec\\theta = \\frac{1}{\\cos\\theta} = \\frac{AC}{BC} \\)"
              }
            </MathJax>
          </div>
        </div>
      </div>

      {/* Basic Identities Section */}
      <div className="mt-6 md:mt-0 space-y-6">
        <h2 className="text-lg font-semibold font-robotoMono border-b border-border pb-2">
          Basic Formulae
        </h2>

        <div className="space-y-4">
          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {"\\( \\text{i) } \\sin^2\\theta + \\cos^2\\theta = 1 \\)"}
            </MathJax>
          </div>

          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {"\\( \\text{ii) } \\sec^2\\theta - \\tan^2\\theta = 1 \\)"}
            </MathJax>
          </div>

          <div className="p-2 hover:bg-muted/50 rounded transition-colors">
            <MathJax>
              {"\\( \\text{iii) } \\ cosec^2\\theta - \\cot^2\\theta = 1 \\)"}
            </MathJax>
          </div>
        </div>
      </div>
    </div>
  );
}
