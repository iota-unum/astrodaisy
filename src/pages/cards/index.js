import MainLayout from '@/layouts/MainLayout'
import React from 'react'
import { useRef } from 'react'
import { generateImage } from '@/libs/generateImage'
import Card from '@/components/Card';
const Image = () => {
//   const imgRef = useRef();
// console.log(imgRef.current)
//   async function handleImage() {
//     try {
//       const dataUrl = await generateImage(imgRef);

//       const response = await fetch('/api/saveImage', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ image: dataUrl }),
//       });

//       if (response.ok) {
//         console.log('File saved successfully');
//       } else {
//         console.error('An error occurred while saving the file');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   }

  return (
    <>
      <MainLayout>
      <Card/>
      </MainLayout>
    </>
  );
};

export default Image;





