import { Button } from "@/components/ui/button";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic Calendar",
      price: "$19.99",
      originalPrice: "$24.99",
      features: [
        "12-month wall calendar",
        "Standard quality paper",
        "Basic photo editing",
        "5 custom layouts",
        "Add holidays & events",
        "Standard shipping (5-7 days)"
      ],
      popular: false,
      buttonText: "Choose Basic"
    },
    {
      name: "Premium Calendar",
      price: "$29.99", 
      originalPrice: "$39.99",
      features: [
        "12-month premium calendar",
        "Premium quality paper (300gsm)",
        "Advanced photo editing",
        "15+ custom layouts",
        "Add holidays & events",
        "Personal message pages",
        "Fast shipping (3-5 days)",
        "Free digital copy"
      ],
      popular: true,
      buttonText: "Choose Premium"
    },
    {
      name: "Deluxe Package",
      price: "$49.99",
      originalPrice: "$69.99",
      features: [
        "2 premium calendars (wall + desk)",
        "Premium quality paper (300gsm)",
        "Professional photo editing",
        "25+ custom layouts",
        "Add holidays & events",
        "Personal message pages",
        "Express shipping (2-3 days)",
        "Free digital copies",
        "Gift box packaging",
        "100% satisfaction guarantee"
      ],
      popular: false,
      buttonText: "Choose Deluxe"
    }
  ];

  const faqs = [
    {
      question: "What photo formats do you accept?",
      answer: "We accept JPG, PNG, TIFF, and RAW files. For best quality, we recommend high-resolution images (at least 300 DPI)."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days, premium shipping takes 3-5 days, and express shipping takes 2-3 business days."
    },
    {
      question: "Can I preview my calendar before ordering?",
      answer: "Yes! Our design tool provides a real-time preview of your calendar so you can see exactly how it will look before placing your order."
    },
    {
      question: "What if I'm not satisfied with my calendar?",
      answer: "We offer a 100% satisfaction guarantee. If you're not happy with your calendar, we'll reprint it for free or provide a full refund."
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Choose Your Perfect Calendar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select the package that best fits your needs. All calendars come with our 
            quality guarantee and free customer support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 font-poppins">
                    {plan.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 line-through">{plan.originalPrice}</div>
                      <div className="text-sm text-green-600 font-medium">Save 20%</div>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mt-0.5 mr-3">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full py-3 text-lg ${
                    plan.popular 
                      ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="text-left">
                <h3 className="text-2xl font-semibold text-gray-900 font-poppins">
                  30-Day Money Back Guarantee
                </h3>
                <p className="text-gray-600">
                  Not satisfied? Get your money back, no questions asked.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center font-poppins">
            Frequently Asked Questions
          </h3>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {faq.question}
                </h4>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}