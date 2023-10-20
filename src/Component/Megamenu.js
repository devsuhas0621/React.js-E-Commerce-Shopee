import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from './Firebase'
function Megamenu({ filterbtn, cart,
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
    setcarticon,
    carticon
}) {

    const [megabar, setmegabar] = useState('list')
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        // Update the state or perform other actions as needed
        filterbtn(category);


        navigate('/men');
    };
    const menuIconHandler = () => {
        setmegabar(megabar === 'list' ? 'close' : 'list');
    }
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
    return (
        <div>
            <div className="megamenu">
                <div className="mega-menubar">
                    <div className="iconbar">
                        <div className="homeicn">
                            <Link to='/'>
                                <span class="material-symbols-outlined">
                                    home_app_logo
                                </span>
                            </Link>
                            <p>Home</p>
                        </div>
                        <div className="caticn">
                            <span class={`material-symbols-outlined ${megabar === 'close' ? 'close' : ''}`} onClick={menuIconHandler}>
                                {megabar}
                            </span>
                            <p>Menu</p>
                        </div>
                    </div>
                    <div className="function functionmega">
                        {/* <div className="login func">
                        <span className='log-sign'>Login<i className="fa-solid fa-chevron-down down"></i></span>
                    </div> */}
                        <div className="cart func" onClick={toggleCart}>
                            <span className="material-symbols-outlined">{carticon}</span>
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
                                    ) : (<button className="proToBuy" onClick={() => alert('you have to login first')}>
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
                </div>
                <div className={`menu ${megabar === 'close' ? 'resmenu' : ''}`}>
                    <div className="men list">
                        <Link to='/men'><p className="menu-title"><i className="fa-solid fa-chevron-down down"></i>men<img width='  90px' src="https://img.freepik.com/premium-photo/man-have-nice-hairstyle-wearing-trendy-high-quality-denim-shirt_758367-18683.jpg?size=626&ext=jpg&ga=GA1.1.434359893.1691300173&semt=ais" alt="" /><img src="" alt="" /> </p></Link>
                        <div className="drop-menu">
                            <div className="row">
                                <p className="drop-title"> footwear </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('SPORT SHOES')}> Sport Shoes  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('CASUAL SHOES ')}> Casual Shoes  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('FORMAL SHOES')}> Formal Shoes  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('SANDALS')}> Sandals and floaters  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('FLOATERS')}> Flip-Flop  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick(' FLIP&FLOP ')}> Lofers  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('BOOTS')}> Boots  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('RUNNING')}> Running Shoes  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('SNEAKERS')}> Sneakers  </p>
                                <p className="drop-title"> men's Grooming  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('deodorants')}> Deodorants  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Perfume')}> Perfums  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('beard care ')}> Beards care & Grooming  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('shaving&aftershave')}> Shaving & Aftershave  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">  Clothing  </p>
                                <p className="drop-title">  Top Wear  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Tshirt')} > T-Shirts  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('formal')}> Formal Shirts  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('casual')}> Casual Shirts  </p>
                                <p className="drop-title">  Bottom Wear  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('jeans')}> Jeans  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('casual-trouser')}> Casual Trousers  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('formal-trouser')}> Formal Trousers  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('track-pants')}> Track pants  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('shorts')}> Shorts  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('cargoes')}> Cargoes  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('three-fourth')}> Three Fourth  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('waistcoats')}> Three Fourth  </p>

                                <p className="drop-title">  Ties, Socks, Caps & More  </p>
                                <p className="drop-title">  Fabrics  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">  Winter Wear  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('sweaters')}> Sweaters  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('jackets')}> jackets  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('tracksuits')}> tracksuits  </p>
                                <p className="drop-title">  Ethnic Wear  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('kurtas')}> kurts  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('ethnic-sets')}> ethnic sets  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('waistcoats')}> waistcoats  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('blazzers')}>blazzers</p>
                                <p className="menu-item" onClick={() => handleCategoryClick('sherwanis')}> sherwanis  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick(' ethnic payjamas ')}> ethnic payjamas  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('dhoti')}> dhoti  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('lungi')}> lungi  </p>
                                <p className="drop-title"> InnerWear & Loungewear  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Innerwear')}> breif & trucks  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Innerwear')}> vests   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Innerwear')}>  boxers  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Innerwear')}>  pjamas and lounge pants   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Innerwear')}>  thermas   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Innerwear')}>  night suits   </p>
                                <p className="drop-title" onClick={() => handleCategoryClick('windcheaters')}>  Raincoats & Windcheaters  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title"> watches  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Fastrack')}> fastrack   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('casio')}> casio   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('titan')}> titan   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Fossil')}> fossil   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('Armani Exchange')}> Armani Exchange   </p>
                                <p className="drop-title">  accessories  </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('backpacks')}> backpacks   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('wallets')}> wallets   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('belt')}> belts   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('sunglasses')}> sunglasses   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('lunggage & travel ')}> luggage & travel   </p>
                                <p className="menu-item" onClick={() => handleCategoryClick('jewellery')}> jewellery   </p>
                                <p className="drop-title">  sports and fitness store  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">  smart wathes  </p>
                                <p className="drop-title"> smart brands  </p>
                                <p className="drop-title"> personal care & appliances  </p>
                                <p className="menu-item"> trimmers   </p>
                                <p className="menu-item"> shavers   </p>
                                <p className="menu-item"> grooming kits   </p>
                                <p className="drop-title"> featured  </p>
                                <p className="menu-item"> watches store  </p>
                                <p className="menu-item"> footwear cub  </p>
                                <p className="menu-item"> bags & wallets  </p>
                                <p className="menu-item"> T-shirt store  </p>
                                <p className="menu-item"> addidas  </p>
                                <p className="menu-item"> beardo  </p>
                                <p className="menu-item"> reebok  </p>
                                <p className="menu-item"> skechers  </p>
                                <p className="menu-item"> nike  </p>
                            </div>
                        </div>
                    </div>


                    <div className="men list">
                        <p className="menu-title"><i className="fa-solid fa-chevron-down down"></i>women<img width='100px' src="https://img.freepik.com/free-photo/expressive-young-woman-posing-studio_176474-66741.jpg?size=626&ext=jpg&ga=GA1.1.434359893.1691300173&semt=ais" alt="" /><img src="" alt="" /> </p>
                        <div className="drop-menu">
                            <div className="row">
                                <p className="drop-title">  Clothing  </p>
                                <p className="drop-title">  women western & maternity wear  </p>
                                <p className="menu-item"> topwear  </p>
                                <p className="menu-item"> dresses  </p>
                                <p className="menu-item"> jeans  </p>
                                <p className="menu-item"> shorts  </p>
                                <p className="menu-item"> skirts  </p>
                                <p className="menu-item"> jeggings & tights  </p>
                                <p className="menu-item"> trousers & capris  </p>
                                <p className="drop-title">  lingerie & sleepwear  </p>
                                <p className="menu-item"> bras  </p>
                                <p className="menu-item"> panties  </p>
                                <p className="menu-item"> lingerie sets  </p>
                                <p className="menu-item"> night dresses  </p>
                                <p className="menu-item"> shapwear  </p>
                                <p className="menu-item"> camisoes & sleepwear  </p>
                                <p className="drop-title">  swim & beachwear  </p>
                                <p className="drop-title">  pary dresses  </p>
                                <p className="drop-title">  sports wear  </p>
                                <p className="drop-title">  winter wear  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">  ethnic wear  </p>
                                <p className="menu-item"  > sarees  </p>
                                <p className="menu-item"  > kurtas & kurties  </p>
                                <p className="menu-item"  > dress material  </p>
                                <p className="menu-item"  > lehanga choli  </p>
                                <p className="menu-item"  > blouse  </p>
                                <p className="menu-item"  > kurta sets & salwar suits  </p>
                                <p className="menu-item"  > gowns  </p>
                                <p className="menu-item"  > dupattas  </p>
                                <p className="drop-title">  ethnic bottms  </p>
                                <p className="menu-item"  > leggings & churidars  </p>
                                <p className="menu-item"  > palazzos  </p>
                                <p className="menu-item"  > shararas  </p>
                                <p className="menu-item"  > salwars & patiala  </p>
                                <p className="menu-item"  > dhoti pants  </p>
                                <p className="menu-item"  > ethnic trousers  </p>
                                <p className="menu-item"  > saree shapewear & petticoats  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">  footwear  </p>
                                <p className="drop-title">  sandals  </p>
                                <p className="menu-item"  > flats  </p>
                                <p className="menu-item"  > heels  </p>
                                <p className="menu-item"  > wedges  </p>
                                <p className="drop-title">  shoes  </p>
                                <p className="menu-item"  > sports shoes  </p>
                                <p className="menu-item"  > casual shoes  </p>
                                <p className="menu-item"  > boots  </p>
                                <p className="drop-title">  ballerinas  </p>
                                <p className="drop-title">  slippers & flip-flop's  </p>
                                <p className="drop-title">  watches  </p>
                                <p className="drop-title">  smart watches  </p>
                                <p className="drop-title">  persoanl care appliances  </p>
                                <p className="menu-item"  > hair straightners  </p>
                                <p className="menu-item"  > hair dryers  </p>
                                <p className="menu-item"  > epilators  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">  beauty & grooming  </p>
                                <p className="menu-item"  > make up  </p>
                                <p className="menu-item"  > skin care  </p>
                                <p className="menu-item"  > hair care  </p>
                                <p className="menu-item"  > bath & spa  </p>
                                <p className="menu-item"  > deodorants & perfumes  </p>
                                <p className="drop-title">  jewellery  </p>
                                <p className="menu-item"  > artificial jewellery  </p>
                                <p className="menu-item"  > silver jewellery  </p>
                                <p className="menu-item"  > precious jewellery  </p>
                                <p className="menu-item"  > coins and bars  </p>
                                <p className="drop-title">  accessories  </p>
                                <p className="menu-item"  > handbags  </p>
                                <p className="menu-item"  > shoulder bags   </p>
                                <p className="menu-item"  > totes  </p>
                                <p className="menu-item"  > sling bags  </p>
                                <p className="menu-item"  > clutches  </p>
                                <p className="menu-item"  >  wallets & belts   </p>
                                <p className="menu-item"  >  luggage & travel    </p>
                                <p className="menu-item"  >  sunglasses  </p>
                                <p className="menu-item"  > frames  </p>

                            </div>
                        </div>
                    </div>
                    <div className="men list">
                        <p className="menu-title"><i className="fa-solid fa-chevron-down down"></i>kids<img width='100px' src="https://img.freepik.com/free-photo/joyful-preteen-kid-with-curly-hair-laughing-camera-studio-shot-carefree-little-girl-isolated-pink-background_197531-13694.jpg?size=626&ext=jpg&ga=GA1.1.434359893.1691300173&semt=ais" alt="" /><img src="" alt="" /> </p>
                        <div className="drop-menu">
                            <div className="row">
                                <p className="drop-title">  kids clothing  </p>
                                <p className="drop-title">  boys clothing  </p>
                                <p className="menu-item"  >  t-shirs   </p>
                                <p className="menu-item"  > ethnic wear  </p>
                                <p className="menu-item"  > ethnic wear  </p>
                                <p className="menu-item"  > shorts shirts   </p>
                                <p className="menu-item"  > innerwear  </p>
                                <p className="drop-title">  girls clothing  </p>
                                <p className="menu-item"  > dresses & skirts  </p>
                                <p className="menu-item"  >  ethnic wear  </p>
                                <p className="menu-item"  >  t-shirts & tops   </p>
                                <p className="menu-item"  > innerwear  </p>
                                <p className="drop-title">  baby boy's clothing  </p>
                                <p className="menu-item"  > combos sets  </p>
                                <p className="menu-item"  > t-shirts  </p>
                                <p className="menu-item"  > innerwear  </p>
                                <p className="drop-title">  baby girl's clothing  </p>
                                <p className="menu-item"  > combos sets  </p>
                                <p className="menu-item"  > dresses & gowns  </p>
                                <p className="menu-item"  > innerwear  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">   kid's footwear    </p>
                                <p className="menu-item"  > sandals  </p>
                                <p className="menu-item"  > sport shoes  </p>
                                <p className="drop-title">   boy's footwear  </p>
                                <p className="drop-title">   gir's footwear   </p>
                                <p className="menu-item"  > flats & bellies  </p>
                                <p className="menu-item"  > sports shoes  </p>
                                <p className="drop-title">  infant footwear    </p>
                                <p className="drop-title">    character shoes  </p>
                                <p className="menu-item"  > kids watches  </p>
                                <p className="menu-item"  > kids sunglasses  </p>
                                <p className="drop-title">    kids winter wear  </p>
                                <p className="drop-title">  boy's winter wear   </p>
                                <p className="menu-item"  > boy's sweatshirts  </p>
                                <p className="menu-item"  > boy's jackets  </p>
                                <p className="drop-title">  girl's winter wear   </p>
                                <p className="menu-item"  > girls sweatshirts  </p>
                                <p className="menu-item"  > girl's jackets  </p>
                                <p className="menu-item"  > infant winter wear  </p>
                                <p className="menu-item"  > thermals  </p>

                            </div>
                            <div className="row">
                                <p className="drop-title">   toys    </p>
                                <p className="menu-item"  >  remote control toys  </p>
                                <p className="menu-item"  >  educational toys  </p>
                                <p className="menu-item"  >  soft toys  </p>
                                <p className="menu-item"  >  cars & die-cast vehicles  </p>
                                <p className="menu-item"  > outdoor toys   </p>
                                <p className="menu-item"  >  action figures  </p>
                                <p className="menu-item"  > board games   </p>
                                <p className="menu-item"  >  musical toys  </p>
                                <p className="menu-item"  >  dolls & doll house  </p>
                                <p className="menu-item"  > puzzles   </p>
                                <p className="menu-item"  > s.t.e.m toys   </p>
                                <p className="menu-item"  > helicopter   </p>
                                <p className="menu-item"  >  toys guns  </p>
                                <p className="menu-item"  >  party supplies  </p>
                                <p className="drop-title">    school supplies   </p>
                                <p className="menu-item"  > school bags  </p>
                                <p className="menu-item"  > school combo sets  </p>
                                <p className="menu-item"  > lunch box  </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">    baby care    </p>
                                <p className="menu-item"  >  diapers   </p>
                                <p className="menu-item"  >  wipes   </p>
                                <p className="menu-item"  >  diapering & potty training   </p>
                                <p className="menu-item"  >  baby bath, hair & skin care   </p>
                                <p className="menu-item"  > baby gromming    </p>
                                <p className="menu-item"  >  baby bathing   </p>
                                <p className="menu-item"  >  baby oral care   </p>
                                <p className="menu-item"  >  nursing & breast feeding   </p>
                                <p className="menu-item"  >  baby food   </p>
                                <p className="menu-item"  >   baby gear  </p>
                            </div>
                        </div>
                    </div>
                    <div className="men list">
                        <p className="menu-title"><i className="fa-solid fa-chevron-down down"></i>electronics<img width='100px' src="https://img.freepik.com/free-photo/modern-stationary-collection-arrangement_23-2149309682.jpg?size=626&ext=jpg&ga=GA1.1.434359893.1691300173&semt=sph" alt="" /><img src="" alt="" /> </p>
                        <div className="drop-menu">
                            <div className="row">
                                <p className="drop-title">   mobile accessories     </p>
                                <p className="menu-item"  > mobile cases   </p>
                                <p className="menu-item"  > headphones & headsets   </p>
                                <p className="menu-item"  >  power bank   </p>
                                <p className="menu-item"  > screenguards   </p>
                                <p className="menu-item"  >  memory cards   </p>
                                <p className="menu-item"  >  smart headphones   </p>
                                <p className="menu-item"  >  mobile cables   </p>
                                <p className="menu-item"  >  mobile chargers   </p>
                                <p className="menu-item"  >  mobile holders   </p>
                                <p className="drop-title">   smart wearable tech   </p>
                                <p className="menu-item"  >  smart watches   </p>
                                <p className="menu-item"  >  smart glasses (VR)     </p>
                                <p className="menu-item"  >    smart bands   </p>
                                <p className="drop-title">   health care appliances     </p>
                                <p className="menu-item"  >    bp monitors    </p>
                                <p className="menu-item"  >     weighning scale   </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">    laptops     </p>
                                <p className="menu-item"  >    gaming laptop    </p>
                                <p className="drop-title">    desktop pc's     </p>
                                <p className="drop-title">   gaming & accessories      </p>
                                <p className="drop-title">      comouter accessories   </p>
                                <p className="menu-item"  >  external hard disks      </p>
                                <p className="menu-item"  >    pendrives    </p>
                                <p className="menu-item"  >  laptop skins & decals      </p>
                                <p className="menu-item"  >   laptop bags     </p>
                                <p className="menu-item"  >    mouse    </p>
                                <p className="drop-title">    computer peripherals     </p>
                                <p className="menu-item"  >    printers & link catridges    </p>
                                <p className="menu-item"  >     monitors    </p>
                                <p className="drop-title">   tablets      </p>
                                <p className="menu-item"  >    apple ipads    </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">    televisons    </p>
                                <p className="drop-title">    speakers    </p>
                                <p className="menu-item"  >   home audio speakers     </p>
                                <p className="menu-item"  >   home theaters     </p>
                                <p className="menu-item"  >    soundbars    </p>
                                <p className="menu-item"  >    bluetooth speakers    </p>
                                <p className="menu-item"  >   DTH set top box     </p>
                                <p className="drop-title">    smart home automation    </p>
                                <p className="drop-title">    cameras    </p>
                                <p className="drop-title">    camera accessories    </p>
                                <p className="drop-title">    netwrok components    </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">    featured    </p>
                                <p className="menu-item"  > google assitant store    </p>
                                <p className="menu-item"  > laptos on buyback guarantee    </p>
                                <p className="menu-item"  > flipkart smartbuy   </p>
                                <p className="menu-item"  > li-polymer power    </p>
                                <p className="menu-item"  > sony ps4 pro & sim    </p>
                                <p className="menu-item"  > apple products    </p>
                                <p className="menu-item"  > microsoft store    </p>
                                <p className="menu-item"  > lenovo phab series    </p>
                                <p className="menu-item"  > JBL speakers   </p>
                                <p className="menu-item"  > philips    </p>
                                <p className="menu-item"  > dr.speakers    </p>
                                <p className="menu-item"  > mobile no cost EMI    </p>

                            </div>
                        </div>
                    </div>
                    <div className="men list">
                        <p className="menu-title"><i className="fa-solid fa-chevron-down down"></i>mobile<img width='90px' src="https://img.freepik.com/free-photo/digital-smart-phone-abstract-background_1409-4091.jpg?size=626&ext=jpg&ga=GA1.1.434359893.1691300173&semt=sph" alt="" /><img src="" alt="" /> </p>
                        <div className="drop-menu">
                        </div>
                    </div>
                    <div className="men list">
                        <p className="menu-title"><i className="fa-solid fa-chevron-down down"></i>Home & furniture<img width='90px' src="https://img.freepik.com/premium-photo/3d-kitchen-white-background-isolated-professional-advertising-photography_920594-4582.jpg?size=626&ext=jpg&ga=GA1.1.434359893.1691300173&semt=ais" alt="" /><img src="" alt="" /> </p>
                        <div className="drop-menu">
                            <div className="row">
                                <p className="drop-title">    kitchen, cookwear & serverwear    </p>
                                <p className="menu-item"  >    pans    </p>
                                <p className="menu-item"  >    tawas    </p>
                                <p className="menu-item"  >    pressure cookers     </p>
                                <p className="menu-item"  >      kitchen tools   </p>
                                <p className="menu-item"  >     gas stoves    </p>
                                <p className="drop-title">    tablewear & dinnerwear    </p>
                                <p className="menu-item"  >    coffee mugs     </p>
                                <p className="menu-item"  >    dinner sets    </p>
                                <p className="menu-item"  >    varware    </p>
                                <p className="drop-title">    kitchen storage    </p>
                                <p className="menu-item"  >      water bottles   </p>
                                <p className="menu-item"  >     lunch boxes    </p>
                                <p className="menu-item"  >     flasks    </p>
                                <p className="menu-item"  >     casseroles    </p>
                                <p className="menu-item"  >     kitchen containers    </p>
                                <p className="drop-title">    cleaning supplies    </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">   furniture & offers    </p>
                                <p className="drop-title">   bed room furniture    </p>
                                <p className="menu-item"  >     beds    </p>
                                <p className="menu-item"  >     mattresses    </p>
                                <p className="menu-item"  >     wardrpbes    </p>
                                <p className="drop-title">  living room furniture    </p>
                                <p className="menu-item"  >     sofa    </p>
                                <p className="menu-item"  >     sofa beds    </p>
                                <p className="menu-item"  >     TV units    </p>
                                <p className="menu-item"  >     dining tables & chairs    </p>
                                <p className="menu-item"  >  cofee tables   </p>
                                <p className="menu-item"  >   shoe racks       </p>

                                <p className="drop-title">  office & study furniture    </p>
                                <p className="menu-item"  >   kids room furniture       </p>
                                <p className="drop-title">  DIY furniture    </p>
                                <p className="menu-item"  >     bean bags        </p>
                                <p className="menu-item"  >     collapsible wardrobes        </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">   furnishing   </p>
                                <p className="menu-item"  >  bedsheets    </p>
                                <p className="menu-item"  >   curtains   </p>
                                <p className="menu-item"  >  cushions & pillows    </p>
                                <p className="menu-item"  >   blankets   </p>
                                <p className="menu-item"  >  bath & towels    </p>
                                <p className="menu-item"  >   kithcen & table linen   </p>
                                <p className="menu-item"  >   floor coverings   </p>
                                <p className="drop-title">   smart home automation   </p>
                                <p className="menu-item"  >     smart security system     </p>
                                <p className="menu-item"  >     smart door locks     </p>
                                <p className="drop-title">   home improvement   </p>
                                <p className="menu-item"  >  tools & measuring equipments       </p>
                                <p className="menu-item"  >      home utilities & organizers   </p>
                                <p className="menu-item"  >    lawn & gardening     </p>
                                <p className="menu-item"  >    bathroom & kithcen fittings     </p>
                            </div>
                            <div className="row">
                                <p className="drop-title">    home decore   </p>
                                <p className="menu-item"  >     paintings    </p>
                                <p className="menu-item"  >    clocks     </p>
                                <p className="menu-item"  >     wall shelves    </p>
                                <p className="menu-item"  >    stickers     </p>
                                <p className="menu-item"  >    showpieces     </p>
                                <p className="drop-title">    home lighting   </p>
                                <p className="menu-item"  >    bulps     </p>
                                <p className="menu-item"  >     wall lamp    </p>
                                <p className="menu-item"  >     table    </p>
                                <p className="menu-item"  >    ceiling lamp     </p>
                                <p className="menu-item"  >     emergency lights    </p>
                                <p className="drop-title">   festive decore & gifts    </p>
                                <p className="drop-title">    pets supplies   </p>
                                <p className="menu-item"  >  dogs    </p>
                                <p className="menu-item"  >     cats    </p>
                                <p className="menu-item"  >     fish & aquatics   </p>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Megamenu


// {/* <p className="menu-item" >   </p> */ }



