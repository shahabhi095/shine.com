import Carousel from 'react-bootstrap/Carousel';
import styles from "./MainPageSmoothScroll.module.css"
import {GetaDemoButton} from "./Product"
function UncontrolledExample() {
  return (
    <Carousel>

      <Carousel.Item>
        <div className={styles.Carousel_Grid}>
             <div >
                <Carousel.Caption>
                    <div className={styles.Carousel_Caption}>
                <h2 className={styles.Carousel_Caption_h3}>The subscription management platform that enabled Slidebean to slide into 30+ countries.</h2>
                <p className={styles.Carousel_Caption_p}>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
              
                </div>
                 <div className={styles.Carousel_Caption}>
                    <GetaDemoButton/>
                </div>
                </Carousel.Caption>
                
            </div>
             
            <div className={styles.Carousel_Img_Box}>
                <img
                className="d-block w-50"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/jose-bolanos.png"
                alt="First slide"
                style={{width:"100%", height:"100%"}}
                />
            </div>
           
        </div>
      </Carousel.Item>
     
      <Carousel.Item>
        <div className={styles.Carousel_Grid}>
             <div >
                <Carousel.Caption>
                    <div className={styles.Carousel_Caption}>
                <h2 className={styles.Carousel_Caption_h3}>The billing platform that gives Superfoods the freedom to test, iterate, and roll-back.</h2>
                <p className={styles.Carousel_Caption_p}>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
              
                </div>
                 <div className={styles.Carousel_Caption}>
                    <GetaDemoButton/>
                </div>
                </Carousel.Caption>
                
            </div>
             
            <div className={styles.Carousel_Img_Box}>
                <img
                className="d-block w-50"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/rahul-gandhi.png"
                alt="First slide"
                style={{width:"100%", height:"100%"}}
                />
            </div>
           
        </div>
      </Carousel.Item>
    
      <Carousel.Item>
        <div className={styles.Carousel_Grid}>
             <div >
                <Carousel.Caption>
                    <div className={styles.Carousel_Caption}>
                <h2 className={styles.Carousel_Caption_h3}>The revenue engine that powered MakeSpace to launch a B2B model overnight.</h2>
                <p className={styles.Carousel_Caption_p}>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
              
                </div>
                 <div className={styles.Carousel_Caption}>
                    <GetaDemoButton/>
                </div>
                </Carousel.Caption>
                
            </div>
             
            <div className={styles.Carousel_Img_Box}>
                <img
                className="d-block w-50"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/paul-kapsner.png"
                alt="First slide"
                style={{width:"100%", height:"100%"}}
                />
            </div>
           
        </div>
      </Carousel.Item>
     
     <Carousel.Item>
        <div className={styles.Carousel_Grid}>
             <div >
                <Carousel.Caption>
                    <div className={styles.Carousel_Caption}>
                <h2 className={styles.Carousel_Caption_h3}>The revenue toolkit that allowed Yousign to enter a new market that now drives 15% MRR.</h2>
                <p className={styles.Carousel_Caption_p}>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
              
                </div>
                 <div className={styles.Carousel_Caption}>
                    <GetaDemoButton/>
                </div>
                </Carousel.Caption>
                
            </div>
             
            <div className={styles.Carousel_Img_Box}>
                <img
                className="d-block w-50"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/antoine-louiset.png"
                alt="First slide"
                style={{width:"100%", height:"100%"}}
                />
            </div>
           
        </div>
      </Carousel.Item>
     
     <Carousel.Item>
        <div className={styles.Carousel_Grid}>
             <div >
                <Carousel.Caption>
                    <div className={styles.Carousel_Caption}>
                <h2 className={styles.Carousel_Caption_h3}>The infrastructure that allows Rise Vision to ask “What Does This Make Possible?”</h2>
                <p className={styles.Carousel_Caption_p}>Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.</p>
              
                </div>
                 <div className={styles.Carousel_Caption}>
                    <GetaDemoButton/>
                </div>
                </Carousel.Caption>
                
            </div>
             
            <div className={styles.Carousel_Img_Box}>
                <img
                className="d-block w-50"
                src="https://webstatic.chargebee.com/assets/web/543/images/home/coc/customers/debbie-barrafato.png"
                alt="First slide"
                style={{width:"100%", height:"100%"}}
                />
            </div>
           
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;