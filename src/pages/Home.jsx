import React, { useState } from "react";
import HeroCarousel from "../components/HeroCarousel";
import AboutImage from "../assets/about-image.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonials from "../components/Testimonials";
import FAQSection from "../components/FaqSection";

import emailjs from "emailjs-com";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";               // core Swiper styles
import "swiper/css/navigation";    // navigation module styles
import "swiper/css/pagination";    // pagination module styles
import { Link } from "react-router-dom";

import { sections as schoolSections } from "./services/SchoolPainting";
import { sections as muralSections } from "./services/MuralSculptures";
import { sections as wallSections } from "./services/WallDecor";
import { sections2 } from './services/OurProducts'

// ✅ Auto-import gallery images
const wallImages = Object.values(
  import.meta.glob("../assets/gallery/*.jpg", { eager: true, import: "default" })
);

const schoolImages = Object.values(
  import.meta.glob("../assets/gallery/school/*.jpg", { eager: true, import: "default" })
);

const muralImages = Object.values(
  import.meta.glob("../assets/gallery/mural/*.jpg", { eager: true, import: "default" })
);

// Merge all images
const allImages = [...wallImages, ...schoolImages, ...muralImages];

// Pick 9–10 random images
const shuffledImages = allImages.sort(() => 0.5 - Math.random());
const galleryImages = shuffledImages.slice(0, 10);
function Home() {

  function slugify(title) {
    return title.toLowerCase().replace(/\s+/g, "-");
  }
  const getThreeImages = (arr) => arr.slice(0, 3);

  const schoolImages = getThreeImages(schoolSections);
  const muralImages = getThreeImages(muralSections);
  const wallImages = getThreeImages(wallSections);
  const muralSculptureProducts = sections2.slice(0, 9); // first 9 products

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const artImages = [
  ...schoolImages.map(item => ({ ...item, type: "school" })),
  ...muralImages.map(item => ({ ...item, type: "mural" })),
  ...wallImages.map(item => ({ ...item, type: "decor" })),
];

  // ✅ Sleek gray arrows positioned at edges
  const CustomPrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute -left-6 md:-left-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-gray-600 transition duration-300 drop-shadow-sm"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
    </div>
  );

  const CustomNextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute -right-6 md:-right-10 top-1/2 -translate-y-1/2 cursor-pointer z-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:w-8 md:h-8 text-gray-400 hover:text-gray-600 transition duration-300 drop-shadow-sm"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
      </svg>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  const allImages = [...wallImages, ...schoolImages, ...muralImages];
  return (
    <div>
      {/* Hero Section */}
      <HeroCarousel />

      <section className="w-full py-10 hidden lg:block">  {/* Reduced top/bottom padding */}
        <div className=" mx-auto px-4">

          <div className="flex flex-col lg:flex-row  overflow-hidden shadow-lg min-h-[220px]"> {/* Reduced height */}

            {/* Left Section */}
            <div className="lg:w-1/4 bg-black p-5 flex items-center justify-center">
              <div className="flex flex-col items-center gap-2">
                {/* Top row: icon + "Call Us" */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-full">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="white"
                      viewBox="0 0 22 22"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl font-semibold text-white">Call Us</h2>
                </div>

                {/* Phone number below */}
                <p className="text-2xl font-semibold text-white mt-1">+91 83338 33355</p>
              </div>


            </div>

            {/* Right Section */}
            <div className="lg:w-3/4 bg-[#272566] text-white p-6"> {/* Compact padding */}

              {/* Header Row */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                <h3 className="text-lg font-bold whitespace-nowrap">Enquire Now –</h3>
                <p className="text-gray-300 text-sm">
                  Get in touch for custom, durable, artistic fiber creations today.
                </p>
              </div>

              {/* Form */}
              <form
                action={`mailto:contactusswd@gmail.com?subject=Enquiry from ${formData.name}&body=${encodeURIComponent(
                  `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`
                )}`}
                method="post"
                encType="text/plain"
                className="flex flex-col gap-4 w-full"
              >
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row gap-3 w-full">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="flex-1 min-w-0 px-3 py-3 rounded-md bg-white border text-gray-800 text-sm placeholder-gray-500"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1 min-w-0 px-3 py-3 rounded-md bg-white border text-gray-800 text-sm placeholder-gray-500"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="flex-1 min-w-0 px-3 py-3 rounded-md bg-white border text-gray-800 text-sm placeholder-gray-500"
                  />
                </div>

                {/* Row 2 */}
                <div className="flex flex-col md:flex-row gap-3 w-full">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="flex-1 min-w-0 px-3 py-3 rounded-md bg-white border text-gray-800 text-sm placeholder-gray-500 resize-none"
                  ></textarea>

                  <button
                    type="submit"
                    className="bg-black hover:bg-gray-800 text-white font-medium px-4 py-3 rounded-md md:w-1/3 text-sm"
                  >
                    Submit Enquiry
                  </button>
                </div>
              </form>


            </div>
          </div>

        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-5 sm:py-10 bg-[#2725661c]">
        <div className=" mx-auto px-4 md:px-10 lg:px-18"> {/* Increased left & right space */}

          {/* Header with text + button */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
            <h2
              className="text-left text-[23px] lg:text-2xl font-semibold text-[#272566] leading-snug"
              style={{ fontFamily: "Poppins, serif" }}
            >
              Premium School Painting, Wall Murals, Sculptures, Wall Painting, Fiber Mural, Fiber Status, Elevation Design, Cement Art Designs, Exterior & Interior Makeovers, Home, Office & Commercial Space Transformation.
            </h2>

            <a
              href="/gallery"
              className="w-full sm:w-[280px] lg:w-[350px] mt-3 lg:mt-0 inline-block bg-[#272566] text-white font-normal text-base px-5 py-2.5 rounded-full transition duration-300 hover:bg-[#3e3e3e]"
              style={{ textAlign: "center"}}
            >
              View Gallery
            </a>
          </div>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 0,               // no delay between transitions
              disableOnInteraction: false,
            }}
            speed={1000}              // faster speed (ms for one slide transition)
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className="mt-4"
          >
            {galleryImages.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg overflow-hidden shadow-lg border border-gray-200">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full aspect-[4/3ntain transition-transform duration-300 hover:scale-105"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

        </div>
      </section>


      {/* About Section */}
      <section className="py-2 sm:py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Outer Card */}
          <div className="border border-gray-300 rounded-xl p-5 md:p-5 shadow-lg bg-white m-3">
            <div className="flex flex-col lg:flex-row gap-8">

              {/* Left Image */}
              <div className="lg:w-1/3 w-full">
                <img
                  src={AboutImage}
                  alt="Sar Wall Decors"
                  className="w-full rounded-xntain shadow-md"
                />
              </div>

              {/* Right Content */}
              <div className="lg:w-2/3 w-full">
                <p className="text-[22px] md:text-[25px] font-medium mb-3">
                  <span className="text-blue-900 font-semibold">
                    Trusted Painting & Wall Art Specialists in Hyderabad
                  </span>
                </p>

                <p className="text-black text-justify leading-relaxed">
                  <strong className="text-[#0d6efd]">

                    Sar Wall Decors

                  </strong>{" "}
                  is a professionally managed company and one of Hyderabad’s most trusted names
                  in interior design, wall art, and creative decor solutions. Since our inception,
                  we have been dedicated to transforming plain walls into beautiful expressions of
                  art, creativity, and personality. Our expertise covers{" "}
                  <strong className="text-[#0d6efd] flex flex-wrap gap-1 ">
                    <Link to="/product/mural/wall-mural-relief-art">Wall Mural</Link>,
                    <Link to="/product/mural/drywall-art" >Drywall Art</Link>,
                    <Link to="/product/mural/ganesha-wall-mural" >Ganesha Wall Mural Art</Link>,
                    <Link to="/product/mural/radhakrishna-wall-mural" >Radhakrishna Wall Mural Art</Link>,
                    <Link to="/product/decor/street-wall-painting" >Street Wall Painting</Link>,
                    <Link to="/product/decor/office-wall-painting" >Office Wall Painting</Link>,
                    <Link to="/product/school/play-school-wall-art" >Play School Wall Art</Link>.
                  </strong>
                  <br /><br />
                  Backed by a team of skilled designers and experienced craftsmen, we ensure every
                  project reflects innovation and excellence. Whether it’s{" "}
                  <strong className="text-[#0d6efd] flex flex-wrap gap-1">
                    <Link to="/product/mural/drywall-art" >DrywallArt</Link>,
                    <Link to="/product/decor/hotels-&-restaurants-wall-painting" >Hotels & Restaurants Wall Painting</Link>,
                    <Link to="/product/mural/fiber-wall-art" >Fiber Wall Art</Link>
                  </strong>                  our work brings spaces to life with unique artistry and quality craftsmanship.
                  <br /><br />
                  As leading wall decor professionals, we focus on customer satisfaction, timely
                  delivery, and top-notch finishes. Experience the best of wall design and painting
                  with <strong>Sar Wall Decors</strong> — where imagination meets precision.
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* products */}
    <section className="py-10 bg-[#2725661c]">
  <div className="container mx-auto px-3 sm:px-4">

    {/* Heading */}
    <div className="mb-8">
      <h2
        className="text-start"
        style={{
          color: "#272566",
          fontFamily: "math",
          fontWeight: 600,
          fontSize: "2rem",
          lineHeight: "1.2",
          textAlign: "center",
        }}
      >
        Explore Our Artistic Fiber Creations
      </h2>
    </div>

    {/* School Painting */}
    <div className="mb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {artImages.map((item, index) => (
    <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
      
      <Link to={`/product/${item.type}/${slugify(item.title)}`}>
        <img
          src={item.mainImage || item.image}
          className="w-full h-64 object-contain hover:scale-105 transition-transform duration-300"
        />
      </Link>

      <h3 className="text-lg font-medium mt-3 px-4 text-center">
        <Link to={`/product/${item.type}/${slugify(item.title)}`}>
          {item.title}
        </Link>
      </h3>

      <div className="px-4 mt-auto mb-4">
        <Link
          to={`/product/${item.type}/${slugify(item.title)}`}
          className="block text-center text-white font-medium text-sm py-2 rounded bg-[#272566] hover:bg-[#1f2258]"
        >
          Explore More
        </Link>
      </div>

    </div>
  ))}
</div>


  </div>
  </div>
</section>


      {/* work explore */}
     <section className="py-10 bg-gray-50 ">
  <div className="container mx-auto px-4">

    {/* Outer Card */}
    <div className="border border-gray-300 rounded-xl p-6 md:p-6 shadow-lg bg-white">
      <div className="flex flex-col-reverse lg:flex-row gap-8">

        {/* Right Content */}
        <div className="lg:w-2/3 w-full">
          <p className="text-[22px] md:text-[25px] font-medium mb-3">
            <span style={{
              color: "#272566",
              fontFamily: "math",
              fontWeight: 600,
              fontSize: "1.8rem",
              lineHeight: "1.2",
              textAlign: "center"
            }}>
              School Painting, Wall Decor, Murals & Sculptures Experts in Hyderabad
            </span>
          </p>

          <p className="text-black text-justify leading-relaxed" style={{
            fontFamily: "Poppins, serif"
          }}>
            <strong>Sar Wall Decors</strong> {" "} brings life, creativity, and imagination to every wall through our specialized <strong>School Painting, Wall Decor, Murals, and Sculpture</strong> services. We believe that spaces — especially schools and educational environments — should inspire creativity, learning, and joy. Our expert artists craft visually engaging and educational wall paintings that spark curiosity and enhance the atmosphere for children and staff alike. <br /><br /> From vibrant <strong>classroom murals and thematic corridor designs</strong> to stunning <strong>3D sculptures and decorative wall art</strong>, we create masterpieces that turn ordinary walls into meaningful storytelling spaces. Every design is carefully planned to align with the school’s vision and values, ensuring a perfect blend of art, color, and concept. <br /><br /> Our <strong>murals and sculptures</strong> are crafted using durable, high-quality materials, ensuring long-lasting beauty and easy maintenance. Whether you’re looking to revamp your school interiors, add educational wall themes, or enhance your campus with unique sculptures, <strong>Sar Wall Decors</strong> delivers creative excellence and professional precision in every project. </p>

          <div className="mt-6">
            <a
              href="/products"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              EXPLORE OUR WORK
            </a>
          </div>
        </div>

        {/* Left Image */}
        <div className="lg:w-1/3 w-full">
          <img
            src={AboutImage}
            alt="School Painting & Wall Decor"
            className="w-full rounded-xl object-cover shadow-md"
          />
        </div>

      </div>
    </div>
  </div>
</section>



      <section className="py-10 bg-[#2725661c]">
        <div className="container mx-auto px-3 sm:px-4">

          {/* Heading */}
          <div className="mb-8">
            <h2
              className="text-start"
              style={{
                color: "#272566", // navy/dark blue color
                fontFamily: "math",
                fontWeight: 600,   // medium weight
                fontSize: "2rem", // ~36px
                lineHeight: "1.2",
                textAlign: "center"
              }}
            >
              Explore Our Exclusive Product Collection
            </h2>
          </div>



          {/* Mural & Sculptures */}
          <div className="mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {muralSculptureProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                  <Link to={`/product/mural/${slugify(product.title)}`}>
                    <img
                      src={product.mainImage}   // show main image
                      alt={product.title}
                      className="w-full h-64 object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  <h3 className="text-lg font-medium mt-3 px-4 text-center">
                    <Link to={`/product/mural/${slugify(product.title)}`}>
                      {product.title}
                    </Link>
                  </h3>

                  <div className="px-4 mt-auto mb-4">
                    <Link
                      to={`/product/mural/${slugify(product.title)}`}
                      className="block text-center text-white font-medium text-sm py-2 rounded bg-[#272566]"
                    >
                      Explore More
                    </Link>
                  </div>
                </div>
              ))}
            </div>

          </div>


        </div>
      </section>

      <Testimonials />
      <FAQSection />
    </div>
  );
}

export default Home;
