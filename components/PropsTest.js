import React, { Children } from 'react';
import {  View, Button, StyleSheet, Text,TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";


function MyComponent({children,title1,...rest}) {
    return (
      <View style={styles.center}>
        <Text>{title1}</Text>
        <Text  > dhgdgdgd</Text>
        <Button {...rest} />
        {children}
      </View>
    );
  }
  




  const Item = ({children,item,testt,atest}) => (

     <View style={styles.item}>
        {children}
      <Text style={styles.titlefl}>Name : {item.name}</Text>
      <Text style={styles.titlefl}>Name : {item.a}</Text>
      <Text style={styles.timefl}>Status : {testt.a}</Text>
      <Text style={styles.timefl}>Status : {testt.b}</Text>
      <Text style={styles.subtextfl}>See More</Text>
      <Text style={styles.timefl}>Status : {atest[0]}</Text>
      <Text style={styles.timefl}>Status : {atest[1]}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() =>console.log (item.id)}>
        <MaterialCommunityIcons name='cart' size={24} />
        </TouchableOpacity>
        {children}
        <TouchableOpacity onPress={() => console.log ('test')}>
        <MaterialCommunityIcons name='trash-can-outline' size={24}/>
        </TouchableOpacity>
      </View>   
    </View>
  );
function PropsTest(props) {
    const item = {name: 'shaji', a:'paapan',id:1000};
    const testt ={a:'ppp', b:'sfsssss'};
     const arrayy=['qqqqqqqqqq', 'array testtttttt'];
    return (
        
        <Item item={item} testt={testt} atest={arrayy}>
            <View style= {styles.center}>
        <Button title="Click me" onPress={() =>{console.log('Eveythings fine') ; alert('Button clicked')}} />
        <Text>Some additional text</Text>
        </View>
   </Item>
      
    );
}
const styles = StyleSheet.create({
    center:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    iconContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
        paddingTop: 10
      },
      item: {
        backgroundColor: '#a9a9a9',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
   
    subtextfl: {
        fontSize: 20,
      },
      
      titlefl: {
        fontSize: 22,
        fontWeight: 'bold'
      },
      timefl: {
        fontSize: 20,
      },
})
export default PropsTest;