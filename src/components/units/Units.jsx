import React, { useState } from 'react'
import style from './Units.module.css';
import { RiPhoneLine } from "react-icons/ri";
import { MdOutlineAttachEmail } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';

export default function Units(props) {
    const [isOpen, setIsOpen] = useState(false);    
    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
  return (
    <div className={style.units_container}>
        <header>
            <div className={style.brand}>     
                <Link to = '/'>
                    <img src="./images/fceo-logo.jpg" alt="FCE Logo" />
                </Link>
                <h4>{props.brandName}</h4>
            </div>
            <nav className={style.navbar}>
                <div className={style.menu_icon} onClick={toggleNavbar}><GiHamburgerMenu /></div>  
                              
                <ul className={`${style.ul_links} ${isOpen ? style.active : ''}`}>
                    <li><a href={props.Link1}>{props.item1}</a></li>
                    <li>
                        <div className={style.dropdown}>
                            <select name="Units" id="units" className={style.select}>
                                <option className={style.optional} value={props.optionlink1}>{props.option1}</option>
                                <option className={style.optional} value={props.optionlink2}>{props.option2}</option>
                                <option className={style.optional} value={props.optionlink3}>{props.option3}</option>
                                <option className={style.optional} value={props.optionlink4}>{props.option4}</option>
                                <option className={style.optional} value={props.optionlink5}>{props.option5}</option>
                                <option className={style.optional} value={props.optionlink6}>{props.option6}</option>  
                                <option className={style.optional} value={props.optionlink7}>{props.option7}</option>
                                <option className={style.optional} value={props.optionlink8}>{props.option8}</option>
                                <option className={style.optional} value={props.optionlink9}>{props.option9}</option>
                                <option className={style.optional} value={props.optionlink10}>{props.option10}</option>                         
                            </select>
                        </div>
                    </li>
                    <li><a href={props.link2}>{props.item2}</a></li>                    
                </ul>
            </nav>
        </header>
        <main className={style.main_content}>
            <div>
                <div className={style.left}>
                    <div className={style.title}>{props.unitLeader}'s Statement</div>
                    <div className={style.statement}>{props.statement}</div>
                </div>
                <hr />
                <div className={style.right}>
                    <div className={style.title}>Brief History</div>
                    <div>
                        <div className={style.sub_title}>Vision</div>
                        <div className={style.vision}>{props.vision}</div>
                        <br />
                        <div className={style.sub_title}>Mission</div>
                        <div className={style.mission}>{props.mission}</div>
                    </div>
                </div>
            </div>
            <h1 className={style.contactus_title}>Contact Us</h1>
            <div>
                <div className={style.left}>
                   <div className={style.icon}><RiPhoneLine /></div>
                   <div className={style.icon2}>
                        <p>Call Us</p>
                        <h1>{props.unitPhone}</h1>
                   </div>                   
                </div>
                <hr />
                <div className={style.right}>
                    <div className={style.icon}><MdOutlineAttachEmail /></div>
                    <div className={style.icon2}>
                        <p>Email Us</p>
                        <h1>{props.unitEmail}</h1>
                   </div>  
                </div>
            </div>
        </main>
        <footer className={style.footer}>
            <p>{props.brandText}</p>
            <p>&copy; {new Date().getFullYear()} FCE Ofeme Ohuhu. All rights reserved.</p>
        </footer>
    </div>
  )
}
