import './index.scss';
import LogoSub from '../../../assets/images/logo_sub.png'

const Logo =() => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoSub} alt="happyface"/>
        </div>
    )
}

export default Logo