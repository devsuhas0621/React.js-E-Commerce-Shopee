    import React from 'react';

    function Order({ order,removeItemFromOrder }) {
        if (!order || order.length === 0) {
            return (
                <div>
                    <p>No Order selected. Order something.</p>
                </div>
            );
        }
        const generateTrackingId = () => {
            const min = 10000000; 
            const max = 99999999;  
            return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    
        return (
            <div className='orderPage'>
                <br />
                <h1>Your Order</h1>
                <div className="trackid"></div>
            {order.map((item) => {
                const trackId = generateTrackingId();  
                return (
                    <div key={`${item.brand}-${item.title}`} className="order-item">
                        <div className="track-id">
                            <h2>Your order Id: {trackId}</h2>
                            <div className="removebtn"  >
                           <button onClick={()=>removeItemFromOrder(item)}>Cancle Order</button>  
                        </div>
                        </div>
                        <div className="or-pro">
                        <div className="img">
                            <img src={item.Img} alt="product" />
                        </div>
                        <div className="title">
                            <p>{item.title}</p>
                        </div>
                        </div>
                        
                    </div>
                );
            })}
        </div>
        );
    }

    export default Order;
