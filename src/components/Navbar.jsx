// external import
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav>
      <span className="logo">REDUX SHOP</span>
      <div className="navLinkList">
        <Link className="navLink" to="/">Home</Link>
        <Link className="navLink" to="/cart">Cart</Link>
      <span className="cartCount">Cart items: 0</span>
      </div>
    </nav>
  )
}
export default Navbar