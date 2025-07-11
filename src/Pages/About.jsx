import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutImage1 from '../assets/oilpef only.jpg';
import '../Styles/About.css';
function About(){
    return(
        <div className="About">
            <div className="aboutperfumery">
                <div className="aboutleftside">
                    <h1>ABOUT US!</h1>
                    <p>We love it when you smell really good. 
                   Therefore our purpose is making sure you scent as nice as you want.
                   We want you to walk and feel confident scenting nice.
                   And we have what it takes to make that happen.
                   </p>
                    <Link to="/shop">
                    <button className="aboutshopbutton">Shop now</button>
                    </Link>
                </div>
                <div className="aboutimage1">
                    <img src={aboutImage1}/>
                </div>
            </div>
            <div className="Brand">
                <div className="brandtitle">
                    <h1>BRANDS</h1>
                    <motion.ul>
                        initial = {{ opacity: 0, y:50}}
                        animate = {{ opacity: 1, y:0}}
                        transition = {{ type: 'tween', duration: 1}}
                        
                        <li><a>GIVENCHY</a></li>
                        <li><a>CHANEL</a></li>
                        <li><a>GUCCI</a></li>
                        <li><a>MOLINARD</a></li>
                        <li><a>BOUCHEROY</a></li>
                        <li><a>VERSACE</a></li>
                    </motion.ul>
                </div>
            </div>
            <div className="aboutdescription">
                <div className="forall">
                    <h1>FOR ALL</h1>
                    <p>our store contains perfumes and body spray from different brands.
                        We have excellent fragrance suitable for Men, women and children.
                        Our prices are also good and our products are affordable.
                    </p>
                </div>
                <div className="AVAILABILITY">
                    <p>Our store is open everyday of the week.
                        Orders can be recieved at any time of the day
                        and products can also be delievered to you, at your destination.
                    </p>
                </div>
            </div>
        </div>
        
    )
}

export default About