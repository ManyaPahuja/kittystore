import React from 'react'
import CardContainer from './CardContainer'
import CategoryListFootwear from './CategoryListFootwear'
import Header from './Header'

function Footwear() {

    const dressItems = [
        {
            id: 1,
            name: "Black Wrapped In Ruffle Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0845_1_a8b62e19.jpg?rnd=20200526195200",
            price: 999
        },
        {
            id: 2,
            name: "Black Ruffle Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-863_1_d1d7da01.jpg?rnd=20200526195200",
            price: 999
        },
        {
            id: 3,
            name: "Red All Eyes On You Jumpsuit",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydressesmix_dr0769_1_90caf4b3.jpg?rnd=20200526195200",
            price: 1537
        },
        {
            id: 4,
            name: "White Polka Dot Ruffle  Short Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/w/h/white-polka-dot-ruffle-fit-and-flare-short-dress_1_ae3828d6.jpg?rnd=20200526195200",
            price: 1495
        },
        {
            id: 5,
            name: "Pink Bow Long Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/g/dgstafetta_1_fa571ce1.jpg?rnd=20200526195200",
            price: 2640,
        },
        {
            id: 6,
            name: "Sleeve Up Slit White Midi",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/n/0/n016_1_1b1a4e3f.jpg?rnd=20200526195200",
            price: 2511,
        },
        {
            id: 7,
            name: "Pink Lehariya Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/c/o/cottonstory-cs01_1_95a787c7.jpg?rnd=20200526195200",
            price: 2867,
        },
        {
            id: 8,
            name: "Pink Solid Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/5/d522101_1_2caf4e7b.jpg?rnd=20200526195200",
            price: 1610,
        },
        {
            id: 9,
            name: "Rust Solid Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/d/1/d1036_1.jpg?rnd=20200526195200",
            price: 3950,
        },
        {
            id: 10,
            name: "Maroon maxi Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm-719_1.jpg?rnd=20200526195200",
            price: 1800,
        },
        {
            id: 11,
            name: "Rust Cowl Neck Slip Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/_/t_tass21002_1_e82c27c3.jpg?rnd=20200526195200",
            price: 3495,
        },
        {
            id: 12,
            name: "Asymmetric White Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/a/s/asymmetricwhitedress02135_1_d1db175a.jpg?rnd=20200526195200",
            price: 3499,
        },
        {
            id: 13,
            name: "Black Kaftan Ruched Tie-Up Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/i/missyd019blackkaftan_1_b04e1a21.jpg?rnd=20200526195200",
            price: 3200,
        },
        {
            id: 14,
            name: "Juliette Rose Pink Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/m/m/mm2s016_1_98e4fb8d.jpg?rnd=20200526195200",
            price:1750,
        },
        {
            id: 15,
            name: "Grey Printed Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/b/g/bgtw05_1_377b3c81.jpg?rnd=20200526195200",
            price: 1194,
        },
        {
            id: 16,
            name: "Multi-Color Spring To Summer Floral Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/t/w/twentydresses-dr0988_1_a0d830f8.jpg?rnd=20200526195200",
            price: 1272,
        },
        {
            id: 17,
            name: "Black Printed Dress",
            img: "https://adn-static1.nykaa.com/nykdesignstudio-images/tr:w-550,/pub/media/catalog/product/g/i/gipsy_a19drs197265-black_1_3ef78645.jpg?rnd=20200526195200",
            price: 1647,
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
            <CategoryListFootwear />
            <div className="main-page-container ml-lg-5 ml-md-4 ml-sm-3 mr-lg-5 mr-md-4 mr-sm-3">
                <div className="card-main-container">
                    {listItem}
                </div>
            </div>
             
            
        </>
    )
}

export default Footwear

