// external import
import { Link } from "react-router-dom"
import { useSelector } from "react-redux/es/hooks/useSelector"

const Navbar = () => {

  const cartItem = useSelector(state => state.cart)

  return (
    <nav>
      <span className="logo">REDUX SHOP</span>
      <div className="navLinkList">
        <Link className="navLink" to="/">Home</Link>
        <span className="cartCount">
          <Link to="/cart" className="navLink">
            Cart items: {cartItem.length}
          </Link>
        </span>
      </div>
    </nav>
  )
}
export default Navbar