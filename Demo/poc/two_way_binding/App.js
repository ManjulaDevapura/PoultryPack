/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import React from "react";
import { View, FlatList, TouchableOpacity, Text, Modal, TextInput, Image } from "react-native";

let  sItemo, sIndexo = 0
export default class App extends React.Component {
  state = {
    dataSource: [{
      "id": 0,
      "name": "Adam Carter",
      "work": "Unilogic",
      "email": "adam.carter@unilogic.com",
      "dob": "1978",
      "address": "83 Warner Street",
      "city": "Boston",
      "optedin": true
    },
    {
      "id": 1,
      "name": "Leanne Brier",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "stefan",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "fernando",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "Alex",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "ABC1",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "AHHVHH",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "jefjbrejfj",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "efhhrebfhbrhbfrbf",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "hefhhrefhbrhfberbf",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "hgewrhbehbhebfhbhfbre",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "g3efhbrhebfhbrehfh",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
    {
      "id": 1,
      "name": "3ehfnjejfjenfjner",
      "work": "Connic",
      "email": "leanne.brier@connic.org",
      "dob": "1987",
      "address": "9 Coleman Avenue",
      "city": "Toronto",
      "optedin": false
    },
  ],
    isModalVisible : false
  };

  constructor(properties) {
    super(properties);
  }


  handleTextInputs(item, index, text){
    var items = this.state.dataSource;
    console.log(text)
    item.name = text;
    items[index]  = item;
    this.setState({dataSource : items });
    console.log(this.state.dataSource)
  }

  didSelectedRow(sItem, sIndex){
    sItemo = sItem
    sIndexo = sIndex
    const {
      isModalVisible
  } = this.state;

    this.setState({isModalVisible : !isModalVisible });
  }

  done(){
      const {
        isModalVisible
    } = this.state;
    this.setState({isModalVisible : !isModalVisible });
  }

  
  _renderItem(item, index) {
    return (
      <TouchableOpacity
        disabled={false}
        onPress={() => {
          this.didSelectedRow(item, index);
        }}>
          <View style= {{
                  backgroundColor: '#fff',
                  height: 65,
                  borderBottomColor: '#F5F5F5',
                  borderBottomWidth: 1,
                  flexDirection: 'row'
              }}>

            <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={{
                  fontSize: 16,
                  color: '#2D2D2D'
                }}>
                {item.name}
            </Text>
          </View>
      </TouchableOpacity>
  );
  }

  render() {

    const {
      isModalVisible
  } = this.state;

    return (
      <View style={{flex:1, backgroundColor:'gray'}}>
        <FlatList
              data={this.state.dataSource}
              style={{scrollview: {
                backgroundColor: '#fff'
            },}}
              renderItem={({ item, index }) => this._renderItem(item, index)}
              keyExtractor={(item, index) => index.toString()}
            />
            <Modal
                visible={isModalVisible}
                animationIn={'slideInUp'}
                animationOut={'slideOutDown'}>
                  <View style={{
                        flex: 1,
                        backgroundColor: 'white',
                    }}>
                    <View style={{
                        height: 50,
                        backgroundColor: "#fff",
                        justifyContent: "center",
                        marginRight: 1,
                        marginTop: '4%',
                        marginLeft: -5,
                        flexDirection: 'row',
                        borderBottomWidth: 1,
                        borderBottomColor: 'red'
                    }}>
                    <TextInput
                          style={{
                            fontSize: 14,
                            fontWeight: "400",
                            color: "#696969",
                            height: 38,
                            padding: 0,
                            paddingLeft: 10,
                            flex: 1,
                            paddingBottom: 8
                        }}
                          placeholder={"Rename Here"}
                          maxLength={12}
                          onChangeText={value =>
                            value? this.handleTextInputs(sItemo, sIndexo, value) : null
                     }/>

                        <TouchableOpacity
                              onPress={() => this.done()}>
                            <View style={{
                                        height: 35,
                                        width: 60,
                                        backgroundColor: 'transparent',
                                        flex: 1,
                                        alignItems: 'center',
                                        borderTopLeftRadius: 5,
                                        borderBottomLeftRadius: 5,
                                        marginRight: 10
                                    }}>
                                  <Image
                                      resizeMode={'contain'}
                                      source={require('./app/components/done.png')}
                                      style={{
                                        height: 24,
                                        width: 24,
                                        marginTop: 5
                                    }}
                                  />
                              </View>
                        </TouchableOpacity>
                     </View>
                     <Text numberOfLines={1} ellipsizeMode='tail' 
                            style={{
                            fontSize: 16,
                            color: "#696969",
                            marginLeft: "1%",
                            paddingTop: 2,
                            paddingBottom: 2,
                            fontWeight: '500',
                            width: 300
                        }}>{ isModalVisible ? "NAME : "+  this.state.dataSource[sIndexo].name : ""}
                      </Text>
                </View>
            </Modal>
      </View>
    );
  }

}
