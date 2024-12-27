import logo from './logo.jpg';
import background_contact from './background-contact.jpg';
import background_home from './background-home.jpg';
import background_menu from './background-menu.jpg';
import background_about from './background-about.jpg'
import background_cart from './background-cart.png'
import cofeeBeans from './coffee-beans.jpg';

import classicEspresso from './classic_espresso.jpg';
import doubleEspresso from './double_espresso.jpg';
import cappuccinoClassic from './cappuccino_classic.jpg';
import vanillaCappuccino from './vanilla_cappuccino.jpg';
import latteClassic from './latte_classic.jpg';
import caramelLatte from './caramel_latte.jpg';
import mochaClassic from './mocha_classic.jpg';
import hazelnutMocha from './hazelnut_mocha.jpg';

import basket_icon from './basket_icon.png';
import search_icon from './search_icon.png';
import location_icon from './location_icon.png' 
import phone_icon from './phone_icon.png'
import email_icon from './email_icon.png'
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import instagram_icon from './instagram_icon.png'
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';

export const assets = {
    logo,
    background_contact,
    background_home,
    background_menu,
    background_about,
    background_cart,
    cofeeBeans,
    basket_icon,
    search_icon,
    location_icon,
    phone_icon,
    email_icon,
    facebook_icon,
    instagram_icon,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
};

export const menu_list = [
    {
        _id: "1",
        name: "Classic Espresso",
        image: classicEspresso,
        price: 5,
        description: "A rich, bold shot of pure espresso for a true coffee lover",
        category: "Espresso"
    },
    {
        _id: "2",
        name: "Double Espresso",
        image: doubleEspresso,
        price: 7,
        description: "A double shot of robust espresso for an extra kick",
        category: "Espresso"
    },
    {
        _id: "3",
        name: "Cappuccino Classic",
        image: cappuccinoClassic,
        price: 6,
        description: "Creamy, foamy milk combined with a shot of espresso",
        category: "Cappuccino"
    },
    {
        _id: "4",
        name: "Vanilla Cappuccino",
        image: vanillaCappuccino,
        price: 7,
        description: "A deliciously sweet vanilla twist on the classic cappuccino",
        category: "Cappuccino"
    },
    {
        _id: "5",
        name: "Latte Classic",
        image: latteClassic,
        price: 6,
        description: "Smooth and creamy steamed milk with a shot of espresso",
        category: "Latte"
    },
    {
        _id: "6",
        name: "Caramel Latte",
        image: caramelLatte,
        price: 8,
        description: "Rich caramel syrup blended into a smooth latte",
        category: "Latte"
    },
    {
        _id: "7",
        name: "Mocha Classic",
        image: mochaClassic,
        price: 7,
        description: "A luscious blend of chocolate and espresso topped with whipped cream",
        category: "Mocha"
    },
    {
        _id: "8",
        name: "Hazelnut Mocha",
        image: hazelnutMocha,
        price: 8,
        description: "Hazelnut flavoring enhances the richness of a classic mocha",
        category: "Mocha"
    }
];
