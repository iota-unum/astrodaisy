import { ImageResponse } from "@vercel/og";
import fs from "fs";

// export const config = {
//   runtime: "edge",
// };

export async function generateOgImg () {
  const image = new ImageResponse(
    (
      <div
        tw="bg-indigo-500  text-5xl text-white font-black w-full h-full font-light"
        // style={{
        //   width: '100%',
        //   height: '100%',
        //   display: 'flex',
        //   textAlign: 'center',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        Ce l'abbiamo fatta!!!
      </div>
    ),
    {
      width: 600,
      height: 800,
    }
  );

  const data = await toDataURL_node(image);
  console.log(data);
  
  return data
}

async function toDataURL_node(response) {
  let blob = await response.blob();
  let buffer = Buffer.from(await blob.arrayBuffer());
  return  buffer.toString("base64");
}
