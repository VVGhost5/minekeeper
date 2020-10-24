import { objects, refs } from '../index';

const deleteFlag = (event) => {
 objects.arrayOfPoints[event.target.dataset.value].isFlag = false;
        objects.flagsUsed--;
        refs.menuFlagsRef.textContent = objects.flagsUsed;
        return refs.gameFieldRef.children[event.target.dataset.value].textContent = "";
}

export default deleteFlag;