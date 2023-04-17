import Link from "next/link";
import React from "react";
import { zodiacSigns } from "../../assets/zodiacSigns";

const ListOfSigns = () => {
  console.log(zodiacSigns)
  return (
    <div className="w-10/12 flex flex-wrap justify-between mt-10  bg-neutral-focus p-2 rounded-xl text-primary ">
      {" "}
      {zodiacSigns.map((z) => (
        <Link href={`/oroscopo/oggi/${z.name}`} className="fill-current  w-1/5 m-2 px-2 flex flex-col items-center hover:text-secondary">
           {z.icon} 
           <p className=" text-xs">{z.name}</p>
        </Link>
      ))}{" "}
    </div>
  );
};

export default ListOfSigns;
