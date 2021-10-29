import React from 'react'
import Header from './Header'
import CategoryListClothes from './CategoryListClothes'
import CardContainer from './CardContainer'

function Jeans() {
    const dressItems = [
        {
            id: 1,
            name: "Baggy Fit With Expandable Belt Denim Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10535_1_932b5e7e.jpg?rnd=20200526195200",
            price: 1249
        },
        {
            id: 2,
            name: "Mom Fit High Waist Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10592_1_c8b89a5a.jpg?rnd=20200526195200",
            price: 1099
        },
        {
            id: 3,
            name: "Blue Ava Wide Leg Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/s/ss2021bt018_1_32fd46b7.jpg?rnd=20200526195200",
            price: 2841
        },
        {
            id: 4,
            name: "90'S Grey Flare Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke11014_1_3b9a7e78.jpg?rnd=20200526195200",
            price: 1399
        },
        {
            id: 5,
            name: "Grey Distressed Mom Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10995_1_48599bc7.jpg?rnd=20200526195200",
            price: 1299
        },
        {
            id: 6,
            name: "Distressed Carrot Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10816_1_66f67d0c.jpg?rnd=20200526195200",
            price: 999,
        },
        {
            id: 7,
            name: "Vero Moda Black Solid Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/o/voramoda_243641301_1_5645fdb4.jpg?rnd=20200526195200",
            price: 2800,
        },
        {
            id: 8,
            name: "Mid Rise Relaxed Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/d/tdb2041_1_a09c118f.jpg?rnd=20200526195200",
            price: 1889,
        },
        {
            id: 9,
            name: "Boy Friend Fit Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/d/tdb2047_1_73b78f51.jpg?rnd=20200526195200",
            price: 2029,
        },
        {
            id: 10,
            name: "White High Rise Cropped Denim Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/o/doaw18den02-69-82-26_1.jpg?rnd=20200526195200",
            price: 1400,
        },
        {
            id: 11,
            name: "Black Wide Leg Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10509_1_f14ad099.jpg?rnd=20200526195200",
            price: 1550,
        },
        {
            id: 12,
            name: "Eco-Washed Dark Flared Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10809_1_0ec73003.jpg?rnd=20200526195200",
            price: 1099,
        },
        {
            id: 13,
            name: "Vero Moda Black Solid Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twoaw22je0596blue_1_6a66a5f5.jpg?rnd=20200526195200",
            price: 2552,
        },
        {
            id: 14,
            name: "Vero Moda Black Solid Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/o/voramoda_243641301_1_5645fdb4.jpg?rnd=20200526195200",
            price: 2800,
        }, 
        {
            id: 15,
            name: "Paper Bag Mom Fit Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10538_1_d25253bc.jpg?rnd=20200526195200",
            price: 1299,
        },
        {
            id: 16,
            name: "Navy Blue Straight Fit Jeans",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/e/levis-a2395-0000_1_1a709395.jpg?rnd=20200526195200",
            price: 2800,
        },
        {
            id: 17,
            name: "Dusty Pink Straight Fit Jeanss",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/r/frkns-fke10870_1_16517dd6.jpg?rnd=20200526195200",
            price: 1299,
        },
        
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

export default Jeans
