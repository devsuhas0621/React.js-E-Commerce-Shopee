import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './Component/Res.css';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Megamenu from './Component/Megamenu';
import Men from './Component/Men';
import Navbar from './Component/Navbar';
import mendata from './DB/database';
import BuyPage from './Component/BuyPage'; // Correct the import path
import Log from './Component/Log'
import Success from './Component/Success';
import Cancle from './Component/Cancle';
import Order from './Component/Order';
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [menudata, setmenudata] = useState(mendata);
  const [cart, setCart] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [order, setorder] = useState([])
  const [cartVisible, setCartVisible] = useState(false);
  const [logvisible, setlogvisibe] = useState(false);
  const [itemCounts, setItemCounts] = useState({});
  const [removedItems, setRemovedItems] = useState([]);
  const [carticon, setcarticon] = useState('shopping_cart')
  /* buy-page.js */
  const [isDataConfirmed, setIsDataConfirmed] = useState(false);
  const [check, setcheck] = useState(false)
  const [conf, setconf] = useState(false)
  const [paymentMade, setPaymentMade] = useState(false);
  const [value, setvalue] = useState({
    name: "",
    phone: '',
    city: '',
    locality: "",
    pincode: ''
  });

  const [confirmedData, setConfirmedData] = useState({
    name: "",
    phone: '',
    city: '',
    locality: "",
    pincode: ''
  });
  const [paymentData, setPaymentData] = useState({
    cardnum: '',
    expiry: '',
    cvv: '',
    nameoncard: ''
  });
  const [currentStage, setCurrentStage] = useState(1);



  const filterbtn = (category) => {
    if (category === 'All') {
      setmenudata(mendata);
    } else {
      const updateList = mendata.filter((curElem) => {
        return curElem.category.trim().toLocaleLowerCase() === category.trim().toLocaleLowerCase();
      });
      setmenudata(updateList);
    }
  };

  const filterbtn2 = (category) => {
    if (category === 'All') {
      setmenudata(mendata);
    } else {
      const updateList = mendata.filter((curElem) => {
        return curElem.section && curElem.section.trim().toLocaleLowerCase() === category.trim().toLocaleLowerCase();
      });
      setmenudata(updateList);
    }
  };

  const addToCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem === item);
    if (existingItem) {
      incrementCount(existingItem);
    } else {
      setCart([...cart, item]);
    }
  };

  const calculateTotalAmount = () => {
    if (!cart || cart.length === 0) {
      return 0;
    }

    return cart.reduce((total, item) => {
      const count = itemCounts[item.title] || 1;
      const productPrice = parseFloat(item.newprice.replace(/[,₹]/g, '').trim());
      if (!isNaN(productPrice)) {
        return total + productPrice * count;
      } else {
        console.warn(`Invalid price for product: ${item.title}`);
        return total;
      }
    }, 0).toFixed(2);
  };
  const toggleCart = () => {
    setCartVisible(!cartVisible);
    setCart((updatedCart) => {
      console.log(updatedCart)
      setSelectedProducts(updatedCart);
      if (!cartVisible) {
        setcarticon('remove_shopping_cart');
      } else {
        setcarticon('shopping_cart');
      }
      return updatedCart;
    });
  };
  const toggleLog = () => {
    setlogvisibe(!logvisible);
  }
  const incrementCount = (item) => {
    setItemCounts((prevCounts) => ({
      ...prevCounts,
      [item.title]: (prevCounts[item.title] || 1) + 1,
    }));
  };

  const decrementCount = (item) => {
    if (itemCounts[item.title] && itemCounts[item.title] > 0) {
      setItemCounts((prevCounts) => ({
        ...prevCounts,
        [item.title]: prevCounts[item.title] - 1,
      }));
    }
  };

  const removeItem = (item) => {
    const isConfirmed = window.confirm('Are you sure you want to remove this item from the cart?');
    if (isConfirmed) {
      const updatedCart = cart.filter((cartItem) => cartItem !== item);
      setCart(updatedCart);
      setSelectedProducts(updatedCart);

      setItemCounts((prevCounts) => {
        const updatedCounts = { ...prevCounts };
        delete updatedCounts[item.title];
        return updatedCounts;
      });
    }

  };
  const clearCart = () => { 
    setCart([]); // Clear the entire cart
    setSelectedProducts([]); // Clear selected products
    setItemCounts({}); // Clear item counts

  };
  const hideCart = () => {
    setCartVisible(false);
  };




  /*  buypage.js */
  const progressPercentage = (currentStage - 1) * (100 / 3);
  const updateStage = (stage) => {
    setCurrentStage(stage);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setvalue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };
  const nextHandler = (e) => {
    e.preventDefault();
    if (value.name && value.phone && value.city && value.locality && value.pincode) {
      setConfirmedData(value);
      setIsDataConfirmed(true);
      setvalue({
        name: "",
        phone: '',
        city: '',
        locality: "",
        pincode: ''
      });

      updateStage(2);
    } else {
      alert('Please fill in all required fields.');
    }

  };
  const protopayment = () => {
    setconf(true)
    setcheck(true)
    updateStage(3);
  }
  const makePayment = () => {
    if (
      paymentData.cardnum === '1234567890' &&
      paymentData.expiry === '01/01' &&
      paymentData.cvv === '123' &&
      paymentData.nameoncard === confirmedData.name
    ) {
      alert('Payment is successful');
      setPaymentMade(true);
      setcheck(false)
      updateStage(4);
      setCart((updateOrder) => {
        console.log(updateOrder)
        setorder(updateOrder)

        clearCart();

        return updateOrder

      })
    } else {
      alert('Fill the cart details correctly');
    }
  };
  const removeItemFromOrder = (itemToRemove) => {
    let reason = prompt("Reason for cancellation");

    while (reason && reason.length <= 4) {
      alert('Reason should be more than 4 characters.');
      reason = prompt("Reason for cancellation");
    }

    if (reason) {
      const updatedOrder = order.filter((item) => item !== itemToRemove);
      setorder(updatedOrder);
    } else {
      alert('A reason is required for cancellation.');
    }
  };

  const editDet = () => {
    setIsDataConfirmed(false)
  }

  const makeTrue = () => {
    setIsDataConfirmed(true)
    setPaymentMade(false)
    setconf(false)
    setcheck(false)
    setPaymentMade(false);
    setcheck(false)
    setvalue({
      name: "",
      phone: '',
      city: '',
      locality: "",
      pincode: ''
    });
    // setConfirmedData({
    //   name: "",
    //   phone: '',
    //   city: '',
    //   locality: "",
    //   pincode: ''
    // });
    setPaymentData({
      cardnum: '',
      expiry: '',
      cvv: '',
      nameoncard: ''
    })


  }

  /* Order.js */


console.log(isLoggedIn)
  return (
    <Router>

      <Navbar
        cart={cart}
        size={cart.length}
        setCart={setCart}
        calculateTotalAmount={calculateTotalAmount}
        toggleCart={toggleCart}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        removeItem={removeItem}
        cartVisible={cartVisible}
        itemCounts={itemCounts}
        hideCart={hideCart}
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}

      />
      <Megamenu filterbtn={filterbtn} cart={cart}
        size={cart.length}
        setCart={setCart}
        calculateTotalAmount={calculateTotalAmount}
        toggleCart={toggleCart}
        incrementCount={incrementCount}
        decrementCount={decrementCount}
        removeItem={removeItem}
        cartVisible={cartVisible}
        itemCounts={itemCounts}
        hideCart={hideCart}
        isLoggedIn={isLoggedIn}
        setLoggedIn={setLoggedIn}
        carticon={carticon}
        setcarticon={setcarticon}
      />
      <Routes>
        <Route
          path="/"
          element={<Home filterbtn2={filterbtn2} isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn} />}
        />
        <Route
          path="/men"
          element={<Men menudata={menudata} filterbtn={filterbtn} filterbtn2={filterbtn2} addToCart={addToCart} isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn} removeItem={removeItem} />}
        />
        <Route
          path="/buy"
          element={<BuyPage
            selectedProducts={cart}
            calculateTotalAmount={calculateTotalAmount}
            itemCounts={itemCounts}
            incrementCount={incrementCount}
            decrementCount={decrementCount}
            isLoggedIn={isLoggedIn}
            setLoggedIn={setLoggedIn}
            isDataConfirmed={isDataConfirmed}
            setIsDataConfirmed={setIsDataConfirmed}
            check={check}
            setcheck={setcheck}
            conf={conf}
            setconf={setconf}
            paymentMade={paymentMade}
            setPaymentMade={setPaymentMade}
            value={value}
            setvalue={setvalue}
            confirmedData={confirmedData}
            setConfirmedData={setConfirmedData}
            paymentData={paymentData}
            setPaymentData={setPaymentData}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
            updateStage={updateStage}
            editDet={editDet}
            makeTrue={makeTrue}
            makePayment={makePayment}
            protopayment={protopayment}
            nextHandler={nextHandler}
            handleChange={handleChange}
            progressPercentage={progressPercentage}

          />}
        />
        <Route
          path="/log"
          element={
            <Log
              logvisible={logvisible}
              setlogvisible={setlogvisibe} // Corrected prop name here
              toggleLog={toggleLog}
              isLoggedIn={isLoggedIn}
              setLoggedIn={setLoggedIn}

            />
          }
        />
        <Route path='/order' element={<Order setCart={setCart} order={order} removeItemFromOrder={removeItemFromOrder} />} />
        <Route path='/sucess' element={<Success />} />
        <Route path='/cancle' element={<Cancle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
