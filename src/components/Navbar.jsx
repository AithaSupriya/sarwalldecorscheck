import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, useSpring, useMotionValue } from "framer-motion";
import { Phone, Mail, Menu } from "lucide-react";
import { MdHeadphones } from "react-icons/md";
import { FaHome, FaUser, FaBriefcase, FaEnvelope, FaPhone } from "react-icons/fa";
import logo from "../assets/logo.png";


const StickyNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const topBarY = useMotionValue(0);
  const servicesNavY = useMotionValue(0);

  const topBarYSpring = useSpring(topBarY, { stiffness: 120, damping: 20 });
  const servicesNavYSpring = useSpring(servicesNavY, { stiffness: 120, damping: 20 });

  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(true);
    }, 2000); // 2000ms = 2 seconds

    return () => clearTimeout(timer); // cleanup on unmount
  }, []);
  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  // Scroll handling
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      topBarY.set(scrollY > 50 ? -100 : 0);
      servicesNavY.set(scrollY > 50 ? -60 : 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topBarY, servicesNavY]);

  // Breadcrumb
  const getBreadcrumb = () => {
    const path = location.pathname.split("/").filter(Boolean);
    if (path.length === 0 || path[0].toLowerCase() === "home") return null;
    const lastSegment = path[path.length - 1].replace(/-/g, " ");
    return (
      <div className="bg-[#e6e6e6] border-b border-gray-300 py-1">
        <div className="container mx-auto flex items-center gap-1 px-4 sm:px-2 md:px-10 lg:px-0 py-4 text-[17px] font-medium text-black">
          <Link to="/" className="text-[#1f1f7a] hover:underline font-semibold">
            Home
          </Link>
          <span className="mx-1 text-black">›</span>
          <span className="capitalize text-black font-normal text-[15px] sm:text-[17px]">{lastSegment}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      {/* Top Ribbon */}
      <motion.div style={{ y: topBarYSpring }} className="bg-[#2d1b69] text-white py-2 hidden lg:block">
        <div className="flex justify-between items-center w-full px-4 lg:px-14">
          <div className="text-sm md:text-base tracking-wide">
            Crafted by Hand, Inspired by Heritage, Designed for Your Living Space.
          </div>
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/aboutus" className="hover:text-gray-300 transition-colors">About Us</Link>
            <Link to="/products" className="hover:text-gray-300 transition-colors">Our Products</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact Us</Link>
          </div>
        </div>
      </motion.div>

      {/* Sticky Main Navbar */}
      <nav className={`sticky top-0 z-40 shadow-sm transition-colors duration-300 ${scrolled ? "bg-white" : "bg-gray-200"}`}>
        <div className="container mx-auto px-2">
          <div className="flex justify-between items-center">
            {/* Left - Social Media Icons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://www.facebook.com/sarwalldecor"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#2d1b69] transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
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
                  fill="currentColor"
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
                  fill="currentColor"
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
                  fill="currentColor"
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
                  fill="currentColor"
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

            {/* Center - Logo */}
            <div className="flex items-center justify-center">
              <img
                src={logo}
                alt="Sarwall Decors Logo"
                className="h-16 w-auto object-contain"
              />
            </div>

            {/* Right - Contact Icons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* WhatsApp */}
              <a
                href="https://wa.me/918333833355"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-[#25D366] transition-colors shadow-md"
                title="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:contactusswd@gmail.com"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-[#2d1b69] transition-colors shadow-md"
                title="Email"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>

              {/* Call */}
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center text-gray-700 hover:text-[#2d1b69] transition-colors shadow-md"
                title="Headphones"
              >
                <MdHeadphones className="w-6 h-6" />
              </a>
            </div>
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-[#2d1b69]"
            >
              <Menu size={28} />
            </button>

          </div>
        </div>
      </nav>

      {/* Services Navigation */}
      <motion.div style={{ y: servicesNavYSpring }} className="relative bg-white border-b border-gray-200 shadow-sm">
        <div className="w-full relative z-10">
          <div className="hidden lg:flex flex-wrap justify-between items-center py-1 pr-5">
            <Link to="/product/school/play-school-wall-art" className="px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-bold text-sm ">Play School Wall Art</Link>
            <Link to="/product/mural/wall-mural-relief-art" className="px-2 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-bold text-sm ">Wall Mural</Link>
            <Link to="/product/mural/elevation-mural-design" className="px-2 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-bold text-sm ">Elevation Mural Design</Link>
            <Link to="/product/mural/drywall-art" className="px-2 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-bold text-sm ">POP Mural & Drywall Art</Link>
            <Link to="/product/mural/fiber-wall-mural" className="px-2 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-bold text-sm ">Fiber Wall Mural</Link>
            <Link to="/product/decor/wall-art" className="px-2 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-bold text-sm ">Wall Decors</Link>
            <Link to="/products" className="px-2 py-2 text-gray-800 hover:bg-gray-100 transition-colors font-bold text-sm">View All</Link>
          </div>
        </div>

        {/* Curved Border Overlay */}
        <div className="absolute bottom-[-5px] left-0 w-full z-20 pointer-events-none hidden lg:block">
          <img src="https://www.sanchariart.com/assets/img/border.svg" alt="decorative border" className="w-full block object-cover" />
        </div>
      </motion.div>


      {/* Breadcrumb */}
      {location.pathname !== "/" && <div className="bg-gray-50 text-sm text-gray-600">{getBreadcrumb()}</div>}

      {/* Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-[9999] flex">

          {/* LEFT SIDEBAR */}
     <div className="fixed top-0 left-0 w-full h-screen z-[9999] flex">
      {/* LEFT SIDEBAR */}
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        onAnimationComplete={() => setShowOverlay(true)} // show overlay after animation
        className="w-full md:w-1/2 h-screen flex flex-col bg-white shadow-lg"
      >
        {/* Top Contact */}
        <div className="bg-[#292464] text-white text-xs sm:text-sm flex flex-col py-3 space-y-2">
          <div className="flex items-center gap-2 pl-4 text-base">
            <Phone className="w-5 h-5 text-white" /> +91 83338 33355
          </div>
          <div className="flex items-center gap-2 border-t border-white/40 pt-2 pl-4 text-base">
            <Mail className="w-5 h-5 text-white" /> contactusswd@gmail.com
          </div>
        </div>

        {/* Logo + Close */}
        <div className="bg-white flex justify-between items-center px-4 py-4 sm:px-5 sm:py-6">
          <img src={logo} alt="Logo" className="w-50 sm:w-44" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-[#272566] text-2xl font-bold"
          >
            ✕
          </button>
        </div>

        {/* Links - scrollable */}
        <div className="bg-[#D1D1D1] flex-1 overflow-y-auto rounded-t-lg">
          <ul className="flex flex-col divide-y divide-black">
            {[
              { to: "/", label: "Home" },
              { to: "/aboutus", label: "About Us" },
              { to: "/products", label: "Our Products" },
              { to: "/gallery", label: "Gallery" },
              { to: "/contact", label: "Contact Us" },
              { to: "/sitemap", label: "Site Map" },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-6 py-5 sm:py-6 md:py-5 text-[16px] sm:text-[17px] text-gray-900 hover:bg-gray-300 transition-all"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>

      {/* RIGHT SHADOW OVERLAY */}
      {showOverlay && (
        <div
          className="hidden md:block w-1/2 h-screen bg-black/40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
          <div
            className="hidden md:block w-1/2 h-screen bg-black/40 "
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>

      )}

      <div className="fixed right-0 top-2/4 z-50 flex flex-col items-end gap-3 pr-2">
        <style>
          {`
    @keyframes pulseQuote {
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.2); /* soft blue glow */
    background-color: #272566; /* deep blue base */
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(0, 123, 255, 0.7); /* stronger blue glow */
    background-color: #003366; /* slightly brighter blue */
  }
}


      @keyframes pulseWhatsApp {
        0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(37,211,102,0.4); }
        50% { transform: scale(1.1); box-shadow: 0 0 25px rgba(37,211,102,0.8); }
      }

      @keyframes pulseCall {
        0%, 100% { transform: scale(1); box-shadow: 0 0 10px rgba(45,27,105,0.4); }
        50% { transform: scale(1.1); box-shadow: 0 0 25px rgba(45,27,105,0.8); }
      }
    `}
        </style>
        <div className="fixed right-0 bottom-20 sm:bottom-5 flex flex-col items-end gap-3 pr-2">
          {/* Get Best Quote */}
          <a
            href="/contact"
            className="relative text-white px-5 py-3 rounded-md border-none  flex items-center justify-center transition-all z-50"
            style={{
              writingMode: "vertical-lr", // 👈 changed from vertical-rl
              textOrientation: "mixed",
              transform: "rotate(0deg)", // 👈 reset rotation
              animation: "pulseQuote 2s infinite ease-in-out",
            }}
          >
            <span className="text-md font-semibold tracking-wider">
              Get Best Quote
            </span>
          </a>


          {/* WhatsApp Button */}
          <a
            href="https://wa.me/918333833355"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 z-0 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-transform"
            style={{
              animation: "pulseWhatsApp 2s infinite ease-in-out",
            }}
            title="WhatsApp"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
          </a>

          {/* Call Support Button */}
          <a
            href="tel:+918333833355"
            className="w-12 h-12 rounded-full bg-[#2d1b69] flex items-center justify-center text-white transition-transform hidden sm:flex"
            style={{
              animation: "pulseCall 2s infinite ease-in-out",
            }}
            title="Call Support"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z" />
            </svg>
          </a>
        </div>
      </div>


      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-[#e6e6e6] border-t border-gray-600 shadow-inner flex justify-around items-center py-3 md:hidden z-50">
        <Link to="/" className="flex flex-col items-center text-sm text-[#272566]"><FaHome className="w-5 h-5" /><span className="text-xs mt-1">Home</span></Link>
        <Link to="/aboutus" className="flex flex-col items-center text-sm text-[#272566]"><FaUser className="w-5 h-5" /><span className="text-xs mt-1">Profile</span></Link>
        <Link to="/products" className="flex flex-col items-center text-sm text-[#272566]"><FaBriefcase className="w-5 h-5" /><span className="text-xs mt-1">Products</span></Link>
        <Link to="/contact" className="flex flex-col items-center text-sm text-[#272566]"><FaEnvelope className="w-5 h-5" /><span className="text-xs mt-1">Contact</span></Link>
        <a href="tel:+918333833355" className="flex flex-col items-center text-sm text-[#272566]"><FaPhone className="w-5 h-5" /><span className="text-xs mt-1">Call Us</span></a>
      </div>
    </>
  );
};

export default StickyNavbar;

