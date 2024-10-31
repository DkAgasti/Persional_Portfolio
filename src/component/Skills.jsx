import { useState } from 'react';
import Projects from './Project';
import Timeline from './Timeline';
import Skill from './Skill';

function App() {
  const [activeTab, setActiveTab] = useState('education');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className='p-4 bg-gray-100  ' id='resume'  >

      <h1 className="text-[#101229] text-4xl font-medium text-center mb-1">
        Resume
      </h1>
      <p className="text-red-500 font-extrabold text-xl	 font-medium text-center mb-10">-: My format Bio Details :-</p>

      <div className="flex h-[450px]">
        {/* Sidebar Navigation */}
        <div className="w-1/4 bg-white-900 text-black p-4 border-r-2 border-black   ">
          <ul className="space-y-14">
            <li
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white text-base ${activeTab === 'education' ? 'bg-gray-600 text-white' : ''
                }`}
              onClick={() => handleTabClick('education')}
            >
              <i class="fa-solid fa-user-graduate"></i>  Education
            </li>
            <li
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white text-base ${activeTab === 'workHistory' ? 'bg-gray-600 text-white' : ''
                }`}
              onClick={() => handleTabClick('workHistory')}
            >
              <i class="fa-solid fa-clock-rotate-left"></i>  Works 
            </li>
            <li
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white text-base ${activeTab === 'programmingSkills' ? 'bg-gray-600 text-white' : ''
                }`}
              onClick={() => handleTabClick('programmingSkills')}
            >
              <i class="fa-solid fa-laptop-code"></i>  Skills
            </li>
            <li
              className={`cursor-pointer transition-all duration-300 ease-in-out hover:bg-gray-600 hover:text-white text-base ${activeTab === 'projects' ? 'bg-gray-600 text-white' : ''
                }`}
              onClick={() => handleTabClick('projects')}
            >
              <i class="fa-solid fa-chart-column"></i> Projects
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-3/4 p-8 transition-opacity duration-600 ease-in-out opacity-100 ">
          {activeTab === 'education' && (
            <div className="overflow-y-scroll h-[430px] ">
              <h1 className="text-2xl font-bold">Education</h1>
             <div >
             <h2 className="font-bold text-red-500 text-base ">Graduated in CSE (2020 - 2024)</h2>
              <li>Completed my B.Tech degree in Computer Science Engineering.</li>
              <li>Learned the fundamentals of OOPs, software engineering </li>
              <br></br>
              <h2 className="font-bold text-red-500 text-base "> +2 in  Science (2018 - 2020)</h2>
              <li>Completed a 2-year +2.</li>
              <li>Explored the Physics, Chemistry, Mathematics, and Computer Science.</li>
              <br></br>
              <h2 className="font-bold text-red-500 text-base ">10th Board (2018)</h2>
              <li>Passed the 10th grade board exams.</li>
              <li>Achieved distinction in core subjects like Mathematics and Science.</li>
             </div>



            </div>


          )}
          {activeTab === 'workHistory' && (
            <div  className="overflow-y-scroll h-[430px] " >
            <h1 className="text-2xl font-bold">Work History</h1>
            <div className="flex flex-wrap justify-center ">
              <Timeline/>
            </div>
           
          </div>
          )}
          {activeTab === 'programmingSkills' && (
            <div className="overflow-y-scroll h-[430px] ">
              <h1 className="text-2xl font-bold">Programming Skills</h1>
              <div className="flex flex-wrap  ">
                <Skill/>
              </div>
            </div>
          )}
          {activeTab === 'projects' && (
            <div className="overflow-y-scroll h-[430px] ">
              <h1 className="text-2xl font-bold">Projects</h1>
              <div className="flex flex-wrap justify-center ">
              <Projects/>
            </div>
            </div>
          )}
         
        </div>
      </div>
    </div>
  );
}

export default App;
