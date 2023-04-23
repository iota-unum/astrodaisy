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
import { TwitterApi } from "twitter-api-v2";
import path from 'path';
const imagePath = path.join(process.cwd(), 'public', 'cards', 'toro.png');

export default async function handler(req, res) {
  try {
   
    const client = new TwitterApi({
      appKey: process.env.API_KEY,
      appSecret: process.env.API_KEY_SECRET,
      accessToken: process.env.ACCESS_TOKEN,
      accessSecret: process.env.ACCESS_TOKEN_SECRET,
    });

    const mediaId = await client.v1.uploadMedia(imagePath);
    const newTweet = await client.v1.tweet('Hello!', { media_ids: mediaId });
    // const tweet = await client.v1.tweet("rivediamo");

    console.log("TWEET SENT!!!");
    res.status(200).json({ res: "tweet sent!", newTweet });
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}



