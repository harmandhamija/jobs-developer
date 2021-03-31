// Footer.js
import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';


const Footer = () => {
    return(
        <div className = "footer">
            <p><a href="https://junocollege.com/" target="_blank" rel="noopener noreferrer">Made by Harman Dhamija @Juno College of Technology</a></p>
            <div className = "social-icons">
                <a href="https://github.com/harrydhamija/harman-dhamija-project3.git" target="_blank" rel="noopener noreferrer"><img src={github} alt="Github Logo with link to the profile"></img></a>
                <a href="https://www.linkedin.com/in/harman-dhamija-768514103/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn Logo with link to the profile"></img></a>
            </div>
        </div>
    )
}

export default Footer;