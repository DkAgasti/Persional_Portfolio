import React from 'react';

const ProjectCard = ({ image, title, Demo,Code }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-center">{title}</h3>
        <div className='flex justify-between'>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'><a href={Demo}>Demo</a></button>
          <button className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'><a href={Code}>Code</a></button>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
    {
      image: '/marraige.png',
      title: 'Project 1',
      Demo: 'https://dkagasti.github.io/EventPlaner/',
      Code: 'https://github.com/DkAgasti/EventPlaner',
    },
    {
      image: '/journey.png',
      title: 'Project 2',
      Demo: 'https://dkagasti.github.io/MakeMyJourney/',
      Code: 'https://github.com/DkAgasti/MakeMyJourney',
    },
    {
      image: '/weather.png',
      title: 'Project 3',
      Demo: 'https://dkagasti.github.io/API_Weather-App/',
      Code: 'https://github.com/DkAgasti/API_Weather-App',
    },
    {
      image: '/todo.png',
      title: 'Project 4',
      Demo: 'https://todo-list-using-react-chi.vercel.app/',
      Code: 'https://github.com/DkAgasti/TodoList-Using-React',
    },
    {
      image: '/ecom.png',
      title: 'Project 5',
      Demo: ' https://ecommerce-website-react-lake.vercel.app',
      Code: 'https://github.com/DkAgasti/Ecommerce_Website_React',
    },
    {
      image: '/Modern.jpeg',
      title: 'Project 6',
      Demo: 'https://dkagasti.github.io/college__clone/',
      Code: 'https://github.com/DkAgasti/college__clone',
    },
  ];

  return (
    <section className="py-10 px-5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              Demo={project.Demo}
              Code={project.Code}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
