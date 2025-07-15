import HomeImage from '../assets/cool pef only.jpg';
import '../Styles/Home.css';
function Home(){
    return(
        <div className="Home-container">
            <div className="perfumery">
                <div className="homeleftside">
                    <img src={HomeImage} />
                </div>
                <div className="homerightside">
                    <h1>Jims Perfumery</h1>
                    <p>smell good!</p>
                </div>
            </div>
        </div>
    )
}

export default Home