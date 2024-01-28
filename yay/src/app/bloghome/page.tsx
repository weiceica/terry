import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Image from "next/image";
import Link from "next/link";
import imgBackShot from "../../../public/images/terryBack.png";

function BlogHome() {
  // for now manually create the static pages.
  const blogPosts = [
    { id: 1, title: "Semester Recap + almost failing EECS 482 reflection" },
    { id: 2, title: "What a productive and relaxing winter break in China" }
  ];

  // for loop that handles the blog post
  const blogLinks = blogPosts.map((blog) => (
    <div key={blog.id} className="mb-4 hover:scale-110">
      <Link href={`/blogpost/${blog.id}`}>
        <p className="block md:text-xl bg-white hover:bg-gray-100 text-gray-800 py-2 px-4 font-semibold border border-gray-400 rounded shadow">
          <span className="font-bold">Blog {blog.id}: </span>
          {blog.title}
        </p>
      </Link>
    </div>
  ));

  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 pt-36">
        <article>
          <header className="mb-10 text-center">
            <h1 className="text-5xl font-bold mb-4">Terry&apos;s Blog</h1>
            <div className="mx-auto my-2 h-1 w-16 bg-black mt-12 mb-12"></div>
            <p className="text-sm text-gray-500">
              A Journey of self reflection
            </p>
          </header>

          <div className="mb-10 max-w-md mx-auto">
            <p className="text-base text-gray-700 text-justify hover:scale-110">
              Growing up, I was privileged enough to live in a variety of
              diverse places. I experienced the luxuries of Vancouver, spoiled
              with a blend of natural scenery and calm city life. I also
              experienced Beijing&apos;s rapidy changing, fast paced urban life.
            </p>
            <br />
            <p className="text-base text-gray-700 text-justify hover:scale-110 hover:z[-1]">
              As a kid growing up, I didn&apos;t realize how lucky I am to get
              to travel to the edges of the world. I didn&apos;t realize how
              greatful I should be to have such loving parents. I didn&apos;t
              realize the starting point I had, and how greatful I should be.
            </p>
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

          {/* Link to another blog post */}
          <div className="flex flex-col items-center mt-6">{blogLinks}</div>
        </article>
      </main>
      <Footer />
    </>
  );
}

export default BlogHome;
