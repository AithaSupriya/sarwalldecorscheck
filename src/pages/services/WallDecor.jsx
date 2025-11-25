import React from "react";
import street6 from "../../assets/WallDecors/Street Wall Painting/street (6).jpg"
import Textured1 from "../../assets/WallDecors/Textured Painting/Textured (1).jpg"
import dwallart2 from "../../assets/WallDecors/3D Wall Art/dwallart (1).jpg"

export const sections = [
  {
    title: "Street Wall Painting",
    text: `Wall paintings, whether in schools, homes, or public spaces, serve as visual narratives that elevate the ambiance and character of the surroundings. From vibrant murals depicting cultural diversity to minimalist designs fostering focus, these artworks add depth and personality to any environment. More than just decorative elements, wall paintings spark creativity, convey messages, and contribute to a distinct atmosphere. In their diverse forms, wall paintings are powerful tools that weave stories, inspire emotions, and leave a lasting impression on those who encounter them.`,
    image: street6,
  },
  {
    title: "Textured Painting",
    text: `Textured paintings introduce a tactile dimension to the world of art, inviting viewers to explore the canvas with their sense of touch. Through the layering of various materials, artists create rich surfaces that add depth and character to their compositions. These textured artworks not only stimulate visual interest but also engage the viewer on a sensory level, creating a dynamic and immersive experience. Whether rough and expressive or delicately layered, textured paintings bring a unique and palpable quality to the realm of artistic expression.`,
    image: Textured1,
  },
  {
    title: "3D Wall Art",
    text: ` 3D wall art redefine spatial perception, seamlessly blending art and illusion to create immersive visual experiences. These dynamic artworks, with their trompe-l’oeil techniques, give the impression of depth and dimensionality on flat surfaces. Transforming walls into interactive canvases, 3D paintings engage viewers by inviting them to explore the illusion from different angles. The convergence of artistic creativity and optical illusions in 3D wall paintings offers a captivating and dynamic element to any space.`,
    image: dwallart2,
  },


];

const WallDecor = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Wall Decor
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 relative inline-block">
            Painting and Decorating
            <span className="block w-60 h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">Where brushstrokes turn walls into canvases, telling stories through vibrant hues and artistic expression.</p>
        </div>

        {/* Sections */}
        {sections.map((section, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center gap-10 mb-16 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""
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
            import.meta.glob('../../assets/walldecor/walldecor-r*.jpg', { eager: true })
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
      </div>
    </section>
  );
};

export default WallDecor;

