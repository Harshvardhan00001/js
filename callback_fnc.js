setTimeout( function () {
console.log("Hello, World!");
},5000);

function x(z){
    console.log("This is function x");
    z();
}
x(function y(){
    console.log("This is function y");
});