import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Entity,
  Text,
  View,
  VrButton,

} from 'react-360';

export default class check_the_maze extends React.Component {
  state = {
    count: 0
  };

  _incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  render() {
    return (
      {/*<View style={styles.panel}>*/}
        {/*<VrButton*/}
          {/*onClick={this._incrementCount}*/}
          {/*style={styles.greetingBox}>*/}
          {/*<Text style={styles.greeting}>*/}
            {/*{`Count: ${this.state.count}`}*/}
          {/*</Text>*/}
        {/*</VrButton>*/}
      {/*</View>*/}
      Entity
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1500,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('check_the_maze', () => check_the_maze);
