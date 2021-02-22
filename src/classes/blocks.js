import { col, row, css } from '../utils';

class Block {
    constructor(value, options) {
        this.value = value
        this.options = options
    }

    toHTML() {
        throw new Error('Method toHTML must be realized');
    }
}

export class TitleBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { tag = 'h1', styles } = this.options;
        return row(col(`<${tag}>${this.value}</${tag}>`), css(styles))
    }
};

export class ImageBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { styles, imageStyles, alt } = this.options;
        return row(`<img src="${this.value}" alt="${alt}" style="${css(imageStyles)}" />`, css(styles))
    }
};

export class ColumnBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { styles } = this.options;
        const html = this.value.map(col).join('');
        return row(html, css(styles));
    }
};

export class TextBlock extends Block {
    constructor(value, options) {
        super(value, options)
    }

    toHTML() {
        const { styles } = this.options;
        return row(col(`<p>${this.value}</p>`), css(styles))
    }
};