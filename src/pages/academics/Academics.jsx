import React from 'react'
import style from './Academics.module.css'
import { FaGraduationCap } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { FaCubes } from "react-icons/fa";
import { GiGreekTemple } from "react-icons/gi";
import { FaUsers } from "react-icons/fa6";
import { LuNotebookPen } from "react-icons/lu";
import { Link } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import Footer from '../../components/footer/Footer'

export default function Academics() {
  return (
    <div>
      <Navbar/>
      <div className={style.academics_container}>
        <Link to = '/admissions'>
          <div className={style.card_light}>
            <div className={style.icon}><FaGraduationCap /></div>
            <div className={style.title}>Admissions</div>
          </div>
        </Link>
        <Link to = '#'>
          <div className={style.card_white}>
            <div className={style.icon}><FaWarehouse /></div>
            <div className={style.title}>Faculties</div>
          </div>
        </Link>
        <Link to = '#'>
          <div className={style.card_light}>
            <div className={style.icon}><FaCubes /></div>
            <div className={style.title}>Institutes</div>
          </div>
        </Link>
        <Link to = '#'>
          <div className={style.card_white}>
            <div className={style.icon}><GiGreekTemple /></div>
            <div className={style.title}>Centers</div>
          </div>
        </Link>
        <Link to = '#'>
          <div className={style.card_light}>
            <div className={style.icon}><FaUsers /></div>
            <div className={style.title}>Students Affairs</div>
          </div>
        </Link>
        <Link to = '#'>
          <div className={style.card_white}>
            <div className={style.icon}><LuNotebookPen /></div>
            <div className={style.title}>Academic Planning</div>
          </div>
        </Link>
      </div>
      <Footer/>
    </div>
  )
}
