import Card from '@/components/Card';
import ReactDOMServer from 'react-dom/server';

import { tweetCard } from '@/libs/tweetImage';
import path from 'path';
import { zodiacSigns } from '../../../assets/zodiacSigns';
import generateImage from '@/libs/generateImage';
import { getTodayYesterdayTomorrow } from '@/libs/dates';
import { getJson } from '@/libs/getJson';

export default async function handler(req, res) {
    const {today, yesterday} = getTodayYesterdayTomorrow()

    const signs = await getJson(today)

  try {

for (let sign of signs){
    const htmlString = ReactDOMServer.renderToString(<Card data={sign}/>); 
    const image = await generateImage(htmlString, sign.sign)
    console.log('generated IMAGE!')
    const tweet = await tweetCard(sign.sign)

    console.log("TWEET SENT!!!", tweet);
}
   

    

    res.status(200).json({ res: "all tweets sent!", });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}