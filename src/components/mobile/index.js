import React from 'react'
import './styles.scss'
import paramsIcon from './../../assets/mobil-params.svg'
import mailIcon from './../../assets/mail.svg'
const Mobile = ({mobileData, linkYes, linkNo}) => {
    const {message, question, color_font, color_text} = mobileData;
    const dateNow = new Date();
    let hour = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    const divMobilStyle = {
        backgroundColor: color_font,
        color: color_text
    }
    return (
    <div className='mobile-device'>
         
        <div className='mobile-device-header'>
        <div className='mobile-device-header-left'>
            <span>{hour}:{minutes}</span>
            <img className='mobile-params clignote'src={mailIcon} />
        </div>
        <div className='mobile-device-header-center'>
            <span>UNADNGSM</span>
        </div>
        <div className='mobile-device-header-right'>
            <img className='mobile-params'src={paramsIcon} />
        </div>
        
        </div>
        <div className='mobile-device-text'>
            <span>message:</span>
            <p className='message'>{message}</p>
            <p className='question'>{question}</p>
        </div>
        <div className='mobile-device-button-wapper'>
            <button className='mobile-button-no' >
                        NON
            </button>
            <button className='mobile-button-yes'>
                        OUI
            </button>
        </div>

    </div>)
}

export default Mobile;