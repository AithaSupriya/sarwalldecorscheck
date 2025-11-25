import React from "react";
import Kindergarten from "../../assets/schoolpainting/kindergarten/Kindergarten.jpg"; // Replace with your actual image
import Government from "../../assets/schoolpainting/governmentschool/Government.jpg";
import HighSchool1 from "../../assets/schoolpainting/highschool/Highschool1.jpg";
import Library from "../../assets/schoolpainting/library/Library.jpg";
import PlayArea from "../../assets/schoolpainting/playarea/PlayArea.jpg";
import PlaySchool from "../../assets/schoolpainting/playschool/PlaySchool.jpg";
import ScienceComputer from "../../assets/schoolpainting/sciencecomputer/ScienceComputer.jpg";
import Compound from "../../assets/schoolpainting/compound/Compound.jpg";

export const sections = [
  {
  title: "Kindergarten School Wall Art",
  text: `Kindergarten School Wall Art turns early learning spaces into joyful and imaginative worlds for young children. 
  With bright colors, playful characters, and simple educational themes, the walls spark curiosity and make learning fun. 
  Each mural encourages creativity, confidence, and social interaction—helping children explore numbers, alphabets, nature, and values through visuals they love. 
  Beyond decoration, these artworks create a warm, welcoming atmosphere where every wall tells a story of discovery and happiness.`,
  mainImage: Kindergarten,
},
  {
    title: "Government School Wall Art",
    text: `The Government School wall art transforms classrooms and corridors into inspiring spaces that promote learning and pride. 
  With colorful murals showcasing subjects like science, history, culture, and moral values, the walls make education more engaging and accessible for every student. 
  Beyond beautification, this art serves as a teaching tool—reinforcing key lessons, encouraging curiosity, and creating a sense of unity among learners. 
  It reflects the spirit of public education, motivating students to dream big, respect their community, and grow into responsible citizens.`,
    mainImage: Government,
  }
  ,
  {
    title: "High School Wall Art",
    text: `The High School wall art enriches our academic surroundings with creativity and inspiration. Bold murals and thought-provoking designs adorn the walls, creating an atmosphere that reflects the dynamic energy of our student body. Beyond aesthetics, the wall art serves as a canvas for student expression, showcasing diverse talents and fostering a sense of identity and pride within the high school community. The walls come alive with a vibrant tapestry of ideas, contributing to a stimulating and engaging educational environment.`,
    mainImage: HighSchool1,
  },
  {
    title: "Library Wall Art",
    text: `In the library, wall art serves as a literary tapestry, weaving together the worlds of imagination and knowledge. Murals depicting iconic literary scenes and quotes bring the walls to life, inviting readers into a realm of inspiration. The library wall art not only enhances the ambiance but also encourages a love for literature and exploration. Each stroke of creativity transforms the space into a haven for intellectual discovery and visual delight.`,
    mainImage: Library,
  },
  {
    title: "Play Area Wall Paintings",
    text: `The play area wall paintings infuse boundless joy and creativity into our recreational space. Vibrant and whimsical designs adorn the walls, creating a visual feast for young imaginations. These lively murals serve as a backdrop for endless games and adventures, fostering a spirit of playfulness and camaraderie among children. The play area wall paintings not only add color to the environment but also inspire a sense of wonder and excitement during moments of fun and play.`,
    mainImage: PlayArea,
  },
  {
    title: "Play School Wall Painting",
    text: `In the play school, enchanting wall paintings transform the environment into a magical realm of learning and play. Adorned with cheerful characters and educational imagery, the walls become a canvas for fostering early childhood development. The vibrant paintings not only captivate young minds but also serve as interactive tools, facilitating learning through play. These whimsical creations contribute to a nurturing and stimulating atmosphere, where curiosity and imagination flourish in every corner.`,
    mainImage: PlaySchool,
  },
  {
    title: "Science & Computer Lab Wall Art",
    text: `The science and computer lab wall art in our school is a visual journey into the realms of discovery and innovation. The walls are adorned with captivating depictions of scientific principles and futuristic technology, inspiring curiosity among students. These imaginative creations not only enhance the ambiance of the labs but also serve as educational aids, complementing the hands-on learning experiences. The wall art transforms the labs into dynamic spaces where scientific exploration and technological advancements come to life.`,
    mainImage: ScienceComputer,
  },
  {
    title: "Compound Wall Paintings",
    text: `Compound wall paintings for schools can be wonderful additions to the school environment. They serve several purposes, as they can enhance the aesthetic appeal of the school premises, creating a more vibrant and welcoming atmosphere for students, teachers, and visitors. Paintings can convey educational messages, such as promoting environmental awareness, showcasing cultural diversity, or highlighting important historical events or figures. Motivational quotes, imagery, or scenes from literature can inspire students and encourage them to pursue their goals and dreams.`,
    mainImage: Compound,
  },
];

const SchoolPainting = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            School Art Work
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3 relative inline-block">
            Colors On Wall Will Impact
            <span className="block w-60 h-[3px] bg-yellow-400 mt-2 mx-auto"></span>
          </h3>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto text-justify">
            Immerse yourself in a world where learning transcends boundaries,
            and our vibrant school wall paintings spark curiosity and inspire
            endless possibilities.
          </p>
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
        <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-12 text-justify">
          A glimpse into our latest artistic projects that blend creativity, color, and craftsmanship
          — turning walls into stories and spaces into inspiration.
        </p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.values(
            import.meta.glob('../../assets/schoolpainting/school-r*.jpg', { eager: true })
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

export default SchoolPainting;
