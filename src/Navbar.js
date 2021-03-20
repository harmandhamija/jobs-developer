// Navbar.js
import panda from './panda.png';
import {useState} from 'react';

const Navbar = () => {

    const [signIn, setSignIn] = useState(false);
    // const [signOut, setSignOut] = useState(false);
    const [userName, setUserName] = useState("");

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    // const handleSignOut = () => {
    //     setSignOut(true);
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSignIn(true);
    }

    return(
        <div className= "navbar">
            <p>JobsDeveloper</p>
            <img src={panda} alt="pandaLogo" />
                {
                    signIn
                        ?<div className="sign-in"> 
                            <p>Welcome {userName}!</p>
                            {/* <button onClick={handleSignOut}>Sign Out</button> */}
                        </div>
                        :
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="Enter name" className="sr-only">Enter Name</label>
                            <input type="text" name="Enter name" id="Enter name" onChange={handleUserName} value={userName} placeholder="Enter Name" required></input>
                            <button>SignIn</button>
                        </form>
                }
        </div>
    )
}

export default Navbar;