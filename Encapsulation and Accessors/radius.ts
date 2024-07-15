class Circle {

    private _radius: number = 0; 

    get radius(): number {
        return this._radius
    }

    set radius(value: number) {
        if (value > 0) {
            this._radius = value;
        } else {
            console.log(`The value should be more than 0`);
        }
    }

}

const newCircle = new Circle();
newCircle.radius = -100;

console.log(newCircle.radius);
newCircle.radius = 20;


