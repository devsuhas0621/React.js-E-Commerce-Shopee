
import { useState } from 'react';
import { signOut } from 'firebase/auth'
import { Link } from 'react-router-dom'
import { auth } from './Firebase'

function Navbar({
    cart,
    size,
    calculateTotalAmount,
    toggleCart,
    incrementCount,
    decrementCount,
    cartVisible,
    removeItem,
    itemCounts,
    hideCart,
    isLoggedIn,
    setLoggedIn,


}) {
    const [notification, setNotification] = useState(null);
    const [notificationType, setNotificationType] = useState('success');
    const signOutHandler = () => {
        const isConfirmed = window.confirm('Are you sure you want to log out?');

        if (isConfirmed) {
            signOut(auth)
                .then(() => {

                    localStorage.removeItem('isLoggedIn');
                    setLoggedIn(false);
                    // Additional sign-out logic if needed...

                })
                .catch((error) => {
                    console.error('Sign out error:', error);
                    // Handle sign out error if necessary
                });
        }
    };
    const showNotification = (message, type) => {
        setNotification(message);
        setNotificationType(type);

        // Set a timeout to hide the notification after 2 seconds
        setTimeout(() => {
            setNotification(null);
            setNotificationType('success'); // Reset type to default after hiding
        }, 2000);
    };
    const showalert = () => {
        showNotification('You have to login first')
        setNotificationType('error')
    }
    return (
        <div>
            <div className={`notification ${notificationType}`} style={{ display: notification ? 'block' : 'none' }}>
                {notification}
            </div>
           <div className="notify">
            <h4>"Explore Men's Fashion - More Categories Coming Soon!"</h4>
           </div>
            <nav className="navbar">
                <div className="logo">
                    <img width="40" height="40" src="https://img.icons8.com/3d-fluency/94/shopaholic.png" alt="shopaholic" />
                    <Link to="/"><h1 className="logo-title">SHOPEE</h1></Link>
                </div>
                <div className="search">
                    <img width="25" height="25" src="https://img.icons8.com/ios-glyphs/30/search--v1.png" alt="search--v1" className='searchicn' />
                    <input type="search" placeholder='search for products, Brand and more' />
                </div>
                <div className="function function2">
                    {/* <div className="login func">
                        <span className='log-sign'>Login<i className="fa-solid fa-chevron-down down"></i></span>
                    </div> */}
                    <div className="cart func" onClick={toggleCart}>
                        <span className="material-symbols-outlined">shopping_cart</span>
                        <p>Cart</p>
                        <span className='size'>{size}</span>
                    </div>
                    <div className={`cartpage ${cartVisible ? 'show' : ''}`}>
                        <div className="cart-heading">
                            <p className="cart-page-title">
                                CART
                                <span className="material-symbols-outlined">shopping_bag</span>
                            </p>
                        </div>
                        <div className="cart-items">
                            {cart.length === 0 ? (
                                <p className='Mtmsg'>Your cart is empty.<img width="48" height="48" src="https://img.icons8.com/color/48/000000/clear-shopping-cart.png" alt="clear-shopping-cart" /></p>
                            ) : (
                                cart.map((item) => (
                                    <div key={`${item.brand}-${item.title}`} className="cart-item">
                                        <img src={item.Img} alt={item.title} />

                                        <p className='cart-item-title'>   {item.title.split(' ').length > 5
                                            ? item.title.split(' ').slice(0, 5).join(' ') + '...'
                                            : item.title}</p>
                                        <span className="incdecbtn">
                                            <p className="btnfor">Qty:</p>
                                            <div className="countbtns">
                                                <button className="add" onClick={() => incrementCount(item)}><span className="material-symbols-outlined">
                                                    add
                                                </span></button>
                                                <h4 className="count">{itemCounts[item.title] || 1}</h4>
                                                <button className='remove' onClick={() => decrementCount(item)}><span className="material-symbols-outlined">
                                                    remove
                                                </span></button>
                                            </div>

                                        </span>
                                        <p>{item.newprice}</p>
                                        <span className="material-symbols-outlined delete" onClick={() => removeItem(item)}>
                                            delete
                                        </span>

                                    </div>

                                ))
                            )}
                        </div>
                        <div className="totalamt">
                            <p className="toalamountbox"> Total Amount: ₹{calculateTotalAmount()}</p>
                            {
                                isLoggedIn ? (
                                    <Link to="/buy" className="proToBuy" onClick={hideCart}>
                                        Proceed To Buy
                                        <span className="material-symbols-outlined">shopping_basket</span>
                                    </Link>
                                ) : (<button className="proToBuy" onClick={showalert}>
                                    Proceed To Buy
                                    <span className="material-symbols-outlined">shopping_basket</span>
                                </button>)
                            }

                        </div>
                    </div>
                    <div className="profile func"><i className="fa-regular fa-user"></i><p>Profile</p>
                        <div className="profil-box">
                            <div className="log-sig">
                                {isLoggedIn ? (
                                    <p className='signtext' onClick={signOutHandler}>Signout</p>
                                ) : (
                                    <p className="signtext">
                                        New Customer? <Link to='/log' className="log-page-link">Sign Up</Link>
                                    </p>
                                )}
                            </div>
                            <div className="profile-sec">
                                <p><span className="material-symbols-outlined">
                                    person
                                </span>Profile</p>
                                <p>  <span className="material-symbols-outlined">
                                    package_2
                                </span><Link to='/order' style={{ fontSize: '15px', color: "#000" }}>Order</Link></p>
                                <p><span className="material-symbols-outlined">
                                    roundabout_right
                                </span>About</p>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar
