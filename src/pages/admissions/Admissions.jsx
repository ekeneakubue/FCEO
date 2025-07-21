import React from 'react'
import Units from '../../components/units/Units'

export default function Admissions(props) {
  return (
    <div>
        <Units 
            unitLeader="Admissions Officer"
            item1="Home"
            item2="Contact Us"
            option1="Admissions"
            option2="Facuties"
            option3="Institutes"
            option4="Centers"           
            homeLink="/admissions"
            brandText="Admissions"
            brandName="Admissions, Federal College of Education, Ohuhu, Umuahia"

            statement="The Admissions Unit of the College is generally charged with the responsibilities 
            of deploying Admission infrastructure and services for administration, teaching, research and 
            learning to the College at large."
            
            vision="We aspire to build an organization that focuses on People, Process and Technology 
            evidenced by Committed and skilled staff accountable to Federal College of Education Ofeme’s 
            mission; and serving faculty and students; Simple processes making it easy for staff and 
            students to work, and deliver results; and Innovative technology to enhance teaching and 
            learning in College of Education, Ofeme Ohuhu, Umuahia"

            mission="To assure Our College leadership in IT, we deliver academic excellence 
            through innovative technology and we strive to make it easier for faculty, students, and 
            staff to teach, research, learn, and work through the effective use of information technology."

            unitPhone="+234 803 000 0000"
            unitEmail="admissions@fceo.edu.ng"
        />    
    </div>
  )
}
