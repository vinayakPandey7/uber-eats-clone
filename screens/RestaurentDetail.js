import React from 'react'
import { View } from 'react-native'
import About from '../components/restaurentDetail/About';
import {  Divider } from 'react-native-elements';
import MenuItems from '../components/restaurentDetail/MenuItems';
import ViewCart from '../components/restaurentDetail/ViewCart';


const foods = [
    {
        title: "Dum aloo (potatoes in a thick nut gravy)",
        description: "Serve with fried bread such as puris.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
    },
    {
        title: "Aloo tikki chaat",
        description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
    },
    {
        title: "Maharashtrian amti dahl",
        description: "Sour plant-based dahl from Maharashtra in Western India.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
    },
    {
        title: "Shahi paneer",
        description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
    },{
        title: "Saag Aloo",
        description: "Combining potatoes with vibrant spices.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
    },{
        title: "Vegetarian brinjal pickle",
        description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
    },{
        title: "Chana masala",
        description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
    },{
        title: "Mutter paneer",
        description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
    },{
        title: "Spring onion bhajis with mint and coriander chutney",
        description: "Homemade mint and crispy spring onion bhajis.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
    },{
        title: "Sweet potato tikki",
        description: "Traditionally cooked in Indian households as a snack",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
    },{
        title: "Bombay samosas",
        description: "Lighter version of the classic samosa.",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
    },{
        title: "Indian sweetcorn and spinach shorba",
        description: "A Mughlai addition to Indian cuisine",
        price: "$13.50",
        image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
    }
];


export default function RestaurentDetail({route, navigation}) {
    console.log("loading RES_DETAIL component")
    return (
        <View>
            <About route={route} />
            <Divider width={1.8} style={{marginVertical:20}} />
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    );
}
