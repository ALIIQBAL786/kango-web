import {useState,useEffect} from "react";
import ProductList from "./productlist";
const Home = () => {
    const [products,setProducts]=useState(null);
    const[isPending,setIsPending]=useState(true);
    useEffect(()=>{
        setTimeout(()=>{
            fetch('http://localhost:8000/products')
            .then(res=>{
                return res.json()
            })
            .then(data=>{
            console.log(data);
            setProducts(data);
            setIsPending(false);
            });
        },1000)
        
    },[]
    )
    return ( 
        <div className="home">
                {isPending && <div>Loading.....</div>}
            <button >FACEBOOK</button>
            <button >INSTAGRAM</button>
           {products&&<ProductList products={products} title="ALI IQBAL"  />}
        </div>
     );
}
 
export default Home;