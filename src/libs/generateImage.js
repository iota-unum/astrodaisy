import { toPng } from 'html-to-image';

export async function generateImage(htmlRef) {
  try {
    const dataUrl = await toPng(htmlRef.current, { cacheBust: true });
    const link = document.createElement('a');
    link.download = 'my-image-name.png';
    link.href = dataUrl;
    link.click();
    return dataUrl;
  } catch (error) {
    console.log(error);
  }
}