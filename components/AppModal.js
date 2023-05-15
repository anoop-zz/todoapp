import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TouchableWithoutFeedback, View,TextInput,Button} from 'react-native';


const AppModal = () => {
  const [title, setTitle] = useState();
  const [task, setTask] = useState();

 const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
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
         onPress={( ) => setModalVisible(!modalVisible)
             }
          />
         </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  bG: {
    backgroundColor: '#f0e68c',
    flex:1
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
  }
 
});

export default AppModal;