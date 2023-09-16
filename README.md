import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  BsCameraVideoFill,
  BsBackspaceFill,
  BsHouseAddFill,
  BsTvFill,
  BsCalendar2,
  BsBox2,
} from "react-icons/bs";

const API_KEY = "8fd9104bfdd163dd0406d6f990f34d57";
const API_URL = "https://api.themoviedb.org/3/movie/";

const MovieDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  const [movieDetails, setMovieDetails] = useState(null);
  const [videoDetails, setVideoDetails] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`${API_URL}${id}/credits?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setCredits(data);
        })
        .catch((error) => {
          console.error("Error fetching credits:", error);
          setCredits(null);
        });

      fetch(`${API_URL}${id}?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          setMovieDetails(data);
        })
        .catch((error) => {
          console.error("Error fetching movie details:", error);
          setMovieDetails(null);
        });
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      fetch(`${API_URL}${id}/videos?api_key=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.results.length > 0) {
            setVideoDetails(data.results[0]);
          }
        })
        .catch((error) => {
          console.error("Error fetching video details:", error);
          setVideoDetails(null);
        });
    }
  }, [id]);

  if (!movieDetails) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-2xl">Loading...</p>
      </div>
    );
  }

  const { title, release_date, runtime, overview, poster_path, stars } =
    movieDetails;

  const backgroundImageStyle = {
    backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  // Array to represent the navigation links
  const navigationLinks = [
    { icon: <BsHouseAddFill />, text: "Home", href: "/" },
    { icon: <BsCameraVideoFill />, text: "Movies", href: "/" },
    { icon: <BsTvFill />, text: "TV Series", href: "/" },
    { icon: <BsCalendar2 />, text: "Upcoming", href: "/" },
  ];

  return (
    <div className=" w-full text-black flex">
      <div className="py-8  w-64 border-zinc-300 border-2 h-screen rounded-r-2xl flex justify-between flex-col items-center">
        <Link
          href="/"
          className="flex px-1 items-center w-full pl-5 text-2xl gap-5 "
        >
          <BsBox2 className="fill-red-600" /> MoviesBox
        </Link>

        <ul className="text-xl  flex flex-col w-full">
          {navigationLinks.map((link, index) => (
            <li key={index}>
              <Link
                href={link.href}
                className="flex  items-center hover:bg-red-50 duration-300 gap-2 hover:text-red-600 hover:fill-white hover:border-r-4 hover:border-r-red-600  pl-5 py-3"
              >
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <p className="flex items-center gap-2 text-xl w-full pl-5">
          <BsBackspaceFill /> logout
        </p>
      </div>
      <div className="flex  h-screen -z-50 flex-col p-5">
        <div className=" flex h-1/2 ">
          {videoDetails && (
            <iframe
              className="w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoDetails.key}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="flex md:gap-3 opacity-80  font-bold text-md my-2 gap-1 items-center justify-center md:justify-start ">
          <h1 data-testid="movie-title">{title}</h1>
          &#183;
          <p>
            <span data-testid="movie-release-date">{release_date}</span>
          </p>
          &#183;
          <p>
            <span data-testid="movie-runtime">{runtime}</span> minutes
          </p>
        </div>
        <div className="flex justify-between flex-col md:flex-row">
          {" "}
          <p
            data-testid="movie-overview"
            className="sm:text-left text-center text-sm"
          >
            {overview}
          </p>
          <div className="flex flex-col gap-2 mx-3 my-5 md:my-0 cursor-pointer">
            <button className="whitespace-nowrap  py-2 px-4 md:w-64 rounded-lg border-red bg-red-600 text-white border-2">
              See Showtimes
            </button>
            <button className="whitespace-nowrap  py-2 px-4 rounded-lg border-red border-2 bg-red-50 ">
              More watch options
            </button>
          </div>
        </div>
        {credits && (
          <div className="flex flex-col mt-3 gap-3">
            <div className="flex gap-2">
              <h2>Directors:</h2>
              <ul className="flex text-red-600">
                {credits.crew
                  .filter((member) => member.job === "Director")
                  .map((director, index, array) => (
                    <li key={director.id}>
                      {director.name}
                      {index < array.length - 1 ? ", " : ""}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex gap-2">
              <h2>Writers:</h2>
              <ul className="flex text-red-600">
                {credits.crew
                  .filter(
                    (member) =>
                      member.job === "Screenplay" || member.job === "Writer"
                  )
                  .map((writer, index, array) => (
                    <li key={writer.id}>
                      {writer.name}
                      {index < array.length - 1 ? ", " : ""}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex gap-2">
              {" "}
              <h2>Stars:</h2>
              <ul className="flex text-red-600">
                {credits.cast
                  .slice(0, 3) // Limit to the first 3 stars
                  .map((star, index) => (
                    <li key={star.id}>
                      {star.name}
                      {index < 2 ? ", " : ""}{" "}
                      {/* Add comma and space for the first 2 stars */}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieDetails;
