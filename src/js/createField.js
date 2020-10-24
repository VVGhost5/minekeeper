import { objects, refs } from '../index';

const createField = () => {
  objects.point = document.createElement('div');

  refs.gameFieldRef.appendChild(objects.point);
  objects.point.classList.add(`point`);
  return objects.point;
};

export default createField;