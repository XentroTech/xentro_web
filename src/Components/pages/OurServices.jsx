import services from "../../assets/aboutus.jpg";
import PageHeader from "./PageHeader";
import AditionalAttraction from "./servicesComponents/AditionalAttraction";
import ChargingFacilities from "./servicesComponents/ChargingFacilities";
import CustomKartManufacturing from "./servicesComponents/CustomKartManufacturing";
import DeliveryLogistic from "./servicesComponents/DeliveryLogistic";
import FacilityConstruction from "./servicesComponents/FacilityConstruction";
import FeasibilityTesting from "./servicesComponents/FeasibilityTesting";
import ItInfrastructure from "./servicesComponents/ItInfrastructure";
import LayoutDesign from "./servicesComponents/LayoutDesign";
import LoyalityProgram from "./servicesComponents/LoyalityProgram";
import TrackConstruction from "./servicesComponents/TrackConstruction";
function OurServices() {
  return (
    <div className="w-full  ">
      {/* top section */}
    
      <PageHeader
       title="Our Services"
       subtitle="**Comprehensive Entertainment Facility Construction**"
       description="At Xentro, we offer a complete suite of services to bring your entertainment business to life. From planning to delivery, we ensure every detail is designed for quality, safety, and guest enjoyment."
       backgroundImage={services}
      />
      <FacilityConstruction />
      <CustomKartManufacturing />
      <ChargingFacilities />
      <LayoutDesign />
      <TrackConstruction />
      <FeasibilityTesting />
      <AditionalAttraction />
      <DeliveryLogistic />
      <ItInfrastructure />
      <LoyalityProgram />
    </div>
  );
}

export default OurServices;
