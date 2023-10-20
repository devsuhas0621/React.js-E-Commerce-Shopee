import React, { useState } from 'react';
function Men({ menudata, filterbtn, filterbtn2, addToCart: addToCartProp }) {
    const [menuicon, setremove] = useState('close');
    const [isMenuVisible, setMenuVisible] = useState(true);
    const [activeFilter, setActiveFilter] = useState('All');
    const [subCategories, setSubCategories] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);
    const [notification, setNotification] = useState('');
    const [notificationType, setNotificationType] = useState('success'); // Default to success
    const [isFilterHidden, setIsFilterHidden] = useState(false);


    const changeicnhandler = () => {
        setMenuVisible(!isMenuVisible);
        setremove(isMenuVisible ? 'menu' : 'close');
    };

    const handleCategoryClick = (category, subCategories) => {
        setActiveFilter(category);
        setSubCategories(subCategories);
        filterbtn2(category);
        setIsFilterHidden(true);
    };

    const hidefilter = () => {
        setSubCategories([]);
        setIsFilterHidden(false)
    };
    const showNotification = (message, type) => {
        setNotification(message);
        setNotificationType(type);

        // Set a timeout to hide the notification after 2 seconds
        setTimeout(() => {
            setNotification(null);
            setNotificationType('success'); // Reset type to default after hiding
        }, 3000);
    };
    const addToCart = (curElem) => {
        const isProductInCart = cart.some((item) => item.Img === curElem.Img);

        if (isProductInCart) {
            showNotification('This product is already in your cart!');
            setNotificationType('error')
        } else {
            showNotification('Product added successfully to your cart');
            setCart([...cart, curElem]);
            addToCartProp(curElem);
        }
    };

    const buynow = (curElem) => {
        setSelectedProduct(curElem);
    };

    const goBack = () => {
        setSelectedProduct(null);
    };
    const working = () => {
        alert('we are working on the buy directly till you can add the proudct into the cart and procced')
    }
    const filterflase=()=>{
        setIsFilterHidden(false)
    }
    return (
        <>

            <div className={`notification ${notificationType}`} style={{ display: notification ? 'block' : 'none' }}>
                {notification}
            </div>
            <div className="filter-item">
                <h2>
                    CATEGORY


                    <span className={`material-symbols-outlined ${menuicon === 'close' ? 'close' : ''}`} onClick={changeicnhandler}>
                        {menuicon}
                    </span>

                </h2>
                <div className={`men-item ${isMenuVisible ? 'show' : ''}`}>
                    {/*   */}
                    <button className="filterbtn" onClick={() => { filterbtn('All'); hidefilter(); }}>
                        All
                    </button>
                    <button className={`filterbtn ${activeFilter === 'Men-footwear' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('Men-footwear', [
                                'SPORT SHOES ',
                                'CASUAL SHOES',
                                'FORMAL SHOES ',
                                'SANDALS',
                                'FLOATERS',
                                'FLIP&FLOP',
                                'LOFERS',
                                ' BOOTS',
                                ' RUNNING',
                                ' SNEAKERS',

                                // Add more subcategories as needed
                            ])
                        }>FOOTWEAR</button>
                    <button className={`filterbtn ${activeFilter === 'Men-topwear' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('Men-topwear', [
                                'TShirt',
                                'formal',
                                'casual',
                                // Add more subcategories as needed
                            ])
                        }>TOPWEAR</button>
                    <button className={`filterbtn ${activeFilter === 'Men-bottomwear' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('Men-bottomwear', [
                                'jeans',
                                'casual-trouser',
                                ' formal-trouser',
                                'track-pants',
                                'shorts',
                                'cargoes',
                                ' three-fourth ',
                                // Add more subcategories as needed
                            ])
                        }>BOTTOMWEAR</button>
                    <button className={`filterbtn ${activeFilter === 'Men-winterwear' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('Men-winterwear', [
                                'sweaters ',
                                'jackets',
                                'tracksuits',
                                // Add more subcategories as needed
                            ])
                        }>WINTERWEAR</button>
                    <button className={`filterbtn ${activeFilter === 'Men-ethenicwear' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('Men-ethenicwear', [
                                'blazzers ',
                                'waistcoats',
                                'kurtas',
                                'ethnic-sets',
                                'sherwanis',
                                'ethnic payjamas',
                                'dhoti',
                                'lungi',
                                // Add more subcategories as needed
                            ])
                        }>ETHIENICWEAR</button>
                    <button className={`filterbtn ${activeFilter === 'Innerwear' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('Innerwear', [
                                'breif',
                                'vests',
                                'boxers',
                                'payjamas',
                                'night suits',
                                // Add more subcategories as needed
                            ])
                        }>INNERWEAR</button>
                    <button className={`filterbtn ${activeFilter === 'watch ' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('watch ', [
                                'Fastrack',
                                'casio',
                                'titan',
                                'Fossil',
                                ' Armani Exchange',
                                // Add more subcategories as needed
                            ])
                        }>WATCHES</button>
                    <button className={`filterbtn ${activeFilter === 'accessroies' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('accessroies', [
                                'backpacks',
                                'wallets',
                                'belt',
                                'sunglasses',
                                ' lunggage & travel',
                                'jewellery',
                                // Add more subcategories as needed
                            ])
                        }>ACCESSORIES</button>
                    <button className={`filterbtn ${activeFilter === 'Men-Grooming ' ? 'active' : ''}`}
                        onClick={() =>
                            handleCategoryClick('Men-Grooming ', [
                                'deodorants',
                                'Perfume',
                                ' beard care ',
                                ' shaving&aftershave',
                                // Add more subcategories as needed
                            ])
                        }> Men-Grooming</button>
                </div>
            </div>
            <div className="main">
                <div className={`  ${isFilterHidden ? 'filter ' : 'hidefilter '}`}>
                    {activeFilter !== 'All' && (
                        <>
                            <div className="showclose">
                                <p>Filter</p>
                                <span class="material-symbols-outlined" onClick={filterflase}>
                                    arrow_back
                                </span>
                            </div>
                            {subCategories.map((subCategory) => (
                                <button key={subCategory} className="filterbtn2" onClick={() => filterbtn(subCategory)}>
                                    {subCategory}
                                </button>
                            ))}
                        </>
                    )}
                </div>

                <div className="card-container">
                    {menudata.map((curElem) => (
                        <div className={`card ${!isFilterHidden ? ' ' : "bigcard"} `} key={`${curElem.brand}-${curElem.title}`}>
                            <div className="img">
                                <img src={curElem.Img} alt="" />
                                <div className="icon">
                                    <div className="heart">
                                        <i className="fa-regular fa-heart"></i>
                                    </div>
                                    <div className="addcart" onClick={() => addToCart(curElem)}>
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </div>
                                </div>
                                <div className="butbtn">
                                    <button className="buynow" onClick={() => buynow(curElem)}>BUY NOW</button>
                                </div>

                            </div>
                            <div className="brand">
                                <p>{curElem.brand}</p>
                            </div>
                            <div className="title">
                                {curElem.title.split(' ').length > 7
                                    ? curElem.title.split(' ').slice(0, 7).join(' ') + '...'
                                    : curElem.title}
                            </div>
                            <div className="price">
                                <h3 className="newp">{curElem.newprice}</h3>
                                <span className="prevprice">{curElem.prevprice}</span>
                                <span className="off">{curElem.off}</span>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="buypage" style={{ display: selectedProduct ? 'block' : 'none' }}>
                <div className="bp-head">
                    <span className="material-symbols-outlined" onClick={goBack}>
                        arrow_back
                    </span>
                    <h4 className='bp-title'>SHOP WITH SHOPEE</h4>
                    <span className="material-symbols-outlined">
                        info
                    </span>
                </div>
                <div className="bp-content">
                    <div className="bp-product">
                        <div className="img">
                            <img src={selectedProduct ? selectedProduct.Img : ''} alt="" />
                        </div>
                    </div>
                    <div className="bp-details">
                        <div className="bp-title-div">
                            <h2 className="bp-title">{selectedProduct ? selectedProduct.title : ''}</h2>
                        </div>
                        <div className="bp-price-div">
                            <p className="bp-price"> <span className="newprice">{selectedProduct ? selectedProduct.newprice : ''}</span>
                                <span className="preprice">{selectedProduct ? selectedProduct.prevprice : ''}</span>
                                <span className="bp-off-price">{selectedProduct ? selectedProduct.off : ''}</span></p>

                        </div>
                        <div className="delivery">
                            <div className="free serv">
                                <img width="30" height="30" src="https://img.icons8.com/color/48/000000/free-shipping.png" alt="free-shipping" />
                                <p className="serv-bout">FREE DEVELIVERY</p>
                            </div>
                            <div className="free serv">
                                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/refresh.png" alt="refresh" />
                                <p className="serv-bout">10 DAYS RETURN & EXCHANGE</p>
                            </div>
                            <div className="free serv">
                                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/cash-in-hand.png" alt="cash-in-hand" />
                                <p className="serv-bout">CASH ON DELIVERY</p>
                            </div>
                            <div className="free serv">
                                <img width="30" height="30" src="https://img.icons8.com/3d-fluency/94/user-shield.png" alt="user-shield" />
                                <p className="serv-bout">SECURE PAYMENT</p>
                            </div>
                        </div>
                        <p className="bp-size"><span className="s">S</span><span className="M">M</span><span className="L">L</span><span className="s">XL</span></p>
                        <button className="buy" onClick={working} >BUY<span className="material-symbols-outlined">
                            shopping_bag
                        </span></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Men;

