import Link from 'next/link';
import Image from 'next/image';
import imgSideShot from '../../../public/images/sideshot.jpg'
import React from 'react';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="w-full fixed top-0 bg-white bg-opacity-100 shadow-md p-5 z-5000">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
            <Link href="/">
                <div className="font-bold rounded-lg border border-transparent px-1 py-1 transition-colors hover:border-gray-300 hover:bg-gray-100 cursor-pointer">
                    <Image
                        src={imgSideShot}
                        alt="Picture of Terry"
                        width={30}
                        height={30} 
                        className="rounded-full"
                        priority
                    />
                </div>
            </Link>
        </div>
        <div className="flex space-x-2">
          <Link href="/" passHref className="rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100">
                Home
          </Link>
          <Link href="/bloghome" passHref className="rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100">
            Blog
          </Link>
          <Link href="/work" passHref className="rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100">
            Work
          </Link>
          <Link href="/travel" passHref className="rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100">
            Travel
          </Link>
          <Link href="/about" passHref className="rounded-lg border border-transparent px-2 py-2 transition-colors hover:border-gray-300 hover:bg-gray-100">
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
