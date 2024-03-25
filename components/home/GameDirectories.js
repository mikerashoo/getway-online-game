
import React from "react"; 

function GameDirectories() {
  const gameLists = [
    {
      imgUrl: "/assets/imgs/dog_race_icon.jpg",
      link: "/dog-race",
    },
    {
      imgUrl: "/assets/imgs/keno_icon.jpg",
      link: "/keno",
    } 
  ];
  return (
   <>
          <p className="text-center mt-4 font-medium text-emerald-700">
            OUR VIRTUAL GAMES
          </p>
          <div className="flex flex-col md:flex-row gap-6 my-4">
            {...gameLists.map((game, key) => (
              
                <a
                  key={key}
                  className=" relative group w-full h-full"
                  href={game.link}
                >
                  <img
                    src={game.imgUrl}
                    alt="Image" 
                   className="object-cover h-52 w-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-16 w-16 text-white stroke-current stroke-2 cursor-pointer"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 3l14 9-14 9V3z"
                      />
                    </svg>
                  </div>
                </a>
             
            ))}
 
          </div>
        </>
  );
}

export default GameDirectories;
