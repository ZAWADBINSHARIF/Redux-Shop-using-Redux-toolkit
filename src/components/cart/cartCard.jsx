const cartCard = ({ productImg, productName, productPrice, uniqueID, handleRemove }) => {
  return (
    <div className="cartCard">

      <img src={productImg} alt={productName} height={120} />
      <p>{productName}</p>
      <p>{productPrice}</p>
      <span onClick={() => handleRemove(uniqueID)} className="remove-cart-btn">Remove</span>

    </div>
  )
}
export default cartCard