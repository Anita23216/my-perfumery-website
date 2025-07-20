import featured1 from '../assets/Xoxo Beth.jpg';
import featured2 from '../assets/BLACK OPIUM.jpg';
import featured3 from '../assets/ORIENS.jpg';

import '../Styles/Home.css';
function Home(){
    return(
        <div className="home">
            <section className="heading">
                <div className="heading-content">
                    <h1>Reveal the perfume that embodies your allure</h1>
                    <p>Unveil the essence of your elegance</p>
                </div>
            </section>
            <section className="featured">
                <h2>Featured Perfumes</h2>
                <div className="featured-list">
                    <div className="featured-item">
                        <img src={featured1} alt="Xoxo Beth" />
                        <div className='featured-name'>Xoxo Beth</div>
                    </div>
                    <div className='featured-item'>
                        <img src={featured2} alt='Black Opium'/>
                        <div className='featured-name'>Black Opium</div>
                    </div>
                    <div className='featured-item'>
                        <img src={featured3} alt="Oriens"/>
                        <div className='featured-name'>Oriens</div>
                    </div>
                </div>
            </section>

        </div>     
    )
}

export default Home