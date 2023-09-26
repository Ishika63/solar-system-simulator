import React from 'react'

import Icon1 from '../../images/svg-1.svg'
import Icon2 from '../../images/svg-1.svg'
import Icon3 from '../../images/svg-1.svg'
import Video from '../../video/video.mp4'

import {ServicesContainer,ServicesH1,ServicesWrapper,ServicesCard,ServicesIcon,ServicesH2,ServicesP,ServicesCardLink} from './ServiceElements'
import {HeroBg,VideoBg,} from '../HeroSection/HeroElements'
import { Route } from 'react-router'

const Services = () => {
    return (
        <ServicesContainer id="services"> 
          <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <ServicesH1>EVENTS</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>

                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2} />
                    <ServicesH2>Virtual Offices</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>

                </ServicesCard>

                <ServicesCard >
                    <ServicesCardLink to="/Calender">
                    <ServicesIcon src={Icon3} />
                    <ServicesH2>Reduce expenses</ServicesH2>
                    <ServicesP>We help reduce your fess and increase your overall revenue</ServicesP>
                    </ServicesCardLink>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services