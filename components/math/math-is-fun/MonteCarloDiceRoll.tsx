"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";

export default function DiceRollerSimulator() {
  const [numRolls, setNumRolls] = useState<number>(1000);
  const [numDice, setNumDice] = useState<number>(1);
  const [diceSides, setDiceSides] = useState<number>(6);
  const [progress, setProgress] = useState<number>(0);
  const [frequencyData, setFrequencyData] = useState<
    { value: number; count: number; percentage: number }[]
  >([]);
  const [convergenceData, setConvergenceData] = useState<
    { roll: number; average: number }[]
  >([]);
  const [running, setRunning] = useState(false);

  const runSimulation = async () => {
    if (numRolls <= 0 || numRolls > 100000)
      return alert("Enter 1 - 100,000 rolls");
    if (numDice <= 0 || numDice > 20)
      return alert("Enter 1 - 20 dice per roll");
    if (diceSides < 2 || diceSides > 100)
      return alert("Enter 2 - 100 sides per die");

    setRunning(true);
    setProgress(0);
    setFrequencyData([]);
    setConvergenceData([]);

    const minSum = numDice;
    const maxSum = numDice * diceSides;
    const frequency: Record<number, number> = {};

    // Initialize frequency map
    for (let i = minSum; i <= maxSum; i++) {
      frequency[i] = 0;
    }

    let totalSum = 0;
    const tempConvergence: { roll: number; average: number }[] = [];

    const chunkSize = 1000;
    for (let i = 1; i <= numRolls; i++) {
      let rollSum = 0;
      for (let j = 0; j < numDice; j++) {
        rollSum += Math.floor(Math.random() * diceSides) + 1;
      }
      frequency[rollSum]++;
      totalSum += rollSum;

      if (i % chunkSize === 0 || i === numRolls) {
        const average = totalSum / i;
        tempConvergence.push({ roll: i, average });
        setProgress((i / numRolls) * 100);
        await new Promise((r) => setTimeout(r, 1));
      }
    }

    // Convert frequency to array
    const freqArray = Object.entries(frequency).map(([value, count]) => ({
      value: parseInt(value),
      count,
      percentage: (count / numRolls) * 100,
    }));

    setFrequencyData(freqArray);
    setConvergenceData(tempConvergence);
    setRunning(false);
  };

  const isInputValid = numRolls > 0 && numDice > 0 && diceSides >= 2;

  // Calculate statistics
  const totalRolls = numRolls;
  const expectedValue = numDice * ((diceSides + 1) / 2);
  const actualAverage =
    convergenceData.length > 0
      ? convergenceData[convergenceData.length - 1].average
      : 0;
  const deviation = Math.abs(actualAverage - expectedValue);

  const mostCommon =
    frequencyData.length > 0
      ? frequencyData.reduce((max, curr) =>
          curr.count > max.count ? curr : max
        )
      : null;

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4">
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Monte Carlo Dice Roller Simulator
        </h2>
        <p className="text-sm opacity-70">
          Visualize probability distributions and the Law of Large Numbers with
          dice rolls
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Section */}
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Simulation Parameters</h3>

          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm">
                Number of Rolls
                <span className="opacity-60 font-normal ml-2">
                  (1 - 100,000)
                </span>
              </label>
              <Input
                type="number"
                value={numRolls}
                min={1}
                max={100000}
                onChange={(e) => setNumRolls(parseInt(e.target.value) || 1)}
                placeholder="Enter number of rolls"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm">
                Dice per Roll
                <span className="opacity-60 font-normal ml-2">(1 - 20)</span>
              </label>
              <Input
                type="number"
                value={numDice}
                min={1}
                max={20}
                onChange={(e) => setNumDice(parseInt(e.target.value) || 1)}
                placeholder="Number of dice"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm">
                Sides per Die
                <span className="opacity-60 font-normal ml-2">(2 - 100)</span>
              </label>
              <Input
                type="number"
                value={diceSides}
                min={2}
                max={100}
                onChange={(e) => setDiceSides(parseInt(e.target.value) || 6)}
                placeholder="Number of sides"
              />
            </div>
          </div>

          {/* Quick Preset Buttons */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-sm opacity-70 self-center">
              Quick presets:
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNumRolls(1000);
                setNumDice(1);
                setDiceSides(6);
              }}
              disabled={running}
            >
              1d6 × 1K
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNumRolls(10000);
                setNumDice(2);
                setDiceSides(6);
              }}
              disabled={running}
            >
              2d6 × 10K
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNumRolls(10000);
                setNumDice(3);
                setDiceSides(6);
              }}
              disabled={running}
            >
              3d6 × 10K
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNumRolls(10000);
                setNumDice(1);
                setDiceSides(20);
              }}
              disabled={running}
            >
              1d20 × 10K
            </Button>
          </div>

          <Button
            disabled={running || !isInputValid}
            onClick={runSimulation}
            className="w-full md:w-auto"
          >
            {running ? "Running Simulation..." : "Start Simulation"}
          </Button>
        </div>

        {/* Progress Section */}
        {running && (
          <div className="border rounded-lg p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="font-medium">Progress</span>
              <span className="text-sm opacity-70">{progress.toFixed(1)}%</span>
            </div>
            <Progress value={progress} className="w-full mb-4" />

            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 rounded-lg flex items-center justify-center text-2xl animate-bounce">
                🎲
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {frequencyData.length > 0 && !running && (
          <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">Total Rolls</div>
                <div className="text-2xl font-semibold">
                  {totalRolls.toLocaleString()}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">Expected Average</div>
                <div className="text-2xl font-semibold">
                  {expectedValue.toFixed(2)}
                </div>
                <div className="text-xs opacity-60">Theoretical value</div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">Actual Average</div>
                <div className="text-2xl font-semibold">
                  {actualAverage.toFixed(2)}
                </div>
                <div className="text-xs opacity-60">
                  From {totalRolls.toLocaleString()} rolls
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">Most Common Sum</div>
                <div className="text-2xl font-semibold">
                  {mostCommon?.value || 0}
                </div>
                <div className="text-xs opacity-60">
                  {mostCommon
                    ? `${mostCommon.percentage.toFixed(2)}% of rolls`
                    : ""}
                </div>
              </div>
            </div>

            {/* Frequency Distribution Chart */}
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Frequency Distribution</h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={frequencyData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="value"
                      label={{
                        value: "Sum Value",
                        position: "insideBottom",
                        offset: -5,
                      }}
                    />
                    <YAxis
                      label={{
                        value: "Frequency",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      formatter={(value: any, name: string) => {
                        if (name === "count")
                          return [value.toLocaleString(), "Count"];
                        return [value, name];
                      }}
                      labelFormatter={(label) => `Sum: ${label}`}
                    />
                    <Bar dataKey="count" fill="currentColor" opacity={0.7} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs opacity-60 mt-2 text-center">
                Distribution of sum values across all rolls. Notice the bell
                curve pattern with multiple dice.
              </p>
            </div>

            {/* Convergence Chart */}
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-4">
                Convergence to Expected Average ({expectedValue.toFixed(2)})
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={convergenceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="roll"
                      tickFormatter={(val) =>
                        val >= 1000 ? `${val / 1000}k` : val
                      }
                      label={{
                        value: "Number of Rolls",
                        position: "insideBottom",
                        offset: -5,
                      }}
                    />
                    <YAxis
                      domain={["auto", "auto"]}
                      label={{
                        value: "Average Sum",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      formatter={(value: any) => value.toFixed(3)}
                      labelFormatter={(label) =>
                        `Roll: ${label.toLocaleString()}`
                      }
                    />
                    {/* Reference line at expected value */}
                    <Line
                      type="monotone"
                      dataKey={() => expectedValue}
                      stroke="currentColor"
                      strokeDasharray="5 5"
                      dot={false}
                      opacity={0.3}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="average"
                      stroke="currentColor"
                      dot={false}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs opacity-60 mt-2 text-center">
                The dashed line shows the theoretical expected value. The actual
                average converges to this value as the number of rolls
                increases.
              </p>
            </div>

            {/* Detailed Statistics Table */}
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-4">Detailed Statistics</h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="opacity-70">Configuration:</span>
                  <div className="font-medium">
                    {numDice}d{diceSides}
                  </div>
                </div>
                <div>
                  <span className="opacity-70">Possible Range:</span>
                  <div className="font-medium">
                    {numDice} - {numDice * diceSides}
                  </div>
                </div>
                <div>
                  <span className="opacity-70">Deviation:</span>
                  <div className="font-medium">{deviation.toFixed(3)}</div>
                </div>
                <div>
                  <span className="opacity-70">Min Possible:</span>
                  <div className="font-medium">{numDice}</div>
                </div>
                <div>
                  <span className="opacity-70">Max Possible:</span>
                  <div className="font-medium">{numDice * diceSides}</div>
                </div>
                <div>
                  <span className="opacity-70">Accuracy:</span>
                  <div className="font-medium">
                    {((1 - deviation / expectedValue) * 100).toFixed(2)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
