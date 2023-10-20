// import React from 'react';

// const Mens = ({ menudata }) => {
//     return (
//         <>
//             {menudata.map((curElem) => (
//                 <div className="card" key={`${curElem.brand}-${curElem.title}`}>
//                     <div className="img">
//                         <img src={curElem.Img} alt="" />
//                         <div className="icon">
//                             <div className="heart">
//                                 <i className="fa-regular fa-heart"></i>
//                             </div>
//                             <div className="addcart">
//                                 <i className="fa-solid fa-cart-shopping"></i>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="brand">
//                         <p>{curElem.brand}</p>
//                     </div>
//                     <div className="title"> {curElem.title.split(' ').length > 5
//                         ? curElem.title.split(' ').slice(0, 5).join(' ') + '...'
//                         : curElem.title}</div>
//                     <div className="price">
//                         <h3 className="newp">{curElem.newprice}</h3>
//                         <span className="prevprice">{curElem.prevprice}</span>
//                         <span className="off">{curElem.off}</span>
//                     </div>
//                 </div>
//             ))}
//         </>
//     );
// };

// export default Mens;
