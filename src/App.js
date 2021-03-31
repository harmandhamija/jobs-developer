import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.js';
import Form from './components/Form.js';
import DisplayJobs from './components/DisplayJobs.js';
import Footer from './components/Footer.js';
import Modal from './components/Modal';
import SavedJobs from './components/SavedJobs';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import firebase from './components/firebase.js';

function App() {
  
  const [ showModal, setShowModal ] = useState(true);
  const [ modalUserName, setModalUserName] = useState("");

  const [finalInput, setFinalInput] = useState("Front-end developer");
  const [finalLocation, setFinalLocation] = useState("Canada");

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const dbRef = firebase.database().ref();

  useEffect(() => {
    axios({
      method: 'GET',
      url: "https://api.adzuna.com/v1/api/jobs/ca/search/1",
      dataResponse: "JSON",
      params: {
        app_id: "6d239693",
        app_key: "b59b34989309986dbe049dc5ad54c399",
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
    <Router>
      <div className="app">
          <header className="app-header">
            {showModal
              ? <Modal getModalState={getModalState} />
              : null
            }
            <Navbar modalState = {showModal} userName = {modalUserName}/>

            <Route path = "/" exact>
              <Form getUserInput={getUserInput} setIsloading={setIsLoading} />
            </Route>
          </header>

        <div className="wrapper">
          <main>
            {
              isLoading 
              ?<div className='loadingBar'>
                <div></div>
                <div></div>
                <div></div>
              </div>
              :jobs.length === 0
              ?<div className = "error-message">
                <p>No results found..Please try again or check back later!</p>
              </div>
              :<Route path="/" exact>
                <DisplayJobs jobs={jobs} finalInput={finalInput} finalLocation={finalLocation} dbRef={dbRef} />
              </Route>
            }
            <Route path="/savedjobs" exact component={SavedJobs} />

          </main>
        </div>

          <footer>
              <div className="wrapper">
                <Footer />
              </div>
          </footer>
      </div>
    </Router>
  );
}

export default App;
