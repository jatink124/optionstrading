import React, { useState } from "react";
import { importAll } from "./utils/importImages";
import { Tabs, Tab, Box, Modal, Button } from "@mui/material";
import FAQItem from "../../Components/faq/FaqItem";
import MarketAnalysis from "./MarketAnalysis";
import MorningTradingPlan from "./MorningTradingPlan";
import Webdevmorningplan from "./Webdevmorningplan";
import Liquidity from "./Liquidity";
import RiskManagement from "./RiskManagement";
import CompoundingEffect from "./CompoundingEffect";
import CompoundingEffect3000 from "./CompoundingEffect3000";
import SniperMindsetGuide from "./SniperMindset";
import OptionsTradingAccumulation from "./OptionsTradingAccumulation";
import TwentyoneEMAComponent from "./TwentyoneEMAComponent";
import EMACrossoverComponent from "./EMACrossoverComponent";
import RSIandEMAStrategy from "./Rsiemastrategy";
import EMAAnalysis from "./EMAAnalysis";
import CompoundingInTrading from "./Compoundingintrading";

// Import images and videos
const candleImages = importAll(require.context("./images/candles", false, /\.(jfif)$/));
const chartImages = importAll(require.context("./images/charts", false, /\.(jfif)$/));
const patternImages = importAll(require.context("./images/patterns", false, /\.(jfif)$/));
const theoryImages = importAll(require.context("./images/theory", false, /\.(jfif)$/));
const vidVideos = importAll(require.context("./images/vid", false, /\.(mp4)$/));

const mediaData = {
  candles: Object.values(candleImages) || [],
  charts: Object.values(chartImages) || [],
  patterns: Object.values(patternImages) || [],
  theory: Object.values(theoryImages) || [],
  vid: Object.values(vidVideos) || [],
};

const TAB_KEYS = {
  TRADING_INSIGHTS: "trading-insights",
  FAQ: "faq",
  MEDIA: "media",
};

const Tutorials = () => {
  const [selectedTab, setSelectedTab] = useState(TAB_KEYS.MEDIA);
  const [mediaSubTab, setMediaSubTab] = useState("candles");
  const [tradingInsightsSubTab, setTradingInsightsSubTab] = useState("market-analysis");
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleChange = (event, newValue) => setSelectedTab(newValue);
  const handleMediaSubChange = (event, newValue) => setMediaSubTab(newValue);
  const handleTradingInsightsSubChange = (event, newValue) =>
    setTradingInsightsSubTab(newValue);

  const handleZoom = (image) => {
    setZoomImage(image);
    setZoomLevel(1);
  };

  const handleCloseZoom = () => setZoomImage(null);

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 1));
  const resetZoom = () => setZoomLevel(1);

  return (
    <div className="p-4">
      {/* Parent Tabs */}
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="main tabs"
        variant="scrollable"
        scrollButtons="auto"
        className="border-b"
      >
        <Tab label="Media" value={TAB_KEYS.MEDIA} />
        <Tab label="Trading Insights" value={TAB_KEYS.TRADING_INSIGHTS} />
        <Tab label="FAQ" value={TAB_KEYS.FAQ} />
      </Tabs>

      {/* Media Sub-tabs */}
      {selectedTab === TAB_KEYS.MEDIA && (
        <div className="mt-4">
          <Tabs
            value={mediaSubTab}
            onChange={handleMediaSubChange}
            aria-label="media sub-tabs"
            variant="scrollable"
            scrollButtons="auto"
            className="border-b"
          >
            {Object.keys(mediaData).map((key) => (
              <Tab key={key} label={key} value={key} />
            ))}
          </Tabs>

          {/* Media Sub-tab Content */}
          {Object.keys(mediaData).map(
            (key) =>
              mediaSubTab === key && (
                <Box key={key} className="mt-4">
                  <h2 className="text-2xl font-bold mb-4 capitalize">{key}</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {key === "vid"
                      ? mediaData[key].map((video, index) => (
                          <div key={index} className="mb-4">
                            <h3 className="text-lg font-semibold">Video {index + 1}</h3>
                            <video width="320" height="240" controls className="w-full">
                              <source src={video} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </div>
                        ))
                      : mediaData[key].map((image, index) => (
                          <div key={index} className="mb-4">
                            <h3 className="text-lg font-semibold">Image {index + 1}</h3>
                            <img
                              src={image}
                              alt={`${key} ${index + 1}`}
                              className="w-full h-auto cursor-pointer"
                              onClick={() => handleZoom(image)}
                            />
                          </div>
                        ))}
                  </div>
                </Box>
              )
          )}
        </div>
      )}

      {/* Trading Insights with Sub-tabs */}
      {selectedTab === TAB_KEYS.TRADING_INSIGHTS && (
        <div className="mt-4">
          <Tabs
            value={tradingInsightsSubTab}
            onChange={handleTradingInsightsSubChange}
            aria-label="trading insights sub-tabs"
            variant="scrollable"
            scrollButtons="auto"
            className="border-b"
          >
            {/* <Tab label="Market Analysis" value="market-analysis" /> */}
            <Tab label="Morning Trading Plan" value="morning-trading-plan" />
       
            <Tab label="Liquidity" value="liquidity" />
            <Tab label="riskmanagement" value="riskmanagement" />
            <Tab label="snipermindsetguide" value="snipermindsetguide" />
            <Tab label="compoundingeffect" value="compoundingeffect" />
            <Tab label="compoundingeffect3000" value="compoundingeffect3000" />
            <Tab label="otaccumulation" value="otaccumulation" />
            <Tab label="21emacomponent" value="21emacomponent" />
            <Tab label="emacrossover" value="emacrossover" />
            <Tab label="rsiemastrategy" value="rsiemastrategy" />
            <Tab label="50emaanalysis" value="50emaanalysis" />
            <Tab label="compoundingintrading" value="compoundingintrading" />
          </Tabs>

          {/* Sub-tab Content */}
          {/* <Box hidden={tradingInsightsSubTab !== "market-analysis"} className="mt-4">
            <MarketAnalysis />
          </Box> */}
          <Box
            hidden={tradingInsightsSubTab !== "morning-trading-plan"}
            className="mt-4"
          >
            <MorningTradingPlan />
          </Box>
       
          <Box
            hidden={tradingInsightsSubTab !== "liquidity"}
            className="mt-4"
          >
            <Liquidity/>
          </Box>
          <Box
            hidden={tradingInsightsSubTab !== "riskmanagement"}
            className="mt-4"
          >
            <RiskManagement/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "snipermindsetguide"}
            className="mt-4"
          >
         <SniperMindsetGuide/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "compoundingeffect"}
            className="mt-4"
          >
           <CompoundingEffect/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "compoundingeffect3000"}
            className="mt-4"
          >
           <CompoundingEffect3000/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "otaccumulation"}
            className="mt-4"
          >
          <OptionsTradingAccumulation/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "21emacomponent"}
            className="mt-4"
          >
          <TwentyoneEMAComponent/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "emacrossover"}
            className="mt-4"
          >
        <EMACrossoverComponent/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "rsiemastrategy"}
            className="mt-4"
          >
       <RSIandEMAStrategy/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "50emaanalysis"}
            className="mt-4"
          >
      <EMAAnalysis/>
            </Box>
            <Box
            hidden={tradingInsightsSubTab !== "compoundingintrading"}
            className="mt-4"
          >
   <CompoundingInTrading/>
            </Box>
        </div>
      )}

      {/* FAQ Tab */}
      {selectedTab === TAB_KEYS.FAQ && (
        <div className="mt-4">
          <FAQItem />
        </div>
      )}

      {/* Zoom Modal */}
      <Modal open={!!zoomImage} onClose={handleCloseZoom} className="flex justify-center items-center">
        <div className="bg-white p-4 rounded-lg shadow-lg max-w-4xl max-h-[90vh] relative">
          {zoomImage && (
            <div className="flex flex-col items-center">
              <img
                src={zoomImage}
                alt="Zoomed"
                style={{ transform: `scale(${zoomLevel})` }}
                className="object-contain w-full h-auto"
              />
              <div className="flex space-x-4 mt-4">
                <Button variant="contained" onClick={zoomIn}>
                  Zoom In
                </Button>
                <Button variant="contained" onClick={zoomOut}>
                  Zoom Out
                </Button>
                <Button variant="contained" onClick={resetZoom}>
                  Reset
                </Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Tutorials;
