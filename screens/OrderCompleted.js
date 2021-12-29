// import React, {useState, useEffect} from 'react'
// import { View, Text } from 'react-native'
// import { useSelector } from 'react-redux';
// import LottieView from 'lottie-react-native';
// import firebase from 'firebase/compat/app';
// import MenueItems from '../components/restaurentDetail/MenuItems';
// import { ScrollView } from 'react-native-gesture-handler';

// export default function OrderCompleted() {
//     console.log("loading ORDERCOMPLETED component");
    
//     const [lastOrder, setlastOrder] = useState({
//         items: [
//             {
//                 title: "Dum aloo (potatoes in a thick nut gravy)",
//                 description: "Serve with fried bread such as puris.",
//                 price: "$13.50",
//                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
//             }
//         ]
//     })

   
//     const {items, restaurantName} = useSelector(state => state.cartReducer.selectedItems);
//     const total = items
//         .map(item => Number(item.price.replace('$','')))
//         .reduce((prev,curr) => prev+curr, 0)


//     const totalUSD = total.toLocaleString("en", {
//         style: "currency",
//         currency:"USD"
//     })

//     useEffect( () => {
//         let nbrCalls = 0    
//     const db = firebase.firestore();
//     // setlastOrder({
//     //     items: [
//     //         {
//     //             title: "vole",
//     //             description: "Serve with fried bread such as puris.",
//     //             price: "$13.50",
//     //             image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
//     //         }
//     //     ]
//     // })
//     // const unsubscribe = db
//     //     .collection("orders")
//     //     .orderBy('createdAt','desc')
//     //     .limit(1)
//     //     .onSnapshot(function (querySnapshot) {
//     //         nbrCalls++;
//     //         if (nbrCalls > 1) {
//     //             querySnapshot.docs.map((doc)=>{
//     //             console.log(doc.data())
//     //              setLastOrder(doc.data());
//     //         });
//     //         }
//     //       });




//     //     // .onSnapshot((snapshot) => {
//     //     //      snapshot.docs.map((doc)=>{
//     //     //         console.log(doc.data())
//     //     //          setLastOrder(doc.data());
//     //     //     });
//     //     // });

//     //     return () => unsubscribe();


//     }, [])

//     return (
//         <View style={{ flex:1, backgroundColor:"white", }}>
//             <View 
//                 style={{
//                     margin:15,
//                     alignItems:"center",
//                     height:"100%"
//                 }}
//             >
//                 {/* green checkbox */}
//             {/* <LottieView 
//                 style={{height:100, alignSelf:"center", marginBottom:30}}
//                 source={require('../assets/animations/check-mark.json')} autoPlay loop
//                 // autoPlay
//                 // speed={0.5} 
//                 // loop={false}
//             /> */}
//             {/* <LottieView source={require('../assets/animations/cooking.json')} autoPlay loop />; */}
 
//             <Text style={{fontSize:20, fontWeight: "bold"}}>Your Order at {restaurantName} is placed for {totalUSD} </Text>
            
//             <ScrollView >
//                 <MenueItems foods={lastOrder.items} hideCheckbox={true}  />
//                 {/* cooking */}
//                 {/* <LottieView 
//                     style={{height:200, alignSelf:"center"}}
//                     source={require('../assets/animations/cooking.json')} autoPlay loop
//                     autoPlay
//                     speed={0.5} 
//                 /> */}
//             </ScrollView>
           
//             </View>
            
//         </View>
//     )
// }
import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import firebase from 'firebase/compat/app';
import MenueItems from '../components/restaurentDetail/MenuItems';

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  useEffect(() => {
    const db = firebase.firestore();
    const unsubscribe = db
      .collection("orders")
      .orderBy("createdAt", "desc")
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    return () => unsubscribe();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        {/* <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        /> */}
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenueItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          {/* <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          /> */}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}