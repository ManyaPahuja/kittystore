import React from 'react'
import Header from './Header'
import CategoryListClothes from './CategoryListClothes'
import CardContainer from './CardContainer'

function Tops() {
    const dressItems = [
        {
            id: 1,
            name: "Blue Wrapped In Ruffle Dress",
            img: "dress10.jpg",
            price: 999
        },
        {
            id: 2,
            name: "Blue Wrapped In Ruffle Dress",
            img: "dress9.jpg",
            price: 999
        },
        {
            id: 3,
            name: "Blue Wrapped In Ruffle Dress",
            img: "dress9.jpg",
            price: 999
        },
        {
            id: 4,
            name: "Blue Wrapped In Ruffle Dress",
            img: "dress9.jpg",
            price: 999
        },
        {
            id: 5,
            name: "Blue Wrapped In Ruffle Dress",
            img: "dress9.jpg",
            price: 999
        },
        {
            id: 6,
            name: "Blue Wrapped In Ruffle Dress",
            img: "dress9.jpg",
            price: 999
        }
    ]

    const listItem = dressItems.map(item => {
        return (
            <CardContainer item={item} />
        )
    })
    return (
        <>
            <Header />
            <CategoryListClothes />
            <div className="main-page-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
                <div className="card-main-container">
                    {listItem}
                </div>
            </div>
        </>
        
    )
}

export default Tops
