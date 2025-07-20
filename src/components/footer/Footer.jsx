import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import style from './footer.module.css';

export default function Footer() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      // Add a scroll event listener to check whether the user has scrolled down
      const handleScroll = () => {
        if (window.scrollY > 200) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      // Remove the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      // Scroll to the top of the page when the button is clicked
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // for a smooth scrolling effect
      });
    };

  return (
    <div className={style.cokkk}>
        <div className={style.footer_top}>          
            <div>
                <div className={style.f_col}>
                    <div className={style.foot_img}>
                      <img src="./images/logo.PNG" alt="footer-logo" />
                    </div>
                    <h3 className={style.foot_title}>Subscribe to our Newsletter</h3>
                    <label for="exampleInputEmail1" className={style.foot_title}>Email</label>&nbsp;
                    <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"></input>     
                    <div className={style.footer_btn}>Submit</div>

                    <br /><br />
                    <h3 className={style.foot_title}>Stakeholders</h3>
                    <p><Link to='#' onClick={scrollToTop}>NUC</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Ministry of Education</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>TETFund</Link></p>
                </div>
            </div>
            
            <div>
                <div className={style.f_col}>
                    <h3 className={style.foot_title}>General Information</h3>
                    <p><Link to='/about' onClick={scrollToTop}>About Us</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>International Collaboration</Link></p>
                    <p><Link to='/contact' onClick={scrollToTop}>Contact Us</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Scholarship</Link></p>

                    
                    <br /><br />
                    <h3 className={style.foot_title}>Careers</h3>
                    <p><Link to='#' onClick={scrollToTop}>Vacancies</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Recuitments</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Awards</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Events</Link></p>                       
                </div>
            </div>

            <div>
                <div className={style.f_col}>
                    <h3 className={style.foot_title}>Students</h3>
                    <p><Link to='#' onClick={scrollToTop}>Course Information</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Academic Calender</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Technical Services</Link></p>                        
                    <p><Link to='#' onClick={scrollToTop}>Portal</Link></p>
                    
                    <br /><br />
                    <h3 className={style.foot_title}>News</h3>
                    <p><Link to='#' onClick={scrollToTop}>Media Highlights</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Stories</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>Institution Based Research</Link></p>
                    <p><Link to='#' onClick={scrollToTop}>National Research Fund</Link></p>  
                </div>
            </div>

            <div>
              <div className={style.f_col}>
                <h3 className={style.foot_title}>Contacts</h3>
                <p>OFEME-OHUHU, PMB 7324, umuahia north LGA, Abia state, Nigeria.</p>
                <p>0800000000</p>
                <p>info@fceofemeohuhu.edu.ng</p>    

                <br /><br />
                <h3 className={style.foot_title}>Alumni</h3>
                <p><Link to='#' onClick={scrollToTop}>i-Transcript</Link></p>
                <p><Link to='#' onClick={scrollToTop}>Campus Life</Link></p>
                <p><Link to='#' onClick={scrollToTop}>Alumni Update</Link></p>
                <p><Link to='#' onClick={scrollToTop}>Health Services</Link></p>  
              </div>
            </div>

            {/* {isVisible && (
                <div onClick={scrollToTop} className={style.scroll_to_top_btn}>
                    <h1>Up</h1>
                </div>
            )} */}
                       
        </div>
        <hr/>
        <div className={style.footer_down}><hr />
            <div className={style.copy}>Copyright 2025 &copy; Federal College of Education, Ofeme Ohuhu. All rights reserved. &nbsp;&nbsp;| &nbsp;&nbsp; Powered by <span><a href="https://expertmediasolution.com/" target='_blank'>Expert Media Solutions</a></span></div>
        </div>       
    </div>
  )
}
