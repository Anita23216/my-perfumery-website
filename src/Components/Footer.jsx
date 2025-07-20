
import "../Styles/Footer.css";
function Footer(){
    return(
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-brand">My Perfumery</div>
                <div className="footer-links">
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
                <form className="footer-newsletter" onSubmit={e => {e.preventDefault(); alert('Subscribed!')}}>
                    <input type="email" placeholder="Subscribe to newsletter" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
            <div className="footer-copyright">
                &copy; {new Date().getFullYear()} My Perfumery. All rights reserved.
            </div>
        </footer>
    )
}
export default Footer