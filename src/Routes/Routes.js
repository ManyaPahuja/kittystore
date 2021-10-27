import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Clothes from '../Components/Clothes';
import Footwear from '../Components/Footwear';
import Home from '../Components/Home';
import Login from '../Components/Login';
import Skincare from '../Components/Skincare';
import Makeup from '../Components/Makeup';
import JacketsAndCoats from '../Components/JacketsAndCoats';
import Tops from '../Components/Tops';
import Jeans from '../Components/Jeans';

function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact component={Login} />
            <Route path="/clothes/dresses" exact component={Clothes} />
            <Route path="/clothes/jackets-coats" exact component={JacketsAndCoats} />
            <Route path="/clothes/tops" exact component={Tops} />
            <Route path="/clothes/jeans" exact component={Jeans} />
            <Route path="/footwear/sandals" exact component={Footwear} />
            <Route path="/footwear/heels" exact component={Footwear} />
            <Route path="/footwear/flats" exact component={Footwear} />
            <Route path="/footwear/sneakers" exact component={Footwear} />
            <Route path="/skincare" exact component={Skincare} />
            <Route path="/makeup" exact component={Makeup} />
        </Switch>
    )
}

export default Routes
