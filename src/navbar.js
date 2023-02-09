const Navbar
= () => {
    return (
        <nav className="navbar">
            <h1>Kango</h1>
        <div className="link" >
            <a href="/">Home</a>
            <a href="/" style={{
                color:"white",
                backgroundColor:'red',
                borderRadius:'12px',
            }}>About us</a>
            <a href="/">Products</a>
            <a href="/"  style={{
                color:"white",
                backgroundColor:'red',
                borderRadius:'12px',
            }} >Technologies</a>
        </div>
        </nav>
        
      );
}
 
export default Navbar
;