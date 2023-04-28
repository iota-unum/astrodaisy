import { tweetCard } from '@/libs/tweetImage';
import { getRandomNumber } from '@/libs/utilities';
import path from 'path';
import { zodiacSigns } from '../../../assets/zodiacSigns';

export default async function handler(req, res) {

    // const {sign} = req.query
    const sign = 'gemelli'
    console.log(process.env.PWD)
  try {

    const tweet = await tweetCard(sign)

    console.log("TWEET SENT!!!", TWEET);

   

    

    res.status(200).json({ res: "all tweets sent!",   });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}