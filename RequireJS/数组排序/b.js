define(function(){
    //判断是否为数组  1.arr instanceof Array   2.arr.constructor;
    function isArray(arr){
        if(arr instanceof Array){
            return true;
        }
        return false;
    }
    return isArray;
});