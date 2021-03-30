// SavedJobs.js

import {useState, useEffect} from 'react';
import firebase from './firebase.js';
import JobCard from './JobCard.js';

const SavedJobs = () => {

    const [ savedJobs, setSavedJobs ] = useState([]);

    const dbRef = firebase.database().ref();

    useEffect ( () => {

        dbRef.on('value', (response) => {

            const dbState = [];

            const data = response.val();

            for( let jobInfo in data) {
                dbState.push(data[jobInfo]);
            }

            setSavedJobs(dbState.reverse().slice(0, 10));
        })
    }, []);
    
    return(

        <section className = "saved-jobs-container">
            <div className="display-message">
                <h2>Recently Saved Jobs</h2>
            </div>
            {
                savedJobs.map((savedJob) => {
                    return (
                        <JobCard job={savedJob} key={savedJob.id} dbRef={dbRef}/>
                    )
                })
            }
        </section>
        )
}

export default SavedJobs;