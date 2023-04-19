import React from "react";
import { useRouter } from "next/router";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";
import Horoscope from '../../../components/Horoscope'
import { getTodayYesterdayTomorrow } from "@/libs/dates";
import { getJson } from "@/libs/getJson";

const yesterdayPage = ({params, data}) => {
  return (
   <Horoscope params={params} data={data}></Horoscope>
  )
}

export default yesterdayPage

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
  const {yesterday} = getTodayYesterdayTomorrow()
  console.log('today', yesterday)
    const data = getJson(yesterday).filter(s =>(s.sign === params.sign))
    return {
      props: { params, data},

      revalidate: 60*60,

    };
}


