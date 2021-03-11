import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Navbar.js';
import Form from './Form.js';
import DisplayJobs from './DisplayJobs.js';
import Footer from './Footer.js';

function App() {
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
    })
  }, [finalInput,finalLocation])

  const getUserInput = (title, location) => {
    setFinalInput(title);
    setFinalLocation(location);
  }

  return (
    <div className="app">
        <header className="app-header">
          <Navbar />
            <div className = "wraper">
              <section className = "app-section">
                <h1>Search your <i>dream</i> developer job /></h1>
                <Form getUserInput = {getUserInput} />
              </section>
            </div>
        </header>

      <div className="wrapper">
        <main>
          {
          finalInput === "" && finalLocation === ""
          ?<p className="search-initiate">Enter a job title or location to initiate a search</p>
          :isLoading 
          ?<p>Loading...</p>
          :jobs.length === 0
          ?<p className="error-message">No results found..Please try again or check back later</p>
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
