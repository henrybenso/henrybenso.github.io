import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'H', 'e', 'n', 'r', 'y']
    const jobArray = ['A', 's', 'p', 'i', 'r', 'i', 'n', 'g', ' ', 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']
    const andArray = ['a', 'n', 'd']
    const schoolArray = ['C', 'S', ' ', 's', 't', 'u', 'd', 'e', 'n', 't', ' ', 'a', 't', ' ', 'L', 'M', 'U', '.']


    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                    <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22} />
                 <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={andArray}
                idx={31} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={schoolArray}
                idx={34} />
                </h1>
                <h2>Fullstack Developer / Keyboard Enthusiast</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            {/* <Logo /> */}
        </div>
    )
}

export default Home