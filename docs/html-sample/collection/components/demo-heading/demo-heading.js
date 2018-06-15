h("h1", null, "Stack Example");
export class DemoTriangle {
    render() {
        return [
            h("h1", null,
                h("slot", null))
        ];
    }
    static get is() { return "demo-heading"; }
    static get style() { return "/**style-placeholder:demo-heading:**/"; }
}
