
import Card from '@/components/Card';
import { getTodayYesterdayTomorrow } from '@/libs/dates';
import generateImage from '@/libs/generateImage';
import { getJson } from '@/libs/getJson';
import nodeHtmlToImage from 'node-html-to-image'
import ReactDOMServer from 'react-dom/server';
import { zodiacSigns } from '../../../assets/zodiacSigns';


export default async function handler(req, res) {
    const htmlString = ReactDOMServer.renderToString('<h1>Ciao Mondo!!!</h1>');
const {today} = getTodayYesterdayTomorrow()
const signs = await getJson(today)
    
    try {
      for (let sign of signs) {
       await generateImage(sign.horoscope, sign.sign).then(console.log('IMMAGINE GENERATA'))

      }

        res.status(200).json({response:'ciao'})
        
    } catch (error) {
        console.log(error)
        
    }
}