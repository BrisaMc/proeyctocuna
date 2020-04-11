import React, {Component} from 'react';
import { StyleSheet,TouchableOpacity,TextInput, Text, View,ActivityIndicator,Image,FlatList,Platform, Button  } from 'react-native';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      dataSource:[],
      dataSources:[]
     };
   }
   componentDidMount(){
    fetch("http://Nicolas.desarrolladoresti3b.com/ver.php")    
    .then(response => response.json())
    .then((responseJson)=> {
      this.setState({
       dataSources: responseJson
      })
    })
    .catch(error=>console.log(error)) //to catch the errors if any
    }
    componentDidMount(){
      fetch("http://Nicolas.desarrolladoresti3b.com/ver.php")    
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
         dataSource: responseJson
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
      }

    componentDidUpdate(){
      fetch("http://Nicolas.desarrolladoresti3b.com/ver.php")    
      .then(response => response.json())
      .then((responseJson)=> {
        this.setState({
         dataSources: responseJson
        })
      })
      .catch(error=>console.log(error)) //to catch the errors if any
      }
      componentDidUpdate(){
        fetch("http://Nicolas.desarrolladoresti3b.com/ver2.php")    
        .then(response => response.json())
        .then((responseJson)=> {
          this.setState({
           dataSources: responseJson
          })
        })
        .catch(error=>console.log(error)) //to catch the errors if any
        }
    userRegister = () =>{
      const {Nombre} = this.state;
      const {Coreeo} = this.state;
      const {Producto} = this.state;
      const {Cantidad} = this.state;
      const {Precio} = this.state;
      fetch('http://Nicolas.desarrolladoresti3b.com/guarda.php', {
      method: 'post',
      header:{
      'Accept': 'application/json',
      'Content-type': 'application/json'
      },
      
      body:JSON.stringify({
      
        Nombre: Nombre,
        Coreeo,Coreeo,  
        Producto,Producto,
        Cantidad:Cantidad,
        Precio:Precio,
      
      })
      
      })
      
      .then((response) => response.text())
      .then((responseJson) =>{
      alert(responseJson);
      })
      .catch((error)=>{
      console.error(error);
      }); }
      userDelete = () =>{
        const {id} = this.state;
        fetch('http://Nicolas.desarrolladoresti3b.com/elimina.php', {
        method: 'post',
        header:{
        'Accept': 'application/json',
        'Content-type': 'application/json'
        },
        
        body:JSON.stringify({
        
        id: id,

        
        })
        
        })
        
        .then((response) => response.text())
        .then((responseJson) =>{
        alert(responseJson);
        })
        .catch((error)=>{
        console.error(error);
        }); }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.arriba}>
      <Image source={{ uri: 'https://i.pinimg.com/originals/3a/91/d8/3a91d879df645dce43f8dd1867316ca3.png' }} 
     style={{ flex:3 }}/>
     <View>
     <Text style={styles.text2}> </Text>      
     </View>  
      </View>
      <View style={styles.centro2}>
      <Text style={styles.text3}>Cunas Inteligentes</Text>
        </View>
      <View style={styles.centro}>
      <FlatList  data={this.state.dataSources} renderItem={({item}) => 
            <View >
              <Text style={{height:30,fontSize:20,width:250,left:22}}>id : {item.id}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>Nombre   : {item.Nombre}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>Coreeo :  {item.Coreeo}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>Producto :  {item.Producto}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>Cantidad  :{item.Cantidad}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>Precio  :{item.Precio}</Text>
              <View style={{backgroundColor:'blue'}}><Text></Text></View>
            </View>}/>
            <FlatList  data={this.state.dataSource} renderItem={({item}) => 
            <View > 
              <Text style={{height:30,fontSize:20,width:250,left:22}}>id  :{item.id}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>Productos   : {item.Producto}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>proveedores :  {item.Nombre}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>inventario :  {item.inventario}</Text>
              <Text style={{height:30,fontSize:20,width:250,left:22}}>preciototal   :{item.preciototal }</Text>
              <View style={{backgroundColor:'blue'}}><Text></Text></View>
            </View>}/>
      </View>

      <View style={styles.abajo} >
      <View>
      <Text style={styles.text2}>Agregar proveedores  </Text>
      <View  style={styles.p}>
      <Text style={styles.text2}>Nombre: </Text>   
      <TextInput onChangeText= {Nombre => this.setState({Nombre})}   style={styles.pa}/>
      </View>
      <View  style={styles.p}>
      <Text  style={styles.text2}>Coreeo</Text>   
      <TextInput  onChangeText= {Coreeo => this.setState({Coreeo})}  style={styles.pa} />
      </View>
      <View  style={styles.p}>
      <Text style={styles.text2}>Producto </Text>   
      <TextInput onChangeText= {Producto => this.setState({Producto})}  style={styles.pa}  />
      </View>
      <View  style={styles.p}>
      <Text style={styles.text2}  >Cantidad</Text>   
      <TextInput  onChangeText= {Cantidad => this.setState({Cantidad})} style={styles.pa} />
      </View>
      <View  style={styles.p}>
      <Text style={styles.text2}>Precio</Text>   
      <TextInput onChangeText= {Precio => this.setState({Precio})}  style={styles.pa} />
      </View>
      <Button onPress={this.userRegister} title="Guardar"></Button>
 
      </View> 
      <View>
      <Text style={styles.text2}>Eliminar proveedores  </Text>
      <View  style={styles.p}>
      <Text style={styles.text2}>Id: </Text>   
      <TextInput onChangeText= {id => this.setState({id})}   style={styles.pa} placeholder='id'/>
      
      </View>
      <Button onPress={this.userDelete} title="Eliminar"></Button>
      </View>
      </View>
    </View>

    )}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  arriba:{
    flex : 3,
    top:25,
    flexDirection:'row',
    backgroundColor: '#fdff',
  }, 
   centro:{
    flex : 1.8,
    flexDirection:'row',
    right:2,
    backgroundColor: '#dfaa',
  },
     centro2:{
    flex : 0.9,
    flexDirection:'row',
    backgroundColor: '#dfaa',
  }, 
   abajo:{
    flex : 3.1,
    backgroundColor: '#0d6bb8',
    flexDirection:'row',
    margin:0
  }, 
   text:{
    fontSize:40,
    
  },
  text2:{
    fontSize:20,
  },
  text3:{
    fontSize:40,
    alignContent:'center',
    alignSelf:'center',
    textAlign:'center',
    alignItems:'center',
    padding:150
  },
  p:{
    flexDirection:'row'
  },
  pa:{
    backgroundColor:'#0267ffea',
    fontSize:23
  }


});





