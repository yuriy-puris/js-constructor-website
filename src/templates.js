export function title(item) {
    return `
        <div class="row">
            <div class="col-sm">
                <h1>${item.value}</h1>
            </div>
        </div>
    `
};

export function text(item) {
    return `
        <div class="row">
            <div class="col-sm">
                <p>${item.value}</p>
            </div>
        </div>
    `
};

export function columns(item) {
    const html = item.value.map(column => `<div class="col-sm">${column}</div>`)
    return `
        <div class="row">
            ${html.join('')}
        </div>
    `;
};

export function image(item) {
    return `
        <div class="row">
            <img src="${item.value}" />
        </div>
    `;
};