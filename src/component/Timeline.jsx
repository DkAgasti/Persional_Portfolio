import React from 'react';

const timelineData = [
  {
    title: 'Internship',
    date: 'Jan - Sept 2024',
    description: [
      'Worked as a frontend developer, building responsive and interactive web components using React and Tailwind CSS.',
      'Transformed app designs into front-end code with HTML, CSS, and JavaScript.',
      'Gathered and refined specifications and requirements based on technical or UX design requirements.',
      'Built web applications with web development best practices.',
    ],
  },

  {
    title: 'Frontend Developer Course:',
    date: 'oct 2023',
    description: [
      'developed a responsive traveling booking web and a weather Web is an excellent way to practice these skills',
      'The booking web app features user authentication, a seamless booking interface, and dynamic content display, while the weather app integrates real-time API data to provide up-to-date weather forecasts',
      ' Both projects are fully responsive, ensuring a smooth user experience across different devices and screen sizes',
    ],
  },



  {
    title: 'Freelancer',
    date: 'may 2024',
    description: [
      'Worked as a React js developer',
      'Collaborated with a dynamic team of developers to design, develop, and implement user-friendly web applications using React.js, contributing to the enhancement of user experience and interface responsiveness.',
      'Gained hands-on experience in version control using Git, collaborating on team projects through GitHub to manage  codebase changes effectively',
      
    ],
  },
  
];

const TimelineItem = ({ title, date, description }) => {
  return (
    <div className="flex flex-col items-center text-center mb-6">
      {/* Dot */}
      <div className="w-6 h-6 flex items-center justify-center bg-teal-500 rounded-full text-white">
        •
      </div>

      {/* Timeline content */}
      <div className="mt-1">
        <h3 className="text-xl font-semibold text-red-500">{title}</h3>
        <span className="text-sm text-gray-500">{date}</span>
        <ul className="mt-2 text-gray-700 list-disc list-inside">
          {description.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Timeline = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="space-y-12">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              title={item.title}
              date={item.date}
              description={item.description}
            />
          ))}
        </div>
      </div>
      <br></br>
    </section>
  );
};

export default Timeline;

