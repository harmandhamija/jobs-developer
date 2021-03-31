// SavedJobs.js

import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import firebase from './firebase.js';
import JobCard from './JobCard.js';

const SavedJobs = () => {

    const [ savedJobs, setSavedJobs ] = useState([]);

    const dbRef = firebase.database().ref();

    useEffect ( () => {

        dbRef.on('value', (response) => {

            const dbState = [];

            const data = response.val();

            for( let jobKey in data) {
                dbState.push(
                    {   uniqueId: jobKey,
                        data: data[jobKey]
                    });
            }
            setSavedJobs(dbState.reverse().slice(0, 10));
        })
    }, [dbRef]);
    
    return(

        <section className = "saved-jobs-container">
            <div className="display-message">
                <h2>Recently Saved Jobs</h2>
                <Link to="/"><p>Back to Results</p></Link>
            </div>
            {
                savedJobs.map((savedJob) => {
                    return (
                        <div className="saved-jobs" key={savedJob.uniqueId}>
                        <JobCard job={savedJob.data} key={savedJob.id} uniqueId={savedJob.uniqueId} dbRef={dbRef} showDeleteButton/>
                        </div>
                    )
                })
            }
        </section>
        )
}

export default SavedJobs;