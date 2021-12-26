import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export  const localRestaurants =  [
    {
        name:"Beachside Bar",
        image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
        catagories: ["Cafe","Bar"],
        price:"$50",
        reviews: 1244,
        rating:4.5
    },
    {
        name:"Sagar Ratna",
        image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
        catagories: ["Cafe"],
        price:"$50",
        reviews: 1244,
        rating:4.5
    },
    {
        name:"El Chico Restaurant",
        image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
        catagories: ["Cafe","Bar"],
        price:"$50",
        reviews: 1244,
        rating:4.5
    },
    {
        name:"Beachside Bar",
        image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
        catagories: ["Cafe","Bar"],
        price:"$50",
        reviews: 1244,
        rating:4.5
    },
    {
        name:"Sagar Ratna",
        image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
        catagories: ["Cafe"],
        price:"$50",
        reviews: 1244,
        rating:4.5
    },
]

export default function RestaurantItem(props) {


 
    
    return (
        <TouchableOpacity activeOpacity={1} style={{marginBottom:30}} >
            {props.restaurantData.map((restaurant,index)=> (
                <View key={index} style={{marginTop:10, padding:15, backgroundColor: "white"}}>
                    <RestaurantImage image_url={restaurant.image_url} />
                    <RestaurantInfo name={restaurant.name}  />
                </View>
            ))}
            
        </TouchableOpacity>
        
    )
}


const RestaurantImage = (props) => (
    <>
    <Image 
        source={{
            uri: props.image_url
        }}
        style={{ width: "100%", height: 180}}
    />
    
    <TouchableOpacity style={{position: 'absolute', right:20, top: 20}}>
        <MaterialCommunityIcons name='heart-outline' size={25} color="#fff" />
    </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row",
         justifyContent: "space-between",
         alignItems: "center",
         marginTop:10
         }}>
    <View >
        <Text style={{fontSize: 15, fontWeight:"bold"}}>{props.name}</Text>
        <Text style={{fontSize: 13, color:'gray'}} >30-45 . min</Text>
    </View>
    <View style={{backgroundColor: "#eee", height:30,width:30, color:'gray', alignItems:"center",justifyContent:"center",borderRadius:15}}>
        <Text >{props.rating}</Text>
    </View>
        
    </View>
   
)
