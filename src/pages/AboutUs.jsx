import React from "react";
import wallArtImage from "../assets/aboutus/section1.jpg";


const testimonials = [
  {
    text: "Sar Wall Decors exceeded my expectations. The detailing on the fiber Ganesha statue is stunning. Packaging was secure, and delivered on time.",
    name: "Shivam Sharma",
  },
  {
    text: "I ordered a set of abstract wall panels and they look amazing in my living room. The texture and colors are vibrant, and delivery was quick.",
    name: "Priya Singh",
  },
  {
    text: "The decorative wall clock I bought is a true masterpiece. It adds elegance to my study room. Highly recommend their quality and service!",
    name: "Rohan Mehta",
  },
];

const AboutUs = () => {


  return (
    <section className="min-h-screen">
      {/* About Us Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
            {/* Image Section (Top on mobile) */}
            <div className="lg:w-[30%] w-full order-first lg:order-last">
              <img
                src={wallArtImage}
                alt="Wall Art Decor"
                className="w-full h-auto rounded-lg shadow-lg object-cover max-h-[500px]"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-[70%] w-full space-y-6 text-gray-700 order-last lg:order-first">
              <h1
                className="text-lg sm:text-3xl md:text-3xl font-bold mb-8 lg:text-left"
                style={{
                  color: "#212057ff", // navy/dark blue color
                  fontFamily: "math",
                  fontWeight: 500,   // medium weight
                  fontSize: "2.25rem", // ~36px
                  lineHeight: "1.2",
                }}    >
                About Us - Sar Wall Decors
              </h1>

              {/* Our Story */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Story</h2>
                <p
                  className="text-[16px] sm:text-base md:text-lg text-justify text-[#212528]"
                  style={{ fontFamily: "'Poppins', serif" }}
                >        At <span className="font-semibold  ">Sar Wall Decors</span>, we believe
                  that the walls around us are more than just boundaries; they are
                  canvases waiting to be adorned with creativity, passion, and
                  individuality. Established with a vision to redefine wall decor, we
                  embarked on a journey to transform spaces into expressions of personal
                  style and artistic imagination.
                </p>
              </div>

              {/* Our Vision */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Vision</h2>
                <p className="text-sm sm:text-base text-justify" style={{ fontFamily: "'Poppins', serif" }}>
                  We believe that every wall has a tale to tell, and we envision a world
                  where art transcends boundaries, connecting people to their spaces in
                  meaningful ways. Our vision is to be the catalyst for transforming
                  living and working environments into personalized masterpieces that
                  inspire, captivate, and reflect the unique spirit of our clients.
                </p>
              </div>

              {/* Our Mission */}
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold mb-2">Our Mission</h2>
                <p className="text-sm sm:text-base text-justify" style={{ fontFamily: "'Poppins', serif" }}>
                  At the heart of <span className="font-semibold">Sar Wall Decors</span>{" "}
                  is a mission to bring creativity and imagination to life through
                  exceptional craftsmanship. We strive to provide unparalleled wall decor
                  solutions that go beyond aesthetics, creating an emotional resonance
                  between people and their spaces.
                </p>
              </div>
            </div>
          </div>

        </div>


      </div>



      {/* Testimonials Section */}
      <section className="py-6 bg-gray-200">
        <div className="px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold sm:text-4xl" style={{ fontFamily: "math" }}>
              Testimonial
            </h2>
            <p className="max-w-2xl mx-auto text-md text-gray-800">
              What Our Customer Are Saying

            </p>
          </div>

          {/* Testimonial Cards Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg shadow-md bg-[#F1F1F1] border border-gray-500 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="text-5xl text-black">❝</div>
                  <p
                    className="text-gray-800 text-sm sm:text-base mb-2 text-justify"
                    style={{ fontFamily: "'Poppins', serif", lineHeight: "1.6" }}
                  >
                    {t.text}
                  </p>

                </div>

                <div className="flex items-center mt-4">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/147/147144.png"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-gray-800">{t.name}</h3>
                    <div className="flex mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-4 h-4 text-yellow-400"
                          fill="#e9920b"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.947a1 1 0 00.95.69h4.148c.969 0 1.371 1.24.588 1.81l-3.36 2.44a1 1 0 00-.364 1.118l1.287 3.947c.3.921-.755 1.688-1.54 1.118l-3.36-2.44a1 1 0 00-1.176 0l-3.36 2.44c-.784.57-1.838-.197-1.539-1.118l1.287-3.947a1 1 0 00-.364-1.118L2.049 9.374c-.783-.57-.38-1.81.588-1.81h4.148a1 1 0 00.95-.69l1.286-3.947z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
};

export default AboutUs;