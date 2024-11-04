import React from 'react';

const Table = ({ title, columns }) => (
  <div className="p-6 bg-white shadow-md rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-4">{title}</h2>
    <table className="w-full text-left border border-gray-300 rounded-md">
      <thead>
        <tr>
          {Object.keys(columns[0]).map((col, index) => (
            <th key={index} className="p-2 bg-gray-100 border-b border-gray-300 font-medium">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {columns.map((column, rowIndex) => (
          <tr key={rowIndex} className="hover:bg-gray-50">
            {Object.values(column).map((value, colIndex) => (
              <td key={colIndex} className="p-2 border-b border-gray-300">
                {value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const HostingTables = () => {
  const tables = [
    {
      title: "Web Design Agencies",
      columns: [
        { Column: "agency_id", "Data Type": "INT (PK)", Description: "Unique identifier for the agency" },
        { Column: "agency_name", "Data Type": "VARCHAR", Description: "Name of the agency" },
        { Column: "contact_info", "Data Type": "JSON", Description: "Contact details, including email, phone" },
        { Column: "location", "Data Type": "VARCHAR", Description: "Location of the agency" },
        { Column: "services_offered", "Data Type": "JSON", Description: "List of services (e.g., design, SEO)" },
        { Column: "hosted_site_id", "Data Type": "INT (FK)", Description: "Links to Hosted Sites for each agency" },
      ],
    },
    {
      title: "Freelancers Bundling Hosting with Development Services",
      columns: [
        { Column: "freelancer_id", "Data Type": "INT (PK)", Description: "Unique identifier for the freelancer" },
        { Column: "freelancer_name", "Data Type": "VARCHAR", Description: "Name of the freelancer" },
        { Column: "contact_info", "Data Type": "JSON", Description: "Contact details, including email, phone" },
        { Column: "bundled_services", "Data Type": "JSON", Description: "List of services (e.g., development, hosting)" },
        { Column: "hosting_provider_id", "Data Type": "INT (FK)", Description: "Links to Managed Hosting Provider" },
        { Column: "hosted_site_id", "Data Type": "INT (FK)", Description: "Links to Hosted Sites for each freelancer" },
      ],
    },
    {
      title: "Managed Hosting Provider for Small Businesses",
      columns: [
        { Column: "hosting_provider_id", "Data Type": "INT (PK)", Description: "Unique identifier for the hosting provider" },
        { Column: "provider_name", "Data Type": "VARCHAR", Description: "Name of the hosting provider" },
        { Column: "contact_info", "Data Type": "JSON", Description: "Contact details, including email, phone" },
        { Column: "hosting_plan", "Data Type": "VARCHAR", Description: "Type of hosting plan (shared, dedicated)" },
        { Column: "target_audience", "Data Type": "VARCHAR", Description: "Focus on small businesses" },
        { Column: "hosted_site_id", "Data Type": "INT (FK)", Description: "Links to Hosted Sites for the provider" },
      ],
    },
    {
      title: "Niche Hosting for Specific Platforms (WordPress, Magento)",
      columns: [
        { Column: "niche_hosting_id", "Data Type": "INT (PK)", Description: "Unique identifier for the niche hosting" },
        { Column: "platform_supported", "Data Type": "VARCHAR", Description: "Platform focused (WordPress, Magento, etc.)" },
        { Column: "hosting_provider_id", "Data Type": "INT (FK)", Description: "Links to Managed Hosting Provider" },
        { Column: "hosting_plan", "Data Type": "VARCHAR", Description: "Type of hosting plan" },
        { Column: "support_services", "Data Type": "JSON", Description: "List of specific support services provided" },
        { Column: "hosted_site_id", "Data Type": "INT (FK)", Description: "Links to Hosted Sites for this hosting type" },
      ],
    },
    {
      title: "E-Commerce Hosting Solutions",
      columns: [
        { Column: "ecommerce_hosting_id", "Data Type": "INT (PK)", Description: "Unique identifier for e-commerce hosting" },
        { Column: "provider_name", "Data Type": "VARCHAR", Description: "Name of the e-commerce hosting provider" },
        { Column: "contact_info", "Data Type": "JSON", Description: "Contact details, including email, phone" },
        { Column: "ecommerce_platforms", "Data Type": "JSON", Description: "Supported platforms (e.g., Shopify, WooCommerce)" },
        { Column: "hosting_plan", "Data Type": "VARCHAR", Description: "Type of hosting plan (shared, dedicated)" },
        { Column: "hosted_site_id", "Data Type": "INT (FK)", Description: "Links to Hosted Sites for this provider" },
      ],
    },
    {
      title: "Local/Regional Hosting Provider",
      columns: [
        { Column: "local_provider_id", "Data Type": "INT (PK)", Description: "Unique identifier for the local provider" },
        { Column: "provider_name", "Data Type": "VARCHAR", Description: "Name of the local hosting provider" },
        { Column: "location", "Data Type": "VARCHAR", Description: "Location/region served" },
        { Column: "contact_info", "Data Type": "JSON", Description: "Contact details, including email, phone" },
        { Column: "hosting_plan", "Data Type": "VARCHAR", Description: "Type of hosting plan" },
        { Column: "hosted_site_id", "Data Type": "INT (FK)", Description: "Links to Hosted Sites for this provider" },
      ],
    },
  ];

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-8">Hosting and Web Services Tables</h1>
      {tables.map((table, index) => (
        <Table key={index} title={table.title} columns={table.columns} />
      ))}
    </div>
  );
};

export default HostingTables;
