import { Vector3, Quaternion } from "three";

const Speed = 0.1;
const Distance = 1;

const KeyW = 87;
const KeyA = 65;
const KeyS = 83;
const KeyD = 68;

const KeyUp = 38;
const KeyLeft = 37;
const KeyRight = 38;
const KeyDown = 40;

export default class KeyBoardCameraController {
  moveX = 0;
  moveY = 0; //
  moveZ = 0;

  constructor() {
    document.addEventListener("keydown", event => {
      if (event.keyCode === KeyW || event.keyCode === KeyUp) {
        this.moveZ = -Speed;
      } else if (event.keyCode === KeyA || event.keyCode === KeyLeft) {
        this.moveX = -Speed;
      } else if (event.keyCode === KeyS || event.keyCode === KeyDown) {
        this.moveZ = Speed;
      } else if (event.keyCode === KeyD || event.keyCode === KeyRight) {
        this.moveX = Speed;
      }
    });
  }

  fillCameraProperties(positionArray, rotationArray) {
    if (this._moveZ === 0 && this._moveX === 0 && this._moveY === 0) {
      return false;
    }

    const rotation = new Quaternion(
      rotationArray[0],
      rotationArray[1],
      rotationArray[2],
      rotationArray[3]
    );
    const position = new Vector3(
      positionArray[0],
      positionArray[1],
      positionArray[2]
    );

    if (this.moveX !== 0) {
      this.translateX(position, rotation);

      applyPositionToArr(position, positionArray);
    }

    if (this.moveY !== 0) {
      this.translateY(position, rotation);

      applyPositionToArr(position, positionArray);
    }

    if (this.moveZ !== 0) {
      this.translateZ(position, rotation);

      applyPositionToArr(position, positionArray);
    }

    return true;
  }

  translateX(position, rotation) {
    translate(position, rotation, new Vector3(1, 0, 0), this.moveX);

    this.moveX += this.moveX;
    if (Math.abs(this.moveX) >= Distance) {
      this.moveX = 0;
    }
  }

  translateY(position, rotation) {
    translate(position, rotation, new Vector3(0, 1, 0), this.moveY);

    this.moveY += this.moveY;
    if (Math.abs(this.moveY) >= Distance) {
      this.moveY = 0;
    }
  }

  translateZ(position, rotation) {
    translate(position, rotation, new Vector3(0, 0, 1), this.moveZ);

    this.moveZ += this.moveZ;
    if (Math.abs(this.moveZ) >= Distance) {
      this.moveZ = 0;
    }
  }
}

const applyPositionToArr = (position, arr) => {
  arr[0] = position.x;
  arr[1] = position.y;
  arr[2] = position.z;
};

const translate = (position, rotation, axis, distance) => {
  const vector = new Vector3();

  vector.copy(axis).applyQuaternion(rotation);
  position.add(vector.multiplyScalar(distance));
};
