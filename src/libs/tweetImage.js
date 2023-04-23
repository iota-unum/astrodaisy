import { TwitterApi } from "twitter-api-v2";
import path from "path";
const client = new TwitterApi({
  appKey: process.env.API_KEY,
  appSecret: process.env.API_KEY_SECRET,
  accessToken: process.env.ACCESS_TOKEN,
  accessSecret: process.env.ACCESS_TOKEN_SECRET,
});
export async function tweetCard(sign) {
  const imagePath = path.join(process.cwd(), "public", "cards", sign + ".jpg");
  const mediaId = await client.v1.uploadMedia(imagePath);
  const newTweet = await client.v1.tweet("Hello!", { media_ids: mediaId });

  return newTweet;
}
