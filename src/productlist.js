const ProductList = ({products,title}) => {
    //const products=props.products;
    //const title =props.title;
    return ( 
        <div className="product-list">
               <h1>PRODUCTS</h1>
               <h2>{title}</h2>
        {products.map((product)=>(
            <div className="product-preview" key={product.id}>
                <h2>{product.Name}</h2>
                <p>Description:{product.Description}</p>
                <img src={product.image} width={product.width} height={product.height} ></img>
                <p>RS: {product.price}</p>
            </div>
        ))}
        </div>
     );
}
 
export default ProductList;