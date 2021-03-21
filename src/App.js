import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js';
import DisplayJobs from './components/DisplayJobs.js';
import Footer from './components/Footer.js';
import Modal from './components/Modal';

function App() {
  
  const [ showModal, setShowModal ] = useState(true);
  const [ modalUserName, setModalUserName] = useState("");

  const [finalInput, setFinalInput] = useState("");
  const [finalLocation, setFinalLocation] = useState("");

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  

  useEffect(() => {
    axios({
      method: 'GET',
      url: "https://api.adzuna.com/v1/api/jobs/ca/search/1",
      dataResponse: "JSON",
      params: {
        app_id: "0a87ec3c",
        app_key: "68a506ff99b48859a6f78b03a0aa2b94",
        results_per_page: 10,
        what: finalInput,
        where: finalLocation
      }
    }).then(response => {
      response = response.data.results;
      setJobs(response);
      setIsLoading(false);
    }).catch(error => {
      alert("No data received.Please try again later!");
      setIsLoading(false);
    })
  }, [finalInput,finalLocation])

  const getUserInput = (title, location) => {
    setFinalInput(title);
    setFinalLocation(location);
  }

  const getModalState = (modalState, userName) => {
    setShowModal(modalState);
    setModalUserName(userName);
  }

  return (
    <div className="app">
        <header className="app-header">
          <Navbar modalState = {showModal} userName = {modalUserName}/>
            <div className = "wraper">
              <section className = "app-section">
                <h1>Search your <i>dream</i> developer job /</h1>
                <Form getUserInput = {getUserInput} setIsloading = {setIsLoading}/>
              </section>
            </div>
        </header>

      <div className="wrapper">
        <main>

          {showModal
            ?<Modal getModalState = {getModalState} />
            :null
          }

          {
          finalInput === "" || finalLocation === ""
            ?<p className="search-initiate">Enter a job title & location to initiate a search</p>
            :isLoading 
            ? <div className='loadingBar'>
                <div></div>
                <div></div>
                <div></div>
            </div>
            :jobs.length === 0
            ?<p className="error-message">No results found..Please try again or check back later!</p>
            :<DisplayJobs jobs = {jobs} finalInput = {finalInput} finalLocation = {finalLocation}/>
          }
        </main>
      </div>

        <footer>
            <div className="wrapper">
              <Footer />
            </div>
        </footer>
    </div>
  );
}

export default App;
