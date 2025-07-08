import LoginImage from "../assets/girl oilpef.jpg"; 
import "../Styles/Login.css";
function Login(){
    return(
        <div className="login">
            <div className="login-cont">
                <h1>sign up</h1>
                <div className="login-input">
                    <input type="text" placeholder="Your name" />
                    <input type="Email" placeholder="Email Adress"/>
                    <input type="password" placeholder="password"/>
                </div>
                <button className="login-button2">Continue</button>
                <p className="login-prompt">Already have an account? <span>Login here</span></p>
                <div className="login-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to the terms of use and privacy policy. </p>
                </div>
            </div>
            <div className="login-image">
                <img src={LoginImage} />
            </div>
        </div>
    )
}
export default Login