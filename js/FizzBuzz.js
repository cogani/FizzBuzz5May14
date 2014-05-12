function fizzbuzz(aNumber){

    var result="";

    if(isDivisibleBy(aNumber,3))
        result = 'fizz';

    if(isDivisibleBy(aNumber,5))
        result += 'buzz';
    
    if(result==="") return aNumber;
    else return result;
}

function isDivisibleBy(){
    var aNumber = arguments[0];
    var aDivisor = arguments[1];

    return aNumber%aDivisor===0;
}