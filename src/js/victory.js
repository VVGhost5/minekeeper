import { refs, objects, Click } from '../index';

const victory = () => {
    if (objects.bombsDefused.length === objects.bombs.length) {
        clearInterval(objects.newTimer);
        refs.menuStatusRef.textContent = "You win !"
        refs.gameFieldRef.removeEventListener('click', Click);
    }   
}

export default victory;