//requirejs
require(["a"],function(arrSort){

    var arr = [3,2,5,1,11];
    //arr="ssd";
    console.log(arrSort(arr));
});




//Sea.js
define(function(require){
    var arr = [3,2,5,1,11];
    var arrSort = require("a");
    console.log(arrSort(arr));
});