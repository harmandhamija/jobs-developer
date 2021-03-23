// Navbar.js
import panda from '../assets/panda.png';

const Navbar = (props) => {

    return(
        <div className= "navbar">
            <p>JobsDeveloper</p>
            <img src={panda} alt="pandaLogo" />
                
                {
                    !props.modalState
                    ? <button>Welcome {props.userName}!</button>
                    :null
                }
        </div>
    )
}

export default Navbar;