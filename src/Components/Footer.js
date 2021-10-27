import React from 'react'

function Footer() {
    return (
        <div className="main-footer ">
           <div className="main-content">
            <div className="left box">
                <h2 className="heading">About us</h2>
             <div className="content">
                 <p>If you would like to experience the best of online shopping for women in India,
                     you are at the right place.KittyStore is the ultimate destination for fashion and lifestyle,
                     including clothing, footwear, accessories,
                     personal care products and more.You can shop online at KittyStore from the comfort of your 
                      home and get your favourites delivered right to your doorstep.</p>
                  {/* <div className="social">
                    <a href="#">
                       <span className="logo"><img  src="fblogo.jpg"/></span>
                       <span className="logo"><img  src="twitter.jpg"/></span>
                        <span className="logo"><img  src="instagram.jpg"/></span>
                       <span className="logo"><img  src="youtube.jpg"/></span>
                    </a>
                  </div> */}
                </div>
             </div>
                <div className="center box">
                <h2 className="heading">Address</h2>
                <div className="content">
                    <div className="place">
                    
                       <span className="logo"><img  src="location.jpg" alt="img"/></span>
                        <span className="text">Dwarka sec-8, New Delhi</span>  <br/>
                       
                 </div> <br/>
                 <div className="phone">
                     <span className="logo"><img  src="phone.jpg" alt="img"/></span>
                        <span className="text">+91-5842695428</span>
                 </div> <br/>

                 <div className="mail">
                     
                     <span className="logo"><img  src="email.jpg" alt="img"/></span>
                        <span className="text">example1234@gmail.com</span>
                 </div>
                </div>
              </div>
            <div className="right box">
                <h2 className="heading">Contact us</h2>
                <div className="content">
                    <form action="#">
                        <div className="email">
                            <div className="text">Email *</div>
                            <input type="email" required></input>
                        </div>
                        <div className="msg">
                            <div className="text">Message</div>
                            <textarea rows="2" cols="25" required></textarea>
                        </div>
                        <div className="btn">
                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
           </div> 
        </div> 
    </div>    
    )
}

export default Footer
