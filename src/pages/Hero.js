import React, { useState } from "react";

const Hero = () => {
  const [mode, setMode] = useState(true);
  const handleClick = () => {
    setMode(!mode);
  };
  return (
    <div
      class={`${
        mode ? "bg-black text-white" : "bg-white text-black"
      } flex justify-between main px-8 flex-col h-screen w-screen sm:px-24 lg:px-14 py-9 relative `}
    >
      <nav class="relative flex items-center justify-between">
        <img src="images/logo.png" class="w-32 md:w-40 cursor-pointer" />
        <ul class="hidden list-none gap-10 lg:flex relative z-0 items-center">
          <li class="peer/home">
            <a href="#" class=" ">
              Home
            </a>
          </li>
          <li class="peer/about">
            <a href="#" class=" ">
              About
            </a>
          </li>
          <li class="peer/features">
            <a href="#" class=" ">
              Features
            </a>
          </li>
          <li class="peer/contact">
            <a href="#" class=" ">
              Contact
            </a>
          </li>
        </ul>
        <div class="relative flex flex-row items-center gap-10 ">
          <input
            onClick={() => handleClick()}
            type="checkbox"
            class="peer sr-only opacity-0"
            id="theme-toggle"
          />
          <label
            for="theme-toggle"
            class="relative flex h-6 w-11 cursor-pointer  items-center rounded-full bg-gray-400 px-0.5 outline-gray-400 transition-colors before:h-5 before:w-5 before:rounded-full before:bg-white before:shadow before:transition-transform before:duration-300 peer-checked:bg-green-500 peer-checked:before:translate-x-full peer-focus-visible:outline peer-focus-visible:outline-offset-2 peer-focus-visible:outline-gray-400 peer-checked:peer-focus-visible:outline-green-500"
          ></label>
          <img
            src="images/shopping-bag-svgrepo-com (2).svg"
            class="w-10 md:w-12 h-10 cursor-pointer hidden sm:flex"
          />
        </div>
      </nav>
      <div class="flex flex-col md:flex-col md:text-center lg:flex-row justify-between text-center lg:text-left">
        <div class="flex-1 flex-shrink mb-0 sm:mt-36">
          <h1 class="text-4xl sm:text-5xl font-bold leading-normal">
            Groceries <br />
            delivery in&nbsp;
             <span class="font-extrabold animate-pulse bg-clip-text text-transparent bg-gradient-to-r from-yellow-500 to-green-500 bg-transparent">
            15 mins
            </span>
          </h1>

          <p class="mt-6 px-5 lg:px-0 sm:px-14 text-gray-500 animate-typing">
            Grocify offers a wide range of products, including fresh produce,
            meats, dairy, baked goods, and non-perishable items.
          </p>
          <div class="flex-col sm:flex-row my-10 flex justify-center lg:justify-start gap-6">
            <a
              href="#"
              class="py-3 px-8 bg-yellow-500 font-medium rounded-3xl inline-block border border-transparent hover:bg-transparent hover:border-yellow-500 hover:duration-300 hover:border whitespace-nowrap"
            >
              Order Now
            </a>
            <a
              href="#"
              class="py-3 px-6 bg-green-500 font-medium group rounded-3xl inline-block border border-transparent hover:bg-transparent hover:border-green-500 hover:border whitespace-nowrap"
            >
              Download App
              <span class="text-lg inline-block bg-none animate-bounce bg-transparent group-hover:animate-none">
                &#8595;
              </span>
            </a>
          </div>
        </div>
        <div class="relative flex-1 flex-shrink flex justify-center">
          <img
            src="images/grocery-image.png"
            class="mt-10 md:mt-5 h-[100vmin] w-[100vmin] md:h-[70vmin] md:w-[70vmin] object-cover hidden lg:flex"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
