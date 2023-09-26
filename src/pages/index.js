import React ,{useState} from 'react'

import Infosection from '../components/EventSection'
import { homeObjOne, homeObjthree, homeObjtwo } from '../components/EventSection/Data'
import HeroSection from '../components/HeroSection'
import Navbar from '../components/Navbar'
import Services from '../components/services'

import Sidebar from '../components/Sidebar'



const Home = () => {


    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {


        setIsOpen(!isOpen)
    }
    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/> 
           <HeroSection/>
           <Services/>
           
        
           
        </>
    )
}

export default Home