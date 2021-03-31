// JobCard.js

// Required Packages
import { useState } from 'react';
import dateformat from 'dateformat';
import { Link } from 'react-router-dom';
// Custom assets
import maple from '../assets/maple.png';

const JobCard = (props) => {

    const { job, dbRef, uniqueId, showSaveButtons, showDeleteButton } =  props;

    const [ isSaved, setIsSaved] = useState(false);

    const regex = /(<([^>]+)>)/ig;
    const description = job.description.replace(regex, "");
    const title = job.title.replace(regex, "");
    const dateFormat = dateformat(job.created, "mmm dS, yyyy");
    const datePosted = dateFormat;

    const savedToFirebase = () => {
        dbRef.push(job);
        setIsSaved(true);
    }

    const removeJob = () => {
        dbRef.child(uniqueId).remove();
    }

    return(
        <div className="display-jobs" key={job.id}>
            <div>
                <h2><a href={job.redirect_url} target="_blank" rel="noopener noreferrer">{title}</a></h2>
                <img src={maple} alt="maple leaf logo" />
            </div>

            <p><span>{datePosted}</span></p>
            <h3>{job.company.display_name} • {job.location.area[2]}</h3>
            <p>{description} <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">See More</a></p>

            <div className="apply-save">
                <button><a href={job.redirect_url} target="_blank" rel="noopener noreferrer">Apply Now</a></button>
                {
                    showSaveButtons && (
                        <p onClick={savedToFirebase}>Save job</p>
                    )
                }
                {
                    showDeleteButton && (
                        <p onClick={removeJob}>Remove</p>
                        )
                }
            </div>
            {
                isSaved
                    ?<div className = "is-saved">
                        <p>Added to <Link to = "/savedjobs">Saved list</Link>.</p>
                    </div>
                    :null
            }
        </div>
    )
}

export default JobCard;