import contactUs from "../../assets/contactUs.webp";
import ContactUsForm from "./ContactUsForm";
import PageHeader from "./PageHeader";

function ContactUs() {
  return (
    <div className="w-full bg-gray-900 ">
      {/* top section */}
    
      <PageHeader
        title="Contact Us"
        subtitle="**Turning Your Vision into Reality with Expert Construction Services**"
        description="At Xentro, we design and build world-class entertainment facilities, ensuring top-notch quality, safety, and efficiency. From concept to completion, we turn your vision into reality, on time and within budget."
        backgroundImage={contactUs}
    />

    <ContactUsForm/>
     
    </div>
  );
}

export default ContactUs;
