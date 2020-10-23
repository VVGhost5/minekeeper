import { arrayOfPoints } from '../index.js';

const putValueofBomb = object => {

  const coordinates = {
    LeftTop: object.position - 21,
    CenterTop: object.position - 20,
    RightTop: object.position - 19,
    LeftCenter: object.position - 1,
    RightCenter: object.position + 1,
    LeftBottom: object.position + 19,
    CenterBottom: object.position + 20,
    RightBottom: object.position + 21,
  }
 
  const checkCoordinates = (position) => {
    if (!arrayOfPoints[position]) {
      return;
    }
    if (arrayOfPoints[position].isMine) {
      return;
    }
arrayOfPoints[position].value++;
  };



  const checkConditions = () => {
    if (object.position % 20 === 0) {
     checkCoordinates(coordinates.CenterTop);
      checkCoordinates(coordinates.RightTop);
      checkCoordinates(coordinates.RightCenter);
      checkCoordinates(coordinates.CenterBottom);
      checkCoordinates(coordinates.RightBottom);
      
   }
      
    else if (object.position - 1 % 19 === 0) {
        checkCoordinates(coordinates.CenterTop);
      checkCoordinates(coordinates.RightTop);
      checkCoordinates(coordinates.RightCenter);
      checkCoordinates(coordinates.CenterBottom);
      checkCoordinates(coordinates.RightBottom);
     }
    else {
    checkCoordinates(coordinates.LeftTop);
    checkCoordinates(coordinates.CenterTop);
    checkCoordinates(coordinates.RightTop);
    checkCoordinates(coordinates.LeftCenter);
    checkCoordinates(coordinates.RightCenter);
    checkCoordinates(coordinates.LeftBottom);
    checkCoordinates(coordinates.CenterBottom);
    checkCoordinates(coordinates.RightBottom);
     }
    
  
  };

  checkConditions();
}

export default putValueofBomb;