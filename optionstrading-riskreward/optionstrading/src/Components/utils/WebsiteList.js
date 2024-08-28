import React from 'react';

const WebsitesList = ({ websites = [] }) => {  // Default to an empty array if undefined
  if (!websites.length) {
    return <p>No websites available.</p>;  // Optional: handle empty list scenario
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Client Websites</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {websites.map((website, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-xl font-semibold mb-2">{website.name}</h2>
            <p className="text-gray-700 mb-4">{website.description}</p>
            <div className="mb-2">
              <span className="font-bold">URL: </span>
              <a href={website.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                {website.url}
              </a>
            </div>
            <div className="mb-2">
              <span className="font-bold">Client Name: </span>
              {website.clientName}
            </div>
            <div className="mb-2">
              <span className="font-bold">Status: </span>
              {website.status}
            </div>
            <div className="mb-2">
              <span className="font-bold">Date Created: </span>
              {website.dateCreated}
            </div>
            <div className="mb-4">
              <span className="font-bold">Pages: </span>
              <ul className="list-disc ml-6">
                {website.pages.map((page, pageIndex) => (
                  <li key={pageIndex} className="mb-1">
                    <span className="font-semibold">{page.name}: </span>
                    <span>{page.description}</span>
                    <ul className="list-disc ml-6 mt-2">
                      <span className="font-semibold">Features:</span>
                      {page.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-gray-600">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebsitesList;
