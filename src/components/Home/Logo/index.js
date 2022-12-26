import './index.scss';
import LogoS from '../../../assets/images/logo-s.png'

const Logo =() => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoS} alt="happyface"/>
        </div>
    )
}

export default Logo