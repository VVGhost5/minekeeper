import { refs, objects } from '../index';

const showValue = event => {
        refs.gameFieldRef.children[event.target.dataset.value].textContent = objects.arrayOfPoints[event.target.dataset.value].value; 
        refs.gameFieldRef.children[event.target.dataset.value].classList.add(`color_${objects.arrayOfPoints[event.target.dataset.value].value}`);
};

export default showValue;