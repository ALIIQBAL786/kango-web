import { useState } from "react";
import ProductList from "./productlist";

const PRODUCTS = () => {
    const [products,setProducts]=useState([
        {Name:'boxing gloves',Description:"HIGH QUALITY BOXING GLOVES",image:"http://gemsports.com/kango/products/219BAK-010.jpg",width:"100px",height:"100px",price:7000,id:1},
        {Name:'karata suit',Description:"HIGH QUALITY KARATA SUIT",image:"http://gemsports.com/kango/products/723KJJ-001.jpg",width:"100px",height:"100px",price:4000,id:2},
        {Name:'Training pants',Description:"HIGH QUALITY TRAINING PANTS",image:"http://gemsports.com/kango/products/891KMS-040.jpg",width:"100px",height:"100px",price:3000,id:4},
    ]);
   const handleDelete=(id)=>{
    const newProducts=products.filter(pro=>pro.id!==id);
    setProducts(newProducts);
   } 
    return (  
    <div className="products">
     <ProductList products={products} title="ALL PRODUCTS" handleDelete={handleDelete}/>
     <ProductList products={products.filter((pro)=>pro.Name=='boxing gloves')} title="BOXING GLOVES PRODUCTS"/>  
        </div>
    );
}
 
export default PRODUCTS;