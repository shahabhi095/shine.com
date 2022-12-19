import React from "react";
    import { TestiMonials } from "./Containt_home";
import styles from "./Products.module.css"
import { FaAngleRight} from "@react-icons/all-files/fa/FaAngleRight";
import { FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight";
import { FaSitemap} from "@react-icons/all-files/fa/FaSitemap";
 import { FaChartBar} from "@react-icons/all-files/fa/FaChartBar";
import { FaRegClock} from "@react-icons/all-files/fa/FaRegClock";
 import { FaRegFileAlt} from "@react-icons/all-files/fa/FaRegFileAlt";
import { Link } from "react-router-dom";

const Btnstyles={
backgroundColor:"#ce6f80",
color:"white",
border:"none",
padding:"12px 25px",
borderRadius:"25px",
margin:"3%"
}


export const GetaDemoButton=()=>{
return<div>
<div >
    <button className={styles.Btn1}  style={Btnstyles}><b> Get a Demo </b>{" "}<FaAngleRight  className={styles.FaAngleRight} color="white"/>< FaArrowRight className={styles.FaArrowRight}/></button>
    <button className={styles.Btn1}  style={{...Btnstyles,backgroundColor:"#efeceb", color:"#7b305c"}}><b>Sign up for free</b>{" "}<FaAngleRight className={styles.FaAngleRight} color="#7b305c"/>< FaArrowRight color="#7b305c" className={styles.FaArrowRight}/></button>
</div>

</div>
}



const Product = ()=>{
    return <div>
     
    <div className={styles.Top_Container}>
        <div className={styles.Top_Container_main}>
            <div className={styles.Top_Container_H}>
               <h1 as='h1' size='4xl' color="#7b305c">Go to Market Faster With a Scalable Plan & Product Catalog</h1> 
            </div>
            <div  className={styles.Top_Container_p}>
                  <p fontSize='2xl' color="#7b305c">Model your plan catalog in the most efficient way, and give yourself the biggest competitive advantage ever - time.</p>
            </div>
            <div  className={styles.Top_Container_Button}>
               <GetaDemoButton /> 
            </div>               
        </div>
       {/* <div className={styles.AngleDiv}></div> */}
    </div>
 <div className={styles.ScalewithZeroTechDebt}>
            <div className={styles.ScalewithZeroTechDebt_cont}>
                <div className={styles.ScalewithZeroTechDebt_H}>
                    <h1>Scale with Zero Tech Debt</h1>
                </div>
                <div className={styles.ScalewithZeroTechDebt_Grid}>
                </div>
                 <div className={styles.ScalewithZeroTechDebt_Grid}>
                    <div className={styles.ScalewithZeroTechDebt_Grid_div}>
                        <div className={styles.ScalewithZeroTechDebt_Grid_Img}>
                            <FaSitemap size={30} color="#ee597d"/>
                        </div>
                        <div className={styles.ScalewithZeroTechDebt_Grid_p}><b> Streamline multi-product offerings </b> with zero additional code and save tons of time and effort.</div>
                    </div>
                    <div className={styles.ScalewithZeroTechDebt_Grid_div}>
                        <div className={styles.ScalewithZeroTechDebt_Grid_Img}>
                            <FaRegFileAlt size={30} color="#ee597d"/>
                        </div>
                        <div className={styles.ScalewithZeroTechDebt_Grid_p}><b> Maintain a lean catalog </b> by mapping add-ons, charges, currency, and billing frequency to each plan</div>
                    </div>
                    <div className={styles.ScalewithZeroTechDebt_Grid_div}>
                        <div className={styles.ScalewithZeroTechDebt_Grid_Img}>
                            <FaRegClock size={30} color="#ee597d" />
                        </div>
                        <div className={styles.ScalewithZeroTechDebt_Grid_p}><b> Save time and effort</b> that goes into the upkeep of a complicated catalog and stay organized with minimal effort.</div>
                    </div>
                    <div className={styles.ScalewithZeroTechDebt_Grid_div}>
                        <div className={styles.ScalewithZeroTechDebt_Grid_Img}>
                            <FaChartBar size={30} color="#ee597d"/>
                        </div>
                        <div className={styles.ScalewithZeroTechDebt_Grid_p}><b> Unlock new revenue opportunities</b> by launching new plans and pricing strategies faster and efficiently.</div>
                    </div>
                </div>
                <div className={styles.divider}></div>
            </div>
       </div>
       <div className={styles.Middle_cont}>
            <div className = {styles.MULTI_PRODUCT_MANAGEMENT_Box_grid}>
                <div className = {styles.MULTI_PRODUCT_MANAGEMENT_Box}>
                    <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h5}><p>MULTI-PRODUCT MANAGEMENT</p></div>
                     <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h1}><h2>Declutter and Systemize Your Product Catalog</h2></div>
                      <div className = {styles.MULTI_PRODUCT_MANAGEMENT_p}><p>When you deal with multiple products under one roof, things can get messy. Every plan, recommended add-on, billing frequency, and currency add layers of complexity. Manage your product medley better with Chargebee's Product Family Mapping capabilities. And with minimal code, you can also automate entitlements management for each product.</p></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Chargebee's Subscription Management Suite</Link><FaArrowRight color="#000ff0"/></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Managing your subscription plan catalog </Link><FaArrowRight color="#000ff0"/></div>
                </div> 
                 <div className = {styles.MULTI_PRODUCT_MANAGEMENT_img_box}>
                        <div  className = {styles.MULTI_PRODUCT_MANAGEMENT_img}><img src="https://webstatic.chargebee.com/assets/web/543/images/fall-release-20/product-catalog/multi-product-management.svg" alt="MULTI_PRODUCT_MANAGEMENT" /></div>
                </div>
            </div>

       </div>
       <div className={styles.Middle_cont}>
            <div className = {styles.MULTI_PRODUCT_MANAGEMENT_Box_grid}>
                <div className = {styles.MULTI_PRODUCT_MANAGEMENT_Box}>
                    <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h6}><p>FLEXIBLE PLAN CATALOG</p></div>
                     <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h1}><h2>Scale Your Offerings Elegantly Across Customer Segments</h2></div>
                      <div className = {styles.MULTI_PRODUCT_MANAGEMENT_p}><p>A seemingly simple product catalog can get deceivingly difficult to handle if you don't plan it right. Chargebee makes it breezy to define different price points for each currency-frequency combination. So you get multiple variations neatly mapped under one plan. You can also mandate add-ons and define event-based charges for an entire plan without having to redo it for each combination. Launch fast, scale faster with Product Catalog 2.0!</p></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Recurring Billing Management with Chargebee </Link><FaArrowRight color="#000ff0"/></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Flexible Billing Period</Link><FaArrowRight color="#000ff0"/></div>
                </div> 
                 <div className = {styles.MULTI_PRODUCT_MANAGEMENT_img_box}>
                        <div  className = {styles.MULTI_PRODUCT_MANAGEMENT_img}><img src="https://webstatic.chargebee.com/assets/web/543/images/fall-release-20/product-catalog/flexible-plan.svg" alt="MULTI_PRODUCT_MANAGEMENT" /></div>
                </div>
            </div>

       </div>
        <div className={styles.Middle_cont}>
            <div className = {styles.MULTI_PRODUCT_MANAGEMENT_Box_grid}>
                <div className = {styles.MULTI_PRODUCT_MANAGEMENT_Box}>
                    <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h5}><p>DYNAMIC PRICING OPTIONS</p></div>
                     <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h1}><h2>Build Your Pricing to Adapt to Any Condition</h2></div>
                      <div className = {styles.MULTI_PRODUCT_MANAGEMENT_p}><p>Behind every untested pricing strategy, lies tables filled with stacks of cold hard cash. With Chargebee, you can test each plan with different pricing models - flat, volume, tiered, anything. Each currency-frequency combination under a plan can carry a different pricing model and different event-based charges. Experiment with different combinations and find the sweetest of all pricing spots instead of following your competitors.

</p></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Set up different pricing models </Link><FaArrowRight color="#000ff0"/></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Pricing Experiments with Chargebee  </Link><FaArrowRight color="#000ff0"/></div>
                </div> 
                  <div className = {styles.MULTI_PRODUCT_MANAGEMENT_Box}>
                    <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h5}><p>PLAN PERFORMANCE ANALYTICS</p></div>
                     <div className = {styles.MULTI_PRODUCT_MANAGEMENT_h1}><h2>Track Every Variable That Affects Your Plan Performance</h2></div>
                      <div className = {styles.MULTI_PRODUCT_MANAGEMENT_p}><p>Agile experimenting is pointless if you can't track its impact on the value created and revenue generated. Use Chargebee's Custom Fields to capture each plan, add-on, price point, and non-recurring charges. These fields become your filters inside Chargebee's analytics platform, where you can track MRR generated by each component.</p></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Custom Fields </Link><FaArrowRight color="#000ff0"/></div>
                       <div className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}><Link className = {styles.MULTI_PRODUCT_MANAGEMENT_link1}>Chargebee's Reporting Capabilities  </Link><FaArrowRight color="#000ff0"/></div>
                </div> 
            </div>

       </div>


      <TestiMonials />;
     
    </div>
}
export default Product;