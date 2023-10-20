import React from 'react'
import { useState , useEffect} from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './Firebase';   
import { useNavigate } from 'react-router-dom';
function Log({ logvisible, setLoggedIn}) {
    const [notification, setNotification] = useState(null);
    const [notificationType, setNotificationType] = useState('success');
    const [activeTab, setActiveTab] = useState('login');
    const [warning, setWarning] = useState('');
    const [submitBtn, setDisableSubmitBtn] = useState(false);
    const navigate = useNavigate();
    const [logvalue, setlogvalue] = useState({
        email: '',
        password: ''
    })
    const [value, setValue] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        conpassword: '',
        termsAccepted: false,
    });
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn === 'true') {
            setLoggedIn(true);
        }
    }, [setLoggedIn]);
    const showNotification = (message, type) => {
        setNotification(message);
        setNotificationType(type); 
        setTimeout(() => {
            setNotification(null);
            setNotificationType('success');  
        }, 3000);
    };

    const sumithandler = (e) => {
        e.preventDefault();
    
        if (activeTab === "signup") {
           
            createUserWithEmailAndPassword(auth, value.email, value.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Signup successful:", user);
                    setDisableSubmitBtn(false);
                    showNotification("Signup successful");
                    setNotificationType('success');
                    setLoggedIn(true); 
                    localStorage.setItem('isLoggedIn', 'true');  
                    navigate('/men');
                })
                .catch((error) => {
                    setDisableSubmitBtn(false);
                    console.error("Signup error:", error);
                    showNotification("Signup failed. Email already in use.");
                    setNotificationType('error');
                });
        } else {
            
            signInWithEmailAndPassword(auth, logvalue.email, logvalue.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("Login successful:", user);
                    setLoggedIn(true); 
                    localStorage.setItem('isLoggedIn', 'true'); 
                    navigate('/men');
                })
                .catch((error) => {
                    console.error("Login error:", error);
                    showNotification("Login failed. Please check your credentials and try again.");
                    setNotificationType('error');
                });
        }
    }

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    const handleCheckboxChange = () => {
        setValue((prev) => ({ ...prev, termsAccepted: !prev.termsAccepted }));
    };
    return (
        <div>
            <div className="loginpage" >
                <div className={`notification ${notificationType}`} style={{ display: notification ? 'block' : 'none' }}>
                    {notification}
                </div>
                <div className="log-btn">
                    <button onClick={() => handleTabClick('signup')}>Sign-up</button>
                    <button onClick={() => handleTabClick('login')}>Login</button>
                </div>
                <div className={`log-container ${logvisible ? 'logshow' : ''}`}>
                    <div className={`sign-up ${activeTab === 'signup' ? 'active' : ''}`}>
                        <h3 className="sign-heading log-heading ">Register Here</h3>

                        <div className="main-box">
                            <form onSubmit={sumithandler}>
                                <div className="warning">{warning}</div>

                                <div className="name input-div">
                                    <label htmlFor="name">
                                        Full Name <span className="required">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Enter Your Name"
                                        value={value.name}
                                        onChange={(e) => setValue((prev) => ({ ...prev, name: e.target.value }))}
                                    />
                                </div>

                                <div className="email input-div">
                                    <label htmlFor="email">
                                        Your Email <span className="required">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter Your Email"
                                        value={value.email}
                                        onChange={(e) => setValue((prev) => ({ ...prev, email: e.target.value }))}
                                    />
                                </div>

                                <div className="phone input-div">
                                    <label htmlFor="phone">
                                        Your Phone <span className="required">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="Enter Your Number"
                                        value={value.phone}
                                        onChange={(e) => setValue((prev) => ({ ...prev, phone: e.target.value }))}
                                    />
                                </div>

                                <div className="password input-div">
                                    <label htmlFor="password">
                                        Password <span className="required">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter Your Password"
                                        value={value.password}
                                        autoComplete='new-pass'
                                        onChange={(e) => setValue((prev) => ({ ...prev, password: e.target.value }))}

                                    />
                                </div>

                                <div className="con-password input-div">
                                    <label htmlFor="con-password">
                                        Conf-Password<span className="required">*</span>
                                    </label>
                                    <input
                                        type="password"
                                        name="conpassword"
                                        placeholder="Confirm Your Password"
                                        value={value.conpassword}
                                        autoComplete='new-pass'
                                        onChange={(e) => setValue((prev) => ({ ...prev, conpassword: e.target.value }))}
                                    />
                                </div>

                                <div className="terms-checkbox">
                                    <input
                                        type="checkbox"
                                        id="check"
                                        checked={value.termsAccepted}
                                        onChange={handleCheckboxChange}
                                    />
                                    <label htmlFor="check" className="small">
                                        Terms & Condition
                                    </label>
                                </div>

                                <div className="submit">
                                    <input type="submit" name="submit" disabled={submitBtn} />
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className={`login ${activeTab === 'login' ? 'active' : ''}`}>
                        <h3 className="login-heading log-heading">Welcome Back</h3>

                        <div className="main-box">
                            <form onClick={sumithandler}>
                                <div className="warning"></div>
                                <div className="email input-div">
                                    <label htmlFor="email">Your Email <span className='required'>*</span></label>
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='Enter Your Email'
                                        value={logvalue.email} 
                                        onChange={(e)=>setlogvalue((prev)=>({...prev, email:e.target.value}))}
                                        />
                                        
                                </div>
                                <div className="password input-div">
                                    <label htmlFor="password">Password <span className='required'>*</span></label>
                                    <input
                                        type="password"
                                        name='password'
                                        placeholder='Enter Your Password'
                                        autoComplete='new-pass'
                                        value={logvalue.password} 
                                        onChange={(e)=>setlogvalue((prev)=>({...prev, password:e.target.value}))}
                                        />
                                </div>
                                <div className="submit">
                                    <input type="submit" name='submit' />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Log
