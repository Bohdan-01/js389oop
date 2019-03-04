let teslaX = {};
teslaX.model = 'Model X';
teslaX.brand = 'Tesla';
teslaX.price = 1200000;
teslaX.beep = beep;
console.log(teslaX.model);
teslaX.beep();

let teslaS = {
    model: 'Model S',
    brand: 'Tesla',
    price: 80000,
    beep: beep
}
console.log(teslaS.model);
teslaS.beep();

function beep() {
    console.log(this.brand + ' ' + this.model + ' beep-beep!');
}

function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
    return this;
}
Car.prototype.beep = beep;

let tavria = new Car('ZAZ', '"Tavria"', 500);
console.dir(tavria);
tavria.beep();

let slavuta = Object.create(tavria);
console.dir(JSON.stringify(slavuta));
// Wrong beep behavior 
slavuta.beep();
// Fixing beep behavior
slavuta.model = 'Slavuta';
console.dir(JSON.stringify(slavuta));
slavuta.beep();

const tavriaJSON = JSON.stringify(tavria);
console.log(tavriaJSON);
let tavriaNova = JSON.parse(tavriaJSON);
console.log(tavriaNova);

class SuperCar {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }
    beep() {
        console.log(`SuperCar ${this.brand} ${this.model} beep-beep!`);
    }
}

const ferrariLaFerrari = new SuperCar('Ferrari', 'LaFerrari', 300000);
ferrariLaFerrari.beep();
console.dir(ferrariLaFerrari);