import React, {useState} from 'react'
import { ScrollView, View, Text,SafeAreaView,StyleSheet, Platform, StatusBar } from 'react-native'
import Catagories from '../components/Catagories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItem, { localRestaurants } from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';


export default function Home() {

    const [restaurantData, setrestaurantData] = useState(localRestaurants);
    
    return (
        
        <View style={{flex: 1,backgroundColor: "#eee",paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0}}> 

            <View style={{backgroundColor:"white", padding:15}} >
                <HeaderTabs />
                <SearchBar />
            </View>

            <ScrollView showsVerticalScrollIndicator={false} >
                <Catagories />
                <RestaurantItem restaurantData={restaurantData} />

            </ScrollView>
    
            
        </View>
        
        
    )
}
