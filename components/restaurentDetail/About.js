// import React from 'react'
// import { View, Text,Image } from 'react-native'

// // const moneyEmo = '&#128181;'
// // const image ="https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg";
// // const name= "Farmhouse Kitchen Thai Cuisine"
// // // const description1 = `Thai . Comfort Food . $$ . 4star; (2913+)` 
// // const description1 = `Thai` 
// // const description2 = `Comfort Food` 
// // const description3 price= `$$` 
// // const description4 ratings= `4` 
// // const description5 reviews = `(2913+)` 



// export default function About(props) {

//     // const ServerRestaurentData = {
//     //     name:"Farmhouse Kitchen Thai Cuisine",
//     //     image :"https://www.thespruceeats.com/thmb/UMT0Jx65qwNd0wxGdPk8nED3FBo=/2000x1500/filters:fill(auto,1)/GettyImages-1042998066-518ca1d7f2804eb09039e9e42e91667c.jpg",
//     //     price: `$$` ,
//     //     reviews: '(2913+)',
//     //     ratings: '4.5',
//     //     catagories:[{title:"Thai"},{title:"Comfort Food"}]
//     // }
    
//     // const {name, image, price, reviews, ratings, catagories} = ServerRestaurentData
    // const {name, image, price, reviews, rating, catagories} = props.route.params;
    // const formatedCatagories = catagories.map((cat) => cat.title).join(", ")


//     return (
//         <View>
//             {/* restaurent image */}
//             <RestaurantImage image={image} />
//             {/* restaurent title */}
//             <RestaurantTitle name={name} />
//             {/* restaurent desc */}
//             <RestaurantDesc formatedCatagories={formatedCatagories} price={price} rating={rating} reviews={reviews} />
//         </View>
//     )
// }

// const RestaurantImage = (props) => (
//     <Image source={{uri:props.image}} style={{width:"100%",height:180}} />
// )
 
// const RestaurantTitle = (props) => (
//     <Text style={{
//         fontSize: 29,
//         fontWeight: 'bold',
//         marginTop:10,
//         marginHorizontal:15
//     }}
//     >{props.name}</Text>    
// )

// const RestaurantDesc = (props) => (
//     <Text style={{
//         marginTop:10,
//         marginHorizontal:15,
//         fontWeight: '400',
//         fontSize: 15
//     }}
//     >{props.formatedCatagories}  &#9642;  {props.price}&#128181;  &#9642;  {props.rating}&#11088;  &#9642;  {props.reviews}+</Text>    
// )

import React from "react";
import { View, Text, Image } from "react-native";

export default function About(props) {
    const {name, image, price, reviews, rating, catagories} = props.route.params;

  const formattedCategories = catagories.map((cat) => cat.title).join(" • ");

  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {props.description}
  </Text>
);