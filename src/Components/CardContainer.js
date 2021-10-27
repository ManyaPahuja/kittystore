import React from 'react'

function CardContainer(props) {
    const {item} = props
    return (
        <>
            <div className="card-container" id={item.id}>
                <div className="card">
                    <div className="card-img">
                        <img src={item.img} height="100%" width='100%' />
                    </div>
                    <div className="card-name">
                        {item.name}
                    </div>
                    <div className="card-price">
                        {`Rs. ${item.price}`}
                    </div>
                </div>
            </div>
      </>  
    )
}

export default CardContainer
