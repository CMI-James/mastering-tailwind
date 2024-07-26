import React from "react";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="w-full h-screen grid md:grid-cols-2 p-3 bg-zinc-900">
      <div className="relative w-full h-full  md:flex hidden bg-black rounded-s-md">
        <Image
          alt="ok"
          src="/Images/login-page.jpg"
          layout="fill"
          objectFit="cover"
          className="rounded-xl p-6 opacity-60"
          priority
        />
      </div>
      <div className="flex flex-col justify-center items-center bg-black p-8 rounded-e-md">
        <div className="w-full max-w-md">
          <h1 className="text-white text-4xl mb-6">Create an account</h1>
          <p className="text-zinc-400 mb-4">
            Already have an account?{" "}
            <Link href="/login" className="text-yellow-500">
              Log in
            </Link>
          </p>
          <form className="space-y-6">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="First name"
                className="w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
            />
            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 rounded-md bg-zinc-700 text-white focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              />
              <button type="button" className="absolute inset-y-0 right-0 p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-zinc-400"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12h.01M12 12h.01M9 12h.01M6 12h.01M3 12h.01M6 9h.01M9 9h.01M12 9h.01M15 9h.01M18 9h.01M3 15h.01M6 15h.01M9 15h.01M12 15h.01M15 15h.01M18 15h.01M3 18h.01M6 18h.01M9 18h.01M12 18h.01M15 18h.01M18 18h.01"
                  />
                </svg>
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"
              />
              <label htmlFor="terms" className="text-zinc-400">
                I agree to the{" "}
                <a href="#" className="text-yellow-500">
                  Terms & Conditions
                </a>
              </label>
            </div>
            <button
              type="submit"
              className="w-full p-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-700"
            >
              Create account
            </button>
          </form>
          <div className="flex items-center space-x-2 my-4">
            <hr className="flex-grow border-t border-zinc-600" />
            <span className="text-zinc-400 text-sm">Or register with</span>
            <hr className="flex-grow border-t border-zinc-600" />
          </div>
          <div className="flex justify-center space-x-4 w-full">
            <button className="bg-black hover:bg-zinc-950 border-[1px] p-2 gap-2 rounded-md flex w-full justify-center items-center">
              <FcGoogle />
              <p>Google</p>
            </button>
            <button className="bg-black hover:bg-zinc-950 border-[1px] border-white p-2 gap-2 rounded-md flex w-full justify-center items-center">
              <FaXTwitter />
              <p>Twitter</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
