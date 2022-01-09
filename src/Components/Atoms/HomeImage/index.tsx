import './style.css';
import devLogo from './devClass.png';
import dogLogo from './dogClass.png';


const HomeImage = () => (
    <div className="imageContainer">
        <img src={devLogo}  id="devClass" />
        <img src={dogLogo}  id="dogClass" />
    </div>
)

export default HomeImage