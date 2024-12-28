import React from "react";
import { Link } from "react-router-dom";
import HomeNavbar from "./Homenavbar";

const Home = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <HomeNavbar /> {/* Add the custom minimal navbar */}
      <header className="flex flex-col items-center text-center py-16 px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The best place to build, test, and discover front-end code.
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            KODEit is a social development environment for front-end designers
            and developers. Practice building a website, show off your work,
            build test cases to learn and debug, and find inspiration.
          </p>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg text-lg">
            <Link to="/signup">Sign Up for Free</Link>
          </button>
        </div>
      </header>
      <div className="flex justify-around my-12">
  <div className="bg-gray-800 p-4 rounded-md shadow-lg">
    <h3 className="text-sm font-bold">HTML</h3>
    <code className="block text-gray-400 text-sm">
      &lt;div className="rect"&gt;&lt;/div&gt;
    </code>
  </div>
  <div className="bg-gray-800 p-4 rounded-md shadow-lg">
    <h3 className="text-sm font-bold">SCSS</h3>
    <code className="block text-gray-400 text-sm">
      .rect &#123; background: linear-gradient(...); &#125;
    </code>
  </div>
  <div className="bg-gray-800 p-4 rounded-md shadow-lg">
    <h3 className="text-sm font-bold">JS</h3>
    <code className="block text-gray-400 text-sm">
      var colors = ["#740087", "#DE7300"]; function animate() &#123;&#125;;
    </code>
  </div>
</div>
 <section className="px-6 py-12 bg-gray-800">
        <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="text-xl mb-4">🚀</div>
            <h3 className="text-xl font-bold mb-2">Build & Test</h3>
            <p className="text-gray-300">
              Get work done quicker by building out entire projects or
              isolating code to test features and animations.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="text-xl mb-4">📚</div>
            <h3 className="text-xl font-bold mb-2">Learn & Discover</h3>
            <p className="text-gray-300">
              Upgrade your skills and get noticed. Participate in CodePen
              Challenges to try something new.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
            <div className="text-xl mb-4">🌍</div>
            <h3 className="text-xl font-bold mb-2">Share Your Work</h3>
            <p className="text-gray-300">
              Become a part of the community by sharing your work and showing
              off your creativity.
            </p>
          </div>
        </div>
      </section>
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-gray-400 text-sm">
          Happy Coding ! 
        </p>
      </footer>
    </div>
  );
};

export default Home;
