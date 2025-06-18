import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700">
              BRAHMASTRA
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              A collection of powerful intelligence tools.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Gr1ffend0r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="https://github.com/S3lc0uth/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:Gr1ffend0r@proton.me"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            &copy; {new Date().getFullYear()} BRAHMĀSTRA. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">
            This website is for educational purposes only. Always respect privacy and adhere to applicable laws.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;