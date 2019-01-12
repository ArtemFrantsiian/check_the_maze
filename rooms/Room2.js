import React from "react";
import {Model, asset} from "react-360";

export default class Room2 extends React.Component {
  render() {
    return (
      <Model
        style={{
          transform: [
            {rotateY: 180},
            {translate: [-1, -0.1, 0]}
          ]
        }}
        source={{
          obj: asset('objects/room3.obj'),
          mtl: asset('objects/room3.mtl'),
        }}
      />
    );
  }
};