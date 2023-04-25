import { ImageResponse } from "@vercel/og";
import fs from "fs";

// export const config = {
//   runtime: "edge",
// };

export default async function handler(req, res) {
  const image = new ImageResponse(
    (
      <div
        tw="bg-red-500 w-[300px] "
        // style={{
        //   fontSize: 128,
        //   background: 'white',
        //   width: '100%',
        //   height: '100%',
        //   display: 'flex',
        //   textAlign: 'center',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );

  const data = await toDataURL_node(image);
  console.log(data);
  console.log(res)
  await res.status(200).json({data})
}

async function toDataURL_node(response) {
  let blob = await response.blob();
  let buffer = Buffer.from(await blob.text());
  return "data:" + blob.type + ";base64," + buffer.toString("base64");
}
