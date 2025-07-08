import { FacebookLogo } from "phosphor-react";
import {WhatsappLogo} from "phosphor-react";
import {InstagramLogo} from "phosphor-react";
import {LinkedinLogo} from "phosphor-react";
import "../Styles/Footer.css";
function Footer(){
    return(
        <div className="footer">
            <div className="socialmedia">
                <p>&copy; 2025 JIMS PERFUMERY</p>
                <FacebookLogo/> <WhatsappLogo/> <InstagramLogo/> <LinkedinLogo/>
            </div>
        </div>
    )
}
export default Footer