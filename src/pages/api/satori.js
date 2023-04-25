import satori from 'satori'
import fs from 'fs/promises'
import path from 'path';
import Leo from './../../../public/zodiac-icons/leo.svg'
import { getJson } from '@/libs/getJson';
import { getTodayYesterdayTomorrow } from '@/libs/dates';
const fontPath = './Roboto/Roboto-Regular.ttf'
const fontUrl = "https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;1,400;1,500&display=swap"
const svg2img = require('svg2img');
const btoa = require('btoa');

export default async function handler (req, res) {
    const fontArrayBuf = await fs.readFile(fontPath)
    const {today} = getTodayYesterdayTomorrow()
    const signs = await getJson(today)
try {
   const title  = signs[1].sign

    const svg = await satori(
      <div 
      style={{
        
       
          
          
      }}
      tw="bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 w-full h-full text-white flex flex-col p-12 leading-loose "
    //   style={{ color: 'white', fontSize:"4rem", background:'red', width:"100%", height: "100%"}}
      
      
      >
        <h1 tw="text-white  text-[9rem] flex justify-center">{title}</h1>
        <p tw="text-4xl leading-normal">{signs[1].horoscope}</p>

        </div>,
      {
        width: 1200, 
        height: 1600,
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

    console.log(svg)
    svg2img(svg, function(error, buffer) {
        //returns a Buffer
       fs.writeFile('foo1.png', buffer);
     console.log('DONE')
    });
    res.status(200).json({svg})
    
} catch (error) {
    console.log(error)
    res.status(400).json({error})
    
}






}


