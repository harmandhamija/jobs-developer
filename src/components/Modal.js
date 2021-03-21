// Modal.js
import panda from '../assets/panda.png';

import { useState } from 'react';

const Modal = (props) => {

    const [ modal, setModal ] = useState(true);
    const [ userName, setUserName ] = useState("");
    const [ modalForm, setModalForm ] = useState(true);

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setModalForm(false);
    }

    const handleClick = () => {
        setModal(false);
        props.getModalState(setModal, userName);
    }

    return(

        <div className = "modal-backdrop">
            <div className = "modal">

                {
                    !modalForm
                    ?<div className = "sign-in">
                        <p>Welcome {userName}! Good luck for your job searching!</p>
                        <button onClick = {handleClick}>Go to Website</button>
                    </div>

                    :<form onSubmit={handleSubmit}>
                        <h3>Welcome to JobsDeveloper </h3>
                        {/* <img src={panda} alt="pandaLogo" /> */}
                        <label htmlFor="Enter name" className="sr-only">Enter Name</label>
                        <input type="text" name="Enter name" id="Enter name" onChange={handleUserName} value={userName} placeholder="Enter Name" required ></input>
                        <button>SignIn</button>
                    </form>
                }

            </div>
        </div>
    )
}

export default Modal;