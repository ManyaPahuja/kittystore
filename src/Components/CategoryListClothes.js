import React from 'react'
import { useHistory } from 'react-router-dom';

function CategoryListClothes() {
    const history = useHistory();
    return (
        <div className="category-list sticky-top">
            <div className="category-type" onClick={() => history.push("/clothes/dresses")}>Dresses</div>
            <div className="category-type" onClick={() => history.push("/clothes/jackets-coats")}>Jackets & Coats</div>
            <div className="category-type" onClick={() => history.push("/clothes/tops")}>Tops</div>
            <div className="category-type" onClick={() => history.push("/clothes/jeans")}>Jeans</div>
        </div>
    )
}

export default CategoryListClothes
