describe("FizzBuzz Kata", function(){
    it("will return 1 when 1 is supplied", function(){
        var result;
        result = fizzbuzz(1);


        expect(result).toBe(1);
    })

    it("will return 2 when 2 is supplied", function(){
        var result;
        result = fizzbuzz(2);


        expect(result).toBe(2);
    })
    it("will return fizz when 3 is supplied", function(){
        var result;
        result = fizzbuzz(3);


        expect(result).toBe('fizz');
    })
})