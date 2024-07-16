class Shape {
    protected color: string;
    protected filledColor: boolean;

    constructor(color: string, filledColor: boolean) {
        this.color = color;
        this.filledColor = filledColor;
    }

    draw() {
        console.log(`Drawing Shape with the color ${this.color}`);
    }
}

class Circle extends Shape {
    private radius: number;

    constructor(color: string, filledColor: boolean, radius: number) {
        super(color, filledColor); 
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius **2;
    }
}

class Rectangle extends Shape {
    protected height: number;
    protected width: number;

    constructor(color: string, height: number, filledColor: boolean, width: number) {
        super(color, filledColor);
        this.height = height;
        this.width = width;
    }
}

class Square extends Shape {
    constructor(color: string, filledColor: boolean, width: number) {
        super(color, filledColor)
    }
}

const simpleShape = new Shape('red', true);
simpleShape.draw();

console.log('Circle example:')

const circleShape = new Circle('green', true, 10)






