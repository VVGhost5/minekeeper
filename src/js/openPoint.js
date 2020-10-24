import { objects, refs} from '../index';
import showValue from './showValue';

const openPoint = (event) => {
refs.gameFieldRef.children[event.target.dataset.value].classList.add('isOpened');
        objects.arrayOfPoints[event.target.dataset.value].isOpened = true;
        return showValue(event);
}

export default openPoint;