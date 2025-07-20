import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import aboutImage1 from '../assets/oilpef only.jpg';
import foundersImage from '../assets/girlin perfume store.jpg';
import '../Styles/About.css';

function About() {
  const brands = [
    'GIVENCHY', 'CHANEL', 'GUCCI', 'MOLINARD', 'BOUCHEROY', 'VERSACE'
  ];

  return (
    <div className="About">
      <div className="aboutperfumery">
        <div className="aboutleftside">
          <h1>Our Story</h1>
          <p>
            Driven by a love for fine fragrances, Our Perfumery handpicks the most refined scents from around the globe for those with a taste for sophistication. Our story started with one goal: to blend luxury, style, and individuality into every unique creation.
          </p>
        </div>
        <div className="aboutimage1">
          <img src={aboutImage1} alt="Perfume display" />
        </div>
      </div>


      <div className="about-descriptions">
        <div className="about-mission">
          <h2>Our Mission</h2>
          <p>
            We believe there’s power in a beautiful scent. 
            That’s why our purpose is to ensure you wear fragrances that reflect your essence 
            and elevate your confidence.We want every step you take to be accompanied by a scent that speaks of elegance. 
            And we have the artistry to make that possible.
          </p>
        </div>
        <div className="about-founder">
          <h2>Meet the Founder</h2>
          <div className="about-founder-card">
            <img src= {foundersImage} alt="founder's image"/>
            <div>
              <h3>Amelia Rose</h3>
              <p>Perfume Curator and Founder</p>
              <p>
                Amelia’s lifelong love for rare scents and her dedication to craftsmanship are at the heart of My Perfumery. She travels the globe to source the finest ingredients and create unforgettable olfactory experiences.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="Brand">
        <div className="brandtitle">
          <h1>BRANDS</h1>
          <div className="brandMarqueeWrapper">
            <motion.div
              className="brandMarquee"
              animate={{ x: ['100%', '-100%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
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
    </div>
  );
}

export default About;
