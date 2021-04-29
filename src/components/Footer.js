import React from 'react'

import './Footer.css'

function Footer () {
    
    return (
      
        <section className="Footer" style= {{backgroundColor: "black"}} >
            <hr className="footer-separator" />
            <section className= "footer-social-media">
               
                <a href="/" target= "_blank" rel=""> Space Media</a>
               </section>
               <section className= "footer-info">
              <section className= "footer-info-left">
              <section className="footer-info_name"style= {{color:'white'}}>
                  <a href='https://eyes.nasa.gov/apps/orrery/#/inner_solar_system' target='_blank'>Nasa Eyes</a>
              </section>
              <section className="footer-info_returns"style= {{color:'white'}}>
             Space Policy
              <br/>
              Interstellar Delivery
              </section>
              </section>
              <section className= "footer-info-center">
              <section className= "footer-info_email" style= {{color:'white'}}>
                  spaceistheplace@gmail.com
              </section>
              <section className= "footer-info_terms" style= {{color:'white'}}>
                  Terms and Condition
                  <br/>
                  Copyright
              </section>
              </section>
              <section className= "footer-info-right">
              <section className= "footer-info_number"style= {{color:'white'}}>
                  +49xxxxxxx
                  
              </section>
              <section className= "footer-info_contact" style= {{color:'white'}}>
                  Our Story
                  <br/>
                  Contact Us
              </section>
              </section>
              </section>
              {/* <hr className= "footer-separetor"/> */}
              </section>
    )
              
}
export default Footer;