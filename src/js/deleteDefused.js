import { objects } from '../index';

const deleteDefusedMine = (event) => {
    if (objects.arrayOfPoints[event.target.dataset.value].isDefused) {
        
        objects.arrayOfPoints[event.target.dataset.value].isDefused = false;
        objects.bombsDefused.pop();
    }
};

export default deleteDefusedMine;