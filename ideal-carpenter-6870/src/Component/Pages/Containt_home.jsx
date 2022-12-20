 import  styles  from "./Home.module.css";
 //import { FaBeer  } from 'react-icons/fa/FaBeer';
 import { FaCheckSquare} from "@react-icons/all-files/fa/FaCheckSquare";
  import { FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight";
  import { FaQuoteRight} from "@react-icons/all-files/fa/FaQuoteRight";
  import { Link,Button } from "@chakra-ui/react";
  import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

 
  const Container2=()=>{
    return [
        {h1:"Rethink Pricing",p:"Pricing models. Grandfathering. One-click roll-back. Doesn't get easier!",Image:"https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/rethink-pricing.svg"},
        {h1:"Scale Globally",p:"Currencies, compliance & taxes, all handled already.",Image:"https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/scale-globally.svg"},
    {h1:"Capture New Segments",p:"March upmarket, go product-led, and everywhere between.",Image:"https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/capture-new-segments.svg"},
    {h1:"Launch into Subscriptions",p:"Pilot a recurring revenue model without breaking what's working.",Image:"https://webstatic.chargebee.com/assets/web/543/images/home/coc/icon/launch-into-subscriptions.svg"}
    ]
}
 
    const SubscriptionAutomation=()=>{
    return (<div className="Subscription-Automation">
    <div className={styles.element1}>
        <div  className={styles.element1_h}>
            <div> <h2> Automate the Order-to-Revenue Lifecycle</h2></div>
        <div className={styles.element1_ul_p} >
            <div className={styles.element1_p}><p>Collect recurring payments and automate your subscription billing logic - from checkout to reconciliation.</p>
            </div>
           <ul>
            <li><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Quote-to-Cash</li>
              <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Trial Management</li>
               <li ><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Tax Management</li>
                <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Quote-to-Cash</li>
           </ul>
            </div>
          <div  className={styles.LearnMore} ><p>Learn More{" "} <FaArrowRight fontWeight="100" size={13} style={{transform:"rotate(-45deg)"}} /></p></div>
        </div>
        <div className={styles.element1_img}><div><img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/subscription-automation.svg" alt="SubscriptionAutomation" /></div></div>
    </div>
    </div>
    );
    }
const BillingExperiments=()=>{
return (<div className="Billing-Experiments">
   <div className={styles.element1}>
        <div className={styles.element1_h}>
            <div> <h2> Align Billing Workflow with GTM Strategy</h2></div>
        <div className={styles.element1_ul_p} >
            <div className={styles.element1_p}><p>Adjust price structures, product bundles, discount management, and recovery processes to maximize revenue.</p>
            </div>
           <ul>
            <li><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Price-modeling</li>
              <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Usage-based Billing</li>
               <li ><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Plan & Product Catalog</li>
                <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}480+ Billing Scenarios</li>
           </ul>
            </div>
          <div  className={styles.LearnMore} ><p>Learn More{" "} <FaArrowRight fontWeight="100" size={13} style={{transform:"rotate(-45deg)"}} /></p></div>
        </div>
        <div className={styles.element1_img}><div><img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/billing-experiments.svg" alt="BillingExperiments" /></div></div>
    </div>
    </div>
    );
}
const RevenueIntelligence=()=>{
return (<div className="Revenue-Intelligence">
   <div className={styles.element1}>
        <div className={styles.element1_h}>
            <div> <h2> Drive Decisions with 360° Revenue Reporting</h2></div>
        <div className={styles.element1_ul_p} >
            <div className={styles.element1_p}><p>Recognize revenue accurately, forecast business growth, and plug leaks across your order-to-revenue cycle with real-time insights.</p>
            </div>
           <ul>
            <li><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Deferred Revenue Reporting</li>
              <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Revenue Recognition</li>
               <li ><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Revenue Recognition</li>
                <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Report Builder</li>
           </ul>
            </div>
          <div  className={styles.LearnMore} ><p>Learn More{" "} <FaArrowRight fontWeight="100" size={13} style={{transform:"rotate(-45deg)"}} /></p></div>
        </div>
        <div className={styles.element1_img}><div><img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/revenue-intelligence.svg" alt="RevenueIntelligence" /></div></div>
    </div>
    </div>
    );
}
const ExtensiblePlatform=()=>{
return (<div className="Extensible-Platform">
   <div className={styles.element1}>
        <div className={styles.element1_h}>
            <div> <h2>Scale Revenue Stack for Each Stage of Growth</h2></div>
        <div className={styles.element1_ul_p} >
            <div className={styles.element1_p}><p>Upgrade finance, accounting, CRM, and more, on the revenue engine that scales with you.</p>
            </div>
           <ul>
            <li><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Sales, Revenue & Marketing</li>
              <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Accounting & Finance</li>
               <li ><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Support & Engagement</li>
                <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}Inventory & Logistics</li>
           </ul>
            </div>
          <div  className={styles.LearnMore} ><p>Learn More{" "} <FaArrowRight fontWeight="100" size={13} style={{transform:"rotate(-45deg)"}} /></p></div>
        </div>
        <div className={styles.element1_img}><div><img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/integration.svg" alt="Extensible Platform" /></div></div>
    </div>
    </div>
    );
}
const EnterpriseGradeSecurity=()=>{
return (<div className="Enterprise-GradeSecurity">
   <div className={styles.element1}>
        <div className={styles.element1_h}>
            <div> <h2> Promise Secure Subscription Experiences</h2></div>
        <div className={styles.element1_ul_p} >
            <div className={styles.element1_p}><p>Stay compliant with the latest taxation and privacy regulations to enter and scale new markets with agility.</p>
            </div>
           <ul>
            <li><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}SOC1 & SOC 2 Compliant</li>
              <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}GDPR Ready</li>
               <li ><FaCheckSquare color="#5c07d1" size="13px"/>{"  "}PCI-DSS Level 1</li>
                <li> <FaCheckSquare color="#5c07d1" size="13px"/>{"  "}99.9% Uptime</li>
           </ul>
            </div>
          <div  className={styles.LearnMore} ><p>Learn More{" "} <FaArrowRight fontWeight="100" size={13} style={{transform:"rotate(-45deg)"}} /></p></div>
        </div>
        <div className={styles.element1_img}><div><img src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/security.png" alt="Enterprise GradeSecurity" /></div></div>
    </div>
    </div>
    );
}

    const TestiMonials=()=>{
const {getemail} = useContext(AuthContext)
const Navigate = useNavigate()

const handleClickDemo=()=>{
    return Navigate("/demo")
}


        return (
        <div  className={styles.TestiMonials}>
            <div className={styles.B_Container}>
                <div className={styles.B_Col1}>
                    <div> <h1 className={styles.B_Heading}>Get a Demo Customized to Your Subscription Workflow</h1></div>
                    <div className={styles.B_Input}><form action=""><input defaultValue={getemail} type="email"/><Button onClick={handleClickDemo} colorScheme='#7f45ff'>Get a Demo</Button ></form></div>
                </div>
                <div className={styles.B_Col2}>
                    <div className={styles.B_Col2_box}>
                        <div className={styles.B_Col2_Quotes} ><FaQuoteRight color="#000ff0" size={50}/></div>
                        <div className={styles.B_Col2_Avatar}><img   src="https://webstatic.chargebee.com/assets/web/543/images/footer/robin-lambert.png" alt="Avatar" /></div>
                        <div className={styles.B_Col2_Description} ><p>Using Chargebee is also one less area we have to worry about as we scale. We know that it'll adapt to most if not all situations that'll come up in the future.</p></div>
                        <div className={styles.B_Col2_Intro} ><h4>Robin Lambert,</h4>
                        <p >Co-founder & CPO,    <Link color="#000ff0"> Livestorm</Link></p></div>
                       
                    </div>
                     <div className={styles.B_Col2_logo} >
                            <ul >
                                <li> <img src="https://webstatic.chargebee.com/assets/web/543/images/footer/calendly.svg" alt="calendly" /></li>
                                <li> <img src="https://webstatic.chargebee.com/assets/web/543/images/footer/okta.svg" alt="okta" /></li>
                                <li><img src="https://webstatic.chargebee.com/assets/web/543/images/footer/freshworks.svg" alt="freshworks" /></li>
                                <li><img src="https://webstatic.chargebee.com/assets/web/543/images/footer/getaccept.svg" alt="getaccept" /></li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>);
    }

export {TestiMonials,Container2,SubscriptionAutomation,BillingExperiments,RevenueIntelligence,ExtensiblePlatform,EnterpriseGradeSecurity};


    



