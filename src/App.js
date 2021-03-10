import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import Form from './Form.js';
import DisplayJobs from './DisplayJobs.js';
import Footer from './Footer.js';

function App() {
  const [finalInput, setFinalInput] = useState("react");
  const [finalLocation, setFinalLocation] = useState("Toronto");

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
      // updating the jobs state with the items from our Api
      response = response.data.results;
      // console.log(response);
      setJobs(response);
      setIsLoading(false);
      // console.log(response);
      // setIsLoading(false);
    })
  }, [finalInput,finalLocation])

  const getUserInput = (title, location) => {
    setFinalInput(title);
    setFinalLocation(location);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Navbar />

        <section className = "App-section">
          <h1>Search your <i>dream</i> developer job /></h1>
          <Form getUserInput = {getUserInput} />
        </section>

      </header>

      <main>

          {
            
            isLoading 
            ? <p>Loading...</p>
            :jobs.length === 0
            ?<p>Oops.. No results found.. Please check back later</p>
            :finalInput === "" && finalLocation === ""
            ? <div className="display-error">
                <p>Enter a job title or location to start a search</p>
              </div>
            : 
            jobs.map((job) => {
                return (
                <DisplayJobs
                  key={job.id}
                  title={job.title}
                  datePosted={job.created}
                  company={job.company.display_name}
                  description={job.description}
                  location={job.location.area[2]}
                  url={job.redirect_url}
                />
              )
            })
          }

      </main>

      <footer>
        <Footer />
      </footer>

    </div>
  );
}

export default App;
