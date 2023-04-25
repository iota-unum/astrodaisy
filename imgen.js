import { ImageResponse } from '@vercel/og';
 
export const config = {
  runtime: 'edge',
};
 
export default function () {
const image = new ImageResponse(
    (
      <div
      tw='bg-red-500 w-[300px] '
        // style={{
        //   fontSize: 128,
        //   background: 'white',
        //   width: '100%',
        //   height: '100%',
        //   display: 'flex',
        //   textAlign: 'center',
        //   alignItems: 'center',
        //   justifyContent: 'center',
        // }}
      >
        Hello world!
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
  console.log(`<div>${image}</div>`)
  return image
}