//foreach basically used with arrays
var a=[1,2,3,4,5,67,8,90,7]

a.forEach(function(val){
    console.log(val+1); //2,3,4,5,6,68,9,91,8
})

//forin are used for looping through objects

var obj={
    name:"Abhiraj",
    age:24,
    city:"Kolkata"
}

for(var key in obj){
    console.log(key); //name,age,city
}

for(var key in obj){
    console.log(obj[key]); //Abhiraj,24,Kolkata
}