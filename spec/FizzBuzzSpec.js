describe("FizzBuzz Kata", function(){
    it("will return the own number when a 'normal' number is supplied", function(){
        var result;
        result = fizzbuzz(1);

        expect(result).toBe(1);
    })

    it("will return fizz when a multiple of 3 is supplied", function(){
        var result;
        result = fizzbuzz(3);

        expect(result).toBe('fizz');
    })

    it("will return buzz when a multiple of 5 is supplied", function(){
        var result;
        result = fizzbuzz(5);

        expect(result).toBe('buzz');
    })

    it("will return fizzbuzz when a multiple of 3 and 5 is supplied", function(){
        var result;
        result = fizzbuzz(15);

        expect(result).toBe('fizzbuzz');
    })
})