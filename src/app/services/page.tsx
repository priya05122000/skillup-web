import EnquireForm from '@/components/EnquireForm'
import React from 'react'
import Services from './components/Services'
import Banner from './components/Banner'

const page = () => {
    return (
        <div>
            <Banner />
            <Services />
            <EnquireForm imageSrc="/home/enquireform.jpg"/>
        </div>
    )
}

export default page
