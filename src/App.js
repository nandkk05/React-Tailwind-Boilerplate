import React from "react";
import GithubCorner from "react-github-corner";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <div>
      <div class="container px-5 mx-auto h-screen justify-center flex flex-wrap flex-col">
        <img
          class="xl:w-1/4 lg:w-1/3 md:w-1/2 w-2/3 block mx-auto mb-10 object-cover object-center"
          alt="logo"
          src={logo}
        />
        <div class="flex flex-col text-center w-full ">
          <h1 class="text-2xl sm:text-4xl font-bold title-font mb-4 text-gray-900">
            React X Tailwind CSS
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-lg">
            Start building your next project and try to make a dent in the
            universe.
          </p>
          <p class="text-sm mt-8 text-gray-500 mb-8 w-full">
            Minimal boilerplate, ready-to-use!
          </p>
        </div>
      </div>
      <GithubCorner
        href="https://github.com/nandkk05/React-Tailwind-Boilerplate"
        bannerColor="#00b09b"
        octoColor="#fff"
        size={80}
        direction="right"
      />
    </div>
  );
}

export default App;
