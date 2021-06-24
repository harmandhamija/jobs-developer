// Modal.js
import { useState } from 'react';

const Modal = (props) => {

    const { setShowModal, setModalUserName } = props;

    const [ userName, setUserName ] = useState("");

    const handleUserName = (event) => {
        setUserName(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowModal(false);
        setModalUserName(userName);
    }

    return(

        <div className = "modal-backdrop">
            <div className = "modal">
                <form onSubmit={handleSubmit}>
                    <p>Welcome to JobsDeveloper </p>
                    <label htmlFor="Enter name" className="sr-only">Enter Name</label>
                    <input type="text" name="Enter name" id="Enter name" onChange={handleUserName} value={userName} placeholder="Enter Name" required maxLength = "10"></input>
                    <button>Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;