
import Card from '@/components/Card';
import nodeHtmlToImage from 'node-html-to-image'
import ReactDOMServer from 'react-dom/server';


export default async function handler(req, res) {
    const htmlString = ReactDOMServer.renderToString(< Card/>);
console.log(htmlString)
    nodeHtmlToImage({
        output: './boobobo.png',
        html: `<html>
        <head>
          <style>
            body {
              width: 300px;
              height: 400px;
            }
          </style>
        </head>
        <body>${htmlString}</body>
      </html>`
      })
        .then(() => console.log('The image was created successfully!'))



    try {

        res.status(200).json({response:'ciao'})
        
    } catch (error) {
        console.log(error)
        
    }
}