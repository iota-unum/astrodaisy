import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import { useRef } from 'react'
import { generateImage } from '@/libs/generateImage'
const Image = () => {
  const imgRef = useRef();

  async function handleImage() {
    try {
      const dataUrl = await generateImage(imgRef);

      const response = await fetch('/api/saveImage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl }),
      });

      if (response.ok) {
        console.log('File saved successfully');
      } else {
        console.error('An error occurred while saving the file');
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <MainLayout>
        <button className='btn w-1/5' onClick={handleImage}>generate</button>
        <div className="sm:w-2/3 aspect-[3/4] p-4 bg-blue-400 prose flex w-full mx-auto" ref={imgRef}>
          <h1 className="w-full h-1/6">Toro</h1>
          <div className="aspect-[4/5] w-4/5 mx-auto">
            <article className='prose leading-tight aspect-square text-secondary-focus w-full h-full'>Ciao caro Toro, oggi la luna si trova in congiunzione nella tua prima casa portandoti grande energia e vitalità. Tuttavia, ci sono alcune sfide che dovrai affrontare. La quadratura di Plutone potrebbe creare qualche conflitto nel lavoro o nelle relazioni sociali, ma il trigono tra luna e Plutone ti darà la forza per superarli. La quadratura di Saturno può causare delusioni nella sfera emotiva, ma il sestile tra luna e Saturno suggerisce che hai i mezzi per superare queste difficoltà. Infine, il sestile di Nettuno potrebbe renderti più sensibile alle emozioni degli altri, ma ricorda di mantenere anche te stesso al centro delle tue decisioni. In generale, questo è un buon momento per prendersi cura di te stesso fisicamente e mentalmente, senza trascurare le responsabilità sociali e professionali. Buona fortuna!</article>
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default Image;





