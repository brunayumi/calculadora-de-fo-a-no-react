import React,{Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Text, TouchableOpacity} from 'react-native-gesture-handler';

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      forca: '0', 
      massa: '0', 
      aceleracao: '0'
    }
  }

  calcular(){
    let forca = this.state.forca
    let massa = this.state.massa
    let aceleracao = this.state.aceleracao

    if (forca == 0){
      let resultado = massa * aceleracao
      this.setState({forca: resultado})

    } else if (aceleracao == 0){
      let resultado = forca / massa
      this.setState({aceleracao: resultado})

    } else if (massa == 0){
      let resultado = forca / aceleracao
      this.setState({massa: resultado})
    } 
  }

render(){
  const {forca, massa, aceleracao} = this.state;

    return(      
      <View style={Styles.container}>
        
      <View style={Styles.entrada}>
      <TextInput placeholder='Força' keyboardType="numeric" style={Styles.entrada} onChangeText={(forca)=>{this.SetState({forca})}}/>
      <TextInput placeholder='Massa' keyboardType="numeric" style={Styles.entrada} onChangeText={(massa)=>{this.SetState({massa})}}/>
      <TextInput placeholder='Aceleração' keyboardType="numeric" style={Styles.entrada} onChangeText={(aceleracao)=>{this.SetState({aceleracao})}}/>
      </View>

      <Text style={Styles.entrada}>{this.state.resultado}</Text>
      <TouchableOpacity style={Styles.button} onPress={this.calcular}><Text>efetuar calculo</Text></TouchableOpacity>
     
      </View>

    );
  }
}

const Styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#cccccf" 
  },
  entrada: {
    fontFamily: "Times New Roman",
    textTransform: "uppercase",
    backgroundColor: "#a3a3a5",
    flex:1,
    flexDirection: "row",
    height: "70",
    textAlign: "center",
    width: "30%",
    fontSize: 20,
    marginTop: "24"
  },
  button: {
    fontFamily: "Times New Roman",
    textTransform: "uppercase",
    color: "#ffffff",
    width:"100%",
    height: "30",
    backgroundColor: "#545459",
    alignItems: "center",
    justifyContent: "center"
  }
});
