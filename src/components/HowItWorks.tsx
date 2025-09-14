export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Upload Your Photos",
      description: "Select your favorite photos from your device, social media, or cloud storage. Our platform supports all popular image formats.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6f62dff3-800d-4b8d-9356-8d67a83bcdcb.png"
    },
    {
      number: "2", 
      title: "Choose & Customize",
      description: "Pick your calendar style, layout, and add personal touches. Choose from various themes, fonts, and add special dates or holidays.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/bd5b0c7d-e095-4bd3-bd23-a0479cefa7ee.png"
    },
    {
      number: "3",
      title: "Receive Your Calendar", 
      description: "We print your calendar with premium quality materials and deliver it to your doorstep within 3-5 business days.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/917b8129-62ad-4f65-940c-463ee2bed414.png"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Creating your personalized photo calendar is simple and takes just a few minutes. 
            Follow these easy steps to turn your memories into a beautiful calendar.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.number}
                </div>
              </div>

              {/* Step Image */}
              <div className="mb-6 relative overflow-hidden rounded-xl">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Step Content */}
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 transform translate-x-6 z-10">
                  <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-blue-300 border-y-4 border-y-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 font-poppins">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who have already created their perfect photo calendars.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Start Your Calendar Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}