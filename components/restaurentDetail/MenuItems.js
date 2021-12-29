import React from 'react'
import { View, Text, StyleSheet, Image,ScrollView} from 'react-native'
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { useDispatch, useSelector } from 'react-redux';

// const foods = [
//     {
//         title: "Dum aloo (potatoes in a thick nut gravy)",
//         description: "Serve with fried bread such as puris.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
//     },
//     {
//         title: "Aloo tikki chaat",
//         description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
//     },
//     {
//         title: "Maharashtrian amti dahl",
//         description: "Sour plant-based dahl from Maharashtra in Western India.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
//     },
//     {
//         title: "Shahi paneer",
//         description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
//     },{
//         title: "Saag Aloo",
//         description: "Combining potatoes with vibrant spices.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
//     },{
//         title: "Vegetarian brinjal pickle",
//         description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
//     },{
//         title: "Chana masala",
//         description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
//     },{
//         title: "Mutter paneer",
//         description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
//     },{
//         title: "Spring onion bhajis with mint and coriander chutney",
//         description: "Homemade mint and crispy spring onion bhajis.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
//     },{
//         title: "Sweet potato tikki",
//         description: "Traditionally cooked in Indian households as a snack",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
//     },{
//         title: "Bombay samosas",
//         description: "Lighter version of the classic samosa.",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
//     },{
//         title: "Indian sweetcorn and spinach shorba",
//         description: "A Mughlai addition to Indian cuisine",
//         price: "$13.50",
//         image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
//     }
// ];


const styles = StyleSheet.create({
    menuItemStyle : {
        // height:"auto",
        flexDirection: "row",
        justifyContent: "space-between",
        margin:20
    },
    titleStyle: {
        fontSize:19,
        fontWeight:'bold',
        paddingBottom:0
    }, descriptionStyle: {
        fontSize:15,
        fontWeight:'200'
    },priceStyle : {
        fontSize:15.5,
        fontWeight:'200'
    }
})

export default function MenuItems({restaurantName, foods, hideCheckbox, marginLeft}) {

const dispatch = useDispatch();
const selectItem = (item, checkBoxValue) => dispatch({
    type: 'ADD_TO_CART', 
    payload: {
        ...item, 
        restaurantName:restaurantName,
        checkBoxValue:checkBoxValue
    }
})

const cartItem = useSelector(
    (state) => {
            state.cartReducer.selectedItems.items
        }
);


const isFoodInCart = (food, cartItems) => (
    Boolean(cartItem.find((item)=> item.title === food.title))
)
    return (
        <ScrollView showsVerticalScrollIndicator={false} >
        
            
            {foods.map((food,index) => (
                <View key={index}>
                     <View style={styles.menuItemStyle}>
                         {hideCheckbox ? (<></>) : (
                         <BouncyCheckbox 
                            iconStyle={{borderColor: "lightgray", borderRadius:0}}  
                            fillColor="green"
                            isChecked={(cartItem != undefined ? isFoodInCart(food,cartItem) : false)}
                            // isChecked={isFoodInCart(food,cartItem)}
                            onPress={(checkBoxValue) => {selectItem(food, checkBoxValue)} } 
                           
                         />)}
                         
                       
                        <FoodInfo foodInfo={food} />
                        <FoodImage foodImage={food.image} marginLeft={marginLeft ? marginLeft : 0} />
                    </View>
                        <Divider width={0.5} orientation='vertical' style={{marginHorizontal:20}} />
                </View>  
            ))}
            
            
            
         
            {/* <Divider width={1} /> */}
        </ScrollView>
       
       
    )
}



const FoodInfo = (props) => (
    <View style={{width:240,justifyContent:"space-evenly"}}>
        <Text style={styles.titleStyle}>{props.foodInfo.title}</Text>
        <Text style={styles.descriptionStyle}>{props.foodInfo.description}</Text>
        <Text style={styles.priceStyle}>{props.foodInfo.price}</Text>
    </View>
)

const FoodImage = ({marginLeft, ...props}) => (
    <View>
        <Image 
            source={{uri: props.foodImage}}
            style={{
                width:100,
                height:100,
                borderRadius:8,
                marginLeft:marginLeft}}
        />
    </View>
)