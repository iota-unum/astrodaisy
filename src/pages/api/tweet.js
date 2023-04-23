// import { TwitterApi } from "twitter-api-v2";

// export default async function handler(req, res) {
//   try {
   
//     const client = new TwitterApi({
//       appKey: process.env.API_KEY,
//       appSecret: process.env.API_KEY_SECRET,
//       accessToken: process.env.ACCESS_TOKEN,
//       accessSecret: process.env.ACCESS_TOKEN_SECRET,
//     });

//     const rwClient = client.readWrite;

//     const tweet = await rwClient.v1.tweet("vediamo");

//     console.log("TWEET SENT!!!");
//     res.status(200).json({ res: "tweet sent!", tweet });
//   } catch (error) {
//     console.log(error);
//     res.status(400).json({ error });
//   }
// }

import { tweetCard } from '@/libs/tweetImage';
import path from 'path';

export default async function handler(req, res) {
  try {
   
   const tweet = await tweetCard('pesci')

    

    console.log("TWEET SENT!!!", tweet);
    res.status(200).json({ res: "tweet sent!", tweet });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}



