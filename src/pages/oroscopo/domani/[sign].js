import React from "react";
import { zodiacSigns } from "../../../../assets/zodiacSigns";
import Horoscope from '../../../components/Horoscope'
import { getFormattedDate } from "@/libs/dates";
import { getDataBySign } from "@/libs/getDataFromDB";

const tomorrowPage = ({params, data}) => {
  return (
   <Horoscope params={params} data={data}></Horoscope>
  )
}
//fake commment
export default tomorrowPage

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

  const dayDateString = getFormattedDate(+1).dateDashes
  const sign = params.sign
const signData = await getDataBySign(sign, dayDateString)
    return {
      props: { params, data:signData}, 
    };
  }



