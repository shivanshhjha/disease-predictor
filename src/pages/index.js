import React, {useState} from 'react'
import Navbar from '../component/Navbar'
import Sidebar from '../component/Sidebar'
import HeroSection from '../component/HeroSection'
import InfoSection from '../component/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../component/InfoSection/Data'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/>
        </>
    )
}

export default Home
