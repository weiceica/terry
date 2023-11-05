import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="fixed bottom-0 w-full bg-white shadow-md p-4 flex justify-center items-center">
      <div className="flex items-center space-x-8">
        {/* Email Icon */}
        <Link href="mailto:your-email@weiceica@gmail.com" className="text-blue-600 hover:underline">
          <FaEnvelope size={25} />
        </Link>
        {/* GitHub Icon */}
        <Link href="https://github.com/weiceica" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          <FaGithub size={25} />
        </Link>
        {/* LinkedIn Icon */}
        <Link href="https://www.linkedin.com/in/terry-shi-54a853128/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
          <FaLinkedin size={25} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
