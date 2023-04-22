import ReactDOMServer from 'react-dom/server';



import fs from 'fs';
import React, { useRef } from 'react';
import { generateImage } from '@/libs/generateImage';

const Card = ({ onImageRef }) => {
  const imgRef = useRef();
  
  React.useEffect(() => {
    onImageRef(imgRef);
    console.log('image',imgRef)
  }, []);
  
  return (
    <div className="sm:w-2/3 aspect-[3/4] p-4 bg-blue-400 prose flex w-full mx-auto" ref={imgRef}>
      <h1 className="w-full h-1/6">Toro</h1>
      <div className="aspect-[4/5] w-4/5 mx-auto">
        <article className='prose leading-tight aspect-square text-secondary-focus w-full h-full'>Ciao di nuovo caro Toro, oggi la luna si trova in congiunzione nella tua prima casa portandoti grande energia e vitalità. Tuttavia, ci sono alcune sfide che dovrai affrontare. La quadratura di Plutone potrebbe creare qualche conflitto nel lavoro o nelle relazioni sociali, ma il trigono tra luna e Plutone ti darà la forza per superarli. La quadratura di Saturno può causare delusioni nella sfera emotiva, ma il sestile tra luna e Saturno suggerisce che hai i mezzi per superare queste difficoltà. Infine, il sestile di Nettuno potrebbe renderti più sensibile alle emozioni degli altri, ma ricorda di mantenere anche te stesso al centro delle tue decisioni. In generale, questo è un buon momento per prendersi cura di te stesso fisicamente e mentalmente, senza trascurare le responsabilità sociali e professionali. Buona fortuna!</article>
      </div>
    </div>
  );
};

export default async function handler(req, res) {
  const { image } = req.body;
  const filePath = `public/card-images/image.png`;

  let imgRef;
  const onImageRef = (ref) => {
    console.log(imgRef)
    imgRef = ref;
  };
  
  // Render the Card component to get the imgRef
  ReactDOMServer.renderToStaticMarkup(<Card onImageRef={onImageRef} />);

  try {
    // Remove file if it already exists
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
    }

    // Create the directory if it doesn't exist
    const dir = 'public/card-images';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
const dataUrl = await generateImage(imgRef)
    // Write the file to the directory
    console.log('dataurl',dataUrl)
    if (!dataUrl) {
      res.status(500).json({ message: 'Failed to generate image buffer' });
      return;
    }
    fs.writeFileSync(filePath, dataUrl, 'base64');

    res.status(200).json({ message: 'File saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred while saving the file' });
  }
}



// import fs from 'fs';


// import React, { useRef } from 'react'




// export default function handler(req, res) {
//     const imgRef = useRef()
//     const { image } = req.body;
//     const Card = () => {
//         const imgRef = useRef()
//       return (
//         <div className="sm:w-2/3 aspect-[3/4] p-4 bg-blue-400 prose flex w-full mx-auto" ref={imgRef}>
//         <h1 className="w-full h-1/6">Toro</h1>
//         <div className="aspect-[4/5] w-4/5 mx-auto">
//           <article className='prose leading-tight aspect-square text-secondary-focus w-full h-full'>Ciao caro Toro, oggi la luna si trova in congiunzione nella tua prima casa portandoti grande energia e vitalità. Tuttavia, ci sono alcune sfide che dovrai affrontare. La quadratura di Plutone potrebbe creare qualche conflitto nel lavoro o nelle relazioni sociali, ma il trigono tra luna e Plutone ti darà la forza per superarli. La quadratura di Saturno può causare delusioni nella sfera emotiva, ma il sestile tra luna e Saturno suggerisce che hai i mezzi per superare queste difficoltà. Infine, il sestile di Nettuno potrebbe renderti più sensibile alle emozioni degli altri, ma ricorda di mantenere anche te stesso al centro delle tue decisioni. In generale, questo è un buon momento per prendersi cura di te stesso fisicamente e mentalmente, senza trascurare le responsabilità sociali e professionali. Buona fortuna!</article>
//         </div>
//       </div>
//       )
//     }
//   const filePath = `public/card-images/image.png`;

//   try {
//     // Remove file if it already exists
//     if (fs.existsSync(filePath)) {
//       fs.unlinkSync(filePath);
//     }

//     // Create the directory if it doesn't exist
//     const dir = 'public/card-images';
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }

//     // Write the file to the directory
//     fs.writeFileSync(filePath, image.replace(/^data:image\/png;base64,/, ''), 'base64');

//     res.status(200).json({ message: 'File saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'An error occurred while saving the file' });
//   }
// }
