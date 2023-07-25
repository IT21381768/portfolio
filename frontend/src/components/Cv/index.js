import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import './index.scss';
import 'sweetalert2/dist/sweetalert2.css'; 
import Swal from 'sweetalert2'; 
import cv from '../../assets/images/yenuli.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faPhone, faMagnet, faBook, faGraduationCap, faDownload } from '@fortawesome/free-solid-svg-icons'

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

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_sadwdqc', 'template_mym0q8l', form.current, '8ATrUmFoioWhkNypF')
      .then(
        () => {
          Swal.fire({
            icon: 'success',
            title: 'Message Sent!',
            text: 'Your message has been successfully sent!',
            timer: 3000,
            showConfirmButton: false,
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: 'error',
            title: 'Message Failed!',
            text: 'Failed to send the message, please try again',
          });
        }
      );
  };
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
           <FontAwesomeIcon icon={faDownload} color='#4d4d4e'/></a>
           </div>
        </div>
        
        <div className="map-wrap">
        <img src={cv} alt="developer" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
   
  )
}

export default Cv