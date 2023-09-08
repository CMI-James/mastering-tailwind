import React, { useState } from "react";

const Hero = ({ mode }) => {
  return (
    <div className="flex flex-col-reverse text-center lg:flex-row justify-between  lg:text-left mb-24 lg:mb-0">
      <div className="flex-1  flex justify-between lg:justify-end flex-col gap-7">
        <h1 className="text-5xl font-bold leading-[1.2em] ">
          Groceries <br />
          delivery in
          <span
            className={`inline-block  font-extrabold animate-pulse bg-clip-text text-transparent ${
              mode
                ? "bg-gradient-to-r from-yellow-500 to-green-500 bg-transparent"
                : "bg-gradient-to-r from-green-500 to-yellow-500 bg-transparent"
            }`}
          >
            &nbsp;15 mins
          </span>
        </h1>

        <p className=" px-5 lg:px-0 sm:px-10 text-gray-500 ">
          Grocify offers a wide range of products, including fresh produce,
          meats, dairy, baked goods, and non-perishable items.
        </p>
        <div className="flex-col sm:flex-row  flex justify-center lg:justify-start gap-6">
          <a
            href="#"
            className=" rotate-border-button py-3 px-8 bg-yellow-500 font-medium rounded-3xl inline-block border-2 border-transparent hover:bg-transparent hover:border-yellow-500  hover:border-2 whitespace-nowrap"
          >
            Order Now
          </a>
          <a
            href="#"
            className=" py-3 px-6 bg-green-500 font-medium group rounded-3xl inline-block border-2 border-transparent hover:bg-transparent hover:border-green-500 hover:border-2 whitespace-nowrap"
          >
            Download App&nbsp;
            <span className="text-lg inline-block bg-none animate-bounce bg-transparent group-hover:animate-none">
              &#8595;
            </span>
          </a>
        </div>
      </div>
      <div className="relative flex-1 flex-shrink flex justify-center">
        <img
          src="images/grocery-image.png"
          className="my-10 lg:my-0 md:mt-5 h-[70vmin] w-auto md:h-[60vmin] lg:h-[70vmin] object-cover flex"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
