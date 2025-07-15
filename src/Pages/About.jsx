import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutImage1 from '../assets/oilpef only.jpg';
import '../Styles/About.css';

function About() {
  const brands = [
    'GIVENCHY', 'CHANEL', 'GUCCI', 'MOLINARD', 'BOUCHEROY', 'VERSACE'
  ];

  return (
    <div className="About">
      <div className="aboutperfumery">
        <div className="aboutleftside">
          <h1>ABOUT US!</h1>
          <p>
            We love it when you smell really good. Therefore our purpose is making sure you scent as nice as you want.
            We want you to walk and feel confident scenting nice. And we have what it takes to make that happen.
          </p>
          <Link to="/login">
            <button className="aboutshopbutton">Shop now</button>
          </Link>
        </div>
        <div className="aboutimage1">
          <img src={aboutImage1} alt="Perfume display" />
        </div>
      </div>


      <div className="Brand">
        <div className="brandtitle">
          <h1>BRANDS</h1>
          <div className="brandMarqueeWrapper">
            <motion.div
              className="brandMarquee"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            >
              <ul className="brandList">
                {brands.concat(brands).map((brand, index) => (
                  <li key={index}><a href="#">{brand}</a></li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="aboutdescription">
        <div className="forall">
          <h1>FOR ALL</h1>
          <p>
            Our store contains perfumes and body sprays from different brands.
            We have excellent fragrances suitable for men, women, and children.
            Our prices are also good and our products are affordable.
          </p>
        </div>
        <div className="AVAILABILITY">
          <p>
            Our store is open every day of the week.
            Orders can be received at any time of the day,
            and products can also be delivered to you at your destination.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
