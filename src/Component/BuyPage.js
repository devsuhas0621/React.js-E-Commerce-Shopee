// BuyPage.js
import { useNavigate } from 'react-router-dom';
   


function BuyPage({
  selectedProducts,
  calculateTotalAmount,
  incrementCount,
  decrementCount,
  itemCounts,
  isDataConfirmed,
  setIsDataConfirmed,
  check,
  setcheck,
  conf,
  setconf,
  paymentMade,
  setPaymentMade,
  value,
  setvalue,
  confirmedData,
  setConfirmedData,
  paymentData,
  setPaymentData,
  currentStage,
  setCurrentStage,
  updateStage,
  editDet,
  makePayment,
  protopayment,
  nextHandler,
  handleChange,
  progressPercentage,
  makeTrue
}) {

  const navigate = useNavigate();
  const continueShopping = () => {
    navigate('/men');
    setPaymentMade(true);
    makeTrue()
  };
const continueShopping2=()=>{
  navigate('/men');
}
  if (!selectedProducts || selectedProducts.length === 0) {
    return (
      <div>
         <div className='continue-shopping'>
          <div className="thank-box">

            <h1 className="ty">Thank you!</h1>
            

            <button className='cont-shop' onClick={continueShopping2}>Continue Shopping</button>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <div className="buy-page"> 
        <div className={`buy-page-content ${paymentMade ? 'hidden' : ''}`}>
          {selectedProducts.map((product) => (
            <div key={`${product.brand}-${product.title}`} className="buy-page-product">
              <div className="product-image">
                <img src={product.Img} alt={product.title} />
              </div>
              <div className="product-details-title">
                <h2 className="product-title">{product.title.split(' ').length > 6
                  ? product.title.split(' ').slice(0, 7).join(' ') + '...'
                  : product.title}</h2>
              </div>
              <div className="countbtns">
                <button className="add" onClick={() => incrementCount(product)}><span className="material-symbols-outlined">
                  add
                </span></button>
                <h4 className="count">{itemCounts[product.title] || 1}</h4>
                <button className='remove' onClick={() => decrementCount(product)}><span className="material-symbols-outlined">
                  remove
                </span></button>
              </div>
              <div className="product-detials-price">
                <p className="product-price">{product.newprice}</p>
              </div>
            </div>
          ))}
         <div id="finalprice"><span className="finalprice">Total: ₹{calculateTotalAmount()}</span></div>
        </div>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progressPercentage}%` }}></div>
      </div>
      <div className="buy-page-totle">
        <div className={`pay-detail ${isDataConfirmed ? 'hidden' : ''}`}>
          <div className="shippingdetails">
            <div className="address">
              <h3 className=" shop-text"><span className="numcount">1</span>ENTER YOUR SHIPPING DETAILS</h3>
              <div className="add-form">
                <form action="">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter your name here' required onChange={handleChange} value={value.name} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="number" name='phone' placeholder='Enter your contact' required onChange={handleChange} value={value.phone} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input type="text" name='city' placeholder='Enter your city' required onChange={handleChange} value={value.city} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="locality">Locality</label>
                    <input type="text" name='locality' placeholder='Enter your locality' required onChange={handleChange} value={value.locality} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pincode">Pincode</label>
                    <input type="text" name='pincode' placeholder='Enter your pincode' required onChange={handleChange} value={value.pincode} />
                  </div>
                  <button type='submit' onClick={nextHandler}>Next</button>
                </form>
              </div>
            </div>
          </div>

          <div className="paymentmethpd">

          </div>
        </div>
        <div className={`confirm ${isDataConfirmed ? ' ' : 'hidden'} ${conf ? 'hidden' : ""}`}>
          <h3 className=" shop-text"><span className='numcount'>2</span>Confirmed Details</h3>
          <h4>: {confirmedData.name}</h4>
          <h4>: {confirmedData.phone}</h4>
          <h4>: {confirmedData.city}</h4>
          <h4>: {confirmedData.locality}</h4>
          <h4>: {confirmedData.pincode}</h4>
          <div className="con-btn">
            <button className="con-info " onClick={protopayment}>
              Confirm
            </button>
            <button className="con-info " onClick={editDet}>
              <span class="material-symbols-outlined">
                edit
              </span>
            </button>
          </div>

        </div>
        <div className={`fincal-checout ${check ? ' ' : 'hidden'}`}>
          <div className="payment">
            <h3 className=" shop-text"><span className='numcount'>3</span>Make Payment</h3>
            <p className="card-details">Credit / Debit / ATM Card</p>
            <form action="">
              <div className="card-box">
                <label htmlFor="">ENTER CART NUM : (1234567890)</label>
                <input
                  type="num"
                  name='cardnum'
                  placeholder='1212-3434-5656-7878'
                  value={paymentData.cardnum}
                  onChange={(e) => setPaymentData({ ...paymentData, cardnum: e.target.value })}
                />
                <label htmlFor="">ENTER EXPIRY : (01/01)</label>
                <input
                  type="num"
                  name='expiry'
                  placeholder='00/00'
                  value={paymentData.expiry}
                  onChange={(e) => setPaymentData({ ...paymentData, expiry: e.target.value })}
                />
                <label htmlFor="">ENTER CVV : (123)</label>
                <input
                  type="num"
                  name='cvv'
                  placeholder='000'
                  value={paymentData.cvv}
                  onChange={(e) => setPaymentData({ ...paymentData, cvv: e.target.value })}
                />
                <label htmlFor="nameoncard">NAME ON CARD : (PREVIOUS NAME YOU ENTERED)</label>
                <input
                  type="text"
                  placeholder='name on card'
                  value={paymentData.nameoncard}
                  onChange={(e) => setPaymentData({ ...paymentData, nameoncard: e.target.value })}
                />
              </div>
              <button
                className="proceed-to-buy"
                type="button"
                onClick={makePayment}
              >
                <span className='checkspan'>Order Total<span className="material-symbols-outlined">shopping_basket</span></span>
                <p className="total-amount">Total: ₹{calculateTotalAmount()}</p>
              </button>

            </form>
          </div>
        </div>
      
      </div>
      <div className={`continue-shopping ${paymentMade ? '' : 'hidden'}`} >
          <div className="thank-box">

            <h1 className="ty">Thank you!</h1>
            <p>YOUR ORDER SUBMITTED SUCCESSFULLY</p> 
            <button className='cont-shop' onClick={continueShopping}>Continue Shopping</button>
          </div>
        </div>
    </>
  );
}

export default BuyPage;
 