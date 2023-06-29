import { Button, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { addDoc, collection,  } from "firebase/firestore"; 
import { db } from '../firebase';
const HomeScreen = () => {

    const[fname,setFname]= useState();
    const[lname, setLname]= useState();
    const[number, setNumber]=useState();
    const[blood, setBLood]= useState();

    // console.log("Users First Name Is", fname);
    // console.log("Users Last Name Is",lname);
    // console.log("Users Phone Number Is",number);
    // console.log("Users Blood Group Is",blood);
function create(){
     addDoc(collection(db, "BloodDoner"), {
        fname:fname,
        lname:lname,
        number:number,
        blood:blood,
      }).then(()=>{
        alert("Successfully Submited")
      }).catch((error)=>{
        console.log("error")
      })
}

  return (
    <View style={{marginTop:50,}}>
      <View style={{alignItems:'center', justifyContent:'center'}}>
        <Text style={{fontSize:20, fontWeight:'bold'}}>Register your self as a blood donner</Text>
        <TextInput placeholder='Enter Your First name' value={fname}  onChangeText={(text)=>setFname(text)} />
        <TextInput placeholder='Enter Your Last name' value={lname}  onChangeText={(text)=>setLname(text)}/>
        <TextInput placeholder='Enter Your Number'  value={number} keyboardType="numeric"  onChangeText={(number)=>setNumber(number)}/>
        <TextInput placeholder='Enter Blood Group' value={blood} onChangeText={(text)=>setBLood(text)}/>

      </View>

        <View style={{justifyContent:'center', alignItems:'center', marginTop:50,}}>
            <Pressable onPress={create} style={{height:30, width:100, backgroundColor:'blue', alignItems:'center',borderRadius:20,justifyContent:'center' }}>
                <Text style={{color:'white', }}>Submit</Text>
            </Pressable>
        </View>
            
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})