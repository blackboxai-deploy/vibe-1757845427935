export default function FeaturesSection() {
  const features = [
    {
      title: "Premium Quality Paper",
      description: "We use only the finest quality paper and printing technology to ensure your photos look vibrant and last for years.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/92abadcd-41e7-4a24-81d1-01f1fa7d5259.png"
    },
    {
      title: "Multiple Calendar Formats",
      description: "Choose from wall calendars, desk calendars, poster calendars, and mini calendars to fit any space or need.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78033420-1fa4-4f21-8a4d-5d33d6c2a9c4.png"
    },
    {
      title: "Custom Layouts & Themes",
      description: "Personalize your calendar with beautiful themes, custom layouts, and add special dates, holidays, and personal events.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/2706463a-1dee-4a82-9332-e2a754aaeddf.png"
    },
    {
      title: "Fast & Secure Delivery",
      description: "Your calendar is carefully packaged and delivered within 3-5 business days with tracking information included.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/c9d005bf-15a1-4883-b3f1-a420b8971795.png"
    }
  ];

  const specs = [
    { label: "Paper Weight", value: "300gsm Premium" },
    { label: "Print Resolution", value: "2400 DPI" },
    { label: "Color Accuracy", value: "99.9%" },
    { label: "Delivery Time", value: "3-5 Days" },
    { label: "Satisfaction", value: "100% Guarantee" },
    { label: "Formats", value: "12+ Options" }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Why Choose Photo2Calendar?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge printing technology with premium materials to create 
            photo calendars that exceed your expectations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full md:w-48 h-32 object-cover rounded-xl"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center font-poppins">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {specs.map((spec, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 rounded-xl p-4 mb-2">
                  <div className="text-lg font-bold text-blue-600">
                    {spec.value}
                  </div>
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {spec.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quality Guarantee */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
              100% Quality Guarantee
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We stand behind every calendar we create. If you're not completely satisfied with the quality, 
              we'll reprint it for free or provide a full refund.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}