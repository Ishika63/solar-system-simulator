import React ,{useState}from 'react'
import SunCalc from 'suncalc';
import {createTimeOfInterest} from 'astronomy-bundle/time';
import {solarEclipseExists} from 'astronomy-bundle/solarEclipse';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {createSun} from 'astronomy-bundle/sun';


const MyCalender = () => {

    const times = SunCalc.getTimes(new Date(), 100.07, 72.877426);
    var sunriseStr = times.sunrise.getHours() + ':' + times.sunrise.getMinutes()+ ':' +times.sunrise.getSeconds();
    var moon = SunCalc.getMoonIllumination(new Date());



    var ssunrise = String(sunriseStr);
    var smoon = String(moon.fraction);
  

console.log(new Date().getHours);
    //var toi = createTimeOfInterest.fromTime(new Date().getFullYear,new Date().getMonth,new Date().getDay,new Date().getHours,new Date().getMinutes,new Date().getSeconds);
    
    //var exists = String(solarEclipseExists(toi));
    var idk1 = String(new Date().getFullYear)
    var idk = String( new Date().getMonth);
   // console.log(exists);
   console.log(idk1);
   console.log(idk)
    
    
    
    const location = {
    lat: 52.519,
    lon: 13.408,
};

const toi = createTimeOfInterest.fromTime(2020, 11, 20, 0, 0, 0);
const sun = createSun(toi);

const toiRiseUpperLimb =  sun.getRiseUpperLimb(location);
//const toiRiseCenter = await sun.getRise(location);
////const toiTransit = await sun.getTransit(location);
//const toiSetCenter = await sun.getSet(location);
//const toiSetUpperLimb = await sun.getSetUpperLimb(location);
    
const [date, setDate] = useState(new Date());

    const onDateChange = (newdate) => {
    setDate(newdate);
    console.log(newdate);
    }
    return (
        <div>
              <Calendar
          onChange={onDateChange}
          value={date}
          showNeighboringMonth={false}
          locale={"en-US"}
        />
         <h1>{ssunrise}</h1> 
         <h1>{smoon}</h1>
         <h1>{idk1}</h1>
         <h1>{idk}</h1>
         <h1>{toiRiseUpperLimb.catch}</h1>


        </div>
    )
}

export default MyCalender