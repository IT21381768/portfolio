import './index.scss'
import {Link, NavLink} from 'react-router-dom'
import LogoS from '../../assets/images/y-logo.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faPhone, faMagnet, faBook, faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faSkype, faWeebly, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt='logo'/>
            {/* <img src={LogoSubtitle} alt='slabodan'/> */}
        </Link>
        <nav>
            <NavLink exact="true" activaclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activaclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activaclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faPhone} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activaclassname="active" className="project-link" to="/projects">
                <FontAwesomeIcon icon={faBook} color='#4d4d4e'/>
            </NavLink>
            <NavLink exact="true" activaclassname="active" className="cv-link" to="/cv">
                <FontAwesomeIcon icon={faGraduationCap} color='#4d4d4e'/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                <FontAwesomeIcon icon={faGithub} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                <FontAwesomeIcon icon={faYoutube} color='#4d4d4e'/>
                </a>
            </li>
            <li>
                <a target='_blank' rel='noreferrer' href='#'>
                <FontAwesomeIcon icon={faSkype} color='#4d4d4e'/>
                </a>
            </li>
        </ul>
    </div>

)


export default Sidebar