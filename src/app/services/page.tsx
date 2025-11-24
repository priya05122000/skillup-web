import EnquireForm from '@/components/EnquireForm'
import React from 'react'
import Services from './components/Services'
import Banner from './components/Banner'

const page = () => {
    return (
        <div>
            <Banner />
            <Services />
            <EnquireForm imageSrc="/services/enquiry.jpg"/>
        </div>
    )
}

export default page
