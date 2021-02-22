import { row, col, css } from './utils';

function title(item) {
    const { tag = 'h1', styles } = item.options;
    return row(col(`<${tag}>${item.value}</${tag}>`), css(styles))
};

function text(item) {
    const { styles } = item.options;
    return row(col(`<p>${item.value}</p>`), css(styles))
};

function column(item) {
    const { styles } = item.options;
    const html = item.value.map(col).join('');
    return row(html, css(styles));
};

function image(item) {
    const { styles, imageStyles, alt } = item.options;
    return row(`<img src="${item.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles))
};

export const templates = {
    title,
    text,
    image,
    column
}