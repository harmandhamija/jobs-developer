// DisplayJobs.js
import dateformat from 'dateformat';
import maple from '../assets/maple.png';

const DisplayJobs = (props) => {

    const {jobs} = props;
    
    return(
        <section>
            <div className="display-message">
                <p>Currently displaying results for '<strong>{props.finalInput}</strong>' in '<strong>{props.finalLocation}</strong>'</p>
            </div>
            
            {
                jobs.map((job) => {

                    const regex = /(<([^>]+)>)/ig;
                    const description = job.description.replace(regex, "");
                    const title = job.title.replace(regex, "");
                    const dateFormat = dateformat(job.created, "mmm dS, yyyy");
                    const datePosted = dateFormat;

                    return(
                        <div className = "display-jobs" key={job.id}>
                            <div>
                                <h2><a href={job.redirect_url} target="_blank">{title}</a></h2>
                                <img src={maple} alt="maple leaf logo" />
                            </div>

                            <p><span>{datePosted}</span></p>
                            <h3>{job.company.display_name} • {job.location.area[2]}</h3>
                            <p>{description} <a href={job.url} target="_blank">See More</a></p>
                            <button><a href={job.url} target="_blank">Apply Now</a></button>
                        </div>
                    )
                })
            }
        </section>
    )
}

export default DisplayJobs;