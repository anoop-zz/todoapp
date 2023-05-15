import React, {useState} from "react";
import { View, StyleSheet,FlatList, Text, Modal,TextInput,Button,TouchableOpacity, TouchableWithoutFeedback, StatusBar, SafeAreaView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import moment from 'moment';


function ToDoApp() {
  const [title, setTitle] = useState('');
  const [task, setTask] = useState('');
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);

  const [titleEdit, setTitleEdit] = useState('');
  const [taskEdit, setTaskEdit] = useState('');

  const handlePress = () => {
    setData([...data,{
      id : data.length,
      title: title,
      subtext: task,
      time: moment().utcOffset('+05:30').format("MMM Do YY")
    }]);
    setModalVisible(!modalVisible) ;
  
  
  };

  const handleDelete = (itemId) =>{
    const newArray = [...data] ;
   setData(() => newArray.filter(item => item.id !== itemId));
    
  };
  const HandleEdit = ({item}) =>  {
    setTaskEdit(item.subtext);setTitleEdit(item.title);
setModalVisible2(true);

  };

  const HandleEditSubmit = () => { 
    setData([{
      id : data.length + 2,
      title: titleEdit,
      subtext: taskEdit,
      time: moment().utcOffset('+05:30').format("MMM Do YY")
    }]);
    setModalVisible2(false);
  }
  

  const Item = ({item}) => (
    <>
    <View style={styles.item}>
      <Text style={styles.titlefl}>{item.title}</Text>
      <Text style={styles.timefl}>{item.time}</Text>
      <Text style={styles.subtextfl}>{item.subtext}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() =>{ HandleEdit({item})} }>
        <MaterialCommunityIcons name='square-edit-outline' size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleDelete(item.id)}>
        <MaterialCommunityIcons name='trash-can-outline' size={24}/>
        </TouchableOpacity>
      </View>   
    </View>
     <View>
     <Modal
         animationType="slide"
         transparent={true}
         visible={modalVisible2}
         onRequestClose={() => {
           setModalVisible2(!modalVisible2);
         }}>
           <View style={styles.modEditContainer}>
       <View style={styles.titleEdit} >
         <TextInput 
         onChangeText={(xx) => setTitleEdit(xx)}
         style={styles.editTitleText}
         value={titleEdit}
         editable={true}
         maxLength={30}
          />
          </View>
          <View style={styles.taskEdit}>
          <TextInput
          onChangeText={ (qq) => setTaskEdit(qq)}
          style= {styles.editTaskText}
          multiline
          numberOfLines={10}
          value={taskEdit}
          editable={true}
          maxLength={150}

          />
          </View>
          <View style={styles.button}>
          <Button title='Submit'
          onPress={( ) => HandleEditSubmit()}
           />
          </View>
          </View>
       </Modal>
       </View>
       </>
  );
  


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
         multiline
         numberOfLines={10}
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
        renderItem={({item}) => <Item item={item} /> }
  
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
  modEditContainer :{
    flex: 0.5,
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
  editTitleText : {
    color: "#0c0c0c",
    fontSize: 20,
    fontWeight:'bold'
  },
  editTaskText : {
    color: "#0c0c0c" ,
    fontSize: 18,
    fontWeight:'bold'
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
  titleEdit : {
    paddingTop: 20,
    backgroundColor: "white",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
   
},
taskEdit: {
    backgroundColor: "white",
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

export default ToDoApp;
