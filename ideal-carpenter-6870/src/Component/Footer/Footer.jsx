import { Link } from "react-router-dom"
 import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";
import styles from "./Footer.module.css"

export default function Footer(){
//style={{width:"90%", margin:"auto"}} 
    return(
        <>
            <div className={styles.Footer_Parrents} >
                <div className="Footer_Links" style={{display:"flex", justifyContent:"space-between"}}>
                    <div className="Footer_Child">
                        <h4 className="Footer_header">
                            <Link  color="#000ff0" to="/features/">Product</Link>{" "}<FaAngleRight  color="#000ff0"/>
                        </h4>
                        <ul>
                            <li><Link >Subscription Management</Link></li>
                            <li><Link >Recurring Billing and Invoicing</Link></li>
                            <li><Link >Recurring Payments</Link></li>
                            <li><Link >Accounting and Taxes</Link></li>
                            <li><Link >SaaS Reporting</Link></li>
                            <li><Link >Enterprise Billing</Link></li>
                            <li><Link >Integrations</Link></li>
                        </ul>
                    </div>
                    <div className="Footer_Child">
                        <h4 className="Footer_header">
                            <Link color="#000ff0" to="/features/">Help & Support</Link>{" "}<FaAngleRight  color="#000ff0"/>
                        </h4>
                        <ul>
                            <li><Link>Security</Link></li>
                            <li><Link>FAQs</Link></li>
                            <li><Link>Status</Link></li>
                            <li><Link>Product Documentation</Link></li>
                            <li><Link>API Documentation</Link></li>
                            <li><Link>Supported Payment Gateways</Link></li>
                            <li><Link>Sitemap</Link></li>
                        </ul>
                    </div>
                    <div className="Footer_Child"><h4 className="Footer_header">
                            <Link color="#000ff0" to="/features/">Resources</Link>{" "}<FaAngleRight  color="#000ff0"/>
                        </h4>
                        <ul>
                            <li><Link>Blog</Link></li>
                            <li><Link>Compare Payment Gateways</Link></li>
                            <li><Link>Tackling Payment Failures</Link></li>
                            <li><Link>Enterprise Billing Guide</Link></li>
                            <li><Link>Webinars</Link></li>
                            <li><Link>Events</Link></li>
                            <li><Link>Glossaries</Link></li>
                            <li><Link>Subscription Academy</Link></li>
                        </ul></div>
                    <div className="Footer_Child"><h4 className="Footer_header">
                            <Link color="#000ff0" to="/features/">Company</Link>{" "}<FaAngleRight  color="#000ff0"/>
                        </h4>
                        <ul>
                            <li><Link>Customers</Link></li>
                            <li><Link>Partners</Link></li>
                            <li><Link>Careers</Link></li>
                            <li><Link>Press</Link></li>
                            <li><Link>Brand Guidelines</Link></li>
                            <li><Link>Terms of Service</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                        </ul></div>
                </div>
            </div>
        </>
    )
}