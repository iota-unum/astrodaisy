import React from "react";
import Horoscope from '../../../components/Horoscope'
import { useRouter } from "next/router";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";

const tomorrowPage = ({params}) => {
  return (
   <Horoscope params={params}></Horoscope>
  )
}

export default tomorrowPage

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
