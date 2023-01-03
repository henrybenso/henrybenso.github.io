import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss'
import { Bars } from 'react-loader-spinner'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['e', 'n', 'r', 'y']
  const jobArray = [
    'a',
    's',
    'p',
    'i',
    'r',
    'i',
    'n',
    'g',
    ' ',
    'f',
    'u',
    'l',
    'l',
    '-',
    's',
    't',
    'a',
    'c',
    'k',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]
  const andArray = ['a', 'n', 'd']
  const schoolArray = [
    'C',
    'S',
    ' ',
    's',
    't',
    'u',
    'd',
    'e',
    'n',
    't',
    ' ',
    'a',
    't',
    ' ',
    'L',
    'M',
    'U',
    '.',
  ]

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _14`}>I</span>
            <span className={`${letterClass} _15`}>'m</span>
            <img src={LogoTitle} alt="developer" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={17}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={21}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={andArray}
              idx={50}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={schoolArray}
              idx={53}
            />
          </h1>
          <h2>Developer / Keyboard Enthusiast</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <Logo />
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

export default Home
