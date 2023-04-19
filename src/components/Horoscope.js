import React from "react";
import { useRouter } from "next/router";
import { zodiacSigns } from "../../assets/zodiacSigns";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";
import Head from "next/head";
import {
  addOneDay,
  formatColonsToJsDashes,
  formatItalianDate,
  getNowDateStr,
  getTodayYesterdayTomorrow,
} from "@/libs/dates";

const Horoscope = ({ params, data }) => {
  console.log("PARAMS", params);
  const pathName = useRouter().pathname;
  const router = useRouter();
  const baseLink = pathName.replace("[sign]", "");

  const tabs = ["ieri", "oggi", "domani"];
  console.log("path", pathName);
  const day = pathName.split("/")[2];
  const { sign } = params;
  console.log("base", baseLink + sign);
  const signIcon = zodiacSigns.filter((z) => z.name === sign)[0].icon;
  const { horoscope, date } = data[0];
  // console.log(date);
  // console.log(formatItalianDate(date));
  // console.log("dashes", formatColonsToJsDashes(date));
  // const jsString = formatColonsToJsDashes(date);
  // console.log("add", addOneDay(jsString));
  // console.log("NOW", getNowDateStr());
  // console.log(getTodayYesterdayTomorrow(date));
  return (
    <>
      <Head>
        <title>{`${sign} ${day}`}</title>
      </Head>

      <MainLayout>
        <div className="flex overflow-hidden w-full :w-2/3 sm:mx-auto">
          <div className="flex w-full h-full justify-center prose prose-sm bg-neutral text-primary sm:mx-auto">
            <div className="w-full h-screen bg-base-100">
              <div className="flex items-baseline justify-between px-2 py-4">
                <h1 className="text-primary-focus text- m-0">{sign}</h1>
                {/* <div className="fill-current text-primary-focus w-1/12">
                  {signIcon}
                </div> */}
                <div className="text-xs">{formatItalianDate(date)}</div>
              </div>
              <div className="bg-neutral flex justify-around p-2">
                {tabs.map((t) => (
                  <Link
                    href={`/oroscopo/${t}/${sign}`}
                    key={t}
                    className={`no-underline ${
                      t === day
                        ? "text-primary-focus border border-transparent border-b-primary-focus"
                        : "text-neutral-content "
                    }`}
                  >
                    {t}
                  </Link>
                ))}
              </div>
              <div className="prose prose-sm p-4 h-[500px] leading-normal text-sm overflow-y-auto">{horoscope}</div>
            </div>
            <div className="flex flex-col bg-base-300 w-2/12 justify-evenly  h-full">
              {zodiacSigns.map((z) => (
                <Link
                  href={baseLink + z.name}
                  className={`fill-current w-2/3 sm:w-1/2 md:w-5/12 mx-auto ${
                    z.name === sign
                      ? "text-primary-focus"
                      : "text-neutral-content"
                  } `}
                >
                  {z.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Horoscope;
