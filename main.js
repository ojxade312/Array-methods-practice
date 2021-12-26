
const items = [
    {name:'Bike',  price:100},
    {name:'TV',  price:200},
    {name:'Album',  price:10},
    {name:'Book',  price:5},
    {name:'Phone',  price:500},
    {name:'Computer',  price:1000},
    {name:'Keyboard',  price:25},
]

//filter method

const filteredItems = items.filter((item) => {
    return item.price <= 100
});


console.log(filteredItems)

//map method
 const filteredItems = items.map((item) =>{
     return item.price
 });
 console.log(filteredItems)

 //.find method
 const foundItem = items.find((item)=>{
     return item.name ==="Book";
 })
 console.log(foundItem);

 // .forEach method 

 items.forEach ((item)=> {
     console.log(item.price);
 })

 //some method

 const expensiveItems = items.some((item)=>{
     return item.price <= 100;
 })
 console.log(expensiveItems);
//every method

const expensiveItems = items.every((item)=>{
      return item.price <= 100;
      })
     console.log(expensiveItems);

//reduce method

const total = items.reduce((currentTotal, item)=>{
    return item.price + currentTotal;
          }, 0)
         console.log(total);

//includes method 

const numbers =[1,2,3,4]
const includesTwo =numbers.includes(2)
console.log(includesTwo);