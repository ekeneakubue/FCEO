import React from 'react'
import './Academics.css'

export default function Academics() {
  return (
    <div className='academics'>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className='academics-title'>ACADEMICS</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 academics-col-light" data-aos="fade-up" data-aos-duration="2000">
                    <div className="academics-bg-light">
                        <i class="bi bi-mortarboard-fill text-success"></i>
                        <div>Admission</div>
                    </div>
                </div>
                <div className="col-md-6 academics-col-white" data-aos="fade-up" data-aos-duration="2000">
                    <div className="academics-bg-white">
                        <i class="bi bi-bank2 text-success"></i>
                        <div>Faculties</div>
                    </div>                    
                </div>
                <div className="col-md-6 academics-col-white" data-aos="fade-up" data-aos-duration="2000">
                    <div className="academics-bg-light">
                        <i class="bi bi-bank text-success"></i>
                        <div>Institutes</div>
                    </div>
                </div>               
                <div className="col-md-6 academics-col-light" data-aos="fade-up" data-aos-duration="2000">
                    <div className="academics-bg-white">
                        <i class="bi bi-ticket-detailed-fill text-success"></i>
                        <div>Centers</div>
                    </div>                    
                </div>             
            </div>
        </div>
    </div>
  )
}
