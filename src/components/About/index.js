import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faSwift,
} from '@fortawesome/free-brands-svg-icons'
import { Bars } from 'react-loader-spinner'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I'm an aspiring full-stack developer and Computer Science student
            attending Loyola Marymount University. My current interests are web
            development, algorithms, and AI.
          </p>
          <p>
            I'm quite confident, naturally curious, and perpetually working on
            projects as I have many ideas I'd like to capitalize on with not
            enough time on my hands. Currently, I am working towards learning
            ReactJS and Typescript to more efficiently create projects that
            pique my interest.
          </p>
          <p>
            In my free time, I like to learn about new programming languages and
            frameworks with generally a high-level understanding of their
            pros/cons. I also love to build keyboards and configure them as it
            is my weapon of choice for daily programming.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faSwift} color="#f05138" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJava} color="#1FBED6" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
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

export default About
