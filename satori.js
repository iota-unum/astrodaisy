// api.jsx
import satori from 'satori'
import fs from 'fs/promises'
const fontPath = './Roboto/Roboto-Regular.ttf'
export async function getSvg(){

    const fontArrayBuf = await fs.readFile(fontPath)
    console.log('satori')
    const svg = await satori(

      <div style={{ color: 'black' }}>hello, world</div>,
      {
        width: 600,
        height: 400,
        fonts: [
          {
            name: 'Roboto',
            // Use `fs` (Node.js only) or `fetch` to read the font as Buffer/ArrayBuffer and provide `data` here.
            data: fontArrayBuf,
            weight: 400,
            style: 'normal',
          },
        ],
      },
    )

return svg
}