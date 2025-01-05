

import React, { useState } from "react";
import Layout from './Layout'; // Assuming Layout is in the same directory

const CompoundingEffect = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <Layout> // Wrap the content with Layout
      <div className="p-6 bg-gray-100 text-gray-800">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
          <header className="p-4 bg-blue-600 text-white rounded-t-lg">
            <h1 className="text-xl font-semibold">Compounding Effect in Options Trading</h1>
          </header>
          <div className="p-4">
            <section>
              <h2
                className="text-lg font-bold cursor-pointer text-blue-600"
                onClick={() => toggleSection("keyConcepts")}
              >
                Key Concepts of Compounding
              </h2>
              {openSection === "keyConcepts" && (
                <ul className="ml-4 mt-2 list-disc">
                  <li><strong>Reinvestment of Gains:</strong> Profits are reinvested into new trades, enabling exponential growth.</li>
                  <li><strong>Leverage:</strong> Options amplify returns due to smaller capital requirements.</li>
                  <li><strong>Volatility:</strong> Options premiums can grow significantly with price movements.</li>
                </ul>
              )}
            </section>

            <section className="mt-4">
              <h2
                className="text-lg font-bold cursor-pointer text-blue-600"
                onClick={() => toggleSection("example")}
              >
                Example of Compounding Effect
              </h2>
              {openSection === "example" && (
                <div className="ml-4 mt-2">
                  <p><strong>Trade 1:</strong> Start with $1,000, gain 50%. Total = $1,500.</p>
                  <p><strong>Trade 2:</strong> Reinvest $1,500, gain 40%. Total = $2,100.</p>
                  <p><strong>Trade 3:</strong> Reinvest $2,100, gain 30%. Total = $2,730.</p>
                </div>
              )}
            </section>

            <section className="mt-4">
              <h2
                className="text-lg font-bold cursor-pointer text-blue-600"
                onClick={() => toggleSection("benefits")}
              >
                Benefits
              </h2>
              {openSection === "benefits" && (
                <ul className="ml-4 mt-2 list-disc">
                  <li>Exponential growth of profits.</li>
                  <li>Maximizes returns through reinvestment.</li>
                </ul>
              )}
            </section>

            <section className="mt-4">
              <h2
                className="text-lg font-bold cursor-pointer text-blue-600"
                onClick={() => toggleSection("risks")}
              >
                Risks
              </h2>
              {openSection === "risks" && (
                <ul className="ml-4 mt-2 list-disc">
                  <li>Loss amplification due to reinvestment.</li>
                  <li>Overexposure increases vulnerability to market volatility.</li>
                  <li>Options are sensitive to time decay and implied volatility.</li>
                </ul>
              )}
            </section>

            <section className="mt-4">
              <h2
                className="text-lg font-bold cursor-pointer text-blue-600"
                onClick={() => toggleSection("bestPractices")}
              >
                Best Practices
              </h2>
              {openSection === "bestPractices" && (
                <ul className="ml-4 mt-2 list-disc">
                  <li>Limit trade investment to 2–5% of total capital.</li>
                  <li>Use stop-loss strategies to minimize risks.</li>
                  <li>Reinvest partially and reserve some profits.</li>
                  <li>Stick to a consistent strategy and maintain a trading journal.</li>
                </ul>
              )}
            </section>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CompoundingEffect;