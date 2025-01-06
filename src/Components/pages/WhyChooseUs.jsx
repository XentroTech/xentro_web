import whyChoose from '../../assets/whyChoose.jpg';
import PageHeader from "./PageHeader";
import HighROIandLowCosts from './WhyChooseUs/HighROIandLowCosts';
import OurProcess from './WhyChooseUs/OurProcess';
import SimplifiedSolutions from './WhyChooseUs/SimplifiedSolutions';
import WhoWeWorkWith from './WhyChooseUs/WhoWeWorkWith';

function WhyChooseUs() {
  return (
    <div className="w-full ">
      {/* Section Header */}
     
      <PageHeader
       title="Why Choose Us?"
       subtitle="** Tailored Karting Solutions for Sustainable Growth and Maximum Profitability **"
       description="Xentro brings you top-quality karting business solutions, from planning to construction, with a focus on sustainability and high returns."
       backgroundImage={whyChoose}
      />
      <SimplifiedSolutions/>
      <HighROIandLowCosts/>
      <OurProcess/>
      <WhoWeWorkWith/>
    </div>
  );
}

export default WhyChooseUs;
