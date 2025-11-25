import React, { useEffect, useState } from "react";


import sec1image from '../assets/slider/slider (1).jpg'
import sec2image from '../assets/slider/slider (2).jpg'
import sec3image from '../assets/slider/slider (3).jpg'
import sec4image from '../assets/slider/slider (4).jpg'

const slides = [
  {
    img: sec1image,
    title: "Creative Murals",
    subtitle: "Your Visualization, Our Art",
    desc: "The art we create on walls is not just paint and colors — it's a reflection of our souls, a story whispered to the world.",
  },
  {
    img: sec2image,
    title: "Bringing Walls to Life",
    subtitle: "Your Visualization, Our Art",
    desc: "Art is not what you see, but what you make others see.",
  },
  {
    img: sec3image,
    title: "Artistic Vision",
    subtitle: "You Imagine, We Create",
    desc: "We turn imagination into color, and walls into art.",
  },
   {
    img: sec4image,
    title: "Artistic Vision",
    subtitle: "You Imagine, We Create",
    desc: "We turn imagination into color, and walls into art.",
  },
];

const HeroCarousel = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
<>
{/* <section className="relative w-full overflow-hidden mb-6 sm:mb-0">

  <div
    className="
      flex 
      transition-transform 
      duration-700 
      ease-in-out
    "
    style={{
      transform: `translateX(-${index * 100}%)`,
    }}
  >
    {slides.map((slide, i) => (
      <div key={i} className="w-full flex-shrink-0 relative">
        
        <img
          src={slide.img}
          alt={slide.title}
          className="
            w-full h-auto 
            object-contain
            sm:object-cover
            sm:h-[55vh]
            md:h-[65vh]
            lg:h-[80vh]
          "
        />
      </div>
    ))}
  </div>

  <div className="
    absolute bottom-4 left-1/2 
    -translate-x-1/2 
    flex space-x-2 sm:space-x-3 z-20
  ">
    {slides.map((_, i) => (
      <button
        key={i}
        onClick={() => setIndex(i)}
        className={`
          w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full 
          transition-all duration-300 
          ${index === i 
            ? "bg-amber-400 scale-110" 
            : "bg-white/70 hover:bg-white"
          }
        `}
      />
    ))}
  </div>

</section> */}
 <section className="relative w-full overflow-hidden mb-6 sm:mb-0">

      {/* SLIDER WRAPPER */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div key={i} className="w-full flex-shrink-0 relative">
            {/* IMAGE */}
            <img
              src={slide.img}
              alt={slide.title}
              className="w-full h-auto object-contain sm:object-contain"
            />
          </div>
        ))}
      </div>

      {/* FIXED DOTS */}
      <div className="absolute bottom-4 w-full flex justify-center z-20 space-x-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === i ? "bg-amber-400 scale-110" : "bg-white/70 hover:bg-white"
            }`}
          />
        ))}
      </div>

    </section>
</>
  );
};

export default HeroCarousel;

