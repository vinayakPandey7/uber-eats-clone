// import React, {useState}  from 'react'
// import { View, Text,TouchableOpacity, Modal, StyleSheet } from 'react-native'
// import { useSelector } from 'react-redux';
// import OrderItem from './OrderItem';
// import firebase from '../../firebase';

// export default function ViewCart({navigation}) {
//     console.log("loading VIEWCART component")
//     const [modalVisible, setmodalVisible] = useState(false)
//     const {items, restaurantName} = useSelector(state => state.cartReducer.selectedItems);
//     const total = items
//         .map(item => Number(item.price.replace('$','')))
//         .reduce((prev,curr) => prev+curr, 0)


//     const totalUSD = total.toLocaleString("en", {
//         style: "currency",
//         currency:"USD"
//     })

//     function addOrderToFirebase(){
//         console.log("inside addOderToFirebase function")
//         const db = firebase.firestore();
//         db.collection("orders").add({
//             items: items,
//             restaurantName: restaurantName,
//             createdAt: firebase.firestore.FieldValue.serverTimestamp()
//         });
//         setmodalVisible(false);
        // console.log("setmodalvisible to false");
        // console.log("start navigating to orderCOmpleted")
        // navigation.push("OrderCompleted");
        // console.log("done navigating to orderCOmpleted")
//     };
// 
//     const styles = StyleSheet.create({
//         modalContainer: {
//             flex: 1,
//             justifyContent:"flex-end",
//             backgroundColor:"rgba(0,0,0,0.7)"
//         },

//         modalCheckoutContainer: {
//             backgroundColor:"white",
//             padding:15,
//             height:500,
//             borderWidth:1
//         },

//         restaurantName: {
//             textAlign:"center",
//             fontWeight:"600",
//             fontSize:18,
//             marginBottom:10
//         },

//         subtotalContainer: {
//             flexDirection:"row",
//             justifyContent:"space-between",
//             marginTop:15
//         },

//         subTotalText: {
//             textAlign:"left",
//             fontWeight:"600",
//             fontSize:15,
//             marginBottom:10
//         }
//     })

//     const checkoutModelContent = () => (
//         <>
//             <View style={styles.modalContainer} >
//                 <View style={styles.modalCheckoutContainer} >
//                     <Text style={styles.restaurantName} >{restaurantName}</Text>
//                     {items.map((item,index) => (
//                         <OrderItem key={index} item={item} />
//                         // console.log("inside viewCART map")
//                     ))}
//                     <View style={styles.subtotalContainer}>
//                         <Text style={styles.subTotalText}>Subtotal</Text>
//                         <Text>{totalUSD}</Text>
//                     </View>
//                     <View style={{flexDirection:"row",justifyContent:'center'}} >
//                         <TouchableOpacity style={{
//                             marginTop:20,
//                             backgroundColor:"black",
//                             alignItems:"center",
//                             padding:13,
//                             borderRadius:30,
//                             width:300,
//                             position:"relative"
//                         }}
//                             onPress={()=> addOrderToFirebase()}
//                         >
//                             <Text style={{color:"white", fontSize:20}}>Checkout</Text>
//                             <Text style={{position:"absolute", right:20,color:"white", fontSize:15, top:17}}>{total ? totalUSD : ""}</Text>
//                         </TouchableOpacity>
                        
//                     </View>
//                 </View>
//             </View>
//         </>
//     );



//     return (
//         <>
//         <Modal animationType='slide' visible={modalVisible} 
//             transparent={true}
//             onRequestClose={()=> {setmodalVisible(false);}}
//         >

//             {checkoutModelContent()}

//         </Modal>
//          {total ? (
//             <View style={{
//             flex:1,
//             alignItem:"center",
//             justifyContent:"center",
//             flexDirection:"row",
//             position:"absolute",
//             // bottom: 130,   // original value
//             bottom: 350,
//             zIndex:999
//             }}
//         >
//         <View style={{
//             flexDirection:"row",
//             justifyContent:"center",
//             width:"100%"
//             }}
//         >
//         <TouchableOpacity
//             style={{
//             marginTop:20,
//             backgroundColor:"black",
//             flexDirection:"row",
//             justifyContent: "flex-end",
//             alignItems:"center",
//             padding:13,
//             borderRadius:30,
//             width:300,
//             position:"relative"
//             }}
//             onPress={() => setmodalVisible(true)}
//         >
//         <Text style={{color:"white", fontSize:20, marginRight:30}}>View Cart</Text>
//         <Text style={{color:'white', fontSize:20}}>{totalUSD}</Text>
//         </TouchableOpacity>
//         </View>
//         </View>)
//         : <></> }
//         </>
//     )
// }
import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import firebase from "../../firebase";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
    console.log("loading VIEWCART component")
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const addOrderToFireBase = () => {
    console.log("inside addOderToFirebase function")
    setLoading(true);
    const db = firebase.firestore();
    db.collection("orders")
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false); 
          console.log("setmodalvisible to false");
          console.log("start navigating to orderCOmpleted")
          navigation.push("OrderCompleted");
          console.log("done navigating to orderCOmpleted")
        }, 2500);
      });
  };

  const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
      backgroundColor: "white",
      padding: 16,
      height: 500,
      borderWidth: 1,
    },

    restaurantName: {
      textAlign: "center",
      fontWeight: "600",
      fontSize: 18,
      marginBottom: 10,
    },

    subtotalContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 15,
    },

    subtotalText: {
      textAlign: "left",
      fontWeight: "600",
      fontSize: 15,
      marginBottom: 10,
    },
  });

  const checkoutModalContent = () => {
    return (
      <>
        <View style={styles.modalContainer}>
          <View style={styles.modalCheckoutContainer}>
            <Text style={styles.restaurantName}>{restaurantName}</Text>
            {items.map((item, index) => (
              <OrderItem key={index} item={item} />
            ))}
            <View style={styles.subtotalContainer}>
              <Text style={styles.subtotalText}>Subtotal</Text>
              <Text>{totalUSD}</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  backgroundColor: "black",
                  alignItems: "center",
                  padding: 13,
                  borderRadius: 30,
                  width: 300,
                  position: "relative",
                }}
                onPress={() => {
                  addOrderToFireBase();
                  setModalVisible(false);
                }}
              >
                <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
                <Text
                  style={{
                    position: "absolute",
                    right: 20,
                    color: "white",
                    fontSize: 15,
                    top: 17,
                  }}
                >
                  {total ? totalUSD : ""}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <Modal
        animationType="slide"
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        {checkoutModalContent()}
      </Modal>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 130,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => setModalVisible(true)}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                View Cart
              </Text>
              <Text style={{ color: "white", fontSize: 20 }}>{totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {loading ? (
        <View
          style={{
            backgroundColor: "black",
            position: "absolute",
            opacity: 0.6,
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
          }}
        >
          {/* <LottieView
            style={{ height: 200 }}
            source={require("../../assets/animations/scanner.json")}
            autoPlay
            speed={3}
          /> */}
        </View>
      ) : (
        <></>
      )}
    </>
  );
}