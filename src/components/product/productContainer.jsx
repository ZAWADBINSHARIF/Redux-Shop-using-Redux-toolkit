const productContainer = ({ productID, productImg, productName, productPrice, handleAdd }) => {

    return (
        <div className="product-container">
            <div className="product-img">
                <img src={productImg} alt="Product Image" />
            </div>
            <div className="product-info">
                <p className="product-name">
                    {productName}
                </p>
                <p className="product-price">
                    {productPrice} USD
                </p>
            </div>
            <span onClick={() => handleAdd(
                {
                    id: productID,
                    image: productImg,
                    title: productName,
                    price: productPrice
                }
            )} className="add-cart-btn">
                Add  to cart
            </span>
        </div>
    )
}
export default productContainer