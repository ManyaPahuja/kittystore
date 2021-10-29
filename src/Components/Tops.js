import React from 'react'
import Header from './Header'
import CategoryListClothes from './CategoryListClothes'
import CardContainer from './CardContainer'

function Tops() {
    const dressItems = [
        {
            id: 1,
            name: "Green Print Crop Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/2/t228401_1_232293d4.jpg?rnd=20200526195200",
            price: 910
        },
        {
            id: 2,
            name: "Brown Checks Bodycon Crop Tops",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/e/vero-179075501_1_6430b861.jpg?rnd=20200526195200",
            price: 1999
        },
        {
            id: 3,
            name: "Yellow  hot top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/_/o_119814602_1_5e614fbd.jpg?rnd=20200526195200",
            price: 799
        },
        {
            id: 4,
            name: "Black The Peplum Plush Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_tp1280_1_1763cebc.jpg?rnd=20200526195200",
            price: 1122
        },
        {
            id: 5,
            name: "Ava Wrap Peplum Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/o/forevernew-27054501_1_3ce1a257.jpg?rnd=20200526195200",
            price: 850
        },
        {
            id: 6,
            name: "Green Aop Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/o/n/only-212374701_1.jpg?rnd=20200526195200",
            price: 920
        },
        {
            id: 7,
            name: "Love Your Curves Black Tafatta Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/s/bk5137_1.jpg_6874ed6d.JPG?rnd=20200526195200",
            price: 2125
        },
        {
            id: 8,
            name: "Pink Front Tie Shirt",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/o/torqadorn_tass1947_1.jpg?rnd=20200526195200",
            price: 2285
        },
        {
            id: 9,
            name: "Wrapped With Florals Multicolor Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/p/tp1179_1.jpg?rnd=20200526195200",
            price: 977
        },
        {
            id: 10,
            name: "Maroon The Trendy Polka Spin Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_tp1082_1_4e04e213.jpg?rnd=20200526195200",
            price: 907
        },
        {
            id: 11,
            name: "Black Round Neck Full Sleeves Cotton",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/i/miss-chase-mcss20tp99-44-62_1_0cc49d4f.jpg?rnd=20200526195200",
            price: 870
        },
        {
            id: 12,
            name: "Multi-coloured Print Bellini Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/1/t1023-1_168c49d6.jpg?rnd=20200526195200",
            price: 3000
        },
        {
            id: 13,
            name: "Fablestreet Rust Solid Top With Inner (Set of 2)",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/f/b/fbt_tp484rust_1.jpg?rnd=20200526195200",
            price: 1397
        },
        {
            id: 14,
            name: "ORANGE Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/1/0/1002632192orange_1_8111a9f1.jpg?rnd=20200526195200",
            price: 700
        },
        {
            id: 15,
            name: "Maroon Solid Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/i/mish_mm-834_1_a7efe87b.jpg?rnd=20200526195200",
            price: 1020
        },
        {
            id: 16,
            name: "Be Cute Multicolor Floral Crop Top",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/p/tp1183_1.jpg?rnd=20200526195200",
            price: 845
        },
        {
            id: 17,
            name: "Black Floral Lurex Cami",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/2/t226204_1_07d9c478.jpg?rnd=20200526195200",
            price: 650
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

export default Tops
