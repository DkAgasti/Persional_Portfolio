import React from 'react';
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';






function Home() {
  const handleDownloadResume = () => {
    window.open('/Agasti_Resume.pdf', '_blank');
  };

  return (
    <>
      <div id='home'
        className="min-h-screen bg-cover bg-center relative overflow-hidden"
        style={{
          backgroundColor: '#070b1c',
          boxShadow: '0px 0px 50px 20px rgba(160,166,214,0.2) inset',

        }}
      >



        {/* Centered content with image on the left */}
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center">
          {/* Image box */}
          <div className="md:mr-10 mb-10 md:mb-0 relative flex items-center justify-center">
            {/* Glowing ring around the image */}
            <div className="absolute inset-0 flex items-center justify-center shadow-[0_2px_0_white] rounded-full h-[300px] w-[290px] -translate-x-5 -translate-y-6"></div>



            {/* Image */}
            <img
              src="/dk4.jpeg"
              alt="Portfolio"
              className="w-64 h-64 rounded-full object-cover shadow-lg transition-all duration-500 ease-in-out transform hover:scale-105"
            />
          </div>


          {/* Text content */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-3xl  mb-4 text-white">Hello👋</h2>
            <h2 className="text-3xl  mb-4 text-white">I'm Dinakrushna Agasti</h2>

            {/* Typing animation for job title */}
            <h2 className="text-1xl font-semibold text-red-500"> <span className="text-1xl font-semibold text-white" >I'm a</span>
              <TypeAnimation
                sequence={[
                  "  Frontend Developer",
                  2000,
                  "  React Developer",
                  2000,
                  "  UI/UX designer",
                  2000,
                  '  Freelancer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>


            <div className="flex justify-center mt-4">
              <a href="https://www.facebook.com/agasti.dk.5" className="mr-4 text-white hover:text-blue-700 transition duration-300 ease-in-out">
                <FaFacebookF size={24} />
              </a>
              <a href="https://github.com/DkAgasti" className="mr-4 text-white hover:text-blue-700 transition duration-300 ease-in-out">
                <FaGithub size={24} />
              </a>
              <a href="https://www.instagram.com/d.agasti?igsh=MThkY3M5cWNua2hmbw==" className="mr-4 text-white hover:text-blue-700 transition duration-300 ease-in-out">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/dinakrushna-agasti-32346a2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="mr-4 text-white hover:text-blue-700 transition duration-300 ease-in-out">
                <FaLinkedinIn size={24} />
              </a>
              <a href="https://wa.me/7847027306" className="mr-4 text-white hover:text-blue-700 transition duration-300 ease-in-out">
                <FaWhatsapp size={24} />
              </a>
            </div>

            {/* Resume Button */}
            <button
              onClick={handleDownloadResume}
              className="mt-6 px-4 py-2 bg-[#f27e49] text-white rounded hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
              style={{ cursor: 'pointer' }}
            >
              Download CV
            </button>


          </div>



        </div>

        {/* SVG Wave at the bottom */}
        <div className="relative" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 w-full"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              fill="#f3f4f6"
              className="shape-fill"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Home;
