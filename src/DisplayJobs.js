// DisplayJobs.js
import dateformat from 'dateformat';
import maple from './maple.png';

const DisplayJobs = (props) => {

    const regex = /(<([^>]+)>)/ig;
    const description = props.description.replace(regex, "");
    const title = props.title.replace(regex, "");
    // console.log(result);

    const dateFormat = dateformat(props.datePosted, "mmm dS, yyyy");
    const datePosted = dateFormat;

    return(
        <div className="display-jobs">
            <div>
                <h2><a href={props.url} target="_blank">{title}</a></h2>
                <img src={maple} alt="maple leaf logo"/>
            </div>
            <p><span>{datePosted}</span></p>
            <h3>{props.company} • {props.location}</h3>
            <p>{description} <a href={props.url} target="_blank">See More</a></p>
            {/* <p>{props.company} is looking for a {props.title} in {props.location}. Please follow the below link for more information.</p> */}
            <button><a href={props.url} target="_blank">Apply Now</a></button>
            {/* <button onClick = {handleClick}>Save</button> */}
        </div>
    )
}

export default DisplayJobs;