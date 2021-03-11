// Footer.js
import github from './github.svg';
import linkedin from './linkedin.svg';


const Footer = () => {
    return(
        <>
            <p><a href="https://junocollege.com/" target="_blank">Made by Harman Dhamija @ Juno College of Technology</a></p>
        <div className = "social-icons">

                <a href="https://github.com/harrydhamija" target="_blank"><img src={github} alt="Github Logo with link to the profile"></img></a>
                <a href="https://www.linkedin.com/in/harman-dhamija-768514103/" target="_blank"><img src={linkedin} alt="LinkedIn Logo with link to the profile"></img></a>
        </div>
        </>
    )
}

export default Footer;