import React, {useState} from 'react';
import '../../style/contactForm.scss';
import { Link } from 'react-router-dom';
import {BsFillTelephoneFill} from 'react-icons/bs';
import {BiLogoTelegram} from 'react-icons/bi';
import {SiViber} from 'react-icons/si';
import {BsWhatsapp} from 'react-icons/bs';
import {SiMaildotru} from 'react-icons/si';
const ContactForm = () => {
    const [messengersArray] = useState([
        {
            icon: <BsFillTelephoneFill className='messenger_icon'/>,
            url: 'https://www.google.com/'
        },
        {
            icon: <BiLogoTelegram className='messenger_icon'/>,
            url: 'https://www.google.com/'
        },
        {
            icon: <SiViber className='messenger_icon'/>,
            url: 'https://www.google.com/'
        },
        {
            icon: <BsWhatsapp className='messenger_icon'/>,
            url: 'https://www.google.com/'
        },
        {
            icon: <SiMaildotru className='messenger_icon'/>,
            url: 'https://www.google.com/'
        },
    ])
    return (
        <div className='contact_form_block'>
            <div className='contact_form_main_text_wrap'>
                <p className='contact_form_main_text'>Заповніть форму і я зв'яжусь з Вами для обговорення вартості та термінів створення сайту протягом 1 години</p>
            </div>
            <div className='contact_form_name_input_wrap'>
                <p className='contact_form_name_input_text'>Як Вас звати?</p>
                <input className='contact_form_input' placeholder='На приклад - Микола'/>
            </div>
            <div className='contact_form_phone_input_wrap'>
                <p className='contact_form_phone_input_text'>Як з Вами зв'язатись?</p>
                <div className='contact_form_phone_input_messengers_wrap'>
                    {messengersArray.map((icon,idx) => (
                        <Link to={icon.url} key={idx}>
                            {icon.icon}
                        </Link>
                    ))}
                </div>
                <input className='contact_form_input'/>
                <p className='contact_form_phone_input_example'>Номер телефону в форматі +38(0__)__ __ __</p>
            </div>
            <div className='contact_form_button_wrap'>
                <button className='contact_form_button'>Обговорити проект</button>
            </div>
        </div>
    );
};

export default ContactForm;