import React from 'react';
import {
  AppRegistry,
  View,
  asset,
  SpotLight,
  AmbientLight,
  PointLight,
  Model,
} from 'react-360';

export default class check_the_maze extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight />
        <SpotLight style={{color:'#ffffff', transform:[{translate:[0,2,0]}]}} angle={30} />
        <PointLight style={{color:'red', transform:[{translate:[0,-2,0]}]}} angle={20} />
        <Model
          source={{
            obj: asset('objects/room3.obj'),
            mtl: asset('objects/room3.mtl'),
          }}
          lit={true}
        />
      </View>
    );
  }
};

AppRegistry.registerComponent('check_the_maze', () => check_the_maze);
