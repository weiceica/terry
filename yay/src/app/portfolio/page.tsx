
// projects.js
import a from '../../../public/images/travelour.png';
import b from '../../../public/images/stoppro.png';
import c from '../../../public/images/tsp.png';
import d from '../../../public/images/msail.png';
import e from '../../../public/images/mlapp.webp';
import f from '../../../public/images/osimg.png';
import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Link from 'next/link';

function Projects() {
  const projects = [
    { id: 1, title: "Travelour", description: "A Comprehensive Travel plan guider using RASA Intent Classification, as well as querying OpenAI API for basically non weather, flight related tasks. UI mimics the design of ChatGPT, with the app hosted on Vercel. Stores user information on GCP Firebase, while authentification is done with NextAuth.js. Of course, we are using Next.js and TailwindCSS for the application itself.", image: a, url: "https://github.com/weiceica/travelour"},

    { id: 2, title: "Stop Procrastinating", description: "STOP PROCRASTINATING! Whenever I work on a group project or a group homework assignment with a friend, we would always use this simple yet effective task manager keep us on track! Frontend coded using React.js, backend using Node/Express.js, with the data and tasks stored usign MongoDB. ", image: b, url: "https://github.com/weiceica/stop-procrastinating"},

    { id: 3, title: "TSP Visualizer", description: "A Travelling Salesman Problem Visualzier coded using Vanila Javascript for demonstrating to students the difference between various TSP Algorithms. Includes various functionalities like ranomdize nodes with a selection of TSP heuristics", image: c, url: "https://github.com/weiceica/TSP"},

    { id: 4, title: "MSAIL Website", description: "Lead Web Developer for the Michigan Student Artificial Intelligence Lab", image: d, url: "https://github.com/MSAIL/website"},

    { id: 5, title: "Machine Learning Projects", description: "(Requires private access) A Series of Machine Learning projects including a song recommendation project using KNN calssifiers, a building classifier project using CNNs and various supervised ML techniques, as well as a movie recommendations predictor using Linear classifiers", image: e, url: "https://github.com/weiceica/EECS445"},

    { id: 6, title: "Operating Systems Projects", description: "(Requires private access) A Series of Operating Systems projects including multi-threaded producer-consumer libraries, internal kernel thread libraries, virtual pager design, as well as a network file server", image: f, url: "https://github.com/weiceica/EECS482"},
  ];

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-20 text-black">
      <Navbar />
      <h1 className="text-4xl font-bold my-10">Personal Projects</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">
        {projects.map(project => (
          <Link href={project.url} key={project.id} className="block border border-16 border-gray-400 p-4 rounded-lg hover:shadow-lg transition-shadow">
            <div className="relative h-64 w-full">
              <Image src={project.image} alt={project.title} layout="fill" objectFit="cover" className="rounded-md"/>
            </div>
              <h3 className="mt-2 text-xl font-semibold">{project.title}</h3>
              <p>{project.description}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}

export default Projects;
