import { refs, objects, Click } from '../index';

const defeat = () => {
    clearInterval(objects.newTimer);
    objects.bombs.map(el => {
        refs.gameFieldRef.children[el.position].classList.add('isBomb');
        
    })
    refs.menuStatusRef.textContent = "You lose !"
    refs.gameFieldRef.removeEventListener('click', Click);
}

export default defeat;