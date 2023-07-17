// Challenge #1 (Print odds 1-20)

    function oddValues(){
        for(var i = 0; i < 20; i++){
            if (i % 2 === 1)
            console.log (i)
            }
    }
    oddValues();

// Challenge #2 (Decreasing Multiples of 3)

    function DecMult(){
        for(var i = 100; i > -3; i--){
            if (i % 3 === 0)
            console.log(i)
        }
    }
    DecMult();

// Challenge #3 (Print the Sequence)

var x = [4, 2.5, 1, -0.5, -2, -3.5];

    for(var i = 0; i < x.lenght; i++){
    }
console.log(x)

// Challenge #4 (Sigma)
function sumAll(){
    var sum = 0;
    for(var i = 1; i < 101; i++){
        sum += i;
    }
    console.log(sum);
}
sumAll();

// Challenge #5 (Factorial)

function productAll(){
    var product = 1;
    for(var i = 1; i < 13; i++){
        product *= i;
    }
    console.log(product);
}
productAll();
