import Head from "next/head";
import React from "react";

const Card = () => {
  return (
    <>
      <div className="card">
        <h1 className="">Toro</h1>
        <div className="">
          <article className="">
            Ciao caro Toro, oggi la luna si trova in congiunzione nella tua
            prima casa portandoti grande energia e vitalità. Tuttavia, ci sono
            alcune sfide che dovrai affrontare. La quadratura di Plutone
            potrebbe creare qualche conflitto nel lavoro o nelle relazioni
            sociali, ma il trigono tra luna e Plutone ti darà la forza per
            superarli. La quadratura di Saturno può causare delusioni nella
            sfera emotiva, ma il sestile tra luna e Saturno suggerisce che hai i
            mezzi per superare queste difficoltà. Infine, il sestile di Nettuno
            potrebbe renderti più sensibile alle emozioni degli altri, ma
            ricorda di mantenere anche te stesso al centro delle tue decisioni.
            In generale, questo è un buon momento per prendersi cura di te
            stesso fisicamente e mentalmente, senza trascurare le responsabilità
            sociali e professionali. Buona fortuna!
          </article>
        </div>
        <style jsx>
          {`
            .card {
              background-color: red;
              color: #fff;
              width: 600px;
              height: 800px;
              padding: 2rem;
            }
          `}
        </style>
      </div>
    </>
  );
};

export default Card;
