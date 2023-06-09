import React from "react";
import { useRouter } from "next/router";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";
import Horoscope from '../../../components/Horoscope'
import Head from "next/head";
// import { getJson } from "@/libs/getJson";
import { getFormattedDate, getTodayYesterdayTomorrow } from "@/libs/dates";
import { getDataBySign, } from "@/libs/getDataFromDB";
const todayPage = ({params, data}) => {
  return ( <>

 {/* <div> {JSON.stringify(data, null, 4)} </div> */}
  
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
    fallback: "blocking"
  };
}

export async function getStaticProps({ params }) {

const dayDateString = getFormattedDate(0).dateDashes
const sign = params.sign
const signData = await getDataBySign(sign, dayDateString)
 
  return {
    props: { params, data:signData}, 
  };
}


