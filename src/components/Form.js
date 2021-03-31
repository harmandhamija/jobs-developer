// Form.js

import {useState} from 'react';

const Form = (props) => {

    const { getUserInput, setIsloading } = props;

    const [titleInput, setTitleInput] = useState("");
    const [locationInput, setLocationInput] = useState("");

    const handleTitleInput = (event) => {
        setTitleInput(event.target.value);
    }

    const handleLocationInput = (event) => {
        setLocationInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getUserInput(titleInput,locationInput);
        setIsloading(true);
        setTitleInput("");
        setLocationInput("");
    }

    return(
        <section className="app-section">
            <h1>Search your <i>dream</i> developer job /></h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="Enter job role">What</label>
                    <input type="text" name="Enter job role" id="Enter job role" value={titleInput} placeholder="Job Title or Keywords" onChange={handleTitleInput} required></input>

                    <label htmlFor="Enter location">Where</label>
                    <input type="text" name="Enter location" id="Enter location" value={locationInput} placeholder="Eg : Toronto" onChange={handleLocationInput} required></input>

                    <button type="submit">Find Jobs</button>
                </form>
            </div>
        </section>
    )
}

export default Form;
