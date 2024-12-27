import React from 'react';

const About = () => {
  return (
    <div className="pt-32 pb-16 px-4 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=faces"
            alt="aNkit's Profile"
            className="rounded-2xl w-full"
          />
        </div>
        <div className="md:w-2/3">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="space-y-6 text-gray-300">
            <p>
              Hello! I'm aNkit, a passionate Product Designer from India with over 5 years of experience
              in creating user-centered digital experiences that make a difference.
            </p>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-white">Background</h2>
              <p>
                With a background in both design and front-end development, I bring a unique perspective
                to product design that bridges the gap between aesthetics and functionality.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-white">Expertise</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>User Interface Design</li>
                <li>User Experience Design</li>
                <li>Design Systems</li>
                <li>Prototyping</li>
                <li>User Research</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-white">Mission</h2>
              <p>
                My mission is to create intuitive and impactful digital experiences that solve real
                problems while delighting users. I believe in design that's not just beautiful but
                purposeful and accessible to all.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;