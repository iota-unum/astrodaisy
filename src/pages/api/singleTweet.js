import { tweetCard } from '@/libs/tweetImage';
import { getRandomNumber } from '@/libs/utilities';
import path from 'path';
import { zodiacSigns } from '../../../assets/zodiacSigns';

export default async function handler(req, res) {

    // const {sign} = req.query
    const sign = 'sagittario'
  try {

    const tweet = await tweetCard(sign)

    console.log("TWEET SENT!!!", tweet);

   

    

    res.status(200).json({ res: "all tweets sent!",  tweet});
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}