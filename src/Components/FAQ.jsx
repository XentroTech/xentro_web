import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What is Xentro?",
          answer:
            "Xentro is a pioneering company focused on sustainable innovation, offering a complete business ecosystem around electric go-karting. We provide electric go-karts, track construction services, and additional entertainment options like virtual reality and indoor golf.",
        },
        {
          question: "What makes Xentro different from other go-kart providers?",
          answer:
            "Xentro integrates sustainable technology into its operations, including solar-powered charging stations, environmentally friendly construction materials, and innovative business models tailored to client needs.",
        },
        {
          question: "Where is Xentro located?",
          answer:
            "Xentro operates primarily in Bangladesh, with plans for regional and global expansion. Our headquarters handle both domestic and international inquiries.",
        },
      ],
    },
    {
      category: "Services Offered",
      questions: [
        {
          question: "What services does Xentro provide?",
          answer:
            "Electric go-kart manufacturing and sales, track design and construction, business model consulting for go-karting facilities, entertainment integration (e.g., VR gaming, indoor golf), and solar charging solutions for electric vehicles.",
        },
        {
          question: "Can Xentro design a custom go-kart track for my facility?",
          answer:
            "Absolutely! We offer bespoke track design and construction services to fit your location, theme, and business needs.",
        },
        {
          question: "Do you offer support for setting up a new business?",
          answer:
            "Yes, Xentro provides comprehensive consulting services to help you set up and run a successful electric go-karting facility, including financial planning, marketing, and operational support.",
        },
      ],
    },
    {
      category: "Technology and Sustainability",
      questions: [
        {
          question: "Are Xentro go-karts eco-friendly?",
          answer:
            "Yes, all Xentro go-karts are electric, reducing carbon emissions. We also integrate solar-powered charging stations for a fully sustainable experience.",
        },
        {
          question: "What are the advantages of using solar-powered charging stations?",
          answer:
            "Solar-powered charging reduces energy costs, minimizes environmental impact, and supports sustainable energy use.",
        },
      ],
    },
    {
      category: "For Investors and Partners",
      questions: [
        {
          question: "Can I partner with Xentro?",
          answer:
            "We welcome partnerships with investors, facility owners, and entrepreneurs. Contact our team to discuss potential collaborations.",
        },
        {
          question: "What is the ROI for investing in a Xentro electric go-kart business?",
          answer:
            "The ROI depends on your business model and location, but our tailored solutions and sustainable approach are designed to maximize profitability.",
        },
      ],
    },
    {
      category: "Customer Experience",
      questions: [
        {
          question: "Can I book a ride at a Xentro facility?",
          answer:
            "Yes, you can enjoy a thrilling ride at any of our partnered or owned go-kart tracks in the future. On our website, the locations and booking options will be provided. You are welcome to visit our factory for a test drive at the moment.",
        },
        {
          question: "Are Xentro facilities family-friendly?",
          answer:
            "Absolutely! Our tracks and entertainment options cater to people of all ages, making them perfect for families, corporate events, and group activities.",
        },
      ],
    },
    {
      category: "Support and Maintenance",
      questions: [
        {
          question: "Does Xentro provide maintenance for go-karts and tracks?",
          answer:
            "Yes, we offer ongoing maintenance services for all our products and facilities to ensure optimal performance and safety.",
        },
        {
          question: "How can I get technical support for Xentro products?",
          answer:
            "You can contact our technical support team through our website or hotline. We provide fast, reliable assistance for all technical issues.",
        },
      ],
    },
    {
      category: "Getting Started",
      questions: [
        {
          question: "How can I purchase Xentro products or services?",
          answer:
            "Reach out to our sales team through our website or contact us directly via phone or email. We’ll guide you through the process.",
        },
        {
          question: "What are the payment options for Xentro services?",
          answer:
            "We accept multiple payment methods, including bank transfers, credit cards, and other digital payment platforms.",
        },
        {
          question: "How long does it take to set up a go-kart facility with Xentro?",
          answer:
            "Setup times vary depending on the project’s size and complexity but typically range from 3 to 6 months for full facility development.",
        },
      ],
    },
    {
      category: "Contact Us",
      questions: [
        {
          question: "How can I get in touch with Xentro?",
          answer:
            "You can contact us through our website, email, or phone. Visit our Contact Us page for detailed information.",
        },
        {
          question: "Does Xentro have social media channels?",
          answer:
            "Yes, follow us on [insert social media platforms] for updates, promotions, and behind-the-scenes content.",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Title */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#e0372c]">Xentro FAQ</h1>
          <p className="text-lg text-[#eab71a]">Frequently Asked Questions</p>
        </header>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((section, index) => (
            <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold border-b border-[#eab71a] pb-2 mb-4">
                {section.category}
              </h2>
              <div className="space-y-4">
                {section.questions.map((item, i) => (
                  <div key={i}>
                    <button
                      className="w-full text-left font-medium text-lg flex justify-between items-center"
                      onClick={() => toggleFAQ(`${index}-${i}`)}
                    >
                      <span>{item.question}</span>
                      <span className="ml-4">
                        {activeIndex === `${index}-${i}` ? "-" : "+"}
                      </span>
                    </button>
                    {activeIndex === `${index}-${i}` && (
                      <p className="mt-2 text-gray-400">{item.answer}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
