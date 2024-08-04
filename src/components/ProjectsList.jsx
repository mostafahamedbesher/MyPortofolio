import Project from "./Project";

const projectsData = [
  {
    title: "Hotel Reservation Website",
    img: "project-12",
    description:
      "Hotel reservations website built with Next.js and React, featuring Google account registration, cabin filtering, booking, and comprehensive reservation management with full CRUD operations.",
    skills: "Nextjs,React,NextAuth",
    liveLink: "https://hotel-reservations-website.vercel.app",
    githubLink:
      "https://github.com/mostafahamedbesher/Hotel-Reservations-website",
  },

  {
    title: "Hotel Dashboard",
    img: "project-10",
    description:
      "A management tool for hotel staff, featuring CRUD operations, robust filtering and sorting, dynamic dashboard metrics, real-time updates, and secure user authentication.",
    skills: "React,React-Query,Styled-Components,React-Hook-Form",
    liveLink: "https://hotel-dashboard-nu.vercel.app",
    githubLink: "https://github.com/mostafahamedbesher/Hotel-Dashboard",
  },

  {
    title: "ecommerce Pizza Restaurant",
    img: "project-1",
    description:
      "This project is a fully responsive ecommerce pizza restaurant app, beautifully styled with Tailwind CSS. It provides a user-friendly interface for browsing restaurant products.",
    skills: "React, Redux, React-Router, Tailwind",
    liveLink: "https://fast-pizza-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/ecommerce-Fast-Pizza",
  },
  {
    title: "Forkify",
    img: "project-7",
    description:
      "A recipe application crafted using the Model-View-Controller(MVC) architecture to make it more structured. you can effortlessly search for any recipe imaginable and access recpie details",
    skills: "Javascript, MVC, Ajax, css, html, parcel",
    liveLink: "https://forkify-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/forkify",
  },
  {
    title: "Interactive World Map Tracker",
    img: "project-2",
    description:
      "A world map that tracks your footsteps into every city you can think of. Never forget your wonderful experiences, and show your friends how you have wandered the world.",
    skills: "React, contextAPI, useReducer, React-Router",
    liveLink: "https://worldwise-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/Worldwise",
  },
  {
    title: "React Quiz Application",
    img: "project-3",
    description:
      "Developed a dynamic React quiz application that challenges users within a limited time frame, providing a comprehensive rating upon completion.",
    skills: "React, contextAPI, useReducer",
    liveLink: "https://react-quiz-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/React-Quiz-app",
  },
  {
    title: "Movie Rating App",
    img: "project-8",
    description:
      "Movie Explorer is a sophisticated application tailored for movie aficionados. It offers an intuitive platform for searching, rating, and organizing movies, allowing users to curate their own personalized watchlist..",
    skills: "React, Ajax, javascript, css, html",
    liveLink: "https://popcorn-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/popcorn",
  },
  {
    title: "Travel Todo List",
    img: "project-9",
    description:
      "The Travel Todo List App is a task management application designed specifically for travelers. It allows users to create and manage lists of items they need to pack for their trips.",
    skills: "React, javascript, css, html",
    liveLink: "https://travellist-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/TravelList",
  },
  {
    title: "Classy Weather",
    img: "project-11",
    description:
      "The React Weather Forecast App provides real-time weather updates for a chosen city through an intuitive interface built with React class components.",
    skills: "React, AJAX, Javascript, CSS, HTML",
    liveLink: "https://classy-weather-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/Classy-Weather",
  },
  {
    title: "Bankist",
    img: "project-4",
    description:
      "Designed and implemented a feature-rich landing page to enhance proficiency in advanced DOM manipulation and events handling",
    skills: "Javascript, HTML, Css, Responsive-Design",
    liveLink: "https://bankist-besher.netlify.app/",
    githubLink: "https://github.com/mostafahamedbesher/Bankist",
  },
  {
    title: "Tours Application",
    img: "project-5",
    description:
      "Developed a tours application where I honed my skills in CSS animations, applied meticulous CSS styling, and ensured optimal user experience through responsive design using SCSS.",
    skills: "Scss, HTML, Responsive-Design",
    liveLink: "https://natours-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/Natours",
  },
  {
    title: "OmniFood",
    img: "project-6",
    description:
      "Designed and implemented a simple yet visually appealing landing page for a healthy food restaurant, serving as a practice application for refining skills in HTML, CSS, and responsive design.",
    skills: "CSS, HTML, Responsive-Design",
    liveLink: "https://omnifood-besher.netlify.app",
    githubLink: "https://github.com/mostafahamedbesher/OmniFood",
  },
];

function ProjectsList() {
  return (
    <div className="projects-list grid--3col">
      {projectsData.map((project) => (
        <Project projectItem={project} key={project.title} />
      ))}
    </div>
  );
}

export default ProjectsList;
