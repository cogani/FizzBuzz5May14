function fizzbuzz(aNumber){

    var result;

    if(isDivisibleBy(aNumber,3))
        result = 'fizz';

    if(isDivisibleBy(aNumber,3))
        result += 'buzz';
    
    if(isDivisibleBy(aNumber,3) && isDivisibleBy(aNumber,5))
        return "fizzbuzz";

    if(aNumber%3===0)
        return 'fizz';

    if(aNumber%5 ===0)
        return 'buzz';


    return aNumber;
}

function isDivisibleBy(){
    var aNumber = arguments[0];
    var aDivisor = arguments[1];

    return aNumber%aDivisor===0;
}