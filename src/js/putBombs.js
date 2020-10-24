import { objects } from '../index';

const randomizeValue = () => {
    let position = Math.floor(Math.random() * Math.floor(objects.arrayOfPoints.length));
    return position;
}
  
const checkBombPresence = () => {
    let randomValue = randomizeValue();
if (objects.arrayOfPoints[randomValue].isMine) {
  return checkBombPresence();
} else {
  return randomValue;
  }
}
  
const createBomb = () => {
  checkBombPresence();
  objects.arrayOfPoints[checkBombPresence()].isMine = true;  
}

export default createBomb;