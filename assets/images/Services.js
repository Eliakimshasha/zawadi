import {React, useEffect, useRef} from "react";
import "./Services.css";
import Footer from "./Footer";
import { MdOutlineEmojiTransportation } from "react-icons/md";
import str1 from "../images/str1.jpg";
import cash3 from "../images/cash3.jpg";
import korosho1 from "../images/cosho1.jpg";
import smile1 from "../images/smile1.jpg";
import qualit from "../images/qualit.jpg";
import map from "../images/map.png";
import Carousel3 from "../Carousel3";
import { Link } from "react-router-dom";
import Faqs from "./Faqs";
import Up from "./Up";
import Header from "./Header";

function Services() {
  const upRef = useRef('')
  useEffect(()=>{
    upRef.current.scrollIntoView({behavior: 'smooth'})
  }, [])
  return (
   <div ref={upRef}>
      <Header />
    
     <div className="service">
      <Up />
      <div className="service-container1">
        <h1>zawadi agrifood Services</h1>
        <p>
          Zawadi Agrifood is a leading exporter of premium quality cashew nuts
          based in Tanzania. With a commitment to excellence and sustainability,
          we ensure that our products meet the highest standards of quality and
          taste.{" "}
          <p className="p-display-none p-display-none-service">
            Our headquarters in Tanzania allows us to source the finest cashew
            nuts directly from local farmers, ensuring freshness and
            authenticity.
          </p>
        </p>
      </div>

      <div className="journey">
        <h1></h1>
        <div className="journey-content">
          <ul>
            <div className="figure">
              <li>
                <h1 className="journey-content-h1">High Quality Services</h1>
                zawadi agrifood is a leading exporter of premium quality cashew
                nuts based in Tanzania. With a commitment to excellence and
                sustainability, we ensure that our products meet the highest
                standards of quality and taste. Our headquarters in Tanzania
                allow us to source the finest cashew nuts directly from local
                farmers, ensuring freshness and authenticity.
              </li>
              <span>GET IN TOUCH</span>
            </div>
          </ul>
          <div className="journey-img">
            <h1 className="journey-content-h12">High Quality Services</h1>
            <img src={korosho1} alt="" />
          </div>
        </div>
      </div>

      <div className="our-service">
        <h1>our services</h1>

        <div className="service-content1-top">
          <div className="service-content1">
            <div className="service-content1-left">
              {/* <h1>*</h1> */}
              <h1>Exportation of Crops</h1>
              <div className="image">
                <img src={cash3} alt="" />
              </div>
              <p>
                zawadi agrifood specializes in the exportation of both raw and
                processed cashew nuts. Our comprehensive export services are
                designed to meet the diverse needs of our international
                clientele. We handle everything from the initial sourcing and
                processing to the final shipment, ensuring that our cashew nuts
                reach you in optimal condition. Our extensive network and
                partnerships with top logistics companies allow us to deliver
                our products efficiently and reliably to various parts of the
                world.
              </p>
            </div>
          </div>

          <div className="service-content1">
            <div className="service-content1-left">
              <h1>Quality Assurance</h1>
              <div className="image">
                <img
                  src="                https://tse1.mm.bing.net/th?id=OIP.A_IqAT5C2s1nww5kP2OTgAHaD5&pid=Api&P=0&h=220       
"
                  alt=""
                />
              </div>
              <p>
                Quality is the cornerstone of our operations. At zawadi
                agrifood, we employ rigorous quality control measures at every
                stage of the production process. Our dedicated quality assurance
                team conducts thorough inspections and tests to ensure that each
                batch of cashew nuts meets our high standards. We utilize
                advanced processing techniques to preserve the natural flavor,
                texture, and nutritional value of the nuts, ensuring that our
                customers receive only the best.
              </p>
            </div>
          </div>

          <div className="service-content1">
            <div className="service-content1-left">
              <h1>Sustainable Sourcing</h1>
              <div className="image">
                <img src={str1} alt="" />
              </div>
              <p>
                We are committed to sustainable and ethical sourcing practices.
                By working closely with local farmers, we ensure that our supply
                chain is both sustainable and beneficial to the communities we
                operate in. We provide fair trade prices, training, and support
                to our farmers, helping them improve their yields and
                livelihoods. Our sustainable practices not only ensure a
                consistent supply of high-quality cashews but also contribute to
                the economic development of the region.
              </p>
            </div>
          </div>
        </div>
        <div className="service-content1-bottom">
          <div className="service-content1">
            <div className="service-content1-left">
              <h1>Custom Packaging</h1>
              <div className="image">
                <img src={qualit} alt="" />
              </div>
              <p>
                Understanding that each customer has unique needs, we offer
                custom packaging solutions tailored to your specifications.
                Whether you require bulk shipments for industrial use or
                retail-ready packaging for consumer sales, we can accommodate
                your requirements. Our packaging options are designed to
                preserve the quality and freshness of the cashews while
                providing convenience and branding opportunities for our
                clients.
              </p>
            </div>
          </div>

          <div className="service-content1">
            <div className="service-content1-left">
              <h1>Customer Support</h1>
              <div className="image">
                <img src={smile1} alt="" />
              </div>
              <p>
                Customer satisfaction is our top priority. Our dedicated
                customer support team is always available to assist you with
                your orders, inquiries, and any issues that may arise. We
                believe in building long-term relationships with our customers
                based on trust and transparency. Whether you need assistance
                with product information, order tracking, or any other concerns,
                our team is here to help.
              </p>
            </div>
          </div>

          <div className="service-content1 p-display-none">
            <div className="service-content1-left">
              <h1>Research and Development</h1>
              <div className="image">
                <img
                  src="https://tse3.explicit.bing.net/th?id=OIP.zDGeqjrjaZ8rxUdkLrzMfQHaE8&pid=Api&P=0&h=220"
                  alt=""
                />
              </div>
              <p>
                At zawadi agrifood, we invest heavily in research and
                development to continuously improve our products and processes.
                Our R&D team works tirelessly to innovate and stay ahead of
                industry trends. By leveraging the latest technologies and
                research, we ensure that our cashew nuts are not only of the
                highest quality but also meet the evolving needs of our
                customers. From developing new processing methods to creating
                unique cashew-based products, we are committed to driving
                innovation in the industry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="home-content4 home-content4-bottom service-carousel">
        <div className="home-content4-heading">
          <h1>
            Customer <span>Reviews</span>
          </h1>
        </div>
        <div className="container4-carousel">
          <Carousel3 />
        </div>
      </div>
      <div className="fax-h1">
        <h1>Frequently Asked Questions (FAQs)</h1>
        </div>
      <div className="service-bottom">
        <div className="sidebar">
          <p>Quick Links</p>
          <div className="link">
            <div className="bottom-nav">
              <Link to="/">Home</Link>
              <Link to="/about">About Us</Link>
              <Link to="/services">Services</Link>
              <Link to="/products">Our Products</Link>
              <Link to="/contact">Contact</Link>
            </div>
            <div className="map-img">
              <img src={map} alt="" srcset="" />
            </div>
          </div>
        </div>
       
        <div className="faqs">
          <div className="faqs-content">
            <div className="faqs-left">
              <Faqs
                heading="What products do you offer?"
                para="We specialize in exporting premium quality cashew nuts, both raw and processed. We also provide custom packaging solutions tailored to your needs."
              />
              <Faqs
                heading="Where are your cashew nuts sourced from?"
                para="Our cashew nuts are sourced directly from local farmers in Tanzania, ensuring freshness and authenticity."
              />
              <Faqs
                heading="Do you offer bulk shipping?"
                para="Yes, we offer bulk shipping for industrial use as well as retail-ready packaging for consumer sales."
              />
            </div>
            <div className="faqs-left">
              <Faqs
                heading="How can I place an order?"
                para="You can place an order by contacting our customer support team via email at info@zawadiagrifood.co.tz or by WhatsApp at +255 683 401 481. Our team will guide you through the ordering process."
              />
              <Faqs
                heading="What is your delivery timeline?"
                para="Delivery timelines vary based on the order size and destination. Our partnerships with top logistics companies enable us to deliver our products efficiently and reliably to various parts of the world."
              />
              <Faqs
                heading="What should I do if I have an issue with my order?"
                para="Customer satisfaction is our top priority. If you have any issues with your order, please contact our customer support team. We are here to assist you and resolve any concerns you may have."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="contact-us-details">
        <h1>feel free to contact your zawadi agrifood representative</h1>
        <p>How can we better serve you, let us know</p>
        <button>contact us</button>
      </div>

      <Footer />
    </div>
   </div>
  );
}

export default Services;
