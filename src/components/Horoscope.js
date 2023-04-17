import React from "react";
import { useRouter } from "next/router";
import { zodiacSigns } from "../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import Head from "next/head";

const Horoscope = ({ params }) => {
    console.log('PARAMS', params)
  const pathName = useRouter().pathname;
  const tabs = ['ieri', 'oggi', 'domani']
  console.log("router", pathName);
  const day = pathName.split("/")[2];
  const { sign } = params;
  const signIcon = zodiacSigns.filter((z) => z.name === sign)[0].icon;
  return (

    <>
    <Head>
        <title>{`${sign} ${day}`}</title>
    </Head>
    
    <MainLayout>
      <div className="flex w-full h-full justify-center  bg-neutral text-primary">
        <div className="w-full md:w-2/3 bg-base-100">
          <h1 className="text-primary-focus">{sign}</h1>

<div className="bg-neutral flex justify-around">
  {tabs.map(t => <Link href={`/oroscopo/${t}/${sign}`} key={t} className={t === day && "text-accent-focus"}>{t}</Link>)}
</div>
          <div className="fill-current text-secondary w-8">{signIcon}</div>
          <p>{day}</p>
        </div>
      </div>
    </MainLayout>
    </>
  );
};

export default Horoscope