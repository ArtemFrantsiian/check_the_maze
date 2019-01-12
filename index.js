import React from 'react';
import { AppRegistry } from 'react-360';

import { InitialLocation, Room2 } from "./rooms";
import { DoorButton } from "./buttons";

AppRegistry.registerComponent('InitialLocation', () => InitialLocation);
AppRegistry.registerComponent('Room2', () => Room2);
AppRegistry.registerComponent('DoorButton', () => DoorButton);
