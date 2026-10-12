import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewLetterBox  from'../components/NewletterBox'

const About = () => {
    return (
        <div>

            <div className='text-2xl text-center pt-8 border-t'>
                <Title text1={'ABOUT'} text2={'US'} />
            </div>
        <div className = 'my-10 flex flex-col md:flex-row gap-16' >
          <img className = 'w-full md:max-w-[450px]' src={assets.about_img} alt=" " />
          <div className = 'flex flex-col justify-center gap-6 md:w-2/4 text-gray-600' >
            <p>Forever was born out of a fashion for inovation and a desire to create something unique.</p>
            <p>Since our inception, we have been comitted to providing the highest quality products and exceptional customer service.</p>
            <b className = 'text-gray-800' >Our Mission</b>
            <p>Our Mission at forever is to empower customers through innovative design and superior quality.</p>
          </div>
        </div>
        <div className = 'text-xl py-4'>
           <Title text1={'WHY'} text2={'CHOOSE US'} />   
        </div>
        <div className = 'flex flex-col md:flex-row text-sm mb-20' >
            <div className = 'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
           <b>Quality Assurance:</b>
           <p className = 'text-gray-600'>We meticulosly select and vet each product to ensure it meets our high standards.</p>
            </div>
            <div className = 'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
           <b>Convenience:</b>
           <p className = 'text-gray-600'>With our user-friendly interface and hassle-free ordering process.</p>
            </div>
            <div className = 'border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5' >
           <b>Exceptional Customer Service:</b>
           <p className = 'text-gray-600'>Our team of dedicated proffessionals is here to assist you the way, ensuring</p>
            </div>
        </div>
        <NewLetterBox/>

        </div>
    )
}

export default About