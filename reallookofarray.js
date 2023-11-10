//in js arrays are actually objects, consider the following example--
var arr=[1,2,3,4]
typeof arr; //object
//arrays are represented in yhe following form in objects--
arr={
    0:1,
    1:2,
    2:3,
    3:4
}

arr[-1]=5; //this will run no error will be thrown
console.log(arr);//[1,2,3,4,-1:5]