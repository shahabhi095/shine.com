import { Link } from "react-router-dom"
 import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";
   import {FaFacebookSquare} from "@react-icons/all-files/fa/FaFacebookSquare";
   import {FaLinkedin} from "@react-icons/all-files/fa/FaLinkedin";
   import {FaTwitter} from "@react-icons/all-files/fa/FaTwitter";
      import {FaYoutube} from "@react-icons/all-files/fa/FaYoutube";
import { FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight";

import styles from "./Footer.module.css"

export default function Footer(){
//style={{width:"90%", margin:"auto"}} 
    return(
        <>
            <div className={styles.Footer_Parrents} >
                <div className="Footer_Links" style={{display:"flex", justifyContent:"space-between"}}>
                    <div className="Footer_Child">
                        <h4 className={styles.Footer_header}>
                            <Link className={styles.Footer_Child_h} color="#000ff0" to="">Product </Link >{" "}<FaAngleRight className={styles.Footer_Child_icon} color="#000ff0"/>
                            <FaArrowRight className={styles.Footer_Child_icon_Hover} color="#000ff0"/>
                        </h4>
                        <ul>
                            <li ><Link className={styles.Footer_Child} >Recurring Billing and Invoicing</Link></li>
                            <li><Link className={styles.Footer_Child} >Subscription Management</Link></li>
                            <li><Link className={styles.Footer_Child} >Recurring Payments</Link></li>
                            <li><Link className={styles.Footer_Child} >Accounting and Taxes</Link></li>
                            <li><Link className={styles.Footer_Child} >SaaS Reporting</Link></li>
                            <li><Link className={styles.Footer_Child} >Enterprise Billing</Link></li>
                            <li><Link className={styles.Footer_Child} >Integrations</Link></li>
                        </ul>
                    </div>
                    <div className="Footer_Child">
                        <h4  className={styles.Footer_header}>
                            <Link className={styles.Footer_Child_h} color="#000ff0" to="/features/">Help & Support</Link>{" "}<FaAngleRight className={styles.Footer_Child_icon} color="#000ff0"/>
                        <FaArrowRight className={styles.Footer_Child_icon_Hover} color="#000ff0"/>
                        </h4>
                        <ul>
                            <li><Link className={styles.Footer_Child}>Security</Link></li>
                            <li><Link className={styles.Footer_Child}>FAQs</Link></li>
                            <li><Link className={styles.Footer_Child}>Status</Link></li>
                            <li><Link className={styles.Footer_Child}>Product Documentation</Link></li>
                            <li><Link className={styles.Footer_Child}>API Documentation</Link></li>
                            <li><Link className={styles.Footer_Child}>Supported Payment Gateways</Link></li>
                            <li><Link className={styles.Footer_Child}>Sitemap</Link></li>
                        </ul>
                    </div>
                    <div className="Footer_Child"><h4  className={styles.Footer_header}>
                            <Link className={styles.Footer_Child_h} color="#000ff0" to="/features/">Resources</Link>{" "}<FaAngleRight className={styles.Footer_Child_icon} color="#000ff0"/>
                        <FaArrowRight className={styles.Footer_Child_icon_Hover} color="#000ff0"/>
                        </h4>
                        <ul>
                            <li><Link className={styles.Footer_Child}>Blog</Link></li>
                            <li><Link className={styles.Footer_Child}>Compare Payment Gateways</Link></li>
                            <li><Link className={styles.Footer_Child}>Tackling Payment Failures</Link></li>
                            <li><Link className={styles.Footer_Child}>Enterprise Billing Guide</Link></li>
                            <li><Link className={styles.Footer_Child}>Webinars</Link></li>
                            <li><Link className={styles.Footer_Child}>Events</Link></li>
                            <li><Link className={styles.Footer_Child}>Glossaries</Link></li>
                            <li><Link className={styles.Footer_Child}>Subscription Academy</Link></li>
                        </ul></div>
                    <div className="Footer_Child"><h4  className={styles.Footer_header}>
                            <Link className={styles.Footer_Child_h} color="#000ff0" to="/features/">Company</Link>{" "}<FaAngleRight className={styles.Footer_Child_icon} color="#000ff0"/>
                        <FaArrowRight className={styles.Footer_Child_icon_Hover} color="#000ff0"/>
                        </h4>
                        <ul>
                            <li><Link className={styles.Footer_Child}>Customers</Link></li>
                            <li><Link className={styles.Footer_Child}>Partners</Link></li>
                            <li><Link className={styles.Footer_Child}>Careers</Link></li>
                            <li><Link className={styles.Footer_Child}>Press</Link></li>
                            <li><Link className={styles.Footer_Child}>Brand Guidelines</Link></li>
                            <li><Link className={styles.Footer_Child}>Terms of Service</Link></li>
                            <li><Link className={styles.Footer_Child}>Privacy Policy</Link></li>
                        </ul></div>
                </div>
            </div>
            <div className={styles.Social}>
                    <div className={styles.Social_box}>
                        <div className={styles.Social_box_icon}>
                            <FaFacebookSquare cursor="pointer" color="#000ff0" size={30}/>
                            <FaLinkedin cursor="pointer"  color="#000ff0" size={30}/>
                            <FaTwitter cursor="pointer"  color="#000ff0" size={30}/>
                            <FaYoutube cursor="pointer"  color="#000ff0" size={30}/>
                        </div>
                    </div>
            </div>
        </>
    )
}