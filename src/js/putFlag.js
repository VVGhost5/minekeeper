import { objects, refs } from '../index';

const putFlag = (event) => {
    if (objects.arrayOfPoints[event.target.dataset.value].isFlag || objects.arrayOfPoints[event.target.dataset.value].isOpened ) {
        return;
    }
    if (objects.flagsUsed >= objects.bombs.length) {
        return;
    }

    refs.gameFieldRef.children[event.target.dataset.value].textContent = "F";
    objects.arrayOfPoints[event.target.dataset.value].isFlag = true;
    objects.flagsUsed++;
    refs.menuFlagsRef.textContent = objects.flagsUsed;

    if (objects.arrayOfPoints[event.target.dataset.value].isFlag && objects.arrayOfPoints[event.target.dataset.value].isMine) {
        if (objects.arrayOfPoints[event.target.dataset.value].isDefused) {
            return;
}
        
        objects.bombsDefused.push(objects.arrayOfPoints[event.target.dataset.value]);
        objects.arrayOfPoints[event.target.dataset.value].isDefused = true;
            return;
    } 
}

export default putFlag;