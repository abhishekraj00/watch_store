import emailjs from "emailjs-com";

const OrderSummury = ({checkoutPage,cart  , formData }) => {

  const order = cart.total_unique_items === 1 ? `${cart.line_items[0].name} ${cart.line_items[0].id}  ${cart.line_items[0].quantity}` : cart.line_items.map((element) => `${element.name}(${element.id}) with quantity: ${element.quantity}  `).toString()

  const emailData = {
    ...formData,
    order: order
  }

  console.log(emailData);

  function handlesubmit(){
    emailjs.send("service_42zzk77", "template_ti3fwh6", emailData, "ifHuhkRbojBEq_zrT")
    .then((res) => console.log(res))
    .catch((error) => console.log(error));
    checkoutPage(1);
  }


  return (
    <div className="order-summary">
      <div className="order-summary-section">
        <h1>Order Summury</h1>
        <div className="summary-data">
          {
            cart.line_items.map((product) => {
              return(
                <>
                <div key={product.id} className="single-summary-data">
                  <div>
                    <h3>{product.name}</h3>
                    <span>Quantity: {product.quantity}</span>
                  </div>
                  <div>
                    <h3>₹{product.line_total.raw}</h3>
                  </div>
                </div>
                <hr/>
                </>
              )
            })
          }
          <h2>Total Amount : {cart.subtotal.raw}</h2>
          <button onClick={handlesubmit} className="confirm-btn">Confirm Order</button>
        </div>
      </div>
    </div>
  )
}

export default OrderSummury