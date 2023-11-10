//using this we can use function as a value i.e, var a=function(){console.log(10);} now var "a" will become function
function abcd(a){
    a();
}

abcd(function(){console.log("hello");})