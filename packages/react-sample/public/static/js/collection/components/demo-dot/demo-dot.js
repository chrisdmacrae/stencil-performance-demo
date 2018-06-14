export class DemoDot {
    constructor() {
        this.hover = false;
    }
    enter() {
        this.hover = true;
    }
    leave() {
        this.hover = false;
    }
    hostData() {
        return {
            onmouseenter: this.enter.bind(this),
            onmouseleave: this.leave.bind(this)
        };
    }
    render() {
        this.el.style.setProperty('--size', `${this.size}`);
        this.el.style.setProperty('--x-coord', `${this.x}`);
        this.el.style.setProperty('--y-coord', `${this.y}`);
        return (h("div", { class: "demo-dot" }, this.hover ? '**' + this.text + '**' : this.text));
    }
    static get is() { return "demo-dot"; }
    static get properties() { return {
        "el": {
            "elementRef": true
        },
        "hover": {
            "state": true
        },
        "size": {
            "type": Number,
            "attr": "size"
        },
        "text": {
            "type": String,
            "attr": "text"
        },
        "x": {
            "type": Number,
            "attr": "x"
        },
        "y": {
            "type": Number,
            "attr": "y"
        }
    }; }
    static get style() { return "/**style-placeholder:demo-dot:**/"; }
}
