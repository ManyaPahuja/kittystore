import React from 'react'
import { useHistory } from 'react-router-dom';

function CategoryListFootwear() {
    const history = useHistory();
    return (
        <div className="category-list sticky-top">
            <div className="category-type" onClick={() => history.push("/footwear/sandals")}>Sandals</div>
            <div className="category-type" onClick={() => history.push("/footwear/heels")}>Heels</div>
            <div className="category-type" onClick={() => history.push("/footwear/flats")}>Flats</div>
            <div className="category-type" onClick={() => history.push("/footwear/sneakers")}>Sneakers</div>
        </div>
    )
}

export default CategoryListFootwear
