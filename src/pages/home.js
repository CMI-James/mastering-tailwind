
import React, { useState } from "react";

const Hero = () => {
  return (
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
            class=" rotate-border-button py-3 px-8 bg-yellow-500 font-medium rounded-3xl inline-block border border-transparent hover:bg-transparent hover:border-yellow-500 hover:duration-300 hover:border whitespace-nowrap"
          >
            Order Now
          </a>
          <a
            href="#"
            class="homeButton py-3 px-6 bg-green-500 font-medium group rounded-3xl inline-block border border-transparent hover:bg-transparent hover:border-green-500 hover:border whitespace-nowrap"
          >
            Download App&nbsp;
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
  );
};

export default Hero;
