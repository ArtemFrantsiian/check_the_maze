import React from "react";
import {VrButton, Text, View} from "react-360";

export default class extends React.Component {
  _onClick = () => {
    console.log("click");
  };

  render() {
    return (
      <View
        style={{
          width: 1100,
          height: 300,
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}
      >
        <VrButton
          style={{
            backgroundColor: "#00ff00",
            width: 50,
            height: 50,
          }}
          onClick={this._onClick}
        >
          <Text>Press</Text>
        </VrButton>
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   panel: {
//     // Fill the entire surface
//     width: 1500,
//     height: 600,
//     backgroundColor: 'rgba(255, 255, 255, 1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   greetingBox: {
//     padding: 20,
//     backgroundColor: '#000000',
//     borderColor: '#639dda',
//     borderWidth: 2,
//   },
//   greeting: {
//     fontSize: 30,
//   },
// });