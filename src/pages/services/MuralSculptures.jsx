import React from "react";
import wallmural1 from '../../assets/mural/Wall Relief Mural Art/wall relief (1).jpeg'
import drywall from '../../assets/mural/drywall/Drywall.jpeg'
import elevation from '../../assets/mural/elevation/Elevation.jpg'

export const sections = [
    {
      title: "Wall Mural & Relief Art",
      text: `Wall murals in our school breathe life into the surroundings, transforming blank spaces into captivating canvases of expression. Each mural tells a unique story, reflecting the diverse interests and talents of our student body. These artistic creations not only add aesthetic charm but also serve as powerful tools for conveying messages, sparking creativity, and fostering a sense of community. The wall murals contribute to an inspiring environment that encourages imagination, unity, and a shared appreciation for the arts.`,
      image: wallmural1,
    },
    {
      title: "Drywall Art",
      text: `Drywall art in our school introduces a unique dimension to our interior spaces, turning plain surfaces into captivating works of creativity. The minimalist elegance of these designs adds sophistication to classrooms and common areas. Beyond aesthetics, the drywall art serves as a subtle backdrop for focused learning and collaboration. Its seamless integration into the architectural elements enhances the overall ambiance, creating an environment that is both visually appealing and conducive to academic engagement.`,
      image: drywall,
    },
    {
      title: "Elevation Mural Design",
      text: `The elevation mural design on our building is a testament to the fusion of architecture and artistry. Stretching across the facade, it captivates onlookers with its intricate patterns and vibrant colors. This visual masterpiece not only elevates the aesthetic appeal of the structure but also symbolizes the commitment to creativity and innovation within. The elevation mural design stands as a proud representation of our identity, making a bold statement about the importance of aesthetics in every building, creating an environment that is visually appealing and reflective of a commitment to creativity and innovation.`,
      image: elevation,
    },
  ];
  
const MuralSculptures = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
           Wall Murals Art
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 relative inline-block">
            Murals: Where Art Breathes Life.
            <span className="block w-60 h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">Where art meets architecture, transforming spaces into vibrant canvases that tell unique stories with every brushstroke</p>
        </div>

        {/* Sections */}
       {sections.map((section, index) => (
  <div
    key={index}
    className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${
      index % 2 !== 0 ? "md:flex-row-reverse" : ""
    }`}
  >
    {/* Text Content */}
    <div className="md:w-1/2">
      <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-2 relative inline-block">
        {section.title}
        <span className="block w-40 h-[3px] bg-yellow-400 mt-2"></span>
      </h3>
      <p className="text-gray-700 text-[17px] leading-relaxed mt-4 text-justify">
        {section.text}
      </p>
    </div>

    {/* Image */}
    <div className="md:w-1/2 flex justify-center">
      <img
        src={section.image}
        alt={section.title}
        className="rounded-lg shadow-xl w-full max-w-lg object-cover hover:scale-105 transition-transform duration-500"
      />
    </div>
  </div>
))}
      </div>

       <div className="container mx-auto px-6 text-center">
    {/* Heading */}
    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Recent Works</h2>
    <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-3 relative inline-block">
      Creative Touch That Speaks
      <span className="block w-48 h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
    </h3>
    <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12">
      A glimpse into our latest artistic projects that blend creativity, color, and craftsmanship 
      — turning walls into stories and spaces into inspiration.
    </p>

    {/* Image Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Object.values(
        import.meta.glob('../../assets/muralsculptures/wallmural-r*.jpg', { eager: true })
      ).map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src={img.default}
            alt={`Recent Work ${index + 1}`}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-700 ease-in-out"
          />
        </div>
      ))}
    </div>
    <div className="flex justify-between items-center gap-3 mt-6 w-full">
          {/* Get Best Quote */}
          <a
            href="/contact"
            className="flex items-center justify-center bg-[#272566] text-white px-4 py-3 text-[14px] font-semibold whitespace-nowrap rounded-md shadow-sm hover:bg-[#1e1b4f] transition-all duration-300 gap-2 flex-1"
          >
            {/* Envelope Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 flex-shrink-0"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Get Best Quote
          </a>

          {/* Chat With Us */}
          <a
            href="https://wa.me/+918333833355"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-[#0d873a] text-white px-4 py-3 text-[14px] font-semibold whitespace-nowrap rounded-md shadow-sm hover:bg-[#0a6f30] transition-all duration-300 gap-2 flex-1"
          >
            {/* WhatsApp Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-5 h-5 flex-shrink-0"
            >
              <path d="M20 3.5A10 10 0 0 0 3.5 20l-1 3.5L6 22a10 10 0 1 0 14-18.5z" />
              <path d="M8.5 10.5c.3 1 1.3 2.3 2.3 3.3s2.3 2 3.3 2.3c.4.1.9 0 1.3-.2l1.7-.8c.4-.2.8.2.8.6l-.1 1.3c0 .5-.2 1-.6 1.4-1.4 1.3-3.1 1.9-5 1.6-3.8-.6-6.9-3.7-7.5-7.5-.3-1.9.3-3.6 1.6-5 .4-.4.9-.6 1.4-.6l1.3-.1c.4 0 .8.4.6.8l-.8 1.7c-.1.4-.2.9-.1 1.3z" />
            </svg>
            Chat With Us
          </a>
        </div>
  </div>
    </section>
  );
};

export default MuralSculptures;

