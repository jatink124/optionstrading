import React, { useState } from 'react';

const businessModels = [
  {
    title: 'Custom Website Development Services',
    description: 'Offer bespoke web development services for businesses, focusing on unique websites that meet specific client requirements. This can include both frontend and backend development, tailored functionality, and integrations with various business systems.',
    detailedDescription: `In Custom Website Development Services, you can provide clients with a tailored approach to their online presence. Services can include:
    
    - **Initial Consultation and Requirement Gathering**: Discuss the client’s vision, goals, and specific needs to create a detailed project plan.
    - **UI/UX Design**: Create custom designs that enhance user experience, ensuring the site is intuitive and visually appealing.
    - **Frontend Development**: Build responsive and interactive front-end components using the latest technologies (React, Vue, etc.).
    - **Backend Development**: Implement server-side logic, databases, and APIs to support the website's functionality.
    - **Quality Assurance and Testing**: Conduct thorough testing to identify and resolve bugs before launch.
    - **Post-Launch Support**: Provide ongoing maintenance, updates, and support after the website goes live.
    
    This approach allows you to establish a strong client relationship and deliver exceptional, tailored solutions.`
  },
  {
    title: 'Website Templates and Themes Marketplace',
    description: 'Create and sell ready-made website templates or themes for platforms like WordPress, Shopify, or static HTML/CSS templates. You can sell these through your own website or popular marketplaces like ThemeForest and TemplateMonster.',
    detailedDescription: `In the Website Templates and Themes Marketplace, you can offer a variety of templates catering to different industries and styles. Key features could include:
    
    - **Diverse Template Designs**: Create templates for e-commerce, blogs, portfolios, and corporate websites.
    - **Customization Options**: Ensure templates are easily customizable, allowing users to adapt them to their needs without extensive coding knowledge.
    - **Responsive Design**: Guarantee that all templates are mobile-friendly and adapt to different screen sizes.
    - **SEO Optimization**: Optimize templates for search engines to help users rank higher in search results.
    - **Documentation and Support**: Provide comprehensive documentation and customer support to help buyers navigate and utilize your templates effectively.
    
    This model can create a passive income stream while allowing customers to build their sites quickly and efficiently.`
  },
  {
    title: 'Subscription-Based Web Development Service',
    description: 'Provide a subscription model where clients pay a monthly or yearly fee for ongoing development, updates, and maintenance. This could appeal to startups or small businesses that need continuous adjustments and support.',
    detailedDescription: `For a subscription-based web development service, you could offer a range of products that focus on ongoing support, regular updates, and new features. Here are some ideas:
    
    - **Website Maintenance and Security**: Provide regular security checks, updates, and backups.
    - **Content Updates and SEO Optimization**: Offer regular updates for blog posts, product descriptions, etc., along with SEO optimization.
    - **Performance Optimization**: Improve page loading speed, image optimization, and more.
    - **E-commerce Management**: Ongoing support for product updates, promotions, and inventory management.
    - **Analytics and Reporting**: Monthly or quarterly analytics reports with growth recommendations.
    - **Design Refreshes and Updates**: Periodic design updates to keep the site visually fresh.
    - **Conversion Rate Optimization (CRO)**: Run A/B tests and make small changes for better conversions.
    - **Social Media Integration and Updates**: Maintain social media integrations and content updates.
    - **Feature Add-Ons and Integrations**: Offer monthly add-ons like forms or third-party integrations.
    - **Landing Page Development for Campaigns**: Build campaign-specific landing pages to capture leads.
    
    These options allow clients to choose what best suits their needs while enabling you to maintain ongoing work and a predictable revenue stream.`
  },
  {
    title: 'SaaS (Software as a Service) Solutions',
    description: 'Develop and offer SaaS products, such as e-commerce solutions, CMS platforms, or project management tools. You can charge a recurring fee to businesses that use your software to manage their websites or applications.',
    detailedDescription: `With SaaS solutions, you can provide cloud-based software applications that users can access via the internet. This model includes:
    
    - **User-Friendly Interfaces**: Design intuitive dashboards for users to navigate easily.
    - **Scalable Solutions**: Ensure that your software can grow with businesses, accommodating more users or features as needed.
    - **Regular Updates and Support**: Provide continuous updates to add features and fix bugs, along with customer support to assist users.
    - **Data Security and Compliance**: Implement robust security measures and comply with regulations like GDPR.
    - **Flexible Pricing Plans**: Offer tiered subscription pricing based on the features and services included, making it accessible to various business sizes.
    
    This model can generate a steady income while helping businesses streamline their operations.`
  },
  {
    title: 'Web Development Education and Training',
    description: 'Create an online platform to teach web development skills, covering HTML, CSS, JavaScript, and frameworks like React or Vue. This could include video courses, tutorials, live sessions, and certification paths for different skill levels.',
    detailedDescription: `In Web Development Education and Training, you can provide comprehensive resources for learners at various stages. Your offerings could include:
    
    - **Video Courses**: Create high-quality video content covering different aspects of web development, from basics to advanced topics.
    - **Interactive Tutorials**: Provide hands-on coding exercises and projects to help learners practice their skills.
    - **Live Sessions**: Offer live Q&A sessions or workshops to engage with learners and address their questions in real time.
    - **Certification Programs**: Develop certification paths that provide credentials for completing courses, enhancing learners' job prospects.
    - **Community Forums**: Establish a community for students to ask questions, share knowledge, and collaborate on projects.
    
    This model allows you to leverage your expertise while helping others succeed in their web development journeys.`
  },
  {
    title: 'Web Development Consulting',
    description: 'Offer consulting services for companies that want guidance on technology stacks, architecture, scalability, or performance optimization.',
    detailedDescription: `In Web Development Consulting, you can create products that help clients improve their digital presence, optimize their technology stack, and enhance user experience. Here are some ideas:
    
    - **Website and App Audits**: Offer in-depth website and app audits that assess performance, UX/UI design, SEO, accessibility, and security. Provide actionable recommendations to help clients improve in each area.
    - **Technical Documentation and Style Guides**: Create tailored technical documentation and style guides for teams, detailing best practices, coding standards, and design consistency to streamline project work and onboarding.
    - **UX/UI Prototyping and Wireframes**: Provide clients with prototyping services, creating wireframes and mockups for a refined user experience. This can help clients visualize improvements before they’re implemented.
    - **Performance Optimization Reports**: Offer comprehensive performance optimization reports, analyzing server response times, load balancing, image optimizations, and code structure to improve site speed.
    - **API Development and Integration Documentation**: Design API strategies or integration documents, detailing how different services can connect and operate seamlessly. This could include API best practices, authentication guides, and sample calls.
    - **Custom Plugin or Tool Development**: Develop specific tools, such as plugins or mini-apps, that address a client’s unique operational needs. For example, a customized analytics dashboard or a task automation tool.
    - **SEO and Analytics Setup**: Set up SEO tools and analytics dashboards to give clients insights into user behavior, search performance, and engagement. Offer reports and recommendations to guide future content and design strategies.
    - **Security and Compliance Checklists**: Provide security checklists, frameworks, or audit reports focused on industry-specific compliance (e.g., GDPR, HIPAA) and general best practices, including vulnerability assessments.
    - **Custom CMS Solutions**: Build custom CMS templates or modules tailored to clients’ specific needs. This could be a simplified interface for non-technical users or a content workflow system for larger organizations.
    - **Development Team Training Modules**: Create training modules that help client development teams improve in areas such as React, performance optimization, or secure coding practices. This could be in the form of videos, tutorials, or live workshops.
    
    Each of these products provides valuable insights and tools that can help clients achieve smoother, more efficient, and more effective web operations.`
  },
  {
    title: 'White-Label Web Development for Agencies',
    description: 'Partner with design or marketing agencies that lack in-house development expertise to offer web development as a white-label service. This allows agencies to provide more comprehensive services to their clients while you handle the technical side.',
    detailedDescription: `In White-Label Web Development for Agencies, you can serve as an invisible partner, allowing agencies to expand their offerings without needing to hire in-house developers. Services can include:
    
    - **Custom Development**: Provide development services that agencies can present as their own, ensuring they meet their client’s specifications.
    - **Design Collaboration**: Work closely with agency designers to ensure that the final product aligns with the intended branding and user experience.
    - **Flexible Contracting**: Offer flexible agreements that cater to the agency’s workflow and project timelines.
    - **Training and Support**: Provide training sessions for agency staff to help them understand the products and how to present them to clients.
    - **Quality Assurance**: Conduct rigorous testing to ensure that the delivered products are of the highest quality and performance standards.
    
    This model can create mutually beneficial relationships and lead to long-term contracts with agencies seeking reliable development partners.`
  },
  {
    title: 'Website Maintenance and Support Packages',
    description: 'Offer services focused solely on maintaining websites, ensuring they remain secure, up-to-date, and optimized for performance. This can include regular backups, security updates, plugin updates, and performance checks.',
    detailedDescription: `In Website Maintenance and Support Packages, you can provide clients with peace of mind by ensuring their websites run smoothly. Services can include:
    
    - **Regular Backups**: Implement automated backup systems to protect client data and ensure quick recovery in case of issues.
    - **Security Updates**: Keep all software, plugins, and themes up to date to minimize vulnerabilities.
    - **Performance Monitoring**: Regularly check site speed and performance metrics, making recommendations for improvements.
    - **Technical Support**: Offer support services for troubleshooting issues as they arise.
    - **Monthly Reports**: Provide clients with monthly reports outlining site performance, security checks, and any updates performed.
    
    This model can foster ongoing relationships and provide stable, recurring income.`
  },
  {
    title: 'Niche E-commerce Development',
    description: 'Specialize in developing e-commerce websites for specific niches, such as fashion, fitness, or digital products. You can offer end-to-end solutions, including site design, development, SEO, and even marketing support.',
    detailedDescription: `In Niche E-commerce Development, you can focus on providing tailored e-commerce solutions that cater to specific industries. Key services can include:
    
    - **Industry-Specific Features**: Develop functionalities that cater to niche markets, such as subscription services, member-only access, or product customizers.
    - **SEO and Marketing Support**: Provide integrated marketing strategies that include SEO optimization, content marketing, and social media management.
    - **Payment Gateway Integration**: Implement secure and user-friendly payment solutions that suit the target market’s preferences.
    - **Inventory Management Systems**: Develop custom inventory solutions that help clients manage stock effectively.
    - **User Experience Optimization**: Focus on designing user interfaces that enhance shopping experiences and increase conversion rates.
    
    This model allows for specialization, which can help establish a strong reputation within targeted markets.`
  },
  {
    title: 'Custom Web Application Development',
    description: 'Focus on developing custom web applications, like portals, CRMs, or booking systems, for businesses that need specialized functionality beyond a typical website. This can be targeted at mid-sized and large businesses with unique operational needs.',
    detailedDescription: `In Custom Web Application Development, you can provide solutions that address specific business challenges through tailored applications. Services can include:
    
    - **Requirements Analysis**: Work closely with clients to gather detailed requirements and create a project roadmap.
    - **Agile Development**: Implement agile methodologies to adapt to changes and feedback throughout the development process.
    - **Integration with Existing Systems**: Ensure that new applications work seamlessly with clients' current technology stack.
    - **User Training and Documentation**: Provide comprehensive training and documentation to help users understand and leverage the new application effectively.
    - **Ongoing Support and Maintenance**: Offer continuous support to ensure the application remains functional and updated over time.
    
    This model caters to businesses looking for specialized solutions, fostering long-term relationships and project opportunities.`
  },
];

const BusinessModels = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const [modalTitle, setModalTitle] = useState('');

  const handleOpenModal = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalContent('');
    setModalTitle('');
  };

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        10 Different Business Models in Web Development
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {businessModels.map((model, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 cursor-pointer"
            onClick={() => model.detailedDescription ? handleOpenModal(model.title, model.detailedDescription) : null}
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              {model.title}
            </h3>
            <p className="text-gray-700">
              {model.description}
            </p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-50" onClick={handleCloseModal}></div>
          <div className="bg-white p-6 rounded-lg shadow-lg z-10 max-w-2xl mx-4 max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-indigo-600 mb-4">{modalTitle}</h3>
            <p className="text-gray-700 whitespace-pre-wrap break-words">{modalContent}</p>
            <button
              className="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-500"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessModels;
