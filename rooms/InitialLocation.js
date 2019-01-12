import React from "react";
import {
  View,
  asset,
  SpotLight,
  AmbientLight,
  PointLight,
  Model,
} from 'react-360';

export default class InitialLocation extends React.Component {
  render() {
    return (
      <View>
        <AmbientLight />
        <SpotLight style={{color:'#ffffff', transform:[{translate:[0,2,0]}]}} angle={30} />
        <PointLight style={{color:'red', transform:[{translate:[0,-2,0]}]}} angle={20} />
        <Model
          style={{
            transform: [
              {translate: [-0.2, -0.1, 0]}
            ]
          }}
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