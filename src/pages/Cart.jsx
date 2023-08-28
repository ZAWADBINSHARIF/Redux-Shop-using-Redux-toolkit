// external import
import { useSelector, useDispatch } from 'react-redux'

// internal import
import { remove } from '../cartSlice/cartSlice.js'
import CartCard from '../components/cart/cartCard'

const Cart = () => {

  const products = useSelector(state => state.cart)
  const dispatch = useDispatch()

  const handleRemove = (productID) => {
    dispatch(remove(productID))
  }

  return (
    <div className="Cart">

      <h3>Cart</h3>

      <div className="cartWrapper">

        {products.map(product => (
          <CartCard
            key={product.uniqueID}
            uniqueID={product.uniqueID}
            productImg={product.image}
            productName={product.title}
            productPrice={product.price}
            handleRemove={handleRemove}
          />
        ))}

      </div>
    </div>
  )
}
export default Cart