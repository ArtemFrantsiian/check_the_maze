// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"
import {ReactInstance} from 'react-360-web';
import KeyBoardCameraController from "./controllers/KeyBoardCameraController";

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options
  });

  r360.renderToLocation(
    r360.createRoot('InitialLocation'),
    r360.getDefaultLocation(),
  );
  r360.renderToSurface(
    r360.createRoot('DoorButton'),
    r360.getDefaultSurface(),
  );
  r360.renderToLocation(
    r360.createRoot('Room2'),
    r360.getDefaultLocation(),
  );
  r360.controls.addCameraController(new KeyBoardCameraController());

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL("360_world.jpg"));
}

window.React360 = { init };
