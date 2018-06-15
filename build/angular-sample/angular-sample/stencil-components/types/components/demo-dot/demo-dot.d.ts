export declare class DemoDot {
    el: HTMLElement;
    size: number;
    x: number;
    y: number;
    text: string;
    hover: boolean;
    enter(): void;
    leave(): void;
    hostData(): {
        onmouseenter: any;
        onmouseleave: any;
    };
    render(): JSX.Element;
}
