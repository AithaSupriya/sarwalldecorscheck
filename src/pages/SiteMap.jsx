import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const sections = [
    {
      title: "Navigation Links",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/aboutus" },
        { name: "Our Products", path: "/products" },
        { name: "Gallery", path: "/gallery" },
        { name: "Contact Us", path: "/contact" },
        { name: "Sitemap", path: "/sitemap" },
      ],
    },
    {
      title: "School Painting",
      links: [
        { name: "Play School Wall Art", path: "/product/school/kindergarten-school-wall-art" },
        { name: "High School Art", path: "/product/school/high-school-wall-art" },
        { name: "Government School Art", path: "/product/school/government-school-wall-art" },
        { name: "Play Area Wall Art", path: "/product/school/play-area-wall-paintings" },
        { name: "Kindergarten School Wall Art", path: "/product/school/kindergarten-school-wall-art" },
        { name: "School Compound Wall Art", path: "/product/school/compound-wall-paintings" },
        { name: "Science and Computer Lab Wall Art", path: "/product/school/science-&-computer-lab-wall-art" },
        { name: "Library Wall Art", path: "/product/school/library-wall-art" },
      ],
    },
    {
      title: "Mural & Sculptures",
      links: [
        { name: "Wall Relief Mural Art", path: "/product/mural/wall-mural-&-relief-art" },
        { name: "Drywall Art", path: "/product/mural/drywall-art" },
        { name: "Elevation Mural Design", path: "/product/mural/elevation-mural-design" },
        { name: "Cement Wall Mural", path: "/product/mural/cement-wall-mural-art" },
        { name: "POP Mural", path: "/product/mural/pop-mural" },
        { name: "Buddha Wall Mural Design", path: "/product/mural/buddha-wall-mural" },
        { name: "3D Wall Murals", path: "/product/mural/3d-wall-mural" },
        { name: "Ganesha Wall Mural Art", path: "/product/mural/ganesha-wall-mural" },
        { name: "Radhakrishna Wall Mural Art", path: "/product/mural/radhakrishna-wall-mural" },
        { name: "Floral Wall Mural Designs", path: "/product/mural/floral-wall-mural-designs" },
        { name: "Wall Mural", path: "/product/mural/wall-mural" },
        { name: "Fiber Wall Mural", path: "/product/mural/fiber-wall-mural" },
        { name: "Fiber Wall Sculpture", path: "/product/mural/fiber-wall-sculpture" },
        { name: "Fiber Wall Art", path: "/product/mural/fiber-wall-art" },
        { name: "Fiber Sculpture", path: "/product/mural/fiber-sculpture" },
        { name: "Fiber Statue", path: "/product/mural/fiber-statue" },
        { name: "Lippan Art", path: "/product/mural/lippan-art" },
      ],
    },
    {
      title: "Wall Decor",
      links: [
        { name: "Wall Art", path: "/product/decor/wall-art" },
        { name: "3D Wall Art", path: "/product/decor/3d-wall-art" },
        { name: "Hospitals and Clinics Wall Painting", path: "/product/decor/hospitals-and-clinics-wall-painting" },
        { name: "Textured Painting", path: "/product/decor/textured-painting" },
        { name: "Liquid Wallpaper", path: "/product/decor/liquid-wallpaper" },
        { name: "Street Wall Painting", path: "/product/decor/street-wall-painting" },
        { name: "Office Wall Painting", path: "/product/decor/office-wall-painting" },
        { name: "Hotels & Restaurants Wall Painting", path: "/product/decor/hotels-&-restaurants-wall-painting" },
      ],
    },
  ];

  return (
    <div className="space-y-4 lg:px-20 py-10 lg:py-20 px-3 md:px-10 md:py-15">
      {sections.map((section, i) => (
        <section key={i}>
          <h2
            className="text-white text-lg font-medium px-4 py-2"
            style={{ backgroundColor: "#585650" }}
          >
            {section.title}
          </h2>
          <ul className="mt-4 flex flex-wrap">
            {section.links.map((link, index) => (
              <li
                key={index}
                className="border border-gray-900 text-md px-4 py-1 mr-2 mb-2 rounded-sm cursor-pointer hover:bg-gray-200 transition"
              >
                <Link to={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
};

export default Sidebar;

