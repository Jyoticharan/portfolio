import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="flex items-center justify-center w-full">
        <div className="h-full flex flex-col md:flex-row gap-16 flex-wrap px-20 justify-center">
          <ProjectCard
            src="/trainingpaws.jpg"
            title="Training Paws"
            description="Designed this Android application which helps
          in fostering effective communication and bonding between
          the pets and their owners
          "
            link="https://github.com/Jyoticharan/TrainingPaws/tree/main/SP0302"
          />
          <ProjectCard
            src="/travel-app.png"
            title="Travel App"
            description="Developed a fully responsive UI/UX website
          which helps in guiding the travellers
          "
            link="https://github.com/Jyoticharan/travelapp"
          />
          <ProjectCard
            src="/car-showcase.png"
            title="Car Showcase Website"
            description="Built a dynamic car showcase app using HTML, CSS, and API integration, offering a seamless browsing experience with real-time updates on car listings."
            link="https://github.com/Jyoticharan/carshowcasewebsite"
          />
          <ProjectCard
            src="/weather.png"
            title="Weather App"
            description="Developed a real-time weather app using HTML, CSS, and dynamic API integration, providing accurate weather details upon location search."
            link="https://github.com/Jyoticharan/WeatherApp"
          />
          <ProjectCard
            src="/amazon-clone.png"
            title="Amazon Clone"
            description="Designed an interactive Amazon-inspired e-commerce platform using HTML and CSS, featuring a user-friendly interface and responsive design."
            link="https://github.com/Jyoticharan/amazon-clone"
          />
          <ProjectCard
            src="/spotify.png"
            title="Spotify Clone"
            description="Crafted a dynamic Spotify-inspired music streaming experience with HTML and CSS, showcasing seamless design and responsive layout for an immersive user interface on my portfolio website."
            link="https://github.com/Jyoticharan/spotify"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
