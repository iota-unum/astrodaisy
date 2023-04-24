import { getItalianTimestamp } from "@/libs/dates";
import Head from "next/head";
import React from "react";
import { zodiacSigns } from "../../assets/zodiacSigns";

const Card = ({ data}) => {
  console.log(data, 'DATA')
  const {sign, horoscope} = data
  console.log(data , 'DATA')
  return (
    <>
      <div className="card">
        <div className="flex">
        <h1 className="">{sign}</h1>
    
        </div>
        <div className="">
          <article className="">
            {horoscope}
          </article>
          <div className="font-bold p-4 mx-auto timestamp">{getItalianTimestamp()}</div>
        </div>
        <style jsx>
          {`
          .card {
              width: 600px;
              height: 800px;
              font-family: Helvetica;
              padding: .7rem;
              font-size: .75rem;
              background: gold;
              color: #222;
              
            }
            h1 {
              font-size: 2rem;
              font-weight: bold;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Card;
