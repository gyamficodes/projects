
let num1 = '10';

console.log(num1)

let name = 'john';
let isOldenough = false;
let marks = [1,2,3,4,5];
let blogobt ={
    title:'blog title1',
    description : 'kofi is going to school'
}



// template leterals 
 let firtname = 'john';
 let lastname = ' gyamfi'


console.log(`welcome ${firtname}${lastname}`.toLocaleUpperCase())


// arrow functions 
const greetings =  (friend) => {
      return(`merry ${friend}`)
}

console.log(greetings('christmas'))

const happy =  (yes) => `u have ${yes} sms`
console.log( happy(40))


//rest and spread operators
//spread operators

const jah = 'kofi';
console.log(...jah)

const pes1 = [1,2,3,4,5];
const pes2 = 'peace';

const pes3 = [ ...pes1, ...pes2]
console.log(pes3)

const post ={
    test:'im coming'
}


const page = {
    num: 28
}


const obj3 = {...post, ...page}


console.log(obj3)

