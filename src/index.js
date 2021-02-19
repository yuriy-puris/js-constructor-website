import { model } from './model';
import { title, text, columns, image } from './templates';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach((item, index) => {

    let html = '';

    if ( item.type === 'title' ) {
        html = title(item);
    } else if ( item.type === 'text' ) {
        html = text(item);
    } else if ( item.type === 'column' ) {
        html = columns(item);
    } else if ( item.type === 'image' ) {
        html = image(item);
    }

    $site.insertAdjacentHTML('beforeend', html);

});