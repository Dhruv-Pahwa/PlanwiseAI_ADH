import React, { useContext } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { LogInContext } from "@/Context/LogInContext/Login";
import Marquee from "../ui/marquee";

function Homepage({ heroRef }) {
  const { isAuthenticated } = useContext(LogInContext);

  // Hero Section Data
  const images = [
    { name: "Chichen Itza", src: "/hero/chichen.webp", link: "https://en.wikipedia.org/wiki/Chichen_Itza" },
    { name: "Christ the Redeemer", src: "/hero/christ.webp", link: "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)" },
    { name: "Colosseum", src: "/hero/colosseum.webp", link: "https://en.wikipedia.org/wiki/Colosseum" },
    { name: "Taj Mahal", src: "/hero/taj.webp", link: "https://en.wikipedia.org/wiki/Taj_Mahal" },
    { name: "Great Wall of China", src: "/hero/wall.webp", link: "https://en.wikipedia.org/wiki/Great_Wall_of_China" },
    { name: "Eiffel Tower", src: "/hero/tower.webp", link: "https://en.wikipedia.org/wiki/Eiffel_Tower" }
  ];

  // Popular Plans Data
  const plans = [
    { name: "Maha Kumbh", description: "Witness the world's largest spiritual gathering at the Ganges.", img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7dadc715800333.56297178b908b.jpg" },
    { name: "La Tomatina", description: "Join the world's biggest food fight in Spain.", img: "https://i.pinimg.com/originals/e6/be/22/e6be226af20b77bff8c22c1e14939301.jpg" },
    { name: "Rio Carnival", description: "Experience the world's biggest carnival in Brazil.", img: "https://c4.wallpaperflare.com/wallpaper/414/25/137/rio-carnival-wings-brazil-rio-de-janeiro-wallpaper-preview.jpg" }
  ];

  // How It Works Data
  const steps = [
    { title: "Choose Your Destination", description: "Select from a wide range of curated experiences and locations.", icon: "🌍" },
    { title: "Customize Your Plan", description: "Tailor your trip with personalized recommendations and itineraries.", icon: "🛠" },
    { title: "Enjoy Your Adventure", description: "Experience seamless travel with our AI-powered planner.", icon: "✈️" }
  ];

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div ref={heroRef} className="flex items-center flex-col text-center justify-center min-h-screen py-10">
        <div className="text px-10 md:px-40 flex flex-col items-center justify-center gap-4">
          <div className="heading p-2 md:py-5">
            <h1 className="font-black text-3xl md:text-5xl bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-transparent">
              Embark on Electrifying <br /> Adventures with
            </h1>
            <h1 className="font-black text-5xl md:text-9xl bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-center text-transparent pb-4">
              PlanwiseAI
            </h1>
          </div>
          <h5 className="opacity-90 mx-auto text-center text-lg font-medium tracking-tight text-primary/80 md:text-xl">
            Your trusted trip planner and adventure guide.
          </h5>
          <div className="buttons flex flex-col gap-3 md:flex-row">
            <Link to="/plan-a-trip">
              <Button>{isAuthenticated ? "Let's Make Another Trip" : "Plan a Trip, It's Free"}</Button>
            </Link>
          </div>
          <div className="marquee relative flex w-[75vw] flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
            <Marquee reverse className="[--duration:60s]">
              {images.slice(Math.ceil(images.length / 2)).map((item, index) => (
                <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer"
                  className="img cursor-pointer border hover:border-foreground transition-all overflow-hidden rounded-md w-[200px] md:w-[250px]">
                  <img src={item.src} alt={item.name} className="h-full hover:scale-110 duration-300" loading="lazy" />
                </Link>
              ))}
            </Marquee>
            <Marquee className="[--duration:60s]">
              {images.slice(0, Math.ceil(images.length / 2)).map((item, index) => (
                <Link key={index} to={item.link} target="_blank" rel="noopener noreferrer"
                  className="img cursor-pointer border hover:border-foreground transition-all overflow-hidden rounded-md w-[200px] md:w-[250px]">
                  <img src={item.src} alt={item.name} className="h-full hover:scale-110 duration-300" loading="lazy" />
                </Link>
              ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
          </div>
        </div>
      </div>

      {/* Popular Plans Section - Adjusted spacing */}
      <div id="popular-plans" className="popular-plans px-5 md:px-20 text-center scroll-mt-16"> {/* Removed py-5 entirely */}
        <h2 className="font-black text-3xl md:text-5xl bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-white dark:to-gray-300 mb-4 mt-2"> {/* Reduced mb-6 to mb-4 and added mt-2 */}
          Popular Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="overflow-hidden">
                <img 
                  src={plan.img} 
                  alt={plan.name} 
                  className="w-full h-60 object-cover transform transition duration-500 hover:scale-110 hover:shadow-lg"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-300 mt-2">{plan.description}</p>
                <Link 
                  to={plan.name === "Maha Kumbh" ? "/public/mahakumbh.html" : 
                      plan.name === "Rio Carnival" ? "/public/rio.html" : 
                      "/public/latomatina.html"}
                >
                  <Button className="mt-4 bg-primary text-white dark:bg-black dark:text-white transition-all duration-300 hover:scale-105">
                    Explore Plan
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Section */}
      <div id="how-it-works" className="how-it-works py-10 px-5 md:px-20 text-center scroll-mt-16">
        <h2 className="font-black text-3xl md:text-5xl bg-gradient-to-b from-primary/90 to-primary/60 bg-clip-text text-transparent mb-10">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
            >
              <span className="text-5xl">{step.icon}</span>
              <h3 className="text-xl font-semibold mt-4 dark:text-white">{step.title}</h3>
              <p className="text-gray-600 mt-2 dark:text-gray-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
