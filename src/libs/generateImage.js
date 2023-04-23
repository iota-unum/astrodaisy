

import Card from '@/components/Card';
import nodeHtmlToImage from 'node-html-to-image'


export default async function generateImage(htmlString) {
   


    try {

      nodeHtmlToImage({
        output: './public/cards/bimba.png',
        html: `<html>
        <head>
          <style>
            body {
              width: 300px;
              height: 400px;
              font-family: Helvetica;
              padding: .7rem;
              font-size: .8rem;
              background: gold;
              color: #222;
              line-height: 120%;
              
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