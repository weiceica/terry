import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Image from 'next/image';
import imgBackShot from '../../../public/images/terryBack.png'

function BlogHome() {
  return (
    <>
      <Navbar/>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 pt-36">
        <article>
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold mb-4">Terry's Blog</h1>
            <div className="mx-auto my-2 h-1 w-16 bg-black mt-12 mb-12"></div>
            <p className="text-sm text-gray-500">A Journey of self reflection</p>
          </header>

          <div className="mb-10 max-w-md mx-auto">
            <p className="text-base text-gray-700 text-justify hover:scale-110">
              Growing up, I was privileged enough to live in a variety of diverse places. I experienced the luxuries of Vancouver, spoiled with a blend of natural scenery and calm city life. I also experienced Beijing's rapidy changing, fast paced urban life. 
            </p>
            <br />
            <p className="text-base text-gray-700 text-justify hover:scale-110 hover:z[-1]">
              As a kid growing up, I didn't realize how lucky I am to get to travl to the edges of the world. I didn't realize how greatful I should be to have such loving parents. I didn't realize the starting point I had, and how greatful I should be.
            </p>4
            <br />
            <p className="text-base text-gray-700 text-center hover:scale-110 hover:z[-1]">
              <b>scroll down for my Blogs!</b>
            </p>
          </div>


          <figure className="mb-10 mt-10">
            <Image
              src={imgBackShot}
              alt="Whatever"
              width={900}
              height={1600}
              layout="responsive"
              objectFit="contain"
              quality={100}
              className="rounded-2xl"
            />
          </figure>

          
        </article>
      </main>
      <Footer/>
    </>
  );
}

export default BlogHome;
