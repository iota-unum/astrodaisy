import { ImageResponse } from "@vercel/og";
import Leo from '../../public/zodiac-icons/leo.svg'
import fs from "fs";

// export const config = {
//   runtime: "edge",
// };

export async function generateOgImg () {
  const image = new ImageResponse(
    (
        <div
        style={{
            height:'800px',
            width: '600px',
            backgroundImage: 'url("https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YXVyb3JhJTIwYm9yZWFsaXN8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60")',
            backgroundSize:'cover',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center'
        }}
        
        >
          <div
          style={{
           
                background: "rgba( 255, 255, 255, 0.1 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 10px )",
                WebkitBackdropFilter: "blur( 10px )",
                borderRadius: "10px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
    
                width: '90%',
                height:'90%',
                padding: '2rem',
                color: '#ccc',
              display:"flex",
              
    
          }}
          >
<h1>leone</h1>
            <p>

           Ciao Leone, oggi potresti sentirti un po' confuso o emotivo, grazie alla luna in Cancro nella dodicesima casa. La congiunzione della luna con Marte potrebbe portare a conflitti interni ed esterni, quindi cerca di mantenere la calma e non agire impulsivamente. Tuttavia, il trigono della luna con Nettuno può aiutarti a connetterti con il tuo lato spirituale e creativo, offrendoti momenti di ispirazione preziosi durante il giorno. Sii aperto all'intuizione e seguila quando ne hai bisogno. La quadratura della luna con Giove e Chirone potrebbe portarti a dover affrontare alcune sfide nel comunicare le tue idee agli altri. Cerca di usare una comunicazione chiara e pacata per evitare malintesi. Fortunatamente, i sestili della luna con Mercurio e Urano possono fornirti nuove idee sui tuoi progetti lavorativi e personali. Prenditi del tempo per riflettere su queste opportunità che potrebbero presentarsi oggi. In generale, questi aspetti possono essere impegnativi ma ti incoraggiamo a rimanere concentrato sui tuoi obiettivi e sulle opportunità che puoi cogliere oggi. Ricorda sempre di fidarti delle tue intuizioni e di prenderti cura di te stesso nei momenti difficili.

            </p>
          </div>
        </div>
    ),
    {
      width: 600,
      height: 800,
    }
  );

  const data = await toDataURL_node(image);
  console.log(data);
  
  return data
}

async function toDataURL_node(response) {
  let blob = await response.blob();
  let buffer = Buffer.from(await blob.arrayBuffer());
  return  buffer.toString("base64");
}
