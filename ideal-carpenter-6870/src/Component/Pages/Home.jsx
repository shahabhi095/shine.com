import React from "react";
import { Container2,SubscriptionAutomation,BillingExperiments,RevenueIntelligence,ExtensiblePlatform,EnterpriseGradeSecurity } from "./Containt_home";
import { Grid, GridItem,Box,Image,Heading ,Container } from '@chakra-ui/react'
import  styles  from "./Home.module.css";
  import { FaArrowRight} from "@react-icons/all-files/fa/FaArrowRight";
import { TestiMonials } from "./Containt_home";

const Home = ()=>{
    return <div>
   
        <div className="container2" style={{border:"0px solid blue",paddingBottom:"6%", paddingTop:"6%", display:"flex",paddingLeft:"15px",paddingRight:"15px", marginLeft: "78px",  marginRight: "78px"}}>
            <div className="row" style={{border:"0px solid yellow", width:"30%",padding:"20px"}}>
                <div className="col1">
                    <div style={{color:"#232323" }} className="col1_Header"> <h1>Designed to go Beyond Billing.</h1></div>
                    <div style={{color:"#64648c"}}  className="Col1_disc"><p>Get the freedom to experiment, launch, and scale strategies as fast as you can think of them.</p></div>

                </div>
            </div>
            <Grid templateColumns='repeat(2, 1fr)' w="70%" gap={15} marginLeft="10%"  paddingLeft="3%" paddingRight="3%">
            
            {Container2().map((el,i)=>
            <GridItem  key={i+1} w='80%' p={15} boxShadow='xs'  rounded='md' bg='white'><Box boxShadow='xs' p='6' bg='white'>
            <Box w='100%' > <Image src={el.Image} alt={el.h1} /></Box>
            <Heading w='100%' size='sm' as='h4'  pl={10} pr={10}  ><Box color="#232323">{el.h1}</Box></Heading>
            <Container color="#64648c" w='100%' pl={10}  pr={10}  ><Container h={70}>{el.p}</Container></Container>
            <Container textAlign="right" paddingRight={10}><Container w='100%'  pl={10} pr={10} color="#000ff0">Learn More{" "}<FaArrowRight fontWeight="100" size={13} style={{transform:"rotate(-45deg)"}} /></Container></Container>
            </Box> </GridItem>)}
            </Grid>         
        </div>

        <Container w="45%" textAlign="center" margin="auto" >
            <Heading color={"#232323"} as='h1' size='xl' noOfLines={1}>Streamline Revenue Operations</Heading>
        </Container>
        <Container color="#64648c"  w="35%" textAlign="center" margin="auto">
            <Box>Chargebee automates the lead-to-ledger workflow across your revenue stack, so you can dream, deploy, and enjoy the breeze.
                While the MRR just keeps rolling.</Box>
       </Container>
<div className={styles.MiddleDiv}>
<SubscriptionAutomation/>
<BillingExperiments/>
<RevenueIntelligence/>
<ExtensiblePlatform/>
<EnterpriseGradeSecurity/>
</div>


<Container className={styles.row5_box}>
       <Container className={styles.row5}>
               <Container className={styles.row5_1}>
                    <Container className={styles.row5_2}>
                        <Container className={styles.row5_2_image} ><Image width="80%" src="https://webstatic.chargebee.com/assets/web/543/images/g2-badge-collection/chargebee-leader-subscription-management-g2-spring.svg" alt="Leader"></Image></Container>
                    </Container>
                </Container> 
                 <Container className={styles.row5_3}>
                    <Container className={styles.row5_4}><Heading as='h1' size='xl' >Trusted partner in 4500+ growth stories...</Heading></Container>
                    <Container className={styles.row5_5}>
                        <Container className={styles.row5_6}>
                            <Container className={styles.row5_4}><Heading>94%</Heading></Container>
                            <Container className={styles.row5_4p} >Most likely to recommend</Container>
                        </Container>
                        <Container className={styles.row5_6}>
                            <Container className={styles.row5_4}><Heading>1.3</Heading></Container>
                            <Container className={styles.row5_4p}>Avg. months to go live</Container>
                        </Container>
                        <Container className={styles.row5_6}>
                            <Container className={styles.row5_4}><Heading>#1</Heading></Container>
                            <Container className={styles.row5_4p}>Subscription Billing Software</Container>
                        </Container>
                        <Container className={styles.row5_6}>
                            <Container className={styles.row5_4}><Heading>98%</Heading></Container>
                            <Container className={styles.row5_4p}>Rated 4+stars on 5</Container>
                        </Container>
                         
                    </Container>
                 </Container>
       </Container>
       </Container>
       <TestiMonials/>
    </div>
}
export default Home;
