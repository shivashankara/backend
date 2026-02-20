// const add = require('./add.js')
// console.log('Hello node js') 


// const sum = add(2,3);
// console.log(sum)

// require(`./batsman`);
// require(`./superman`);

const superHero = require(`./super-hero`);

// console.log(superHero.getName());
// superHero.setName('SuperMan')
// console.log(superHero.getName());


// const newSuperHero =require(`./super-hero`);
// console.log(newSuperHero.getName())

// const batman = new superHero('batman');
// console.log(batman.getName());
// batman.setName('Banav B S');
// console.log(batman.getName());

// const superman = new superHero('superMan')
// console.log(superman.getName());
// superman.setName('Mallappa B S');
// console.log(superman.getName());

// const math = require(`./math`);
// const {add, substract} = math
// console.log(math.add(2,3))
// console.log(math.substract(2,3))
// console.log(add(2,3))
// console.log(substract(2,3))

// const path =require("node:path")

// console.log(__filename)
// console.log(__dirname)

// console.log(path.basename(__filename));
// console.log(path.isAbsolute('/folder1', '/folder2', 'index.js'));
// console.log(path.__dirname)

// function greet(name){
//     console.log(`Hello ${name}`)
// }

// function higherOrderFunction(callback){
//     const name ="shivashankara";
//     callback(name)
// }

// higherOrderFunction(greet)

const EventEmittor = require('node:events');

const event = new EventEmittor();

event.on('pizza-order',  (size, topping)=>{
    console.log(`Pizza order received ${size} baking Pizza with ${topping}`)
})

event.on('pizza-order', (size,topping)=>{
    if(size == 'large'){
        console.log(`serve complementry drink`)
    }
})
event.emit('pizza-order', 'large', 'mushroom');