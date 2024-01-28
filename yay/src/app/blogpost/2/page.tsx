import { useRouter } from 'next/router';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const b1 = () => {

  // Fetch blog post data using the id
  // const blogPost = ...;

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 pt-36">
        <article>
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold mb-4">What a productive and relaxing winter break</h1>
            <div className="mx-auto my-2 h-1 w-16 bg-black mt-12 mb-12"></div>
            <p className="text-sm text-gray-500">
              Saturday, Jan 27
            </p>
          </header>

          <div className="pb-20 max-w-2xl mx-auto">
            <p className="text-base text-gray-700 text-justify">
              That past winter break, I feel like I have regained my energy, and established myself as a motivated person again. I have to remember that the success I had from previous terms and previous internships had come from countless failures. Just like when I am creating CS projects or working on interships, my code would fail to compile tens of times before I finally get it to just compile. I feel like in life, it takes hundreds of failures before I finally get something to work. Just stay motivated!
            </p>
            <br />
            <p className="text-base text-gray-700 text-justify">
              I am doing a much better job at not comparing myself to other people. This winter break, I enhanced my SQL skills, created some projects with Clash Royale Analytics, and also go to to enjoy lots of valuable family time in conjunction to my ever growing busy schedule. I really needed this. 
            </p>
            <br />
            <p className="text-base text-gray-700 text-justify">
              This semester, just Keep doing what I have been doign best! socialize, have fun, study hard, develop my career! I have a long way to go, and that winter break was such a nice break point for me. I got to climb lots of mountains and enjoy the outdoors again. I got to play a lot of soccer and go back to the port I love so much again. I got to spend time with elementary school friends, family friends, and meet so many people! Terry you got this!
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default b1;
