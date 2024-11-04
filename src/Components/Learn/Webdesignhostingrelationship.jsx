import React from 'react';

const Webdesignhostingrelationship = () => {
  const webDesignAgencies = [
    { agency_id: 1, agency_name: "Creative Web Solutions", contact_info: "info@creativewebsolutions.com", location: "New York", services_offered: "Design, SEO", hosted_site_id: 1001 },
  ];

  const freelancers = [
    { freelancer_id: 2, freelancer_name: "Alex Freelancer", contact_info: "alex@freelancer.com", bundled_services: "Development, Hosting", hosting_provider_id: 300, hosted_site_id: 1002 },
  ];

  const managedHostingProviders = [
    { hosting_provider_id: 200, provider_name: "TechHost Solutions", contact_info: "support@techhost.com", hosting_plan: "Basic Business Plan", target_audience: "Small Businesses", hosted_site_id: 1001 },
  ];

  const nicheHostingProviders = [
    { niche_hosting_id: 300, platform_supported: "WordPress", hosting_provider_id: 300, hosting_plan: "WordPress Pro Plan", support_services: "Daily backups, Plugin support", hosted_site_id: 1002 },
  ];

  const hostedSites = [
    { hosted_site_id: 1001, site_url: "www.sampleclient1.com", client_id: 1, start_date: "2024-01-15", hosting_provider: "TechHost Solutions" },
    { hosted_site_id: 1002, site_url: "www.samplewpclient.com", client_id: 2, start_date: "2024-05-01", hosting_provider: "WordPressPower" },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Service Tables</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Web Design Agencies</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Agency ID</th>
              <th className="px-4 py-2">Agency Name</th>
              <th className="px-4 py-2">Contact Info</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Services Offered</th>
              <th className="px-4 py-2">Hosted Site ID</th>
            </tr>
          </thead>
          <tbody>
            {webDesignAgencies.map((agency) => (
              <tr key={agency.agency_id}>
                <td className="border px-4 py-2">{agency.agency_id}</td>
                <td className="border px-4 py-2">{agency.agency_name}</td>
                <td className="border px-4 py-2">{agency.contact_info}</td>
                <td className="border px-4 py-2">{agency.location}</td>
                <td className="border px-4 py-2">{agency.services_offered}</td>
                <td className="border px-4 py-2">{agency.hosted_site_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Freelancers Bundling Hosting with Development Services</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Freelancer ID</th>
              <th className="px-4 py-2">Freelancer Name</th>
              <th className="px-4 py-2">Contact Info</th>
              <th className="px-4 py-2">Bundled Services</th>
              <th className="px-4 py-2">Hosting Provider ID</th>
              <th className="px-4 py-2">Hosted Site ID</th>
            </tr>
          </thead>
          <tbody>
            {freelancers.map((freelancer) => (
              <tr key={freelancer.freelancer_id}>
                <td className="border px-4 py-2">{freelancer.freelancer_id}</td>
                <td className="border px-4 py-2">{freelancer.freelancer_name}</td>
                <td className="border px-4 py-2">{freelancer.contact_info}</td>
                <td className="border px-4 py-2">{freelancer.bundled_services}</td>
                <td className="border px-4 py-2">{freelancer.hosting_provider_id}</td>
                <td className="border px-4 py-2">{freelancer.hosted_site_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Hosted Sites</h2>
        <table className="table-auto w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2">Hosted Site ID</th>
              <th className="px-4 py-2">Site URL</th>
              <th className="px-4 py-2">Client ID</th>
              <th className="px-4 py-2">Start Date</th>
              <th className="px-4 py-2">Hosting Provider</th>
            </tr>
          </thead>
          <tbody>
            {hostedSites.map((site) => (
              <tr key={site.hosted_site_id}>
                <td className="border px-4 py-2">{site.hosted_site_id}</td>
                <td className="border px-4 py-2">{site.site_url}</td>
                <td className="border px-4 py-2">{site.client_id}</td>
                <td className="border px-4 py-2">{site.start_date}</td>
                <td className="border px-4 py-2">{site.hosting_provider}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Webdesignhostingrelationship;
