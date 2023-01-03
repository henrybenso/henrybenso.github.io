import { Bars } from 'react-loader-spinner'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                        idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in asdfasdgojajasdg bananan bannbnanbanbn abnanbanbnabnanb
                        rswtyjnzrnjy
                        swtrymjknntkm7yyswtmky 77
                    </p>
                    <div className="contact-form">
                        <form action='https://www.actionforms.io/e/r/myportfolio' method="any">
                            <ul>
                                <li className="half">
                                    <input type="text" name="name" placeholder="Name" required />
                                </li>
                                <li className='half'>
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
                                    placeholder='Message'
                                    name="message"
                                    required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className='lat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
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

export default Contact
