class Printer {
    value: string;
    private _privateValue: number;
    protected _protectedValue: number;

    constructor(val: string) {
        this.value = val;
        this._privateValue = 20;
        this._protectedValue = 100;
    }

    doPrint() {
        console.log(`Do print from Parent.`)
    }
}

class ChildPrinter extends Printer {

    
    doSomething = () => {
        //super._privateValue;
        console.log('something')
    }
    doPrint() {
        super.doPrint();
        console.log(`Do print from Child.`)
    }
}


const newObjChild = new ChildPrinter('abs');

newObjChild.doPrint();
newObjChild.doSomething();

const newObjParent = new Printer('nxjsxs')