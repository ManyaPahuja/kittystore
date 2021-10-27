import React from 'react'
import CardContainer from './CardContainer'
import CategoryListClothes from './CategoryListClothes'
import Header from './Header'

function Clothes() {

    const dressItems = [
        {
            id: 1,
            name: "Blue Wrapped In Ruffle Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0845_1_a8b62e19.jpg?rnd=20200526195200",
            price: 999
        },
        {
            id: 2,
            name: "Blue Wrapped In Ruffle Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-863_1_d1d7da01.jpg?rnd=20200526195200",
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

export default Clothes
