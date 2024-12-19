import "./Header.css"
const Header = () =>{
    return (
        <>
        <header>
            <nav className="navbar">
             <h1 className="nav-logo">PRODUCT STORE</h1>
                <div className="nav-links">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Product</a>
                <a href="#">Contact</a>
                </div>
            </nav>
        </header>
        </>
    );
};
export default Header;
