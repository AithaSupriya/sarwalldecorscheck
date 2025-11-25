
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { sections, sections2, sections3 } from "./OurProducts";
import sec1image from '../../assets/schoolpainting/school-painting-mural1.jpg'
import sec2image from '../../assets/WallDecors/Wall-Painting.jpg'
import sec3image from '../../assets/mural/drywall-art-pop-art.jpg'
function unslugify(slug) {
  return slug.replace(/-/g, " ").toLowerCase();
}
function slugify(title) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export default function ProductDetail() {
  const { category, title } = useParams();
  const slug = unslugify(title);

  let product;
  if (category === "school")
    product = sections.find((p) => p.title.toLowerCase() === slug);
  else if (category === "mural")
    product = sections2.find((p) => p.title.toLowerCase() === slug);
  else if (category === "decor")
    product = sections3.find((p) => p.title.toLowerCase() === slug);

  const productArray = category === "school" ? sections : category === "mural" ? sections2 : sections3;
  const [mainImage, setMainImage] = useState(product.mainImage);

  useEffect(() => {
    setMainImage(product.mainImage);
  }, [product]);

  if (!product) {
    return (
      <div className="text-center py-20">
        <h2 className="text-2xl font-semibold text-gray-800">
          Product not found
        </h2>
        <Link
          to="/products"
          className="mt-4 inline-block text-white bg-[#2e3183] px-4 py-2 rounded hover:bg-[#1f2258]"
        >
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-screen bg-white py-8 ">
      {/* Full image always from the first object of the category */}
      {/* Back Button */}
      <Link
        to="/products"
        className="inline-block mb-2 text-sm text-[#2e3183] font-medium hover:underline p-2"
      >
        ← Back to All Products
      </Link>
      <div className="w-full mb-8">
        <img
          src={
            category === "school"
              ? sections[0].fullImage
              : category === "mural"
                ? sections2[0].fullImage
                : sections3[0].fullImage
          }
          alt="Full Product Display"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="max-w-[92%] mx-auto grid grid-cols-1 lg:grid-cols-[4fr_2fr] gap-6 items-start sm:px-2">


        {/* Right Section: Image + Buttons (comes first on mobile) */}
        <div className="right-box">

          {/* Main Image */}
          <div className="main-image-box">
            <img
              src={mainImage}
              alt={product.title}
              className="main-image"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="thumbnail-gallery">
            {product.thumbnails.map((thumb, index) => (
              <button
                key={index}
                onClick={() => setMainImage(thumb)}
                className={`thumb-btn ${mainImage === thumb ? "active" : ""}`}
              >
                <img
                  src={thumb}
                  alt={`${product.title} thumbnail ${index + 1}`}
                  className="thumb-img"
                />
              </button>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="cta-box">

            <a href="/contact" className="quote-btn">
              Get Best Quote
            </a>

            <a
              href="https://wa.me/+918333833355"
              target="_blank"
              rel="noopener noreferrer"
              className="chat-btn"
            >
              Chat With Us
            </a>

          </div>

        </div>




        {/* Left Section: Text (comes second on mobile) */}
        <div className="order-2 lg:order-1 space-y-4 sm:space-y-5 md:space-y-6 px-3 sm:px-4 md:px-0">


          {/* Product Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 leading-snug">
            {product.title}
          </h1>

          {/* Product Description */}
          <div className=" text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
            {product.text}
          </div>
        </div>

      </div>

      {/* You may also like Section */}
      <div className="py-10 px-4 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div className="bg-[#272566] py-2 px-4 sm:px-8 flex justify-center sm:justify-start items-center">
          <h2 className="text-2xl sm:text-2xl font-medium text-white text-center sm:text-left">
            You may also like :
          </h2>
        </div>


        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-300 mb-6 sm:mb-10"></div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {productArray.map((item) => {
            if (item.title === product.title) return null; // exclude current product
            return (
              <div
                key={item.title}
                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <Link
                  to={`/product/${category}/${slugify(item.title)}`}
                  className="block overflow-hidden"
                >
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-48 sm:h-56 md:h-60 lg:h-64 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </Link>

                <h3 className="text-base text-xl sm:text-xl font-medium mt-3 px-4 text-center text-gray-800">
                  {item.title}
                </h3>

                <div className="px-4 mt-4 mb-4">
                  <Link
                    to={`/product/${category}/${slugify(item.title)}`}
                    className="block text-center text-white font-medium text-sm sm:text-base py-2 rounded transition-colors duration-300 bg-[#272566] "
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

<style>{`
.right-box {
  background: #e2e2e2;
  padding: 16px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Safari fix */
  position: relative;
  z-index: 0;
  overflow: visible;
}

/* Main image container */
.main-image-box {
  width: 100%;
  height: 320px;
  background: white;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;

  /* Required Safari fix */
  overflow: visible;
  position: relative;
  z-index: 10;
}

.main-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 0.4s;
}

.main-image:hover {
  transform: scale(1.05);
}

/* Thumbnail Gallery */
.thumbnail-gallery {
  margin-top: 20px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr)); /* Mobile default */
  gap: 12px;
  position: relative;
  z-index: 20;
}

/* Tablet: exactly 3 per row */
@media (min-width: 768px) {
  .thumbnail-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 768px) {
  .thumb-btn {
    height: 180px !important;
    aspect-ratio: unset !important;
  }

  .thumb-img {
    height: 100%;
    object-fit: cover;
  }
}


/* Desktop: still 3 per row */
@media (min-width: 1024px) {
  .thumbnail-gallery {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Each thumbnail button */
.thumb-btn {
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 2px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: border 0.2s, transform 0.2s;
}

.thumb-btn.active {
  border-color: #1c6cfb;
  transform: scale(1.05);
  box-shadow: 0px 0px 8px rgba(0,0,0,0.2);
}

.thumb-btn:hover {
  border-color: #aaa;
}

.thumb-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* CTA buttons */
/* CTA buttons container */
.cta-box {
  width: 100%;
  display: flex;
  flex-direction: column;   /* Mobile default (stacked) */
  gap: 12px;
  margin-top: 24px;
  position: relative;
  z-index: 30;
}

/* Buttons look */
.quote-btn,
.chat-btn {
  flex: 1; /* makes both equal width in row */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  border-radius: 2px;
  transition: background 0.3s;
}

/* Colors */
.quote-btn {
  background: #272566;
}
.quote-btn:hover {
  background: #1e1b4f;
}

.chat-btn {
  background: #0d873a;
}
.chat-btn:hover {
  background: #0a6f30;
}

/* Tablet + Desktop (row layout) */
@media (min-width: 768px) {
  .cta-box {
    flex-direction: row;   /* side-by-side */
  }
}


/* RESPONSIVE FIX */
@media (min-width: 1024px) {
  .right-box {
    order: 2;
  }
}

@media (max-width: 1023px) {
  .right-box {
    order: 1;
  }
}
`}</style>    </div>

  );
}

