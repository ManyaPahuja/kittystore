import React from 'react'

function ScrollImages() {
    return (
        <div className="image-carousel">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active" id="btn"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="3" className="active"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="fash3.jpg" alt="img" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="fash6.jpg" alt="img" className="d-block w-100"  alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="fash2.jpg" alt="img" className="d-block w-100"   alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="fash4.jpg" alt="img" className="d-block w-100"   alt="..." />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default ScrollImages
