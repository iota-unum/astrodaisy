import React from "react";
import { useRouter } from "next/router";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";
import Horoscope from '../../../components/Horoscope'
import Head from "next/head";
import { getJson } from "@/libs/getJson";
import { getTodayYesterdayTomorrow } from "@/libs/dates";
const todayPage = ({params, data}) => {
  return ( <>

 
  
  <Horoscope params={params} data={data}></Horoscope>
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
const {today} = getTodayYesterdayTomorrow()
console.log('today', today)
  const data = getJson(today).filter(s =>(s.sign === params.sign))
  return {
    props: { params, data}, 
    revalidate: 60*60,
  };
}


