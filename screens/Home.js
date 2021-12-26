import React, {useState, useEffect} from 'react'
import { ScrollView, View, Text,SafeAreaView,StyleSheet, Platform, StatusBar } from 'react-native'
import Catagories from '../components/home/Catagories';
import HeaderTabs from '../components/home/HeaderTabs';
import RestaurantItem, { localRestaurants } from '../components/home/RestaurantItems';
import SearchBar from '../components/home/SearchBar';
import {  Divider, useTheme } from 'react-native-elements';
import BottomTabs from '../components/home/BottomTabs';
const YELP_API_KEY = "asdasdasdasdadsdad";
export default function Home() {

    const [restaurantData, setRestaurantData] = useState([]);
    const [city, setcity] = useState("Allahabad");
    const [activeTab, setactiveTab] = useState("Delivery");


    const getRestorantsFromYelp = () => {
        const NodeURL = "https://covid-health-monitor.herokuapp.com/api/data/restro"
        
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`
            },
        };

        return fetch(NodeURL,apiOptions)
        .then(response => response.json())
        .then(data => {console.log(data.LatestData); 
            
            setRestaurantData(data.LatestData.filter((items)=> items.transactions.includes(activeTab.toLowerCase())))
            
        });

    };

    useEffect(() => {
        getRestorantsFromYelp();
    }, [city,activeTab])

    return (
        
        <View style={{flex: 1,backgroundColor: "#eee",paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}> 

            <View style={{backgroundColor:"white", padding:15}} >
                <HeaderTabs activeTab={activeTab} setactiveTab={setactiveTab} />
                <SearchBar  cityHandler={setcity} />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                <Catagories />
                <RestaurantItem restaurantData={restaurantData} />

            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
            
            
        </View>
        
        
    )
}
