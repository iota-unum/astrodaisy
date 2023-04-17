import React from "react";
import { useRouter } from "next/router";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";
import Horoscope from '../../../components/Horoscope'
import Head from "next/head";

const todayPage = ({params}) => {
  return ( <>

 
  
  <Horoscope params={params}></Horoscope>
  </>
  )
}

export default todayPage

export async function getStaticPaths() {
  const paths = zodiacSigns
    .map((z) => z.name)
    .map((sign) => ({ params: { sign } }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: { params },
  };
}


