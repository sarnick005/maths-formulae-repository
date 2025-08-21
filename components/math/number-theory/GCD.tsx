"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { calculateGCD, calculateGCDWithSteps } from "@/utils/maths-fn/gcd";
import { ImCross } from "react-icons/im";

export default function GCD() {
  const [nums, setNums] = useState<string[]>(["", ""]);

  const handleChange = (index: number, value: string) => {
    const updated = [...nums];
    updated[index] = value;

    if (index === nums.length - 1 && value !== "") {
      updated.push("");
    }

    setNums(updated);
  };

  const handleDelete = (index: number) => {
    if (nums.length > 2) {
      setNums(nums.filter((_, i) => i !== index));
    }
  };

  const handleReset = () => {
    setNums(["", ""]);
  };

  const validNums = nums.map(Number).filter((n) => !isNaN(n) && n !== 0);
  const { result: gcdResult, allSteps } =
    validNums.length > 1
      ? calculateGCDWithSteps(validNums)
      : { result: null, allSteps: [] };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className=" mb-8">
        <h1 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
          GCD Calculator
        </h1>
        <p className="text-sm text-gray-500">
          Greatest Common Divisor with Euclidean Algorithm Steps
        </p>
      </div>

      <div className="flex flex-col xl:flex-row gap-8">
        <div className="flex-1 max-w-md mx-auto xl:mx-0">
          <div className="space-y-3">
            {nums.map((num, index) => (
              <div key={index} className="flex items-center gap-2">
                <Input
                  type="number"
                  placeholder={`Number ${index + 1}`}
                  value={num}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="h-12 text-base border-gray-200 focus:border-gray-400 focus:ring-0"
                />
                {index >= 2 && (
                  <button
                    onClick={() => handleDelete(index)}
                    className="w-12 h-12 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-md transition-colors"
                    aria-label="Delete input"
                  >
                    <ImCross />
                  </button>
                )}
              </div>
            ))}
          </div>

          {(validNums.length > 0 || nums.some((n) => n !== "")) && (
            <div className="mt-6">
              <button
                onClick={handleReset}
                className="w-full h-10 text-sm text-gray-500 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors border border-gray-200"
              >
                Reset
              </button>
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="xl:pl-8 xl:border-l border-gray-100">
            {gcdResult && (
              <div className="space-y-6">
                <div className="text-center xl:text-left">
                  <p className="text-sm text-gray-500 mb-1">Result</p>
                  <p className="text-3xl font-light text-gray-900 mb-4">
                    GCD = {gcdResult}
                  </p>
                </div>

                {allSteps.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-800 text-center xl:text-left">
                      Calculation Steps
                    </h3>

                    {allSteps.map((steps, pairIndex) => (
                      <div
                        key={pairIndex}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        {validNums.length > 2 && (
                          <p className="text-sm text-gray-600 mb-3 font-medium">
                            Step {pairIndex + 1}: GCD(
                            {pairIndex === 0
                              ? validNums[0]
                              : `Previous GCD`}, {validNums[pairIndex + 1]})
                          </p>
                        )}

                        <div className="space-y-2 font-mono text-sm">
                          {steps.map((step, stepIndex) => (
                            <div
                              key={stepIndex}
                              className="flex justify-between items-center"
                            >
                              <span className="text-gray-700">{step.step}</span>
                              {step.remainder === 0 && (
                                <span className="text-xs text-gray-500 ml-4">
                                  remainder = 0, stop
                                </span>
                              )}
                            </div>
                          ))}
                        </div>

                        {steps.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-gray-200">
                            <p className="text-sm text-gray-600">
                              GCD ={" "}
                              {steps[steps.length - 2]?.remainder ||
                                validNums[pairIndex === 0 ? 0 : pairIndex]}
                            </p>
                          </div>
                        )}
                      </div>
                    ))}

                    {validNums.length > 2 && (
                      <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-gray-400">
                        <p className="text-sm text-gray-700">
                          <strong>Final Result:</strong> GCD(
                          {validNums.join(", ")}) = {gcdResult}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            {validNums.length === 1 && (
              <div className="text-center xl:text-left py-6">
                <p className="text-sm text-gray-400">
                  Enter at least 2 numbers to see calculation steps
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
