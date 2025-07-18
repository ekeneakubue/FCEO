import React from 'react'
import './Admin.css';

export default function Admin() {
  return (
    <div className='administration'>
        <div className="principal-officers">
            <h1>The Principal Officers</h1>
            <hr /><br /><br />
            <img src="/images/officers/provost.jpg" alt="" />
            <div className="position">PROVOST</div>
            <div className="name">Dr. Titus Sunday Ezeme</div>
            <div className="title">Ph.D (English), MA, BA, NCE, FICAN, NATRESL, MNATECEP</div>

            <br /><br /><hr /><br /><br />
            <img src="/images/officers/registrar.jpg" alt="" />
            <div className="position">REGISTRAR</div>
            <div className="name">Lady Felicia Colman .N. Ibe</div>
            <div className="title">M.Sc(PA), PGDPA, HND, MNIM, FCAI (JP)</div>

            <br /><br /><hr /><br /><br />
            <img src="/images/officers/bursar.jpg" alt="" />
            <div className="position">BURSAR</div>
            <div className="name">N/A</div>
            <div className="title">N/A</div>

            <br /><br /><hr /><br /><br />
            <img src="/images/officers/liberian.jpg" alt="" />
            <div className="position">LIBRARIAN</div>
            <div className="name">Bulus Caleb Damen</div>
            <div className="title">BLS, MLS, PDE, CCA. LRCN.</div>

            <br /><br />            
        </div>
        <div className="support-units">
            <h1>Administrative Support Units</h1>
            <hr />
            <div className="support">
                <div className="support-card">Students Affairs</div>
                <div className="support-card">Academic Planning</div>
                <div className="support-card">Physical Planning</div>
                <div className="support-card">Works Department</div>
                <div className="support-card">ICT Center</div>
                <div className="support-card">College Bookshop</div>
                <div className="support-card">College Press</div>
                <div className="support-card">Medical Center</div> 
                <div className="support-card">TETFund</div>               
            </div>
        </div>
    </div>
  )
}
