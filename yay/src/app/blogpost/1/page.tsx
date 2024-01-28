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
            <h1 className="text-5xl font-bold mb-4">Semester Recap + almost failing EECS 482</h1>
            <div className="mx-auto my-2 h-1 w-16 bg-black mt-12 mb-12"></div>
            <p className="text-sm text-gray-500">
              Thursday, Dec 14, 2023
            </p>
          </header>

          <div className="pb-20 max-w-2xl mx-auto">
            <p className="text-base text-gray-700 text-justify">
              Being brutally honest with myself, this semester as a whole has been a mess. Taking three upper level CS classes, EECS 483, EECS 445, and EECS 482, as well as working in basically two different companies has not been successfull at all to say the least. I guess the only reason I did this to myself was becuase I wanted to prove to myself that I am capable of handling many many different high workload things at once. Clearly, I can not. 
            </p>
            <br />
            <p className="text-base text-gray-700 text-justify">
              As much as I want to find excuses for myself, the reality is I am just simply not dedicated nor naturally intelligent enough to handle all of these things at once. Before undergrad started, I thought to myself, how hard can university be... I heard many people talking about lowering expectations for yourself for university, but never in a million years would I imagine almost failing a class in university, (even if this class technically doesn&apos;t count towards my major..), but I guess from every failure, I can learn something right? 
            </p>
            <br />
            <ul className="font-semibold">
              <li>1. DO NOT compare yourself with other people (this doesn&apos;t mean dont push yourself, but rather don&apos;t get peer pressured when making decisions)</li>
              <br />
              <li>2. set REALISTIC goals and aim LOWER (perhaps the simplest things such as finding a habit of making my bed in the morning)</li>
              <br />
              <li>3. Let&apos;s bounce back... I can always do better next semester</li>
            </ul>
            <br />
            <p className="text-base text-gray-700 text-justify">
              Terry, you got this.. you have a ml research next semester, you are taking a much lighter course load, and you also have so many loving friends that care around you. Nothing is the end of the world, In society, I just have to accept reality, adapt to reality, and then overcome reality in a stronger, more prepared manner. Sure, I might have failed one class, but this doesn&apos;t mean that I can&apos;t get into a good MSDS grad school, it shouldn&apos;t stop me from what I love doing, and what I want to do... I simply just have to overcome the challenges I faced this semester and use it as motivation for me to do well the next semester. Recruting + Learn DA and SQL + hopefully a fun semester to come...
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default b1;
