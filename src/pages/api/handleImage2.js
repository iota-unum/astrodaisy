
import Card from '@/components/Card';
import { getTodayYesterdayTomorrow } from '@/libs/dates';
import generateImage from '@/libs/generateImage';
import { getJson } from '@/libs/getJson';
import nodeHtmlToImage from 'node-html-to-image'
import ReactDOMServer from 'react-dom/server';
import { zodiacSigns } from '../../../assets/zodiacSigns';


export default async function handler(req, res) {
  const {today, yesterday} = getTodayYesterdayTomorrow()
  const signs = await getJson(today)
  
  try {
    for (let sign of signs) {
      console.log(sign ,'SEGNO')
        const htmlString = ReactDOMServer.renderToString(<Card data={sign}/>);
       await generateImage(htmlString, sign.sign).then(console.log('IMMAGINE GENERATA'))

      }

        res.status(200).json({response:'immagini generate'})
        
    } catch (error) {
        console.log(error)
        
    }
}