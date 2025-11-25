import React, { useEffect, useRef, useState } from 'react';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs';

export default function TestimonialSection() {
  const swiperRef = useRef(null);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);

  useEffect(() => {
    const swiper = new Swiper(swiperRef.current, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });

    return () => swiper && swiper.destroy();
  }, []);

  const testimonials = [
  {
    name: 'Vikram',
    text:
      'The wall murals we got from Sar Wall Decors completely transformed our living room! The colors are vibrant, and the designs are creative. Our walls now feel lively and artistic. Highly recommend their work for home and office spaces.',
  },
  {
    name: 'Sharma',
    text:
      'We commissioned a custom school painting for our classroom, and it turned out amazing. The attention to detail, creativity, and quality of the paintwork was outstanding. The team was professional and delivered on time.',
  },
  {
    name: 'Ankitha',
    text:
      'The decorative wall panels for our office reception area look elegant and modern. The installation was smooth, and the material is durable. It added a unique character to our walls and impressed all our visitors.',
  },
  {
    name: 'Meenakshi',
    text:
      'We got a set of wall murals and decorative paintings for our children’s play area. The designs are fun, colorful, and engaging. The team at Sar Wall Decors really knows how to bring walls to life!',
  },
];


  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
      />
      <section className="py-10 px-5 sm:px-23 md:px-12" style={{ backgroundColor: '#201f46' }}>
        <div className="max-w-7xl mx-auto ">
          {/* Section Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-3"
            style={{
                color: "#ffffffff", // navy/dark blue color
                fontFamily: "math",
                fontWeight: 600,   // medium weight
                fontSize: "2rem", // ~36px
                lineHeight: "1.2",
                textAlign: "center"
              }}>Testimonial</h1>
            <p className="text-white text-lg opacity-90">What Our Customer Are Saying</p>
          </div>

          {/* Swiper Cards */}
          <div className="swiper" ref={swiperRef}>
            <div className="swiper-wrapper">
              {testimonials.map((item, index) => (
                <div key={index} className="swiper-slide h-full flex">
                  <div
                    className="bg-[#F1F1F1] p-5 sm:p-6 rounded-xl border border-gray-300 shadow-md flex flex-col w-full"
                    style={{ minHeight: '300px' }}
                  >
                              <div className="text-5xl text-black">❝</div>


                    {/* Testimonial Text (clamped) */}
            <p className="relative text-gray-800 text-base leading-relaxed flex-grow mb-2 overflow-hidden max-h-32">
  {item.text}
  <span className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t "></span>
</p>

                    {/* Read Full Button – now with proper spacing */}
                    <button
                      onClick={() => setSelectedTestimonial(item)}
                      className="text-[#272566] font-medium  text-left"
                    >
                      Read Full Testimonial
                    </button>

                    {/* Person Info */}
                    <div className="flex items-center gap-3 pt-4">
                      <img
              src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
              alt="User Avatar"
              className="w-10 h-10 rounded-full mr-3"
            />
                      <div>
                        <h3 className="text-gray-900 font-semibold text-base">{item.name}</h3>
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Popup Modal with Blur Background */}
     {selectedTestimonial && (
  <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm bg-black/30 z-50">
    <div className="bg-white w-11/12 md:w-2/3 lg:w-1/2 p-6 rounded-lg shadow-lg relative">
      {/* Close Button (Top Right) */}
      <button
        onClick={() => setSelectedTestimonial(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-lg"
      >
        ✖
      </button>

      {/* Modal Content */}
      <h2 className="text-2xl font-semibold mb-4">{selectedTestimonial.name}</h2>
      <p className="text-gray-700 leading-relaxed mb-6">
        {selectedTestimonial.text}
      </p>

      {/* Bottom Close Button */}
      <button
        onClick={() => setSelectedTestimonial(null)}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Close
      </button>
    </div>
  </div>
)}

      </section>
    </>
  );
}
