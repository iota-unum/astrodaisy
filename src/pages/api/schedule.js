import Card from '@/components/Card';
import ReactDOMServer from 'react-dom/server';

import { tweetCard } from '@/libs/tweetImage';
import path from 'path';
import { zodiacSigns } from '../../../assets/zodiacSigns';
import generateImage from '@/libs/generateImage';

export default async function handler(req, res) {
  try {

for (let sign of zodiacSigns){
    const htmlString = ReactDOMServer.renderToString(<Card data={sign}/>); 
    const image = await generateImage(htmlString, sign.name)
    console.log('generated IMAGE!')
    const tweet = await tweetCard(sign.name)

    console.log("TWEET SENT!!!", tweet);
}
   

    

    res.status(200).json({ res: "all tweets sent!", });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}