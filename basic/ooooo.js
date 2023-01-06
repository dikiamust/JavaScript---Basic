function multiply(num, times){
    var n = num;
    for(var i = 1; i < times; i++)
       num += n;
    return num;
 } 

 console.log(multiply(4,5))