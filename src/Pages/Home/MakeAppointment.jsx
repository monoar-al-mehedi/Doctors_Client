import React from 'react'
import doctor from "../../assets/images/doctor.png"
import appointment from "../../assets/images/appointment.png"
import PrimaryButton from '../Shared/PrimaryButton'

const MakeAppointment = () => {
  return (
    <section style={{
        background: `url(${appointment})`
    }} 
    className='flex justify-center items-center'>
      <div className='flex-1'>
        <img className='mt-[-100px]' src={doctor} alt="" />
      </div>
      <div flex-1>
        <h3 className='text-xl text-primary font-bold'>Appointment</h3>
        <h2 className='text-3xl text-white'>Make an Appointment Today</h2>
        <p className='text-white'>Every once in a while, you’re bound to need to consult with a doctor for general 
            health check-up, seasonal fever, acute diseases, chronic illness, and more. It 
            many situations, we are physically weak and prefer to stay at home and even a 
            visit to a doctor seems an uphill task. If given an option we would rather prefer a 
            doctor to give us a visit, rather than we having to visit him personally. To fill this 
            void, “Patient Care Home Service & Surgical Items” has begun to provide healthcare 
            service at home and that too at reasonable costs compared to traditional hospitals and 
            nursing homes. The home visit doctors are qualified professionals and provide 
            consultation to treatment and help you throughout your recovery process. The best part 
            about in-home doctor service is you will be treated in the comfort of your home, 
            surrounded by your family members.</p>
            <PrimaryButton buttonText = {"Get Started"}/>
      </div>
    </section>
  )
}

export default MakeAppointment
