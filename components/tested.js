import React, {useState} from "react";
import { View, StyleSheet,FlatList, Text, Modal,TextInput,Button, TouchableWithoutFeedback, StatusBar, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from 'moment';

const Item = ({title, time, subtext}) => (
  <View style={styles.item}>
    <Text style={styles.titlefl}>{title}</Text>
    <Text style={styles.timefl}>{time}</Text>
    <Text style={styles.subtextfl}>{subtext}</Text>
    <View style={styles.iconContainer}>
      <MaterialCommunityIcons name='square-edit-outline' size={22} />
      <MaterialCommunityIcons name='trash-can-outline' size={22}/>
    </View>   
  </View>
);



function App() {
  const [title, setTitle] = useState();
  const [task, setTask] = useState();
  const [data, setData] = useState([]);

  const handlePress = () => {
    setData([...data,{
      id : data.length,
      title: title,
      subtext: task,
      time: moment().utcOffset('+05:30').format("MMM Do YY")
    }]);
    setModalVisible(!modalVisible) ;
  
  
  };
  
  
 const [modalVisible, setModalVisible] = useState(false);
 return (
  <>
  <SafeAreaView style={styles.screen}>
    <View style={styles.bG}>
    <TouchableWithoutFeedback
    onPress={() =>setModalVisible(true)}>
    <View style={styles.container}>
    <Text style={styles.title2}>Add New Task </Text>
      <View style={styles.plusIcon}>
        <MaterialCommunityIcons
          name={"folder-plus"}
          size={25}
          color={"#b22222"}
        />
     </View>
    </View>
    </TouchableWithoutFeedback>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
          <View style={styles.modContainer}>
      <View style={styles.title} >
        <TextInput 
        onChangeText={Title => setTitle(Title)}
        style={styles.titleText}
        placeholder='Title'
         />
         </View>
         <View style={styles.task}>
         <TextInput
         onChangeText={ (Task) => setTask(Task)}
         style= {styles.taskText}
         placeholder='Task'
         />
         </View>
         <View style={styles.button}>
         <Button title='Submit'
         onPress={( ) => handlePress()}
          />
         </View>
         </View>
      </Modal>
    </View>
    <View style={styles.containerCard}>
      <FlatList
        data={data}
        renderItem={({item}) => <Item title={item.title} time={item.time} subtext={item.subtext} /> }
  
        keyExtractor={item => item.id}
      
      />
      </View>
    </SafeAreaView>
    </>
 )
}

const styles = StyleSheet.create({

  bG: {
    backgroundColor: '#f0e68c',
  
  },
  container: {
    backgroundColor: "#adff2f",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
   
  },
  modContainer :{
    flex: 1,
    backgroundColor: 'green',

  },
 
  plusIcon : {
    alignItems:"flex-end",
    justifyContent:"flex-end",
    flexDirection:"row",
    flex:1,
    marginRight:10
  },
  screen: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
  },
  title2: {
    fontSize: 22,
    fontWeight: "bold"
  },
  button2: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#F194FF',
  },
  containerModal: {
    backgroundColor: "#adff2f",
    borderRadius: 25,
    flexDirection: "row",
    padding: 15,
    marginVertical: 10,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10
   
  },

  title : {
    paddingTop: 20,
    backgroundColor: "#4ecdc4",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
   
},
task: {
    backgroundColor: "#b0c4de",
    borderRadius: 10,
    padding: 25,
    marginVertical: 20,
    width: '100%',
    height: '50%'
  },
  button: {
    flex:1,
    justifyContent: 'flex-end',
    paddingBottom: 10

  },
  titleText : {
    color: "#0c0c0c",
    fontSize: 20,
    fontWeight:'bold'
  },
  taskText : {
    color: "#0c0c0c" ,
    fontSize: 18,
    fontWeight:'bold'
  },
  plusIcon : {
    alignItems:"flex-end",
    justifyContent:"flex-end",
    flexDirection:"row",
    flex:1,
    marginRight:10
  },
  title2: {
    fontSize: 22,
    fontWeight: "bold"
  },
  containerCard: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  titlefl: {
    fontSize: 22,
    fontWeight: 'bold'
  },
  timefl: {
    fontSize: 20,
  },
  subtextfl: {
    fontSize: 20,
  },
});

export default App;
