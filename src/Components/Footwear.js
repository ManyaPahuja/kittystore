import React from 'react'
import CategoryListFootwear from './CategoryListFootwear'
import Header from './Header'

function Footwear() {
   
   
    return (
        <>
            <Header />
            <CategoryListFootwear />
         <h1><i className="shopping-cart"></i></h1>
             <section className="cloth">
                 <div>
                    <img src="shoes1.jpg"></img>
                     <p>Hey irma black flats</p>
                     <h6>Rs.499</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 <div>
                 <img src="shoes2.jpg"></img>
                     <p>A pretty bowknot flats pink</p>
                     <h6>Rs.399</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 <div>
                 <img src="shoes3.jpg"></img>
                     
                     <p>Irish coffee mules Brown</p>
                     <h6>Rs.899</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 <div>
                 <img src="shoes4.jpg"></img>
                     <p>Donatella white sandal</p>
                     <h6>Rs.599</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 
             </section>

             <section className="cloth">
                 <div>
                    <img src="shoes5.jpg"></img>
                     <p>Pretty Yellow Brocade Heels</p>
                     <h6>Rs.699</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 <div>
                 <img src="shoes6.jpg"></img>
                     <p>Classic sling black heel</p>
                     <h6>Rs.699</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 <div>
                 <img src="shoes7.jpg"></img>
                     <p>Leopard strap slip on tan heel</p>
                     <h6>Rs.899</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 <div >
                 <img src="shoes8.jpg"></img>
                     <p>Rose fields white heels</p>
                     <h6>Rs.999</h6>
                     <span></span>
                     <button>Add-cart</button>
                 </div>
                 
             </section>
        </>
    )
}

export default Footwear
