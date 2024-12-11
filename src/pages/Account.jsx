import { useState } from 'react';

export const Account = () => {

    const [activeComponent, setActiveComponent] = useState("AccountIntro");

    // Component1 - New Account Creation Part Starts
    const AccountIntro = () => (
        <div className="before-login">
            <p>Welcome to TrendSu! Create an account to start your shopping journey with us.</p>
            <div className="text-center pt-3">
                <button onClick={() => setActiveComponent("AccountCreation")}>Create an Account</button>
            </div>
        </div>
    )
    // New Account Creation Part Ends

    // Component2 - Before Loging Part Starts
    // const BeforeSignIn = () => (
    //     <div className="before-login">
    //         <p>Sign in to access your account. Don’t have one? Create it in seconds!</p>
    //         <div className="text-center pt-3">
    //             <button onClick={() => setActiveComponent("SignIn")}>Sign In</button>
    //             <button onClick={() => setActiveComponent("AccountCreation")}>Create an Account</button>
    //         </div>
    //     </div>
    // )
    // Before Loging Part Ends

    // Component3 - Login Details Part Starts
    const SignIn = () => (
        <div className="login-box">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <input type="email" required />
                    <label>Email</label>
                </div>
                <div className="input-box">
                    <input type="text" required />
                    <label>OTP</label>
                </div>
                <div className="input-submit">
                    <button onClick={() => setActiveComponent("AccountCreation")}>Back</button>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
    // Login Details Part Ends

    // Component4 - Account Creation Part Starts 
    const AccountCreation = () => (
        <div className="acc-creation">
            <h2>Create Your Account</h2>
            <form action="">
                <div className="acc-input">
                    <input type="text" placeholder="FirstName" required />
                </div>
                <div className="acc-input">
                    <input type="text" placeholder="LastName" required />
                </div>
                <div className="acc-input">
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="acc-input">
                    <input type="tel" placeholder="Mobile" required />
                </div>
                <div className="acc-input">
                    <input type="text" placeholder="State" required />
                </div>
                <div className="acc-input">
                    <input type="text" placeholder="City" required />
                </div>
                <div className="acc-input">
                    <input type="text" placeholder="Pincode" required />
                </div>
                <div className="acc-btn">
                    <button onClick={() => setActiveComponent("AccountIntro")}>Back</button>
                    <button onClick={() => setActiveComponent("Popup")}>Create</button>
                </div>
            </form>
        </div>
    )
    //  Account Creation Part Ends 

    // Component5 - Popup On Account Creation Part Starts 
    const Popup = () => (
        <div className="inner-cont" >
            <p className="fw-bold">Your account has been created successfully!😄</p>
            <div className="acc-btn">
                <button className="fw-bold" onClick={() => setActiveComponent("SignIn")}>Login</button>
            </div>
        </div>
    )
    // Popup On Account Creation Area Ends 

    const components = {
        AccountIntro: <AccountIntro />,
        // BeforeSignIn: <BeforeSignIn />,
        SignIn: <SignIn />,
        AccountCreation: <AccountCreation />,
        Popup: <Popup />
    };

    return (
        <section className="account">
            <div className="container">
                {components[activeComponent]}
            </div>
        </section>
    )
}
