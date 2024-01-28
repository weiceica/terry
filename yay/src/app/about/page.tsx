import React from 'react';
import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import terryYos from '../../../public/images/terryYos.jpg';

function About() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between pb-20 pl-20 pr-20">
        <div className="flex flex-col sm:flex-row items-start mx-50 mt-40 pb-40 z-[-1]">
          <div className="w-full sm:w-1/3 sm:pr-20 h-3/4 sm:h-[75vh] flex items-center mb-4 sm:mb-0">
            <Image
              src={terryYos}
              alt="Picture of Terry"
              layout="responsive"
              className="rounded-[100px] w-full h-full object-cover"
            />
          </div>

          <div className="w-full sm:w-2/3">
            <div className="bg-gray-100 border border-gray-200 rounded-md shadow-inner p-4">
              <h1 className="text-3xl font-semibold mb-4">Hi! I&apos;m Terry Shi</h1>
              <p className="text-base leading-relaxed">
                I am from Vancouver, BC, and I am currently a student at the University of Michigan, Ann Arbor, double majoring in Computer Science and Data Science. As much as I hope to remain professional, I want this website to be a space for me to reflect upon myself, instead of showcasing the perfect version of me - something that I realized over time...
              </p>
              <p className="text-base leading-relaxed mt-4">
                Currently, I am doing <b>mechanistic interpretability</b> research with professor Yixin Wang investigating Large Language models ability to encode geographical information. I am a <b>motivated, self-driven fast learner</b>, as I inspire to produce well tested code for software companies.
              </p>
              <p className="text-base leading-relaxed mt-4">
                I am passionate about <b>engineering and developing software</b> - especially incorporating the use of big data analytics and machine learning into the design of smart cities. I have experience as a software engineer, working with front-end, back-end, and cloud technologies. Additionally, I also have experience as a data analyst, designing databases for production software, and training machine learning models for large scale data science projects.
              </p>
              <p className="text-base leading-relaxed mt-4">
                I could not live my life without <b>travelling, backcountry skiing, and soccer</b>. I find joy in backpacking across obscure and unheard of places to experience the diverse cultures and landscapes of the world, as I would often bring a soccer ball with me in my journeys as a means of connecting with locals. During winter, you could find me roaming the slopes of British Columbia.
              </p>
            </div>
            <br />
            <div className="bg-gray-100 border border-gray-200 rounded-md shadow-inner p-4">
              <h1 className="text-3xl font-semibold mb-4">Previously...</h1>
              <p className="text-base leading-relaxed">
                I have interned at Trend Micro Inc. as a backend software engineer, a cybersecurity company specialized in providing cloud security solutions for businesses. I have also worked at a finance startup - Ultima Insights as a data analyst/software engineer, developing the UI and analyzing financial data. I have also worked with a research cohort sponsored by Amway Inc, developing an image processing engine and web application that is hosted on Cloud.
              </p>
              <p className="text-base leading-relaxed mt-4">
                I enjoy engineering, analyzing, and visualizing data, and hope to one day apply these technical skills into developing sustainable living environments for citizens of the future.
              </p>
              <p className="text-base leading-relaxed mt-4">
                I have taken courses such as Database Management Systems, Machine Learning, Statistical Probabilities, Data Structures and Algorithms, and Linear Regression to help me realize these goals. 
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default About;
