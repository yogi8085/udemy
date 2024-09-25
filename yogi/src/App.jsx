import React from "react";
import StarRating from "./StarRating";
import Header from "./Header";
import "./App.css"

function App() {
 return (
    <>
    {/* <h1>Star Rating</h1> */}
    {/* <StarRating /> */}
     <Header />
    {/* <h3>Now,you can see the magic</h3> */}
    </>
  );
}

export default App;
// import React, { useEffect,useState } from 'react'
// import './App.css'
// function ErrorHandling() {
//   let[images,setImages]= useState([]);
//   let{loading,setLoading}= useState(true);
//   let[error,setError]=useState(false)
//   useEffect(()=>{
//      async function getData(){
//       try{
//       let res=await fetch("https://picsum.photos/v2/list")
//       let data= await res.json();
//       setImages(data)
//       if(data){
//         setLoading(false)
//       }
//     }catch(e){
//      setError(e.massage)
//      setLoading(false)
//     }
//   }
//     getData();
//   }, [])
  
//   return (
//     <div>
//      yhgchjbh hjvhubjn hjbihiohj
//      {loading ? <h1>...loading</h1>: null}
//      { error ? <h1>{error}</h1>:null}
//      {images ? images.map(x=><img src={x.download_url}height={x.height} width={x.width}/>) : null} 
//     </div>
    
//   )
// }

// export default ErrorHandling;