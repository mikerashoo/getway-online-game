import Link from "next/link";
import React from "react";
import DogRceIcon from "@/assets/imgs/dog_race_icon.jpg";
import KenoIcon from "@/assets/imgs/keno_icon.jpg";
import Image from "next/image";

function GameDirectories() {
  return (
    <div className="grid grid-cols-2 text-center items-center justify-center justify-items-stretch">
      <a
        href="/dog-race"
        className=""
      
      >
        <Image
          src={DogRceIcon}
          width={200}
          height={200}
          alt="Dog race Icon"
          className="object-cover"
        />
      </a>

      <a
        href="/keno"
        className=" bg-red-600"
        
      >
        <Image
          src={KenoIcon}
          width={200}
          height={200}
          alt="Dog race Icon"
          className="object-cover"
        />
      </a>
    </div>
  );
}

export default GameDirectories;
