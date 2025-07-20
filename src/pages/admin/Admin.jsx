import React from 'react'
import style from './Admin.module.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';

export default function Admin() {
  return (
    <div className={style.administration}>
        <Navbar />
        <div className={style.principal_officers}>
            <h1>The Principal Officers</h1>
            <hr /><br /><br />
            <img src="/images/officers/provost.jpg" alt="" />
            <div className={style.position}>PROVOST</div>
            <div className={style.name}>Dr. Titus Sunday Ezeme</div>
            <div className={style.title}>Ph.D (English), MA, BA, NCE, FICAN, NATRESL, MNATECEP</div>

            <br /><br /><hr /><br /><br />
            <img src="/images/officers/registrar.jpg" alt="" />
            <div className={style.position}>REGISTRAR</div>
            <div className={style.name}>Lady Felicia Colman .N. Ibe</div>
            <div className={style.title}>M.Sc(PA), PGDPA, HND, MNIM, FCAI (JP)</div>
            
            <br /><br /><hr /><br /><br />
            <img src="/images/officers/bursar.jpg" alt="" />
            <div className={style.position}>BURSAR</div>
            <div className={style.name}>N/A</div>
            <div className={style.title}>N/A</div>

            <br /><br /><hr /><br /><br />
            <img src="/images/officers/liberian.jpg" alt="" />
            <div className={style.position}>LIBRARIAN</div>
            <div className={style.name}>Bulus Caleb Damen</div>
            <div className={style.title}>BLS, MLS, PDE, CCA. LRCN.</div>

            <br /><br />            
        </div>
        <div className={style.support_units}>
            <h1>Administrative Support Units</h1>
            <hr />
            <div className={style.support}>
                <div className={style.support_card}>Students Affairs</div>
                <div className={style.support_card}>Academic Planning</div>
                <div className={style.support_card}>Physical Planning</div>
                <div className={style.support_card}>Works Department</div>
                <div className={style.support_card}>ICT Center</div>
                <div className={style.support_card}>College Bookshop</div>
                <div className={style.support_card}>College Press</div>
                <div className={style.support_card}>Medical Center</div> 
                <div className={style.support_card}>TETFund</div>               
            </div>
        </div>
        <Footer />
    </div>
  )
}
