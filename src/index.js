import { model } from './model';
import './styles/main.css';

const $site = document.querySelector('#site');

model.forEach((item, index) => {
    $site.insertAdjacentHTML('beforeend', item.toHTML());
});