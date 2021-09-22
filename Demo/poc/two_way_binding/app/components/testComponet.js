import React, { Component } from "react";
import { View, TextInput } from "react-native";

class TestComponent extends Component {
    constructor(props) {
      super(props);
      this.state = {
        search: "",
        dataSource: [],
        ImeiNo: "",
        selectedCustomerId: false
      };
    }

    componentDidMount() {
        alert('TestComponent');
    }

    render() {
        return (
            <View style={{flex:1, backgroundColor:'white'}}>
                <TextInput
                 style={{
                    height: 35,
                    paddingLeft: '5%',
                    padding: 0,
                    margin: 0,
                    fontSize: 14,
                    flex: 1,
                }}
                 maxLength={12}
                 onChangeText={value =>
                 this.props.handleTextInputs(this.props.selectedItem,this.props.selectedIndex, value)
                  }/>
            </View>
        )
    }

}

export default TestComponent;