import { generateOgImg } from "@/libs/generateOg";
import path from "path";
import fs from "fs";
import { getTodayYesterdayTomorrow } from "@/libs/dates";
import { getJson } from "@/libs/getJson";

// export const config = {
//   runtime: "edge",
// };

export default async function handler(req, res) {
  const { today } = getTodayYesterdayTomorrow();
  const signs = await getJson(today);
  try {
      
      for (let sign of signs){
     

        await generateOgImg(sign);
        console.log('done ', sign.sign)

    }
    res.status(200).json({ msg: "all right"});
  } catch (error) {
    console.log(error);
    res.status(400).json({ error });
  }
}
