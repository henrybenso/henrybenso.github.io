import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGitAlt, faHtml5, faJava, faJsSquare, faSwift } from '@fortawesome/free-brands-svg-icons'
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
            <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                        idx={15}
                    />
                </h1>
                <p>
                    I'm a aspiring full-stack developer and Computer Science student at Loyola Marymount University
                     currently looking for an internship in software development.
                </p>
                <p>
                    I'm quite confident, naturally curious, and perpetually wokring on imppraskdghaksghdnn 
                </p>
                <p>
                    bananan bananana bannbanbna bananan bananana bannbanbna bananan bananana bannbanbna bananan bananana bannbanbna bananan bananana bannbanbna bananan bananana bannbanbna bananan bananana bannbanbna 
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon ={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon ={faSwift} color="#f05138" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon ={faJava} color="#1FBED6" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon ={faHtml5} color="#F06529" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon ={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon ={faGitAlt} color="#EC4D28" />
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