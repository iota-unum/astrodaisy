import React from "react";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import Horoscope from '../../../components/Horoscope'
import { getFormattedDate } from "@/libs/dates";
import { getDataFromDB } from "@/libs/getDataFromDB";

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
    fallback: "blocking"
  };
}

export async function getStaticProps({ params }) {

  const dayDateString = getFormattedDate(-1).dateDashes
    const allData = await  getDataFromDB(dayDateString)
    const signData = allData[0].horoscopes.filter(s => s.sign === params.sign)
    return {
      props: { params, data:signData}, 
      revalidate: 60*60,
    };
  }


