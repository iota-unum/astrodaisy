import { toPng } from 'html-to-image';

export async function generateImage(htmlRef) {
  try {
    const dataUrl = await toPng(htmlRef.current, { cacheBust: true });
    // const base64Data = dataUrl.replace(/^data:image\/png;base64,/, '');
    // const filePath = 'public/card-images/my-image-name.png';
    // await fs.promises.mkdir('public/card-images', { recursive: true });
    // await fs.promises.writeFile(filePath, Buffer.from(base64Data, 'base64'));
    // return filePath;
    return dataUrl
  } catch (error) {
    console.log(error);
  }
}
