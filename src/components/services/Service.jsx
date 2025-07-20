import React from 'react'
import style from './Service.module.css'

export default function Service() {
  return (
    <div className={style.service}>
        <div className={style.container}>
            <div>                
                <div className={style.service_title}>Discover</div>              
            </div>
            <div className={style.our_services}>
                <div className = {style.card_plane} data-aos="fade-up" data-aos-duration="2000">
                    <div className={style.service_light}>
                        <i class="bi bi-people-fill text-success"></i>
                        <div>About Us</div>
                    </div>
                </div>
                <div className = {style.card_light} data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-mortarboard-fill text-success"></i>
                        <div>Admissions</div>
                    </div>                    
                </div>
                <div className = {style.card_plane} data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light">
                        <i class="bi bi-bank2 text-success"></i>
                        <div>Faculties</div>
                    </div>                    
                </div> 

                 {/* <div className="" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-steam text-success"></i>
                        <div>Students Union</div>  
                    </div>                                      
                </div>                           
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light">
                        <i class="bi bi-unity text-success"></i>
                        <div>Alumni</div>
                    </div>
                </div>
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-search text-success"></i>
                        <div>Research</div>
                    </div>
                </div>
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light">
                        <i class="bi bi-amd text-success"></i>
                        <div>Campus Life</div>
                    </div>
                </div>      
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-white">
                        <i class="bi bi-ticket-detailed-fill text-success"></i>
                        <div>Research Policy</div>
                    </div>                    
                </div>                 
                <div className="" data-aos="fade-up" data-aos-duration="2000">
                    <div className="service-bg-light" data-aos="fade-up" data-aos-duration="2000">
                        <i class="bi bi-house-add-fill text-success"></i>
                        <div>Medical Center</div>
                    </div>
                </div>                 */}
            </div>
        </div>
    </div>
  )
}
