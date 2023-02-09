import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import Navbar from'./navbar';
import Home from './Home';
import ABOUTUS from './aboutUs';
import PRODUCTS from './PRODUCTS';
import TECHNOLOGIES from './TECHNOLLOGIES';
import { useEffect, useState } from 'react';
function App() {
  const [loading,setLoading]=useState(false);
  useEffect(()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },1000
    )

     

  },[PRODUCTS]);
  return (
   
    <div className="App">
      {
        loading ?
        <ClimbingBoxLoader
        size={30}
        color={"red"}
        loading={loading}/>
        :
      
       <div className="content" >
      <Navbar/>
      <img  src="https://gemsports.com/kango/images/banner2.jpg" width="100%" height="100%"></img>
      <Home/>
      <ABOUTUS/>
      <PRODUCTS/>
      <TECHNOLOGIES/>
      </div>
}
    </div>
  );
}

export default App;
