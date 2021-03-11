// Modal.js

const Modal = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("I am submitted");
    }
    return (
        <div className = "modal-container">
            <form onSubmit={handleSubmit}>
                <h2>Welcome to JobsDeveloper App </h2>
                <label htmlFor="Enter your name">Enter your name</label>
                <input type="text" name="Enter your name" id="Enter your name"></input>

                <button type="Submit" onSubmit={handleSubmit}>Sign In</button>
            </form>
        </div>
    )
}

export default Modal;