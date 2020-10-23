import { arrayOfPoints } from '../index.js';


const randomizeValue = () => {
    let position = Math.floor(Math.random() * Math.floor(arrayOfPoints.length));
    return position;
}
  
const checkBombPresence = () => {
    let randomValue = randomizeValue();
    console.log(`Случайное число - ${randomValue}`);
if (arrayOfPoints[randomValue].isMine) {
    console.log(`${randomizeValue()} Блять, тут мина !!! Делаю еще раз`);
  return checkBombPresence();
} else {
  console.log(`новое число - ${randomValue}`);
  return randomValue;
  }
  
}
  
const createBomb = () => {
  checkBombPresence();
  arrayOfPoints[checkBombPresence()].isMine = true;
  console.log(`${arrayOfPoints[checkBombPresence()].position} тут мина`);
    
}

export default createBomb;