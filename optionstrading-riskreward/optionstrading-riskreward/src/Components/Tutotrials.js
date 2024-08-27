import React, { useState } from 'react';
import { importAll } from './utils/importImages';
import { Tabs, Tab, Box } from '@mui/material';

// Import images
const candleImages = importAll(require.context('./images/candles', false, /\.(jfif)$/));
const chartImages = importAll(require.context('./images/charts', false, /\.(jfif)$/));
const patternImages = importAll(require.context('./images/patterns', false, /\.(jfif)$/));
const theoryImages = importAll(require.context('./images/theory', false, /\.(jfif)$/));

// Import videos
const vidVideos = importAll(require.context('./images/vid', false, /\.(mp4)$/));

const mediaData = {
  candles: Object.values(candleImages),
  charts: Object.values(chartImages),
  patterns: Object.values(patternImages),
  theory: Object.values(theoryImages),
  vid: Object.values(vidVideos)
};

const Tutorials = () => {
  const [selectedTab, setSelectedTab] = useState('candles');

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <div className="p-4">
      <Tabs value={selectedTab} onChange={handleChange} aria-label="media tabs">
        {Object.keys(mediaData).map((folder) => (
          <Tab label={folder} value={folder} key={folder} />
        ))}
      </Tabs>

      {Object.keys(mediaData).map((folder) => (
        <Box
          role="tabpanel"
          hidden={selectedTab !== folder}
          key={folder}
          id={`tabpanel-${folder}`}
          aria-labelledby={`tab-${folder}`}
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
                        className="w-full h-auto"
                      />
                    </div>
                  ))
                )}
              </div>
            </>
          )}
        </Box>
      ))}
    </div>
  );
};

export default Tutorials;
