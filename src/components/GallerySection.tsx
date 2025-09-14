"use client";

import { useState } from "react";

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Calendars" },
    { id: "wall", name: "Wall Calendars" },
    { id: "desk", name: "Desk Calendars" },
    { id: "poster", name: "Poster Style" },
    { id: "mini", name: "Mini Calendars" }
  ];

  const gallery = [
    {
      id: 1,
      category: "wall",
      title: "Family Memories Wall Calendar",
      description: "Beautiful family moments throughout the year",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/a1b5081d-9bfa-4d01-a550-30a7970b75e6.png"
    },
    {
      id: 2,
      category: "desk",
      title: "Travel Adventures Desk Calendar",
      description: "Stunning landscapes and travel photography",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/45b0c4d4-354c-46c1-9cf6-adb1022f3ab5.png"
    },
    {
      id: 3,
      category: "wall",
      title: "Pet Lovers Wall Calendar",
      description: "Adorable pet photos for animal lovers",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d9303080-568a-4450-9a9e-fdff14d047ef.png"
    },
    {
      id: 4,
      category: "poster",
      title: "Wedding Memories Poster Calendar",
      description: "Elegant wedding photo compilation",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d6f5c4e1-9e70-46b0-a849-f728c5f3629e.png"
    },
    {
      id: 5,
      category: "mini",
      title: "Baby's First Year Mini Calendar",
      description: "Precious moments of baby's growth",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/7ea95b26-dd23-47c4-ba2d-bcd704d72049.png"
    },
    {
      id: 6,
      category: "desk",
      title: "Nature Photography Desk Calendar",
      description: "Breathtaking nature and wildlife shots",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e6be2283-0331-4eae-8536-f6d594f55fa9.png"
    }
  ];

  const filteredGallery = activeCategory === "all" 
    ? gallery 
    : gallery.filter(item => item.category === activeCategory);

  const testimonials = [
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Absolutely love my family calendar! The print quality is outstanding and the colors are so vibrant. Will definitely order again!",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/78b3d8d3-d0fc-4a7a-be7c-342ba59fc709.png"
    },
    {
      name: "Mike Chen",
      rating: 5,
      comment: "Perfect gift for my parents. They were so happy to see all our family photos organized in such a beautiful calendar. Great service too!",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/892829f5-9cbb-494d-a548-8cfc775db276.png"
    },
    {
      name: "Emily Rodriguez",
      rating: 5,
      comment: "The customization options are amazing! I was able to add all our important dates and the layout looked exactly how I wanted.",
      image: "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/32be7e48-a01e-4450-b6bd-396ea4497e41.png"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
            Calendar Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get inspired by our stunning calendar designs created by customers just like you. 
            See what's possible with your favorite photos.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredGallery.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-200">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customer Testimonials */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center font-poppins">
            What Our Customers Say
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <div className="flex text-yellow-400">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}