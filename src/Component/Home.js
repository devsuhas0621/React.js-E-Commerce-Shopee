import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import firstpost from '../img/1.png';
import secondpost from '../img/2.png';
import thirdpost from '../img/3.png';
import fourthpost from '../img/4.png';
import { useNavigate } from 'react-router-dom';


function Home({ filterbtn2}) {
    const onAutoplayTimeLeft = (s, time, progress) => {};
    const navigate = useNavigate();

    const handleCategoryClick = (category) => { 
        filterbtn2(category); 
        navigate('/men');
    };
    return (
        <div>
            <div className="home">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        color: 'red',
                    }}
                    // navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide className="slide">
                        <img src={firstpost} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={secondpost} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={thirdpost} alt="" />
                    </SwiperSlide>
                    <SwiperSlide className="slide">
                        <img src={fourthpost} alt="" />
                    </SwiperSlide>
                </Swiper>

            </div>
            <div className="home-container"> 
                <h2 className="p-title">MEN'S <i className="fa-solid fa-arrow-right"></i></h2>
                <div className="p-container">
                    <div className="p-box">
                        <div className="product-box"onClick={() => handleCategoryClick('Men-topwear')}>
                            <div className="img"><img src="https://img.freepik.com/free-photo/trendy-top-design-mockup-presented-wooden-hanger_460848-13969.jpg?w=740&t=st=1696512360~exp=1696512960~hmac=e1ee05f8d375109552c9ffd9a43e3e37a3fc557e7f4d93155ebe7c4977b5cb25" alt="" /></div>
                            <div className="discount"><p>TOPWEAR <span className='disc'>(20% - 30% Off*)</span></p></div>
                            <div className="btn"><button className="button" onClick={() => handleCategoryClick('Men-topwear')}>SHOW ALL</button></div>
                        </div>
                        <div className="product-box"onClick={() => handleCategoryClick('Men-bottomwear')}>
                            <div className="img"><img src="https://img.freepik.com/free-psd/ripped-jean-shorts-with-tag-mockup_53876-65767.jpg?w=740&t=st=1696513188~exp=1696513788~hmac=54048ec029687ad0f2f5c59346dd7d67932d8c0724d955b08cf4e2b7d6865dfc" alt="" /></div>
                            <div className="discount"><p>BOTTOMWEAR <span className='disc'>(20% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button"onClick={() => handleCategoryClick('Men-bottomwear')}>SHOW ALL</button> </div>
                        </div>
                        <div className="product-box"onClick={() => handleCategoryClick('Men-footwear')}>
                            <div className="img"><img src="https://images.pexels.com/photos/4066968/pexels-photo-4066968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" /></div>
                            <div className="discount"><p>FOOTWEAR <span className='disc'>(30% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button"onClick={() => handleCategoryClick('Men-footwear')}>SHOW ALL</button> </div>
                        </div>
                        <div className="product-box"onClick={() => handleCategoryClick('Men-ethenicwear')}>
                            <div className="img"><img src="https://img.freepik.com/free-photo/frontview-traditional-indian-men-clothes_8353-9763.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>ETHENIC WEAR <span className='disc'>(30% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button"onClick={() => handleCategoryClick('Men-ethenicwear')}>SHOW ALL</button> </div>
                        </div>
                        <div className="product-box"onClick={() => handleCategoryClick('Innerwear')}>
                            <div className="img"><img src="https://img.freepik.com/free-psd/unisex-flex-fleece-zip-hoodie-mockup_126278-197.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>INNERWEAR <span className='disc'>(50% - 60% Off*)</span></p></div>
                            <div className="btn"> <button className="button"onClick={() => handleCategoryClick('Innerwear')}>SHOW ALL</button> </div>
                        </div>
                        <div className="product-box"onClick={() => handleCategoryClick('Men-winterwear')}>
                            <div className="img"><img src="https://img.freepik.com/free-vector/vector-blue-softshell-unisex-sport-jacket-with-hood-front-view-isolated-white-background_1284-45513.jpg?w=740&t=st=1696514090~exp=1696514690~hmac=9e9e0940af7bce0d24908030063f78b5984393b054ef1a989b9931b2ea0d223f" alt="" /></div>
                            <div className="discount"><p>WINDCHEATERS <span className='disc'>(20% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button"onClick={() => handleCategoryClick('Men-winterwear')}>SHOW ALL</button> </div>
                        </div>
                        <div className="product-box"onClick={() => handleCategoryClick('accessroies')}>
                            <div className="img"><img src="https://img.freepik.com/free-photo/beautiful-casual-men-fashion-clothes-set_74190-576.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>ACCESORRIES <span className='disc'>(25% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button"onClick={() => handleCategoryClick('accessroies')}>SHOW ALL</button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container"> 
                <h2 className="p-title">WOMEN'S <i className="fa-solid fa-arrow-right"></i></h2>
                <div className="p-container">
                    <div className="p-box">
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/fashion-woman-with-clothes_1203-8301.jpg?w=360&t=st=1696514779~exp=1696515379~hmac=770740fa35b9141c32c26a02a2d68f6a552801ffa2e69d126a2109ef98c90464 " alt="" /></div>
                            <div className="discount"><p>WESTERN <span className='disc'>(20% - 30% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/plain-blue-leggings-isolated-sportswear-apparel-studio-shoot_53876-102884.jpg?w=360&t=st=1696514865~exp=1696515465~hmac=27c299e32ddcb3e4083b992bfa3084528f57502debf823c7e896f3e8418b4f9c " alt="" /></div>
                            <div className="discount"><p>BOTTOMWEAR <span className='disc'>(20% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src=" https://img.freepik.com/free-photo/model-wearing-purple-sneakers-women-s-apparel_53876-97173.jpg?t=st=1696514900~exp=1696515500~hmac=5f21bbd0c1ec427cca7b2125e8a2fda43f157cd24a2e338125c6798545f9f1b1" alt="" /></div>
                            <div className="discount"><p>FOOTWEAR <span className='disc'>(30% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src=" https://img.freepik.com/free-photo/close-up-hands-woman-wearing-traditional-sari-garment_23-2149565131.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>ETHENIC WEAR <span className='disc'>(30% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/gold-necklaces-with-pair-earrings_1340-42881.jpg?t=st=1696515165~exp=1696518765~hmac=8c5d1bdd59c9ebb5c60d26c1fcedb01707d7e2019709ad6771c88fd3d61a3238&w=360 " alt="" /></div>
                            <div className="discount"><p>JWELLARY <span className='disc'>(50% - 60% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src=" https://img.freepik.com/free-photo/purple-flower-herb-plant-nature-generative-ai_188544-9628.jpg" alt="" /></div>
                            <div className="discount"><p>BEAUTY <span className='disc'>(20% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src=" https://img.freepik.com/free-photo/young-female-model-sleeping-underwear_1303-19374.jpg?w=360&t=st=1696515325~exp=1696515925~hmac=6d8d2de86aa92ea9a44fc77b57cdb97c3b7e2ecc532552005529606eec75f6e5" alt="" /></div>
                            <div className="discount"><p>SLEEPWEAR <span className='disc'>(25% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container"> 
                <h2 className="p-title">KID'S<i className="fa-solid fa-arrow-right"></i></h2>
                <div className="p-container">
                    <div className="p-box">
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/front-view-cute-child-boy-white-t-shirt-yellow-jeans-holding-green-skateboard-blue-floor_179666-1008.jpg?w=360&t=st=1696515500~exp=1696516100~hmac=63c5079d301ec219aa59d6b69518a1bba22c3f6b8edc6df4a2a814eb7c3b23fa " alt="" /></div>
                            <div className="discount"><p>BOY <span className='disc'>(20% - 30% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/premium-photo/portrait-cute-little-indian-girl-model-standing-isolated-white-background_466689-46031.jpg?w=360 " alt="" /></div>
                            <div className="discount"><p>GIRL <span className='disc'>(20% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/baby-shoes_1203-7009.jpg?w=360&t=st=1696515663~exp=1696516263~hmac=54423b47daca28ab95f4dbbc93d0eb7436e503a2e2472020b8d9fbf46e3dd82e" alt="" /></div>
                            <div className="discount"><p>FOOTWEAR <span className='disc'>(30% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/premium-photo/cute-indian-little-child-ethnic-wear-showing-expression-white-background_621325-1564.jpg?w=360" alt="" /></div>
                            <div className="discount"><p>ETHENIC WEAR <span className='disc'>(30% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/fluffy-toy-texture-close-up_23-2149686878.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>TOY'S <span className='disc'>(50% - 60% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/yellow-backpack-stack-books-orange_23-2148179048.jpg?w=740&t=st=1696515826~exp=1696516426~hmac=96923b359bdc0d7eeccd0fe498e0f2fb08b7c2d5f08247210c66f709d32b3c3f" alt="" /></div>
                            <div className="discount"><p>SCHOOL <span className='disc'>(20% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src=" https://img.freepik.com/free-photo/sponge-stars-soap-bar-dispenser-blue-background_23-2147940459.jpg?w=360&t=st=1696515867~exp=1696516467~hmac=80ccbaef36b759d4a41b46ed7f0ea9f407787a965749457175c9802d9728b2c9" alt="" /></div>
                            <div className="discount"><p>BABY CARE <span className='disc'>(25% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container"> 
                <h2 className="p-title">ELECTRONICS<i className="fa-solid fa-arrow-right"></i></h2>
                <div className="p-container">
                    <div className="p-box">
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/new-smartwatch-balancing-with-hand_23-2150296477.jpg?w=740&t=st=1696515975~exp=1696516575~hmac=3ebd6a7aa192e03e82e04cddc68216938dc41a26534751ad4eca637cf2b3bda3" alt="" /></div>
                            <div className="discount"><p>WATCHES <span className='disc'>(20% - 30% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/laptop-balancing-with-purple-background_23-2150271750.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>LAPTOPS <span className='disc'>(20% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/premium-photo/tv-set-with-curved-screen-isolated_172429-992.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>TEVELISION <span className='disc'>(30% - 40% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/premium-vector/high-detailed-modern-computer_108855-3741.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>COMPUTER <span className='disc'>(30% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-vector/realistic-3d-black-speaker-background_23-2148162549.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.1.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>SOUND <span className='disc'>(50% - 60% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/photo-camera-balancing-with-yellow-background_23-2150271772.jpg?w=740&t=st=1696516252~exp=1696516852~hmac=ad6cf2789087449048ccdf02d3129898c83d381c0464cf2a60f34f70574e867c" alt="" /></div>
                            <div className="discount"><p>CAMERAS <span className='disc'>(20% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/premium-photo/futuristic-gadgets-showcase-lineup-sleek-modern-technological-devices_977107-681.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>ACCESSORIES <span className='disc'>(25% - 50% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container"> 
                <h2 className="p-title">MOBILES<i className="fa-solid fa-arrow-right"></i></h2>
                <div className="p-container">
                    <div className="p-box">
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>APPLE <span className='disc'></span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://images.pexels.com/photos/11772523/pexels-photo-11772523.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" /></div>
                            <div className="discount"><p>SAMSUNG <span className='disc'></span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://opsg-img-cdn-gl.heytapimg.com/epb/202306/20/7gMfZP5QASbVNN1K.png?x-amz-process=image/format,webp/quality,Q_80" alt="" /></div>
                            <div className="discount"><p>OPPO <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1677241587.64975684!348x348.jpg?f=webp" alt="" /></div>
                            <div className="discount"><p>XIAOMI <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://in-exstatic-vivofs.vivo.com/gdHFRinHEMrj3yPG/product/1695987453030/zip/img/vivo-v29-screen-feature-pc2.png" alt="" /></div>
                            <div className="discount"><p>VIVO <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://image01.realme.net/general/20230608/1686196034266e84391de43944a599cdec535212ef4f6.png.webp?width=1440&height=1440&size=710277" alt="" /></div>
                            <div className="discount"><p>REALME <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://motorolain.vtexassets.com/arquivos/ids/158287-800-auto?width=800&height=auto&aspect=true" alt="" /></div>
                            <div className="discount"><p>MOTOROLA <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="home-container"> 
                <h2 className="p-title">KITCHEN & HOME<i className="fa-solid fa-arrow-right"></i></h2>
                <div className="p-container">
                    <div className="p-box">
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-vector/realistic-kitchen-appliance_52683-83669.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>KITCHEN APPLIENCES <span className='disc'></span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/premium-photo/home-refrigerator-isolate-white-background_33900-5880.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>REFRIGARATOR <span className='disc'></span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/little-baby-lying-bed_23-2148094258.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>FURNISHING <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/high-angle-dining-table-arrangement_23-2150312211.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>DINNER TABLE <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/contemporary-living-room-interior-design-with-white-sofa_53876-126774.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=sph" alt="" /></div>
                            <div className="discount"><p>SOFA <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-photo/close-up-food-preservation-method_23-2149185662.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>KITCHEN STORAGE <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                        <div className="product-box">
                            <div className="img"><img src="https://img.freepik.com/free-vector/white-air-conditioner-climate-control-office-3d-home-summer-air-conditioning-system-conditioner-ventilation-air-illustration_1284-51588.jpg?size=626&ext=jpg&uid=R110614090&ga=GA1.2.434359893.1691300173&semt=ais" alt="" /></div>
                            <div className="discount"><p>AIR CONDITIONAR <span className='disc'>(20% Off*)</span></p></div>
                            <div className="btn"> <button className="button">SHOW ALL</button> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="foot-content">
                <h3>DONT WORRY SELECT THE PRODUCT IN MENU</h3>
            </div>
        </div>
    );
}

export default Home;
