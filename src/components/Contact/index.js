import { Bars } from 'react-loader-spinner'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_v5m3b5a',
        'template_s5exof8',
        refForm.current,
        'NiPujQbKepmyzpxLU'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in asdfasdgojajasdg bananan bannbnanbanbn
            abnanbanbnabnanb rswtyjnzrnjy swtrymjknntkm7yyswtmky 77
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Henry Benso,
          <br />
          USA
          <br />
          <span>hbenso@lion.lmu.edu</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[33.97092738768288, -118.41703485966558]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[33.97092738768288, -118.41703485966558]}>
              <Popup>You can find me here :)</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Bars
        height="80"
        width="80"
        color="#FFFFFF"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass="loader-active"
        visible={true}
      />
    </>
  )
}

export default Contact
