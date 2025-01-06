import React from "react";
import model from "../../assets/businessModel.jpg";
import FranchiseModel from "./BusinessModel/FranchiseModel";
import LeasModel from "./BusinessModel/LeasModel";
import PartnershipModel from "./BusinessModel/PartnershipModel";
import PageHeader from "./PageHeader";
function BusinessModel() {
  return (
    <div>
      

      <PageHeader
       title="Our Business Model"
       subtitle="**Tailored Solutions for Sustainable Growth and Profitability**"
       description="At Xentro, we create innovative entertainment ecosystems that
            combine cutting-edge technology, sustainability, and profitability.
            Our flexible business models make it easier than ever to partner
            with us."
       backgroundImage={model}
      />

      <LeasModel />
      <PartnershipModel />
      <FranchiseModel />
    </div>
  );
}

export default BusinessModel;
