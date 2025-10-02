"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export default function MontyCarloCoinFlip() {
  const [numFlips, setNumFlips] = useState<number>(1000);
  const [numCoins, setNumCoins] = useState<number>(1);
  const [progress, setProgress] = useState<number>(0);
  const [results, setResults] = useState<{ trial: number; ratio: number }[]>(
    []
  );
  const [running, setRunning] = useState(false);

  const runSimulation = async () => {
    if (numFlips <= 0 || numFlips > 100000)
      return alert("Enter 1 - 100000 flips");
    if (numCoins <= 0 || numCoins > 100)
      return alert("Enter 1 - 100 coins per flip");

    setRunning(true);
    setProgress(0);
    setResults([]);

    let totalHeads = 0;
    const tempResults: { trial: number; ratio: number }[] = [];

    const chunkSize = 1000;
    for (let i = 1; i <= numFlips; i++) {
      for (let j = 0; j < numCoins; j++) {
        if (Math.random() < 0.5) totalHeads++;
      }

      if (i % chunkSize === 0 || i === numFlips) {
        const ratio = totalHeads / (i * numCoins);
        tempResults.push({ trial: i, ratio });
        setProgress((i / numFlips) * 100);
        await new Promise((r) => setTimeout(r, 1));
      }
    }

    setResults(tempResults);
    setRunning(false);
  };

  const isInputValid = numFlips > 0 && numCoins > 0;
  const totalFlipsExecuted = numFlips * numCoins;
  const finalRatio = results.length > 0 ? results[results.length - 1].ratio : 0;
  const totalHeads = Math.round(finalRatio * totalFlipsExecuted);
  const totalTails = totalFlipsExecuted - totalHeads;
  const deviation = Math.abs(finalRatio - 0.5) * 100;

  return (
    <div className="space-y-6 max-w-5xl mx-auto p-4">
      <div>
        <h2 className="text-2xl font-semibold mb-2">
          Monte Carlo Coin Flip Simulator
        </h2>
        <p className="text-sm opacity-70">
          Visualize as the number of trials increases,
          the ratio of heads converges to 50%
        </p>
      </div>

      <div className="space-y-6">
        {/* Input Section */}
        <div className="border rounded-lg p-6">
          <h3 className="font-semibold mb-4">Simulation Parameters</h3>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm">
                Number of Flips
                <span className="opacity-60 font-normal ml-2">
                  (1 - 100,000)
                </span>
              </label>
              <Input
                type="number"
                value={numFlips}
                min={1}
                max={100000}
                onChange={(e) => setNumFlips(parseInt(e.target.value) || 1)}
                placeholder="Enter number of flips"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-medium text-sm">
                Coins per Flip
                <span className="opacity-60 font-normal ml-2">(1 - 100)</span>
              </label>
              <Input
                type="number"
                value={numCoins}
                min={1}
                max={100}
                onChange={(e) => setNumCoins(parseInt(e.target.value) || 1)}
                placeholder="Enter number of coins"
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
                setNumFlips(1000);
                setNumCoins(1);
              }}
              disabled={running}
            >
              1K Flips
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNumFlips(10000);
                setNumCoins(1);
              }}
              disabled={running}
            >
              10K Flips
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                setNumFlips(100000);
                setNumCoins(1);
              }}
              disabled={running}
            >
              100K Flips
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
              <div className="w-16 h-16 border-4 rounded-full flex items-center justify-center text-2xl animate-spin">
                🪙
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {results.length > 0 && !running && (
          <div className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">Total Flips</div>
                <div className="text-2xl font-semibold">
                  {totalFlipsExecuted.toLocaleString()}
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">Heads</div>
                <div className="text-2xl font-semibold">
                  {totalHeads.toLocaleString()}
                </div>
                <div className="text-xs opacity-60">
                  {(finalRatio * 100).toFixed(2)}%
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">Tails</div>
                <div className="text-2xl font-semibold">
                  {totalTails.toLocaleString()}
                </div>
                <div className="text-xs opacity-60">
                  {((1 - finalRatio) * 100).toFixed(2)}%
                </div>
              </div>

              <div className="border rounded-lg p-4">
                <div className="text-sm opacity-70 mb-1">
                  Deviation from 50%
                </div>
                <div className="text-2xl font-semibold">
                  {deviation.toFixed(2)}%
                </div>
                <div className="text-xs opacity-60">
                  {deviation < 1
                    ? "Excellent"
                    : deviation < 2
                    ? "Good"
                    : "Fair"}
                </div>
              </div>
            </div>

            {/* Chart */}
            <div className="border rounded-lg p-6">
              <h3 className="font-semibold mb-4">
                Convergence to Expected Value (50%)
              </h3>
              <div className="w-full h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={results}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="trial"
                      tickFormatter={(val) =>
                        val >= 1000 ? `${val / 1000}k` : val
                      }
                      label={{
                        value: "Number of Flips",
                        position: "insideBottom",
                        offset: -5,
                      }}
                    />
                    <YAxis
                      domain={[0, 1]}
                      tickFormatter={(val) => `${(val * 100).toFixed(0)}%`}
                      label={{
                        value: "Heads Ratio (%)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      formatter={(value: any) => `${(value * 100).toFixed(2)}%`}
                      labelFormatter={(label) =>
                        `Flip: ${label.toLocaleString()}`
                      }
                    />
                    {/* Reference line at 50% */}
                    <Line
                      type="monotone"
                      dataKey={() => 0.5}
                      stroke="currentColor"
                      strokeDasharray="5 5"
                      dot={false}
                      opacity={0.3}
                      strokeWidth={2}
                    />
                    <Line
                      type="monotone"
                      dataKey="ratio"
                      stroke="currentColor"
                      dot={false}
                      strokeWidth={2}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <p className="text-xs opacity-60 mt-2 text-center">
                The dashed line represents the theoretical probability (50%).
                Notice how the actual ratio converges as trials increase.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
