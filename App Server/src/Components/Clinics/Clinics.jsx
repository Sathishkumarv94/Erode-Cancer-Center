import React from "react";

import PeripheralClinics from "../PeripheralClinics/PeripheralClinics";
import InsuranceSlider from "../InsuranceSlider/InsuranceSlider";
import LocationMap from "../Map/Map";


function Clinics(){
    return(
        <>
        
        <PeripheralClinics></PeripheralClinics>
        <InsuranceSlider></InsuranceSlider>
    <LocationMap></LocationMap>
    
        </>
    )
}
export default Clinics