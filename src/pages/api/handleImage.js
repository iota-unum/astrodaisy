
import Card from '@/components/Card';
import generateImage from '@/libs/generateImage';
import nodeHtmlToImage from 'node-html-to-image'
import ReactDOMServer from 'react-dom/server';


export default async function handler(req, res) {
    const htmlString = ReactDOMServer.renderToString('<h1>Ciao Mondo!!!</h1>');


    
    try {
      generateImage(htmlString).then(console.log('IMMAGINE GENERATA'))

        res.status(200).json({response:'ciao'})
        
    } catch (error) {
        console.log(error)
        
    }
}