import React, { useState, useEffect } from "react";
import { FaCode, FaPaintBrush, FaMobileAlt } from "react-icons/fa"; // Import icons from react-icons

const skillsData = [
  { name: "HTML5/CSS3", percentage: "95%" },
  { name: "JavaScript", percentage: "90%" },
  { name: "React", percentage: "90%" },
  { name: "PHP", percentage: "65%" },
  { name: "Wordpress", percentage: "70%" },
  { name: "Bootstrap/Tailwind", percentage: "85%" },
  { name: "Responsive Web", percentage: "90%" },
];

const Skills = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimated((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="py-16 px-8 bg-gray-100">

      {/* Skill Categories and Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center mx-auto">
        {/* Skill Categories */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <FaPaintBrush className="text-3xl text-gray-700" />
            <h3 className="text-xl font-semibold">Design + Development</h3>
          </div>

          <div className="flex items-center space-x-3">
            <FaCode className="text-3xl text-gray-700" />
            <h3 className="text-xl font-semibold">Technology</h3>
          </div>

          <div className="flex items-center space-x-3">
            <FaMobileAlt className="text-3xl text-gray-700" />
            <h3 className="text-xl font-semibold">Always Responsive</h3>
          </div>
        </div>

        {/* Skill Bars */}
        <div>
          {skillsData.map((skill) => (
            <div key={skill.name} className="mb-3">
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">
                  {skill.name}
                </span>
                <span className="text-sm font-medium text-gray-700">
                  {skill.percentage}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className={`bg-[#2b2870] h-2.5 rounded-full transition-all duration-1000 ease-in-out`}
                  style={{
                    width: animated ? skill.percentage : "0%",
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;