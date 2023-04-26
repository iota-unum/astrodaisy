import React from "react";

const glass = () => {
  return (
    // <div className='h-[800px] w-[600px] bg-cover bg-no-repeat bg-[url("https://images.unsplash.com/photo-1633105096768-8d7dad925dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1520&q=80")] flex justify-center items-start  '>
    //   <div className="w-11/12 mt-9 h-96 text-white bg-white p-5 rounded-xl bg-opacity-10 backdrop-filter backdrop-blur-lg prose">
    //     <h1 className="text-white">bilancia</h1>
    //     <p className="">
    //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
    //     consectetur maxime quae, culpa assumenda similique nemo saepe dolores,
    //     nihil adipisci molestias in velit quasi dicta eum eligendi labore,
    //     soluta iste.{" "}

    //     </p>
    //   </div>
    // </div>
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

            width: '85%',
            height:'85%',
            padding: '2rem',
            color: '#ccc'
          
          

      }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum facere aut,
        illum minus eos suscipit deserunt asperiores esse hic vel, nisi iure
        iusto impedit. Sit voluptatem iusto autem minus modi.
      </div>
    </div>
  );
};

export default glass;
