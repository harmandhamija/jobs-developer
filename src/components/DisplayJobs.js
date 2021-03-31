// DisplayJobs.js
import JobCard from './JobCard';

const DisplayJobs = (props) => {

    const { jobs, dbRef, finalLocation, finalInput } = props;

    return(
        <section>
            <div className="display-message">
                <p>Currently displaying results for '<strong>{finalInput}</strong>' in '<strong>{finalLocation}</strong>'</p>
            </div>
            
            {
                jobs.map((job) => {
                    return(
                        <JobCard job={job} key={job.id} dbRef = {dbRef} showSaveButtons/>
                    )
                })
            }
        </section>
    )
}

export default DisplayJobs;