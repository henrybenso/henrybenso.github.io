// import './index.scss';
// import LogoSub from '../../../assets/images/logo_sub.png'

// const Logo =() => {
//     return (
//         <div className='logo-container'>
//             <img className='solid-logo' src={LogoSub} alt="happyface"/>
//         </div>
//     )
// }

// export default Logo

import './index.scss';
import LogoPerson from '../../../assets/images/logo_person.png'

const Logo =() => {
    return (
        <div className='logo-container'>
            <img className='solid-logo' src={LogoPerson} alt="developer"/>
            <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 492.08 530.83">
                {/* <defs>
                    <style>
                        .cls-1 {
                        fill="none"
                        }
                        .cls-2 {
                        fill="none"
                        }
                        </style>
                        </defs> */}
                <g
                    className="svg-container"
                    transform="translate(0 457) scale (.1 -.1)"
                    fill="none"
                >
                        <path d="m418.64,530.83c-.69-2.17-.98-4.45-1.12-6.78-1.07-.82-1.82-2.04-1.86-3.59h-62.34v-240.08h-203.94c.7,3.16,1.24,6.33,1.52,9.55.35.28.71.55,1.08.82h190.97v240.08h75.69Z"/>
                        <path d="m419.24,0h-76.28v209.46h-205.01c.57,2.08.16,4.41-.21,6.48-.23,1.29-.4,2.59-.53,3.89h216.13V10.37h66.57c-.4-3.44-.62-6.9-.66-10.37Z"/>
                        <path d="m82.17,529.13c-2.83.24-5.91-1.52-5.55-4.84.14-1.28.31-2.55.47-3.82H10.37V10.37h64.28c.77-1.46,2.45-2.31,4.19-2.45.08-.33.17-.65.25-.97.11-2.01.33-3.97.88-5.79.13-.42.32-.8.55-1.15H0v530.83h82.18c0-.07-.01-.14-.01-.22,0-.43.03-.86.04-1.28,0-.07-.02-.14-.03-.2Z"/>
                        <path d="m401.39,0v209.47h-252.62V0H58.43v530.83h90.34v-240.08h252.62v240.08h90.7V0h-90.7Zm80.32,520.46h-69.95v-240.08H138.4v240.08h-69.6V10.37h69.6v209.47h273.36V10.37h69.95v510.09Z"/>
                        {/* <path d="m343.83,199.22c2.98-.03,6.09.15,9.18.56v-31.13h-204.56v9.84c.1,0,.19-.02.29-.02.02,0,.04,0,.07,0,.02,0,.04,0,.07,0,.09,0,.18.02.27.03.08,0,.16.01.24.02h0c.08.01.17.01.25.03v-.1h194.19v20.77Z"/> */}
                </g>
            </svg>
        </div>
    )
}

export default Logo