// external import
import { useState } from 'react';
import { useEffect } from 'react';

// internal import
import ProductContainer from './productContainer.jsx';

const ProductWrapper = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {

    const fetchProudcts = async () => {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setProducts(data)
    }

    fetchProudcts()
  }, [])

  return (
    <div className="products-wrapper">
      {
        products.map(product => (
          <ProductContainer
            key={product.id}
            productImg={product.image}
            productName={product.title}
            productPrice={product.price}
          />
        ))
      }
    </div>
  )
}
export default ProductWrapper