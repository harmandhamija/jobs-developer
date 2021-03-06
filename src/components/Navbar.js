// Navbar.js
import panda from '../assets/panda.png';
import {Link} from 'react-router-dom';

const Navbar = (props) => {

    const { showModal, modalUserName } = props;

    return(
        <div className= "navbar">
            <Link to = "/"><div className="title-logo">
                <p>JobsDeveloper</p>
                <img src={panda} alt="pandaLogo" />
            </div>
            </Link>
                {
                    !showModal
                    ? <button>Welcome {modalUserName}!</button>
                    :null
                }
        </div>
    )
}

export default Navbar;