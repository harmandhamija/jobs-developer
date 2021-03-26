// DisplayJobs.js
import JobCard from './JobCard';

const DisplayJobs = (props) => {

    const {jobs, dbRef} = props;

    return(
        <section>
            <div className="display-message">
                <p>Currently displaying results for '<strong>{props.finalInput}</strong>' in '<strong>{props.finalLocation}</strong>'</p>
            </div>
            
            {
                jobs.map((job) => {

                    // const regex = /(<([^>]+)>)/ig;
                    // const description = job.description.replace(regex, "");
                    // const title = job.title.replace(regex, "");
                    // const dateFormat = dateformat(job.created, "mmm dS, yyyy");
                    // const datePosted = dateFormat;

                    return(
                        <JobCard job={job} key={job.id} dbRef = {dbRef} showSaveButtons/>
                    )
                })
            }
        </section>
    )
}

export default DisplayJobs;