// external import
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import CryptoJS from 'crypto-js';

// internal import
import ProductContainer from './productContainer.jsx';
import { add } from '../../cartSlice/cartSlice.js'
import { fetchProducts } from '../../cartSlice/productSlice.js';
import { STATUS } from '../../cartSlice/productSlice.js'

const ProductWrapper = () => {

  const dispatch = useDispatch();
  const { data: products, status } = useSelector(state => state.product)
  const [uniqueID, setUniqueID] = useState(CryptoJS.lib.WordArray.random(6).toString())

  const handleAdd = (product) => {
    setUniqueID(CryptoJS.lib.WordArray.random(6).toString())
    product.uniqueID = uniqueID
    dispatch(add(product))
  }

  useEffect(() => {

    dispatch(fetchProducts())

  }, [dispatch])


  if (status === STATUS.LOADING) {
    return (
      <>
        <br />
        <br />
        <h4>Loading...</h4>
        <br />
        <br />
      </>
    )
  } else if (status === STATUS.ERROR) {
    return (
      <>
        <br />
        <br />
        <h4>Somethis went wrong</h4>
        <br />
        <br />
      </>
    )
  }

  return (
    <div className="products-wrapper">
      {
        products.map(product => (
          <ProductContainer
            key={product.id}
            productID={product.id}
            productImg={product.image}
            productName={product.title}
            productPrice={product.price}
            handleAdd={handleAdd}
          />
        ))
      }
    </div>
  )
}
export default ProductWrapper