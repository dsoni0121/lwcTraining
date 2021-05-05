import {LightningElement} from 'lwc'
import { doc } from 'prettier';
import SumValue from '../../calc/inputOutput/inputOutput';

export default class Vindata extends LightningElement {
 data={"Count":2,
        "Message":"Results returned successfully. NOTE: Any missing decoded values should be interpreted as NHTSA does not have data on the specific variable. Missing value should NOT be interpreted as an indication that a feature or technology is unavailable for a vehicle.","SearchCriteria":"","Results":[{"ABS":"","ActiveSafetySysNote":"","AdaptiveCruiseControl":"","AdaptiveDrivingBeam":"","AdaptiveHeadlights":"","AdditionalErrorText":"","AirBagLocCurtain":"","AirBagLocFront":"1st Row (Driver & Passenger)","AirBagLocKnee":"","AirBagLocSeatCushion":"","AirBagLocSide":"1st Row (Driver & Passenger)","AutoReverseSystem":"","AutomaticPedestrianAlertingSound":"","AxleConfiguration":"","Axles":"","BasePrice":"","BatteryA":"","BatteryA_to":"","BatteryCells":"","BatteryInfo":"","BatteryKWh":"","BatteryKWh_to":"","BatteryModules":"","BatteryPacks":"","BatteryType":"","BatteryV":"","BatteryV_to":"","BedLengthIN":"","BedType":"","BlindSpotMon":"","BodyCabType":"","BodyClass":"Sport Utility Vehicle (SUV)\/Multi-Purpose Vehicle (MPV)","BrakeSystemDesc":"","BrakeSystemType":"","BusFloorConfigType":"Not Applicable","BusLength":"","BusType":"Not Applicable","CAN_AACN":"","CIB":"","CashForClunkers":"","ChargerLevel":"","ChargerPowerKW":"","CoolingType":"","CurbWeightLB":"","CustomMotorcycleType":"Not Applicable","DaytimeRunningLight":"","DestinationMarket":"","DisplacementCC":"2979.1682352","DisplacementCI":"181.8","DisplacementL":"3.0","Doors":"4","DriveType":"","DriverAssist":"","DynamicBrakeSupport":"","EDR":"","ESC":"","EVDriveUnit":"","ElectrificationLevel":"","EngineConfiguration":"","EngineCycles":"","EngineCylinders":"6","EngineHP":"300","EngineHP_to":"","EngineKW":"223.7100","EngineManufacturer":"","EngineModel":"","EntertainmentSystem":"","ErrorCode":"6","ErrorText":"6 - Incomplete VIN","ForwardCollisionWarning":"","FuelInjectionType":"","FuelTypePrimary":"Gasoline","FuelTypeSecondary":"","GCWR":"","GCWR_to":"","GVWR":"Class 1D: 5,001 - 6,000 lb (2,268 - 2,722 kg)","GVWR_to":"","KeylessIgnition":"","LaneDepartureWarning":"","LaneKeepSystem":"","LowerBeamHeadlampLightSource":"","Make":"BMW","MakeID":"452","Manufacturer":"BMW MANUFACTURER CORPORATION \/ BMW NORTH AMERICA","ManufacturerId":"968","Model":"X3","ModelID":"1719","ModelYear":"2011","MotorcycleChassisType":"Not Applicable","MotorcycleSuspensionType":"Not Applicable","NCSABodyType":"","NCSAMake":"","NCSAMapExcApprovedBy":"","NCSAMapExcApprovedOn":"","NCSAMappingException":"","NCSAModel":"","NCSANote":"","Note":"","OtherBusInfo":"","OtherEngineInfo":"","OtherMotorcycleInfo":"","OtherRestraintSystemInfo":"Head Inflatable Restraint for Driver, Front Passenger, Rear Outboard Driver-side and Rear Outboard Passenger-side.  Knee Inflatable Restraint for Driver.  Pretensioners for Driver and Front Passenger.","OtherTrailerInfo":"","ParkAssist":"","PedestrianAutomaticEmergencyBraking":"","PlantCity":"MUNICH","PlantCompanyName":"","PlantCountry":"GERMANY","PlantState":"","PossibleValues":"","Pretensioner":"Yes","RearCrossTrafficAlert":"","RearVisibilitySystem":"","SAEAutomationLevel":"","SAEAutomationLevel_to":"","SeatBeltsAll":"Manual","SeatRows":"","Seats":"","SemiautomaticHeadlampBeamSwitching":"","Series":"X3","Series2":"","SteeringLocation":"","SuggestedVIN":"","TPMS":"Direct","TopSpeedMPH":"","TrackWidth":"","TractionControl":"","TrailerBodyType":"Not Applicable","TrailerLength":"","TrailerType":"Not Applicable","TransmissionSpeeds":"","TransmissionStyle":"","Trim":"xDrive35i","Trim2":"SAV","Turbo":"","VIN":"5UXWX7C5*BA","ValveTrainDesign":"","VehicleType":"MULTIPURPOSE PASSENGER VEHICLE (MPV)","WheelBaseLong":"","WheelBaseShort":"","WheelBaseType":"","WheelSizeFront":"","WheelSizeRear":"","Wheels":"","Windows":""},{"ABS":"","ActiveSafetySysNote":"","AdaptiveCruiseControl":"","AdaptiveDrivingBeam":"","AdaptiveHeadlights":"","AdditionalErrorText":"The error positions are indicated by ! in Suggested VIN. In the Possible values section, each pair of parenthesis indicate information about each error position in VIN . The Numeric value before the : indicates the position in error and the values after the : indicate the possible values that are allowed in this position Unused position(s): 8;","AirBagLocCurtain":"","AirBagLocFront":"1st Row (Driver & Passenger)","AirBagLocKnee":"1st Row (Driver & Passenger)","AirBagLocSeatCushion":"","AirBagLocSide":"All Rows","AutoReverseSystem":"","AutomaticPedestrianAlertingSound":"","AxleConfiguration":"","Axles":"","BasePrice":"","BatteryA":"","BatteryA_to":"","BatteryCells":"","BatteryInfo":"","BatteryKWh":"20","BatteryKWh_to":"","BatteryModules":"","BatteryPacks":"","BatteryType":"","BatteryV":"","BatteryV_to":"","BedLengthIN":"","BedType":"Not Applicable","BlindSpotMon":"","BodyCabType":"Not Applicable","BodyClass":"Hatchback\/Liftback\/Notchback","BrakeSystemDesc":"","BrakeSystemType":"","BusFloorConfigType":"Not Applicable","BusLength":"","BusType":"Not Applicable","CAN_AACN":"","CIB":"","CashForClunkers":"","ChargerLevel":"","ChargerPowerKW":"","CoolingType":"","CurbWeightLB":"","CustomMotorcycleType":"Not Applicable","DaytimeRunningLight":"","DestinationMarket":"","DisplacementCC":"","DisplacementCI":"","DisplacementL":"","Doors":"5","DriveType":"RWD\/ Rear Wheel Drive","DriverAssist":"","DynamicBrakeSupport":"","EDR":"","ESC":"","EVDriveUnit":"","ElectrificationLevel":"","EngineConfiguration":"","EngineCycles":"","EngineCylinders":"","EngineHP":"","EngineHP_to":"","EngineKW":"","EngineManufacturer":"","EngineModel":"","EntertainmentSystem":"","ErrorCode":"5,6,14","ErrorText":"5 - VIN has errors in few positions; 6 - Incomplete VIN; 14 - Unable to provide information for all the characters in the VIN.","ForwardCollisionWarning":"","FuelInjectionType":"","FuelTypePrimary":"","FuelTypeSecondary":"","GCWR":"","GCWR_to":"","GVWR":"","GVWR_to":"","KeylessIgnition":"","LaneDepartureWarning":"","LaneKeepSystem":"","LowerBeamHeadlampLightSource":"","Make":"TESLA","MakeID":"441","Manufacturer":"TESLA, INC.","ManufacturerId":"955","Model":"Model S","ModelID":"1685","ModelYear":"2014","MotorcycleChassisType":"Not Applicable","MotorcycleSuspensionType":"Not Applicable","NCSABodyType":"","NCSAMake":"","NCSAMapExcApprovedBy":"","NCSAMapExcApprovedOn":"","NCSAMappingException":"","NCSAModel":"","NCSANote":"","Note":"","OtherBusInfo":"","OtherEngineInfo":"","OtherMotorcycleInfo":"","OtherRestraintSystemInfo":"","OtherTrailerInfo":"","ParkAssist":"","PedestrianAutomaticEmergencyBraking":"","PlantCity":"FREMONT","PlantCompanyName":"Tesla - Fremont, CA (FRE)","PlantCountry":"UNITED STATES (USA)","PlantState":"CALIFORNIA","PossibleValues":"(8:12)(12:ABFPRS)","Pretensioner":"","RearCrossTrafficAlert":"","RearVisibilitySystem":"","SAEAutomationLevel":"","SAEAutomationLevel_to":"","SeatBeltsAll":"Manual","SeatRows":"","Seats":"","SemiautomaticHeadlampBeamSwitching":"","Series":"","Series2":"","SteeringLocation":"Left Hand Drive (LHD)","SuggestedVIN":"5YJSA3D!*EF!  ","TPMS":"Direct","TopSpeedMPH":"","TrackWidth":"","TractionControl":"","TrailerBodyType":"Not Applicable","TrailerLength":"","TrailerType":"Not Applicable","TransmissionSpeeds":"","TransmissionStyle":"","Trim":"w\/DC Fast Charge","Trim2":"","Turbo":"","VIN":"5YJSA3DS*EF","ValveTrainDesign":"","VehicleType":"PASSENGER CAR","WheelBaseLong":"","WheelBaseShort":"","WheelBaseType":"","WheelSizeFront":"","WheelSizeRear":"","Wheels":"","Windows":""}]};
        
connectedCallback(){
   
   var var1=this.data.Results;
   console.log('val:',var1);

} 
        
        
 renderedCallback(){

    var var2_allkeys=Object.keys(this.data);
    var that=this; 
    var var3_opt = document.createElement("OPTION");

    var3_opt.innerHTML="----Select----";
    var3_opt.setAttribute("value", "----Select----");
    that.template.querySelector("select").appendChild(var3_opt); 

    var2_allkeys.forEach(function(eachElement){   
    var var4_opt = document.createElement("OPTION");
    var4_opt.innerHTML=eachElement;
    var4_opt.setAttribute("value", eachElement);
    that.template.querySelector("select").appendChild(var4_opt);    

    });  
 }
 showValue(event){
   
   var var5_optvalue=event.target.value;
   console.log('---var5_optvalue---'+var5_optvalue);
   var var6_defvalue=this.data[var5_optvalue];
   console.log('---var6_defvalue---'+var6_defvalue);
   if(var5_optvalue!='Results')
 {
   this.querySelector('cls2');
 }
   else{

   var var8_childKeys=Object.keys(var6_defvalue);
   var8_childKeys.forEach(function(var7_funVal){
   
   console.log('var7_funVal:',var7_funVal)
   secondOption.innerHTML=var7_funVal;
   secondOption.setAttribute("value",var7_funVal);
   var test=Object.values(var6_defvalue);
   console.log('test:',test);
   //that.template.querySelector("cls2").appendChild(var7_funVal);    
   });

   }

}

showSecondValue(event){

}
   
}