'use strict';

// class Carcls{
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     get speedUS(){
//         return (this.speed/1.6);
//     }

//     set speedUS(speed){
//         this.speed = speed*1.6;
//     }

//     accelerate(){
//         this.speed += 10;
//     }

//     brake(){
//         this.speed -= 5; 
//     }
// }

// const ford = new Carcls("FORD", 120);

// ford.accelerate();
// // console.log(bmw.brake());

// ford.speedUS = 150;
// console.log(ford.speedUS);

// const Car = function(make, speed){
//     this.make = make;
//     this.speed = speed;
// }

// Car.prototype.accelerate = function(){
//     this.speed += 10;
// }

// Car.prototype.brake = function(){
//     this.speed -= 5;
// }

// const EV = function(make, speed, charge){
//    Car.call(this,make, speed);
//    this.charge = charge; 
// }

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo){
//     this.charge = chargeTo;
// }

// EV.prototype.accelerate = function(){
//     this.speed += 20;
//     this.charge--;
//     console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
// }

// const eleCar = new EV("tesla",120, 23);
// eleCar.chargeBattery(90);
// console.log(eleCar);

// eleCar.brake();
// console.log(eleCar);

// eleCar.accelerate();
// console.log(eleCar);

// EV.prototype.constructor = EV;

class Carcl{
    constructor(make,speed){
        this.make = make;
        this.speed = speed;
    }

    accelerate()
    {
        this.speed += 10;
    }
    
    brake()
    {
        this.speed -= 5;
        return this;
    }
}

class EVCl extends Carcl{
    #charge;
    constructor(make, speed, charge)
    {
        super(make,speed);
        this.#charge = charge;
    }

    chargeBattery(chargeTo){
        this.charge = chargeTo;
        return this;
    }
    
    accelerate(){
        this.speed += 20;
        this.#charge--;
        console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.#charge}`)
        return this;
    }
 }

 const eleCar = new EVCl("Rivian",120, 23);
 eleCar.accelerate().chargeBattery().brake();

// const bmw = new Car("BMW",120);
// const merc = new Car("mercedes", 95);

// bmw.accelerate();
// console.log(bmw.speed);

// merc.brake();
// console.log(merc.speed)