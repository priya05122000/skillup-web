import EnquireForm from '@/components/EnquireForm'
import Banner from './components/Banner'
import Languages from './components/Languages'

const page = () => {
    return (
        <div>
            <Banner />
            <Languages />
            <EnquireForm imageSrc="/languages/form.jpg" />
        </div>
    )
}

export default page
