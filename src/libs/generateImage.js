

import Card from '@/components/Card';
import nodeHtmlToImage from 'node-html-to-image'


export default async function generateImage(htmlString, signName) {
   


    try {

      nodeHtmlToImage({
        output: `./public/cards/${signName}.jpg`,
        html: `<html>
        <head>
          <style>
            body {
              width: 900px;
              height: 1200px;
              font-family: Helvetica;
              padding: 3rem;
              font-size: 2.5rem;
              background: gold;
              color: #222;
              line-height: 120%;
              
            }
            .timestamp {
              font-weight: bold;
              margin: 0 auto;
              padding-top: 15px;
            }
          </style>
        </head>
        <body>${htmlString}</body>
      </html>`
      })
        .then(() => console.log('The image was created successfully!'))

        
    } catch (error) {
        console.log(error)
        
    }
}