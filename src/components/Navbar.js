// Navbar.js
import panda from '../assets/panda.png';

const Navbar = (props) => {

    return(
        <div className= "navbar">
            <p>JobsDeveloper</p>
            <img src={panda} alt="pandaLogo" />
                
                {
                    !props.modalState
                    ?<p>Welcome {props.userName}!</p>
                    :null
                }
        </div>
    )
}

export default Navbar;