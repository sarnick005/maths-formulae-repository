"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

import {
  calculateLCMWithSteps,
  primeFactorization,
} from "@/utils/maths-fn/lcm";
import { ImCross } from "react-icons/im";

export default function LCM() {
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

  const validNums: number[] = nums
    .map((n) => Number(n))
    .filter((n) => !isNaN(n) && n > 0);

  const result = validNums.length > 1 ? calculateLCMWithSteps(validNums) : null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-lg md:text-xl font-semibold font-robotoMono border-b border-border pb-2">
          LCM Calculator
        </h1>
        <p className="text-sm text-gray-500">
          Least Common Multiple with Prime Factorization Steps
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
            {result && (
              <div className="space-y-6">
                <div className="text-center xl:text-left">
                  <p className="text-sm text-gray-500 mb-1">Result</p>
                  <p className="text-3xl font-light text-gray-900 mb-4">
                    LCM = {result.lcm}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Step 1: Prime Factorization
                    </h4>
                    <div className="space-y-2">
                      {result.factorizations.map((factor, index) => (
                        <div key={index} className="font-mono text-sm">
                          <span className="text-gray-700">
                            {validNums[index]} ={" "}
                            {factor.factors.length > 0
                              ? factor.factorString
                              : "1"}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Step 2: Identify All Prime Powers
                    </h4>
                    <div className="space-y-2">
                      {Object.entries(result.allPrimePowers).map(
                        ([prime, power]) => (
                          <div
                            key={prime}
                            className="font-mono text-sm text-gray-700"
                          >
                            Prime {prime}: highest power is {prime}^{power}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-3">
                      Step 3: Calculate LCM
                    </h4>
                    <div className="font-mono text-sm space-y-2">
                      <div className="text-gray-700">
                        LCM = {result.lcmCalculation.formula}
                      </div>
                      <div className="text-gray-700">
                        LCM = {result.lcmCalculation.calculation}
                      </div>
                      <div className="text-gray-700 font-medium">
                        LCM = {result.lcm}
                      </div>
                    </div>
                  </div>

                  {validNums.length === 2 && result.gcdUsed !== null && (
                    <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-gray-400">
                      <h4 className="text-sm font-medium text-gray-700 mb-2">
                        Alternative Method (GCD Formula)
                      </h4>
                      <div className="font-mono text-sm text-gray-700">
                        LCM(a, b) = (a × b) ÷ GCD(a, b) = ({validNums[0]} ×{" "}
                        {validNums[1]}) ÷ {result.gcdUsed} = {result.lcm}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {validNums.length === 1 && (
              <div className="text-center xl:text-left py-6">
                <p className="text-sm text-gray-400">
                  Enter at least 2 positive numbers to see calculation steps
                </p>
              </div>
            )}

            {validNums.length === 0 &&
              nums.some(
                (n) => n !== "" && (isNaN(Number(n)) || Number(n) <= 0)
              ) && (
                <div className="text-center xl:text-left py-6">
                  <p className="text-sm text-orange-500">
                    Please enter positive numbers only
                  </p>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
