import React, { useEffect }  from 'react'
import style from './Home.module.css'
import Services from '../../components/services/Service'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Set the duration of the animation
    });
    AOS.refresh(); // Refresh AOS to detect new elements
  }, []);

  return (
    <div> 
      <Navbar/>     
      <div className={style.hero_section}>
        <div className={style.hero_text}>
          <h2 data-aos="fade-up" data-aos-duration="2000">Welcome to Federal College of Education, Ofeme Ohuhu</h2>
          <p id={style.p_block} data-aos="fade-up" data-aos-duration="2000">
          <i class="bi bi-award-fill text-success"></i> To Educate to Liberate the Mind &nbsp;&nbsp;&nbsp;&nbsp;
          <i class="bi bi-award-fill text-success"></i> Committed to Excellence in Teacher Education
          </p>
          <p id="p-none" data-aos="fade-up" data-aos-duration="2000">
          <i class="bi bi-award-fill text-success"></i> To Educate To Liberate the Mind <br />
          <i class="bi bi-award-fill text-success"></i> Committed to Excellence in Teacher Education
          </p>
        </div>
      </div>
      <div className={style.container}>
        <div className={style.home}>          
          <Services/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
