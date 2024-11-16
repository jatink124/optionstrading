import React, { useState } from 'react';
import { importAll } from './utils/importImages';
import { Tabs, Tab, Box, Modal, Button } from '@mui/material';
import FAQItem from './faq/FaqItem';
import TradingInsights from './faq/TradingInsights';

// Import images
const candleImages = importAll(require.context('./images/candles', false, /\.(jfif)$/));
const chartImages = importAll(require.context('./images/charts', false, /\.(jfif)$/));
const patternImages = importAll(require.context('./images/patterns', false, /\.(jfif)$/));
const theoryImages = importAll(require.context('./images/theory', false, /\.(jfif)$/));
const vidVideos = importAll(require.context('./images/vid', false, /\.(mp4)$/));

const mediaData = {
  candles: Object.values(candleImages),
  charts: Object.values(chartImages),
  patterns: Object.values(patternImages),
  theory: Object.values(theoryImages),
  vid: Object.values(vidVideos),
};

const TAB_KEYS = {
  TRADING_INSIGHTS: 'trading-insights',
  FAQ: 'faq',
};

const Tutorials = () => {
  const [selectedTab, setSelectedTab] = useState('candles');
  const [zoomImage, setZoomImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleZoom = (image) => {
    setZoomImage(image);
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleCloseZoom = () => {
    setZoomImage(null);
    setDragging(false);
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 3));
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 1));
    setPosition({ x: 0, y: 0 });
  };

  const resetZoom = () => {
    setZoomLevel(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    setDragging(true);
    setStartPosition({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseMove = (e) => {
    if (dragging) {
      setPosition({
        x: e.clientX - startPosition.x,
        y: e.clientY - startPosition.y,
      });
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="p-4">
      {/* Tabs Section */}
      <Tabs value={selectedTab} onChange={handleChange} aria-label="media tabs">
        {Object.keys(mediaData).map((folder) => (
          <Tab label={folder} value={folder} key={folder} />
        ))}
        <Tab label="Trading Insights" value={TAB_KEYS.TRADING_INSIGHTS} />
        <Tab label="FAQ" value={TAB_KEYS.FAQ} />
      </Tabs>

      {/* Dynamic Media Tabs */}
      {Object.keys(mediaData).map((folder) => (
        <Box
          role="tabpanel"
          hidden={selectedTab !== folder}
          key={folder}
          className="mt-4"
        >
          {selectedTab === folder && (
            <>
              <h2 className="text-2xl font-bold mb-4 capitalize">{folder}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {folder === 'vid' ? (
                  mediaData[folder].map((video, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Video {index + 1}</h3>
                      <video width="320" height="240" controls className="w-full">
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))
                ) : (
                  mediaData[folder].map((image, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold mb-2">Image {index + 1}</h3>
                      <img
                        src={image}
                        alt={`${folder} Image ${index + 1}`}
                        className="w-full h-auto cursor-pointer"
                        onClick={() => handleZoom(image)}
                      />
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </Box>
      ))}

      {/* Static Tabs */}
      {selectedTab === TAB_KEYS.TRADING_INSIGHTS && (
        <div className="mt-4">
          <TradingInsights />
        </div>
      )}

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
              <div
                className="overflow-hidden cursor-move"
                style={{ width: '100%', height: '80vh', position: 'relative' }}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
              >
                <img
                  src={zoomImage}
                  alt="Zoomed"
                  style={{
                    transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                    cursor: dragging ? 'grabbing' : 'grab',
                  }}
                  className="transition-transform duration-200 object-contain"
                />
              </div>
              <div className="flex space-x-4 mt-4">
                <Button variant="contained" onClick={zoomIn}>Zoom In</Button>
                <Button variant="contained" onClick={zoomOut}>Zoom Out</Button>
                <Button variant="contained" onClick={resetZoom}>Reset</Button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default Tutorials;
