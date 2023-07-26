// internal import
import ProductWrapper from '../components/product/ProductWrapper'

const Home = () => {
  return (
    <div className="home">
      <h3>Welcome to our Redux Shop</h3>

      <section className="products-section">
        <h4>Products</h4>

        <ProductWrapper/>

      </section>

    </div>
  )
}
export default Home