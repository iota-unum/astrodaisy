import React from "react";
import { useRouter } from "next/router";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";
import Horoscope from '../../../components/Horoscope'
import { getTodayYesterdayTomorrow } from "@/libs/dates";
import { getJson } from "@/libs/getJson";

const tomorrowPage = ({params, data}) => {
  return (
   <Horoscope params={params} data={data}></Horoscope>
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
  const {tomorrow} = getTodayYesterdayTomorrow()
  console.log('today', tomorrow)
    const data = getJson(tomorrow).filter(s =>(s.sign === params.sign))
    return {
      props: { params, data},
      revalidate: 60*60,

    };
}



