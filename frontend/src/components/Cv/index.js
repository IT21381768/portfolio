import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import './index.scss';
import 'sweetalert2/dist/sweetalert2.css';
import cv from '../../assets/images/cv.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Cv = () => {
  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);


  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'y', '', 'C', 'V']}
              idx={15}
            />
          </h1>
          <p>
            If you want to view more details, don't hesitate to download my CV using below form either.
          </p>
          <p>Download CV</p>
          <div className="icon">
            <a href="CV - Yenuli Senevirathna.pdf" download="CV - Yenuli Senevirathna.pdf">
              <FontAwesomeIcon icon={faDownload} className="download-icon" /></a>
          </div>
        </div>

        <div className="map-wrap">
          {/* <img src={cv} alt="developer" /> */}
          <div class="letter-image">
            <div class="animated-mail">
              <div class="back-fold"></div>
              <div class="letter"><img src={cv} alt="developer" />
                <div class="letter-border"></div>
                <div class="letter-title"></div>
                <div class="letter-context"></div>
                <div class="letter-stamp">
                  <div class="letter-stamp-inner"></div>
                </div>
              </div>
              <div class="top-fold"></div>
              <div class="body"></div>
              <div class="left-fold"></div>
            </div>
            <div class="shadow"></div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>

  )
}

export default Cv