import services from "../../assets/aboutus.jpg";
import CommunityEngagement from "./MoreServices/CommunityEngagement";
import EventsCorporatePackages from "./MoreServices/EventsCorporatePackages";
import SmartIotSolutions from "./MoreServices/SmartIotSolutions";
import PageHeader from "./PageHeader";


function OurServices() {
  return (
    <div className="w-full">
      {/* Top Section */}
      <PageHeader
        title="More Services"
        subtitle="Bringing Excellence to Your Entertainment Business"
        description="At Xentro, we offer a full range of services designed to create world-class entertainment facilities. From infrastructure planning to custom kart manufacturing, we provide the solutions that ensure safety, fun, and sustainability."
        backgroundImage={services}
      />

    
      <EventsCorporatePackages /> 
      <CommunityEngagement /> 
      <SmartIotSolutions /> 
    </div>
  );
}

export default OurServices;
