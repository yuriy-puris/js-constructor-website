export class Site {
    constructor(selector) {
        this.$el = document.querySelector(selector);
    }

    render(model) {
        this.$el.innerHTML = '';
        model.forEach(item => {
            this.$el.insertAdjacentHTML('beforeend', item.toHTML());
        });
    }
}