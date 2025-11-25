import React from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Phone,
  Mail,
} from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-200 pt-10 pb-16 relative">
      {/* 🔝 Back to Top */}
      <div className="fixed bottom-6 right-6 z-50">

      </div>

      {/* 🧱 Main Footer Grid */}
      <div
        className="
    container mx-auto px-6 
    grid grid-cols-1 
    md:grid-cols-2 
    lg:grid-cols-4 
    gap-10
  "
      >        {/* 🟡 About Section */}
        <div className="md:col-span-2 lg:col-span-1">
          <div className="bg-white p-2  rounded-md inline-block mb-4">
            <img
              src={logo}
              alt="Sar Wall Decors Logo"
              className="h-14 w-auto object-contain"
            />
          </div>
          <p className="text-sm leading-relaxed">
            SAR WALL DECORS is a full-service surface finishing company
            providing exceptional design and finishing solutions across India.
            We help businesses grow through creativity and innovation.
          </p>

          {/* 🌐 Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.facebook.com/sarwalldecor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#2d1b69] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/sar_wall_decors/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#2d1b69] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@sarwalldecors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#2d1b69] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/sar-wall-decors-a83160b3/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#2d1b69] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.489v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>

            <a
              href="https://x.com/sarwalldecors"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#2d1b69] transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="white"
                viewBox="0 0 24 24"
              >
                <path
                  d="M23.954 4.569c-.885.389-1.83.654-2.825.775 
             1.014-.611 1.794-1.574 2.163-2.724-.951.564-2.005.974-3.127 1.195 
             -.897-.959-2.178-1.559-3.594-1.559-2.717 0-4.924 2.207-4.924 4.923 
             0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.148-5.144 
             -.424.729-.666 1.577-.666 2.475 0 1.708.87 3.216 2.188 4.099 
             -.807-.026-1.566-.247-2.229-.616v.061c0 2.385 1.693 4.374 3.946 4.827 
             -.413.112-.849.171-1.296.171-.317 0-.626-.03-.927-.086 
             .627 1.956 2.444 3.379 4.6 3.419 
             -1.68 1.318-3.809 2.106-6.115 2.106 
             -.398 0-.79-.023-1.175-.069 
             2.179 1.397 4.768 2.212 7.557 2.212 
             9.054 0 14-7.496 14-13.986 
             0-.21 0-.423-.015-.633 
             .961-.689 1.8-1.56 2.46-2.548z"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* 🟢 Quick Links */}
        <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-white-400 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {[
              { name: "Home", link: "/" },
              { name: "About Us", link: "/aboutus" },
              { name: "Gallery", link: "/gallery" },
              { name: "Products", link: "/products" },
              { name: "Contact Us", link: "/contact" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-amber-400 transition text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🔵 Services */}
        <div className="md:col-span-1 lg:col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-white inline-block pb-1">
            Services
          </h3>
          <ul className="space-y-2">
            {[
              { name: "School Painting", link: "/products" },
              { name: "Mural and Sculptures", link: "/products#wall-mural" },
              { name: "Wall Decors", link: "/products#wall-decor" },
              { name: "Wall Mural Relief Art", link: "/product/mural/wall-mural-relief-art" },
              { name: "Fiber Sculpture", link: "/product/mural/fiber-sculpture" },
              { name: "radhakrishna wall mural", link: "/product/mural/radhakrishna-wall-mural" },
            ].map((item) => (
              <li key={item.name}>
                <a
                  href={item.link}
                  className="hover:text-amber-400 transition text-sm"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 🟣 Reach Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4 border-b border-white-400 inline-block pb-1">
            Reach Us
          </h3>
          <p className="text-sm leading-relaxed mb-4">
            Scion Park View, Flat No 104, Vijay Nagar Colony, Vivekananda Nagar,
            Kukatpally, Hyderabad, Telangana 500072.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:+918333833355" className="hover:text-amber-400">
                +91 83338 33355
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} />
              <a href="tel:04040033355" className="hover:text-amber-400">
                040 40033355
              </a>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} />
              <a
                href="mailto:contactusswd@gmail.com"
                className="hover:text-amber-400"
              >
                contactusswd@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* ⚫ Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-sm">
        <p>
          © 2024 — All Rights Reserved by{" "}
          <span className="text-amber-400 font-semibold">Sar Wall Decors</span>.
          Designed & Developed by{" "}
          <a
            href="https://Visys Cloud TEchnologies.in/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline text-white"
          >
            Visys Cloud Technologies
          </a>
          .
        </p>
      </div>

    </footer>
  );
};

export default Footer;

