import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Send,
  Clock,
  CheckCircle,
  MessageSquare,
  Package,
  User,

} from "lucide-react";

export default function Contactus() {
  const [formData, setFormData] = useState({
    product: "",
    name: "",
    email: "",
    phone: "",
    message: "",
    captchaAnswer: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [activeTab, setActiveTab] = useState("contact");
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0, operator: "+" });

  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ["+", "-"];
    const operator = operators[Math.floor(Math.random() * operators.length)];
    setCaptcha({ num1, num2, operator });
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let correctAnswer =
      captcha.operator === "+"
        ? captcha.num1 + captcha.num2
        : captcha.num1 - captcha.num2;

    if (parseInt(formData.captchaAnswer) !== correctAnswer) {
      alert("CAPTCHA is incorrect. Please try again.");
      generateCaptcha(); // regenerate
      setFormData({ ...formData, captchaAnswer: "" });
      return;
    }

    // Construct email body
    const { product, name, email, phone, message } = formData;
    const body = `
Product: ${product}
Name: ${name}
Email: ${email}
Phone: ${phone}
Message: ${message}
`;

    // Open default email client
    window.location.href = `mailto:contactusswd@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(
      body
    )}`;

    // Reset form
    setFormData({
      product: "",
      name: "",
      email: "",
      phone: "",
      message: "",
      captchaAnswer: "",
    });

    generateCaptcha(); // new captcha for next submission
  };


  return (
    <div className="min-h-screen bg-white">

      {/* Main Content */}
      <section className="py-6 bg-white sm:py-16 lg:py-10">
        <div className="mx-auto max-w-8xl sm:px-6 lg:px-4 ">
          <h2 className="text-[28px] font-medium text-[#212529] mb-2 text-center">Get in Touch with Us</h2>
          <p className="text-[#212529] mb-8 text-center">
            Have questions or need assistance? Reach out to our team, and we'll respond promptly to help you with anything.

          </p>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-9 max-w-6xl mx-auto px-3 sm:px-6 lg:px-4 py-3">

            {/* Contact Form Section */}
            <div className="lg:w-[60%] w-full bg-white border border-gray-300 p-4">


              <form className="space-y-3" onSubmit={handleSubmit}>
                {/* Product */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Product <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-3  border-r-2 border-gray-400  rounded-l-lg bg-[#F5F5F5]">
                      <svg className="w-5 h-5 text-gray-500" fill="black" viewBox="0 0 24 24">
                        <path d="M20 6h-4V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM10 4h4v2h-4V4zm10 16H4V8h16v12z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="product"
                      placeholder="Product : Your Are Looking For"
                      className="w-full px-4 py-2  bg-[#F5F5F5] rounded-r-lg outline-none transition-all duration-200"
                      value={formData.product}      // <-- bind value
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Name<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-3  border-r-2 border-gray-400  rounded-l-lg bg-[#F5F5F5]">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-4 py-2  bg-[#F5F5F5]  rounded-r-lg outline-none transition-all duration-200"
                      required
                      value={formData.name}      // <-- bind value
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Email<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-3  border-r-2 border-gray-400  rounded-l-lg bg-[#F5F5F5]">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-2  bg-[#F5F5F5] rounded-r-lg outline-none transition-all duration-200"
                      required
                      value={formData.email}      // <-- bind value
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Phone<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-3   border-r-2 border-gray-400 rounded-l-lg bg-[#F5F5F5]">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <select
                      className="  px-1 py-2  bg-[#F5F5F5] text-gray-700 outline-none w-15"
                      name="countrycode"
                      id="countrycode"
                      defaultValue="91"
                    >
                      <option data-countrycode="IN" value="91">
                        +91
                      </option>
                      <optgroup label="Other countries">
                        <option data-countrycode="DZ" value="213">Algeria (+213)</option>
                        <option data-countrycode="AD" value="376">Andorra (+376)</option>
                        <option data-countrycode="AO" value="244">Angola (+244)</option>
                        <option data-countrycode="AI" value="1264">Anguilla (+1264)</option>
                        <option data-countrycode="AG" value="1268">Antigua &amp; Barbuda (+1268)</option>
                        <option data-countrycode="AR" value="54">Argentina (+54)</option>
                        <option data-countrycode="AM" value="374">Armenia (+374)</option>
                        <option data-countrycode="AU" value="61">Australia (+61)</option>
                        <option data-countrycode="AT" value="43">Austria (+43)</option>
                        <option data-countrycode="BD" value="880">Bangladesh (+880)</option>
                        <option data-countrycode="BE" value="32">Belgium (+32)</option>
                        <option data-countrycode="BR" value="55">Brazil (+55)</option>
                        <option data-countrycode="CA" value="1">Canada (+1)</option>
                        <option data-countrycode="CN" value="86">China (+86)</option>
                        <option data-countrycode="DK" value="45">Denmark (+45)</option>
                        <option data-countrycode="EG" value="20">Egypt (+20)</option>
                        <option data-countrycode="FR" value="33">France (+33)</option>
                        <option data-countrycode="DE" value="49">Germany (+49)</option>
                        <option data-countrycode="HK" value="852">Hong Kong (+852)</option>
                        <option data-countrycode="IN" value="91">India (+91)</option>
                        <option data-countrycode="ID" value="62">Indonesia (+62)</option>
                        <option data-countrycode="IE" value="353">Ireland (+353)</option>
                        <option data-countrycode="IL" value="972">Israel (+972)</option>
                        <option data-countrycode="IT" value="39">Italy (+39)</option>
                        <option data-countrycode="JP" value="81">Japan (+81)</option>
                        <option data-countrycode="KE" value="254">Kenya (+254)</option>
                        <option data-countrycode="MY" value="60">Malaysia (+60)</option>
                        <option data-countrycode="MX" value="52">Mexico (+52)</option>
                        <option data-countrycode="NP" value="977">Nepal (+977)</option>
                        <option data-countrycode="NL" value="31">Netherlands (+31)</option>
                        <option data-countrycode="NZ" value="64">New Zealand (+64)</option>
                        <option data-countrycode="NG" value="234">Nigeria (+234)</option>
                        <option data-countrycode="NO" value="47">Norway (+47)</option>
                        <option data-countrycode="PK" value="92">Pakistan (+92)</option>
                        <option data-countrycode="PH" value="63">Philippines (+63)</option>
                        <option data-countrycode="PL" value="48">Poland (+48)</option>
                        <option data-countrycode="PT" value="351">Portugal (+351)</option>
                        <option data-countrycode="QA" value="974">Qatar (+974)</option>
                        <option data-countrycode="RO" value="40">Romania (+40)</option>
                        <option data-countrycode="RU" value="7">Russia (+7)</option>
                        <option data-countrycode="SA" value="966">Saudi Arabia (+966)</option>
                        <option data-countrycode="SG" value="65">Singapore (+65)</option>
                        <option data-countrycode="ZA" value="27">South Africa (+27)</option>
                        <option data-countrycode="KR" value="82">South Korea (+82)</option>
                        <option data-countrycode="ES" value="34">Spain (+34)</option>
                        <option data-countrycode="LK" value="94">Sri Lanka (+94)</option>
                        <option data-countrycode="SE" value="46">Sweden (+46)</option>
                        <option data-countrycode="CH" value="41">Switzerland (+41)</option>
                        <option data-countrycode="TH" value="66">Thailand (+66)</option>
                        <option data-countrycode="TR" value="90">Turkey (+90)</option>
                        <option data-countrycode="UA" value="380">Ukraine (+380)</option>
                        <option data-countrycode="AE" value="971">United Arab Emirates (+971)</option>
                        <option data-countrycode="GB" value="44">United Kingdom (+44)</option>
                        <option data-countrycode="US" value="1">United States (+1)</option>
                        <option data-countrycode="VN" value="84">Vietnam (+84)</option>
                        <option data-countrycode="ZM" value="260">Zambia (+260)</option>
                        <option data-countrycode="ZW" value="263">Zimbabwe (+263)</option>
                      </optgroup>
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone No."
                      className="w-full px-4 py-2  bg-[#F5F5F5] rounded-r-lg outline-none transition-all duration-200"
                      required
                      value={formData.phone}      // <-- bind value
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Enquiry */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Enquiry<span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <div className="flex items-center justify-center px-3  border-r-2 border-gray-400  rounded-l-lg bg-[#F5F5F5]">
                      <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows="1"
                      className="w-full px-4 py-8  bg-[#F5F5F5]  rounded-r-lg  transition-all duration-200 resize-none outline-none"
                      required
                      value={formData.message}      // <-- bind value
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                {/* CAPTCHA */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 py-4">
                  <label className="text-2xl font-semibold text-gray-700 w-full sm:w-1/2 text-center sm:text-center mb-2 sm:mb-0 pr-2">
                    {captcha.num1} {captcha.operator} {captcha.num2} = ?
                  </label>

                  <input
                    type="number"
                    name="captchaAnswer"
                    value={formData.captchaAnswer}
                    placeholder="Answer"
                    onChange={handleChange}
                    className="w-full sm:w-1/2 px-4 py-4 border border-gray-400 outline-none"
                    required
                  />
                </div>



                {/* Submit */}
                <button
                  type="submit"
                  className="group w-full bg-[#272566] text-white py-2 px-6 rounded-lg font-semibold outline-none transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5 transition-transform duration-300 group-hover:rotate-[-30deg]" />

                  <span>Submit</span>
                </button>


              </form>
            </div>

            {/* Contact Information Section */}
            <div className="w-full lg:w-[40%] bg-white border border-gray-300 p-2 sm:p-6 text-gray-900 text-base">
              <div className="mb-6 sm:mb-10">
                <h2 className="text-xl sm:text-2xl font-semibold font-sans">Sar Wall Decors</h2>
              </div>

              <div className="space-y-4 sm:space-y-6 px-2 sm:px-4">
                {/* Email */}
                <div className="flex items-start border-b border-gray-400 pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#272566] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg mb-1 font-medium">Email ID</h3>
                    <p className="text-gray-800 text-sm sm:text-base">
                      <a href="mailto:contactusswd@gmail.com" className="hover:text-blue-800">
                        contactusswd@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start border-b border-gray-400 pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#272566] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg mb-1 font-medium">Phone Number</h3>
                    <p className="text-gray-800 text-sm sm:text-base flex flex-col">
                      <a href="tel:+918333833355" className="text-blue-600 hover:text-blue-800">
                        +91 8333833355
                      </a>
                      <a href="tel:+04040033355" className="text-blue-600 hover:text-blue-800">
                        +040 40033355
                      </a>
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start border-b border-gray-400 pb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#272566] rounded-full flex items-center justify-center mr-3 sm:mr-4 mt-1">
                    <svg
                      className="w-4 h-4 sm:w-6 sm:h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg mb-1 font-medium">Address</h3>
                    <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                      Scion Park View, Flat no 104, apartments, Vijay Nagar Colony, Vivekananda Nagar, Kukatpally, Hyderabad, Telangana 500072
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="bg-white  sm:pt-5">
                  <div className="flex space-x-4 sm:space-x-6">
                    {/* Facebook */}
                    <a href="https://www.facebook.com/sarwalldecor" target="_blank" rel="noopener noreferrer" className="w-12 h-8 sm:w-12 sm:h-12 bg-[#F5F5F5] hover:shadow-md rounded-md flex items-center justify-center transition-all duration-200">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    </a>
                    {/* Twitter */}
                    <a href="https://x.com/sarwalldecors" target="_blank" rel="noopener noreferrer" className="w-12 h-8 sm:w-12 sm:h-12 bg-[#F5F5F5]  hover:shadow-md rounded-md flex items-center justify-center transition-all duration-200">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                    {/* Instagram */}
                    <a href="https://www.instagram.com/sar_wall_decors/" target="_blank" rel="noopener noreferrer" className="w-12 h-8 sm:w-12 sm:h-12 bg-[#F5F5F5]  hover:shadow-md rounded-md flex items-center justify-center transition-all duration-200">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987s11.987-5.367 11.987-11.987C24.014 5.367 18.647.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.22 14.815 3.73 13.664 3.73 12.367s.49-2.448 1.396-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.906.875 1.396 2.026 1.396 3.323s-.49 2.448-1.396 3.323c-.875.808-2.026 1.297-3.323 1.297z" />
                      </svg>
                    </a>
                    {/* LinkedIn */}
                    <a href="https://www.linkedin.com/in/sar-wall-decors-a83160b3/" target="_blank" rel="noopener noreferrer" className="w-12 h-8 sm:w-12 sm:h-12 bg-[#F5F5F5]  hover:shadow-md rounded-md flex items-center justify-center transition-all duration-200">
                      <svg className="w-4 h-4 sm:w-6 sm:h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    <a
                      href="https://www.youtube.com/@sarwalldecors" // replace with your channel link
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-8 sm:w-12 sm:h-12 bg-[#F5F5F5] hover:shadow-md rounded-md flex items-center justify-center transition-all duration-200"
                    >
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6" // YouTube red
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a2.987 2.987 0 00-2.104-2.11C19.61 3.75 12 3.75 12 3.75s-7.61 0-9.394.326a2.987 2.987 0 00-2.104 2.11A31.958 31.958 0 000 12a31.958 31.958 0 00.502 5.814 2.987 2.987 0 002.104 2.11C4.39 20.25 12 20.25 12 20.25s7.61 0 9.394-.326a2.987 2.987 0 002.104-2.11A31.958 31.958 0 0024 12a31.958 31.958 0 00-.502-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                      </svg>
                    </a>

                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>


      {/* Map Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Visit Our Showroom</h2>
            <p className="text-lg text-gray-600">
              Experience our premium collection and get expert advice in person
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
            <div className="grid lg:grid-cols-3">
              <div className="lg:col-span-1 p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Location Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">
                        Sar Wall Decors, Scion Park View<br />
                        Flat no 104, Vijay Nagar Colony<br />
                        Vivekananda Nagar, Kukatpally<br />
                        Hyderabad, Telangana 500072
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Hours</p>
                      <p className="text-gray-600 text-sm">
                        Mon-Sat: 10:00 AM - 7:00 PM<br />
                        Sunday: 11:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Contact</p>
                      <p className="text-gray-600 text-sm">
                        +91 8333833355<br />
                        040 40033355
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-2 h-80 lg:h-64">
                <iframe
                  title="Sar Wall Decors Location"
                  src="https://www.google.com/maps?q=Sarwall+Decors,+Kukatpally,+Hyderabad&output=embed"
                  width="100%"
                  height="100%"
                  allowFullScreen=""
                  loading="lazy"
                  className="border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}