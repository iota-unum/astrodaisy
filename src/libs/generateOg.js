import { ImageResponse } from "@vercel/og";
import Leo from "../../public/zodiac-icons/leo.svg";
import fs from "fs";
import { getItalianTimestamp } from "./dates";
import path from "path";

// export const config = {
//   runtime: "edge",
// };

export async function generateOgImg(sign) {
  const timestamp = getItalianTimestamp();
  const imagePath = path.join(
    process.cwd(),
    "public",
    "cards",
    sign.sign + ".png"
  );
  const image = new ImageResponse(
    (
      <div
        style={{
          height: "800px",
          width: "600px",
          backgroundImage:
            'url("https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXVyb3JhJTIwYm9yZWFsaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60")',
          backgroundSize: "cover",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            background: "rgba( 255, 255, 255, 0.2 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 10px )",
            WebkitBackdropFilter: "blur( 10px )",
            borderRadius: "10px",
            border: "1px solid rgba( 255, 255, 255, 0.18 )",
            fontSize: "2rem",
            width: "90%",
            height: "90%",
            padding: "2rem",
            color: "#ccc",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1 style={{
            fontSize:'50px'
          }} >{sign.sign}</h1>
          <p style={{
            fontSize:"20px"
          }} >{sign.horoscope}</p>
          <p>{timestamp}</p>
        </div>
      </div>
    ),
    {
      width: 600,
      height: 800,
    }
  );

  const dataUrl = await toDataURL_node(image);
  const bufferData = Buffer.from(dataUrl, "base64");
  const img = fs.writeFileSync(imagePath, bufferData);

  return bufferData;
}

async function toDataURL_node(response) {
  let blob = await response.blob();
  let buffer = Buffer.from(await blob.arrayBuffer());
  return buffer.toString("base64");
}
