import { generateOgImg } from "@/libs/generateOg";
import path from "path";
import fs from 'fs'


// export const config = {
//   runtime: "edge",
// };

export default async function handler(req, res) {
  try {
    const imagePath = path.join(process.cwd(), "public", "images", "example.png");

    const dataUrl = await generateOgImg()
    const bufferData = Buffer.from(dataUrl, 'base64')
   const img =  fs.writeFileSync(imagePath, bufferData)
    res.status(200).json({msg:'all right', dataUrl})
    
  } catch (error) {
    console.log(error)
    res.status(400).json({error})
  }
}
