import React from 'react'
import Units from '../../components/units/Units'

export default function Ict() {
  return (
    <div>
        <Units 
            unitLeader="Director"
            item1="Home"
            item2="Contact Us"
            option1="Main Office"
            option2="Customer Care"
            option3="Portal Unit"
            option4="Website Unit"
            homeLink="/administration"
            brandText="ICT/Innovation Unit"
            brandName="ICT/Innovation Unit, Federal College of Education, Ofeme Ohuhu, Umuahia"

            statement="The ICT Unit of the College is generally charged with the responsibilities 
            of deploying ICT infrastructure and services for administration, teaching, research and 
            learning to the College at large.
            
            The ICT Unit is also responsible for the development and management of the College 
            ICT policies, strategies and standards. It also provides technical support for the students and Staff"

            vision="We aspire to build an organization that focuses on People, Process and Technology 
            evidenced by Committed and skilled staff accountable to College of education, Ofeme's mission; and 
            serving faculty and students;
            Simple processes making it easy for staff and students to work, and deliver results; and 
            Innovative technology to enhance teaching and learning in Federal College of Education, Ofeme Ohuhu, Umuahia"

            mission="To assure FECO Ofeme leadership in IT, we deliver academic excellence 
            through innovative technology and we strive to make it easier for faculty, students, and 
            staff to teach, research, learn, and work through the effective use of information technology."

            unitPhone="+234 803 000 0000"
            unitEmail="ict@fceo.edu.ng"
        />    
    </div>
  )
}
