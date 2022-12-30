
// let num1 = '10';

// console.log(num1)



// let name = 'john';
// let isOldenough = false;
// let marks = [1,2,3,4,5];

// let blogobt ={
//     title:'blog title1',
//     description : 'kofi is going to school',

// }

// // template leterals 
//  let firtname = 'john';
//  let lastname = ' gyamfi'


// console.log(`welcome ${firtname}${lastname}`.toLocaleUpperCase())


// // arrow functions 
// const greetings =  (friend) => {
//       return(`merry ${friend}`)
// }

// console.log(greetings('christmas'))

// const happy =  (yes) => `u have ${yes} sms`
// console.log( happy(40))


// //rest and spread operators
// //spread operators

// const jah = 'kofi';
// console.log(...jah)

// const pes1 = [1,2,3,4,5];
// const pes2 = 'peace';

// const pes3 = [ ...pes1, ...pes2]
// console.log(pes3)

// const post ={
//     test:'im coming'
// }


// const page = {
//     num: 28
// }


// const obj3 = {...post, ...page}


// console.log(obj3)


function add(...arg){
    const [number1, number2] = arg
    return number1 + number2
}

console.log('add number', add(5, 6))

//destrucktion


const name = "male tall dark";
const nameArr = name.split(" ");

console.log(nameArr);

// let [firtname] = nameArr[];
let [firtname ,  middlename, lastname] = nameArr;

console.log(firtname);
console.log(middlename);
console.log(lastname)


const person = {
  age: 30,
  country: 'accra',
  town: 'sunyani',
  }



const {age,country, town} = person;

console.log(age, country,town);




let food = ['rice','banku','cake']

// food.map((a, b) => console.log(a + b))
// console.log(food.filter((item) => (item) !== 'rice' ))
// console.log(food.find((item) => item < 'rice'))

console.log(food)




let hiSArr = [
    {
        age: 40,
        country: 'accra',
        town: 'sunyani',
        },
         {
            age: 50,
            country: 'accra',
            town: 'sunyani',
            },
            {
                age: 60,
                country: 'accra',
                town: 'sunyani',
                }
]
console.log(hiSArr)

//reduce
const number =  [ 1,2,3,4,5,6,7]

number.reduce((acc, item) => {
    console.log(item);
} , 0)


// const number =  [ 1,2,3,4,5,6,7]

//   const result = hiSArr.reduce((acc, item) => {
//     return acc + item;
// } , 0)

// console.log(result)


//array func filter

const numm = [1,2,3,4,5]

// console.log(numm.filter((item) => item > 1 ))
let foo = ['rice','banku','cake']
console.log(foo.filter((item => item !== 'rice')))

 // find n findindexof
 let ves = [-1,-2,-3,4,5,6,7]
 ves.find((item) => {
  console.log( item) 
 })



//classes

class persons{
  constructor(name,age,country,family){
    this.name = name;
    this.age = age;
    this.country = country;
    this.family = family;
  }
};

const persons1 = new persons('john',21,'sunyani','Asona')

console.log(persons1)


//inheritance
class senior extends persons{
  constructor(name,age,country,family){
    super('john',21,'sunyani','asona')
    this.name = name;
    this.age = age;
    this.country = country;
    this.family = family;
  }
  getdata = () =>{
    console.log(`${this.name},${this.age},${this.country},${this.family}`)
  }
};


const kwabena = new  senior('wizzy',23,'B/A','Aduana')
console.log(kwabena)

const toto = new senior('kk',24,'accra','ayoko')
toto.getdata()


//callbacks n inheritance


const postlistPromise = new Promise((resolve, reject) => {
  $.get('https://jsonplaceholder.typicode.com/posts',(data) =>{
    console.log('get rsponse',data)
    resolve(data );
  }).fail(err => {
    reject(new Error('call faild `${err.status}'))
  })
});


postlistPromise
.then(()=>{
  console.log('sucess')
})
.catch(() =>{
  console.log('fail')
})







