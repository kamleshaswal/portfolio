import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
    
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()
  

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'default_service',
      'template_dsssd14',
      refForm.current,
      'X9s7tcxEjKMi3B7J6'  
    )
    .then(
      () => {
        alert("Message successfully sent!")
        window.location.reload(false)
      },
      () => {
        alert('Failed to send the message, please try again')
      }
    )
  }

    return (
        <>
            <div className='container contact-page'>
            <div className='text-zone'>
            <h1>
                <AnimatedLetters letterClass={letterClass}
                 strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                    idx={15}
                />
                <br/>
            </h1>
            <br/>
            <p>
               I am interested in freelance oppportunities - espacially ambitious or large projects. However, if you have other requests or questions, don't hesitate to contact me using below form either. 
            </p>
            <div className='contact-form'>
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className='half'>
                <input type='text' name='name' placeholder='Name' required/>
                </li>
                <li className='half'>
                <input type='email' name='email' placeholder='Email' required/>
                </li>
                <li>
                  <input placeholder='Subject' type='text' name='subject'
                    required
                  />
                </li>
                <li>
                  <textarea placeholder='Message'
                  name='message'
                  required>
                  </textarea>
                </li>
                <li>
                  <input type='submit' className='flat-button' value='SEND'/>
                </li>
              </ul>
            </form>
            </div>

            </div>
            <div className='info-map'>
            Kamlesh Aswal,
            <br/>
             VCS Garhwali Marg, Srinagar Garhwal-246174<br />
             Uttarakhand <br />
             <span>kamleshaswal143@gmail.com</span>

            </div>
            <div className='map-wrap'>
          <MapContainer center={[30.222482731629402, 78.78896661544185]} zoom={13}>,
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          <Marker position={[44.96366, 19.61045]} >
          <Popup>Kamlesh lives here</Popup>
          </Marker>

          </MapContainer>
            </div>
                <Loader type='pacman' />
            </div>
        </>
    )
}

export default Contact;