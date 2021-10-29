import React from 'react'
import Header from './Header'
import CategoryListClothes from './CategoryListClothes'
import CardContainer from './CardContainer'

function JacketsAndCoats() {
    const jacketItems = [
        {
            id: 1,
            name: "Women's Blue Stripes Blazer",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/0/j00201_1_b71e5b18.jpg?rnd=20200526195200",
            price: 1500
        },
        {
            id: 2,
            name: "Black Power Through Blazer",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/r/s/rsvplp_c20003_1_2b95f01e.jpg?rnd=20200526195200",
            price: 5196
        },
        {
            id: 3,
            name: "White Corset Jacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/w/2/w20228_1_84019174.jpg?rnd=20200526195200",
            price: 3315
        },
        {
            id: 4,
            name: "Women's Green Solid Shrug",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/w/sw00099_1_75eec757.jpg?rnd=20200526195200",
            price: 2299
        },
        {
            id: 5,
            name: "Dark Brown Checks Jacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/e/m/emb-w-401__12c580f2.jpg?rnd=20200526195200",
            price: 1260
        },
        {
            id: 6,
            name: "Maroon Floral Print Shrug",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/s/9/s902602_1_fd0b4033.jpg?rnd=20200526195200",
            price: 840,
        },
        {
            id: 7,
            name: "Lavender Open Blazer",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/l/alterego-julia006_1_d26c6462.jpg?rnd=20200526195200",
            price: 2550,
        },
        {
            id: 8,
            name: "Blue Ikat Blazer Jacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/h/threeness-blueik-blaz_1_d195e573.jpg?rnd=20200526195200",
            price: 2200.
        },
        {
            id: 9,
            name: "Knits Pink Katydid Blanket Cape",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/j/o/joelkhaleej_1807p_1_f25d4349.jpg?rnd=20200526195200",
            price: 999
        },
        {
            id: 10,
            name: "Women blue crop jacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/t/ltc-279-blue_1_191686e8.jpg?rnd=20200526195200",
            price: 1346
        },
        {
            id: 11,
            name: "Women red color jacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/w/aw21_cswawjk501_1_a5ecab0a.jpg?rnd=20200526195200",
            price: 1860
        },
        {
            id: 12,
            name: "Blue Embroidered Jacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/c/gc-d-427_1_b0e8d632.jpg?rnd=20200526195200",
            price: 2650
        },
        {
            id: 13,
            name: "Solid Knit Blazer",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/w/-/w-272_1_e3492e28.jpg?rnd=20200526195200",
            price: 1850
        },
        {
            id: 14,
            name: "Purple Solid Regular Fit outwear", 
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/v/e/vero-146651702_1_9f042c9f.jpg?rnd=20200526195200",
            price: 1960
        },
        {
            id: 15,
            name: "Green Quilted Puffer Jacket",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/l/-/l-a1796-0000_1_caa6c942.jpg?rnd=20200526195200",
            price: 1896
        },
        {
            id: 16,
            name: "Women Brown Coat",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twoaw22mo0574camel_1_8147abbd.jpg?rnd=20200526195200",
            price: 4640
        },
        {
            id: 17,
            name: "Women blue overlays",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/w/gw4751051433_1_9fd90be8.jpg?rnd=20200526195200",
            price: 4492
        },
    ]

    const listItem = jacketItems.map(item => {
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

export default JacketsAndCoats
