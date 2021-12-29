import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text,SafeAreaView,StyleSheet, Platform, StatusBar } from 'react-native'
import Catagories from '../components/home/Catagories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import {  Divider, useTheme } from 'react-native-elements';

import BottomTabs from '../components/home/BottomTabs';
const YELP_API_KEY = "asdasdasdasdadsdad";
export default function Home({navigation}) {

    console.log("loading HOME component")
    const APISERVERDATA = [
        {
            name:"Beachside Bar",
            image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
            catagories: ["Cafe","Bar"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['delivery'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
        {
            name:"Sagar Ratna",
            image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
            catagories: ["Cafe"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['delivery'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
        {
            name:"El Chico Restaurant",
            image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
            catagories: ["Cafe","Bar"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['delivery'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
        {
            name:"Beachside Bar",
            image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
            catagories: ["Cafe","Bar"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['delivery'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
        {
            name:"Sagar Ratna",
            image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
            catagories: ["Cafe"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['delivery'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
        {
            name:"Beachside Bar",
            image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
            catagories: ["Cafe","Bar"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['delivery'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
        {
            name:"Sagar Ratna_p",
            image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
            catagories: ["Cafe"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['pickup'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
        {
            name:"El Chico Restaurant_p",
            image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
            catagories: ["Cafe","Bar"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['pickup'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },{
            name:"Beachside Bar_p",
            image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
            catagories: ["Cafe","Bar"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['pickup'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },{
            name:"Sagar Ratna_p",
            image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
            catagories: ["Cafe"],
            price:"$50",
            reviews: 1244,
            rating:4.5,
            transactions: ['pickup'],
            catagories:[{title:"Thai"},{title:"Comfort Food"}]
        },
    ]

    const [restaurantData, setRestaurantData] = useState(APISERVERDATA);
    const [city, setcity] = useState("Allahabad");
    const [activeTab, setactiveTab] = useState("Delivery");

    

    // const getRestorantsFromYelp = () => {
    //     const NodeURL = "https://covid-health-monitor.herokuapp.com/api/data/restro"
        
    //     const apiOptions = {
    //         mode: 'no-cors',
    //         headers: {
    //             Authorization: `Bearer ${YELP_API_KEY}`
    //         },
    //     };

    //     return fetch(NodeURL,apiOptions)
    //     .then(response => response.json())
    //     .then(data => {console.log(data.LatestData); 
            
    //         setRestaurantData(data.LatestData.filter((items)=> items.transactions.includes(activeTab.toLowerCase())))
            
    //     });

    // };

    useEffect(() => {
        // getRestorantsFromYelp();
        APISERVERDATA
    }, [city,activeTab])

    return (
        
        <View style={{flex: 1,backgroundColor: "#eee",paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}> 

            <View style={{backgroundColor:"white", padding:15}} >
                <HeaderTabs activeTab={activeTab} setactiveTab={setactiveTab} />
                <SearchBar  cityHandler={setcity} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                <Catagories />
                <RestaurantItem restaurantData={restaurantData} 
                    navigation={navigation}
                />

            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
            
            
        </View>
        
        
    )
}
