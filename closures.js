function outer(){
    var a=7;
    function inner(){
        console.log(a);
    }
    return inner;
}
a=10;
var c=outer();
console.log(c);
