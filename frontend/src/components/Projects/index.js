import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import './index.scss';
import 'sweetalert2/dist/sweetalert2.css'; 
import liquor from '../../assets/images/liquor.png'
import bookStore from '../../assets/images/bookStore.png'
import emp from '../../assets/images/emp.png'
import app from '../../assets/images/app.jpg'
import login from '../../assets/images/login.png'


const Projects = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  const projectsData = [
    {
      imgSrc: liquor,
      title: 'ONLINE LIQUOR STORE & CUSTOMER MANAGEMENT SYSTEM',
      technologies: 'Web Application - MongoDB, Express, ReactJS, NodeJS',
      responsibility: 'Responsibility - Home page and Cart Management',
    },
    {
      imgSrc: bookStore,
      title: 'ONLINE BOOK STORE',
      technologies: 'Web system based - HTML , CSS , JS, PHP, MY SQL',
      responsibility: 'Responsibility - Login and Registration',
    },
     {
      imgSrc: emp,
      title: 'EMPLOYEE MANAGEMENT SYSTEM',
      technologies: 'Web Application - MongoDB, Express, ReactJS, NodeJS',
      responsibility: 'Responsibility - Full Project',
    },
     {
      imgSrc: app,
      title: 'E - COMMERCE APP',
      technologies: 'Mobile Application - Kotlin , Firebase',
      responsibility: 'Responsibility - Advertisement Management',
    },
     {
      imgSrc: login,
      title: 'EMPLOYEE MANAGEMENT SYSTEM',
      technologies: 'Web system based - Java , MY SQL',
      responsibility: 'Responsibility - Login and Registration',
    },
    
  ];

  const handleImageClick = (index) => {
    setShowDetails(projectsData[index]);
  };

  const handleCloseDetails = () => {
    setShowDetails(null);
  };



  
  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>

          <div className="project">
              {projectsData.map((project, index) => (
                <div className="package" key={index}>
                  <img
                    src={project.imgSrc}
                    alt="project"
                    onClick={() => handleImageClick(index)}
                  />
                  {showDetails && (
                    <div className="details-box">
                      <div className="details-content">
                        <span className="close-btn" onClick={handleCloseDetails}>
                          &times;
                        </span>
                        <p>{showDetails.title}</p>
                        <p>{showDetails.technologies}</p>
                        <p>{showDetails.responsibility}</p>
                      </div>
                    </div>

                    

                    
                  )}
                </div>
              ))}
            </div>
             



           

         
        </div>
        
        
      </div>
      <Loader type="pacman" />
    </>
   
  )
}

export default Projects