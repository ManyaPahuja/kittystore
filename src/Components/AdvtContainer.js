import React from 'react';
import { useHistory } from 'react-router-dom';

function AdvtContainer() {
    const history = useHistory();
    return (
        <>
            <div className="advt-container-1">
               
               <img src="fash14.jpg" alt="img"></img>
            </div>
            <div className="advt-container-2">
                <div className="box-t">
                    WHAT'S NEW IN CLOTHES
                </div>
                <div className="box-d">
                    <div className="innerbox">
                        <img src="fash1.3.jpg" alt="img" onClick={() => history.push("/clothes/dresses")} height="100%" width="100%"  />
                    </div>
                    <div className="innerbox">
                    <img src="fash1.2jpg.jpg" alt="img" onClick={() => history.push("/clothes/jackets-coats")} height="100%" width="100%" />

                    </div>
                    <div className="innerbox">
                    <img src="1.4jpg.jpg" alt="img" onClick={() => history.push("/clothes/tops")} height="100%" width="100%" />

                    </div>
                </div>
            </div>
            
            <div className="advt-container-3">  
                <img src="fash2.1.jpg" alt="img" height="100%" width="100%" />
                  <button className="office-wear">"LIFE IS A PARTY DRESS LIKE IT."</button>
            </div>

            <div className="advt-container-4">
                <div className="box-t"> WHAT'S NEW IN SHOES</div>
                <div className="box-d">
                    <div className="innerbox">
                        <img src="fash1.4.jpg" alt="img" onClick={() => history.push("/footwear/sandals")} height="100%" width="100%"  />
                    </div>
                    <div className="innerbox">
                        <img src="fash1.5.jpg" alt="img" onClick={() => history.push("/footwear/heels")} height="100%" width="100%" />
                    </div>
                    <div className="innerbox">
                        <img src="fash1.6.jpg" alt="img" onClick={() => history.push("/footwear/flats")} height="100%" width="100%" />
                    </div>
                    <div className="innerbox">
                        <img src="fash1.7.jpg" alt="img" onClick={() => history.push("/footwear/sneakers")} height="100%" width="100%" />
                    </div>
                </div>
            </div>
            <div className="advt-container-2">
                <div className="box-t">
                    "EAT SLEEP DO MAKEUP REPEAT"
                </div>
                <div className="box-d">
                    <div className="innerbox">
                        <img src="makeup1.jpg" alt="img" height="100%" width="100%"  />
                    </div>
                    <div className="innerbox">
                    <img src="makeup2.jpg" alt="img" height="100%" width="100%" />

                    </div>
                    <div className="innerbox">
                    <img src="makeup3.jpg" alt="img" height="100%" width="100%" />

                    </div>
                </div>
            </div>
            <div className="advt-container-5 flex-center">

                <h2 className="gradient">All AGES ,ALL RACES , ALL GENDERS</h2>
            </div>
        </>
    )
}
 
export default AdvtContainer
